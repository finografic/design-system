/**
 * Scripts/generate.ts
 *
 * Reads icons.json (or icons.config.json) and writes TypeScript icon registry files.
 *
 * DS mode (default — run from the package root):
 * Writes src/icons.ts + src/index.ts
 *
 * Consumer mode (run from a host project via the published bin):
 * Writes a single standalone icons.generated.ts that imports createIconWrapper
 * from @finografic/icons, so consumers don't need to maintain any wrapper code.
 *
 * Run via: pnpm build (calls tsx scripts/generate.ts directly)
 * Also called in-process by the Hono server after every POST to /api/icons-json.
 *
 * !! Does NOT touch src/icons.utils.ts — that file is handwritten and permanent.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// ── Paths ──────────────────────────────────────────────────────────────────────

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const defaultJsonPath = path.join(root, 'src', 'icons.json');
const defaultTsPath = path.join(root, 'src', 'icons.ts');
const defaultIndexPath = path.join(root, 'src', 'index.ts');

// ── Types ──────────────────────────────────────────────────────────────────────

interface IconEntry {
  lucideName: string;
  exportName: string;
}

export interface GenerateOptions {
  /** Path to the JSON icon list. Defaults to src/icons.json (DS mode). */
  jsonPath?: string;
  /** Path to write the icon registry TS file. Defaults to src/icons.ts (DS mode). */
  tsOutputPath?: string;
  /**
   * Path to write the re-export index. Only written in DS mode.
   * Pass null to skip (consumer mode always skips this).
   */
  indexOutputPath?: string | null;
  /**
   * 'ds' — generates src/icons.ts + src/index.ts, importing from ./icons.utils
   * 'consumer' — generates a standalone file, importing from @finografic/icons
   */
  mode?: 'ds' | 'consumer';
}

// ── Helpers ────────────────────────────────────────────────────────────────────

/** "arrow-up" → "ArrowUp" — maps lucideName to the Lucide React export */
function toLucideExport(lucideName: string): string {
  return lucideName
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

// ── Generate ───────────────────────────────────────────────────────────────────

export function generate(options: GenerateOptions = {}): void {
  const {
    jsonPath = defaultJsonPath,
    tsOutputPath = defaultTsPath,
    indexOutputPath = defaultIndexPath,
    mode = 'ds',
  } = options;

  const entries: IconEntry[] = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

  // Stable alphabetical order by exportName — diffs are always readable
  entries.sort((a, b) => a.exportName.localeCompare(b.exportName));

  const maxKeyLen = Math.max(...entries.map((e) => `${e.exportName}Icon`.length));

  const registryLines = entries
    .map(({ lucideName, exportName }) => {
      const key = `${exportName}Icon`;
      const value = `Lucide.${toLucideExport(lucideName)}`;
      const pad = ' '.repeat(maxKeyLen - key.length + 2);
      return `  ${key}:${pad}${value},`;
    })
    .join('\n');

  // ── DS mode: icons.ts + index.ts ─────────────────────────────────────────────

  if (mode === 'ds') {
    const iconsTsContent = `\
/**
 * Icon Registry — @finografic/icons
 *
 * !! GENERATED FILE — do not edit by hand.
 * !! Edit src/icons.json via the picker UI, then run: pnpm icons.generate
 *
 * Source of truth: packages/icons/src/icons.json
 */

import * as Lucide from 'lucide-react';

import { createIconWrapper } from './icons.utils';

// ── Icon registry ──────────────────────────────────────────────────────────────
// Formatted by oxfmt: excluded via root ignorePatterns (packages/icons/src/icons.ts).

const ICONS = {
${registryLines}
} as const;

// ── Auto-wrap ──────────────────────────────────────────────────────────────────

type WrappedIconMap = { [K in keyof typeof ICONS]: ReturnType<typeof createIconWrapper> };

const wrappedIcons = Object.fromEntries(
  Object.entries(ICONS).map(([name, icon]) => [name, createIconWrapper(icon, name)]),
) as WrappedIconMap;

// ── Public API ─────────────────────────────────────────────────────────────────

/** All registered icons as a strongly-typed object. Destructure at the call site. */
export const icons = wrappedIcons;

/** Union of all registered icon export names. */
export type IconName = keyof typeof ICONS;

/** Sorted list of all registered icon names (useful for pickers / docs). */
export const ICON_NAMES = (Object.keys(ICONS) as IconName[]).sort();

/** Type of any wrapped icon component returned by \`createIconWrapper\`. */
export type IconComponent = ReturnType<typeof createIconWrapper>;
`;

    fs.writeFileSync(tsOutputPath, iconsTsContent, 'utf8');
    console.log(`✓ icons.ts   — ${entries.length} icons`);

    if (indexOutputPath) {
      const namedExports = entries.map(({ exportName }) => `  ${exportName}Icon,`).join('\n');

      const indexTsContent = `\
/**
 * src/index.ts — @finografic/icons
 *
 * !! GENERATED FILE — do not edit by hand.
 * !! Edit src/icons.json via the picker UI, then run: pnpm icons.generate
 */

import { icons } from './icons';

export type { IconComponent, IconName } from './icons';
export { ICON_NAMES, icons } from './icons';

// Named icon exports
export const {
${namedExports}
} = icons;

// Expose wrapper factory for consumers who need to register app-specific icons
export type { IconProps } from './icons.utils';
export { createIconWrapper } from './icons.utils';
`;

      fs.writeFileSync(indexOutputPath, indexTsContent, 'utf8');
      console.log(`✓ index.ts   — ${entries.length} named exports`);
    }

    return;
  }

  // ── Consumer mode: single standalone icons.generated.ts ──────────────────────

  const iconsTsContent = `\
/**
 * icons.generated.ts
 *
 * !! GENERATED FILE — managed by @finografic/icons icon manager.
 * !! To update: run your icons manager script (pnpm icons or similar).
 */

import * as Lucide from 'lucide-react';
import { createIconWrapper } from '@finografic/icons';

// ── Icon registry ──────────────────────────────────────────────────────────────

const ICONS = {
${registryLines}
} as const;

// ── Auto-wrap ──────────────────────────────────────────────────────────────────

type WrappedIconMap = { [K in keyof typeof ICONS]: ReturnType<typeof createIconWrapper> };

const wrappedIcons = Object.fromEntries(
  Object.entries(ICONS).map(([name, icon]) => [name, createIconWrapper(icon, name)]),
) as WrappedIconMap;

// ── Public API ─────────────────────────────────────────────────────────────────

/** All registered icons as a strongly-typed object. */
export const icons = wrappedIcons;

/** Union of all registered icon export names. */
export type IconName = keyof typeof ICONS;

/** Sorted list of all registered icon names. */
export const ICON_NAMES = (Object.keys(ICONS) as IconName[]).sort();

/** Type of any wrapped icon component. */
export type IconComponent = ReturnType<typeof createIconWrapper>;
`;

  fs.writeFileSync(tsOutputPath, iconsTsContent, 'utf8');
  console.log(`✓ icons.generated.ts   — ${entries.length} icons`);
}

// ── CLI entry point ────────────────────────────────────────────────────────────
// Only auto-runs when invoked directly (not when imported by the server).
// Checks argv[1] filename so this guard works for both tsx source and compiled JS.

const argv1 = process.argv[1] ?? '';
if (argv1.endsWith('/generate.ts') || argv1.endsWith('/generate.js')) {
  generate();
}
