#!/usr/bin/env node
/**
 * Scripts/release.ts
 *
 * Bumps versions for both publishable packages, creates a release commit + tags, publishes to GitHub
 * Packages, and pushes.
 *
 * Prerequisites:
 *
 * - `pnpm lint:md` must pass (same check as CI)
 * - Working tree must be clean — commit source changes first (do not pre-build `dist`; this script runs `pnpm
 *   build:all`)
 * - Stop `pnpm watch` / dev build processes so they do not rewrite `dist/` during release
 *
 * Usage: tsx scripts/release.ts <patch|minor|major> Via: pnpm release.patch / release.minor / release.major
 */

import { execSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';

process.env.NODE_ENV = 'production';
const REGISTRY = 'https://npm.pkg.github.com';

// ── Args ──────────────────────────────────────────────────────────────────────

const bump = process.argv[2];

if (!['patch', 'minor', 'major'].includes(bump ?? '')) {
  console.error('\n  Usage: tsx scripts/release.ts <patch|minor|major>\n');
  process.exit(1);
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function run(cmd: string, opts: { cwd?: string } = {}): void {
  try {
    console.log(`\n  → ${cmd}`);
    execSync(cmd, { stdio: 'inherit', cwd: opts.cwd });
  } catch {
    console.error(`\n  ✘ Failed: ${cmd}\n`);
    process.exit(1);
  }
}

function readVersion(path: string): string {
  return (JSON.parse(readFileSync(path, 'utf8')) as { version: string }).version;
}

// ── Guard: markdown lint (CI parity) ──────────────────────────────────────────

console.log('\n  Checking markdown (pnpm lint:md)…\n');
run('pnpm lint:md');

// ── Guard: require clean working tree ─────────────────────────────────────────

try {
  execSync('git diff --exit-code --quiet', { stdio: 'pipe' });
  execSync('git diff --cached --exit-code --quiet', { stdio: 'pipe' });
} catch {
  console.error(
    '\n  ✘  Working tree is dirty.\n' +
      '     Commit source changes before releasing (dist is rebuilt and committed by this script).\n',
  );
  process.exit(1);
}

// ── Guard: ensure packages exist ──────────────────────────────────────────────

if (!existsSync('packages/design-system/package.json')) {
  console.error('Missing packages/design-system');
  process.exit(1);
}

if (!existsSync('packages/icons/package.json')) {
  console.error('Missing packages/icons');
  process.exit(1);
}

// ── Version bumps (no git ops) ────────────────────────────────────────────────

run(`pnpm version ${bump} --no-git-tag-version --config.ignore-scripts=true`, { cwd: 'packages/icons' });
run(`pnpm version ${bump} --no-git-tag-version --config.ignore-scripts=true`, {
  cwd: 'packages/design-system',
});

const iconsVersion = readVersion('packages/icons/package.json');
const dsVersion = readVersion('packages/design-system/package.json');

console.log(`\n  ✔  icons → ${iconsVersion}   design-system → ${dsVersion}`);

// ── Build + release commit (package.json + committed dist/) ───────────────────

console.log('\n  Building packages (pnpm build:all)…\n');
run('pnpm build:all');

run(
  'git add packages/icons/package.json packages/icons/dist packages/icons/src/icons.ts packages/icons/src/index.ts packages/design-system/package.json packages/design-system/dist',
);
run(`git commit -m "feat: release v${dsVersion}"`);

// ── Tags ──────────────────────────────────────────────────────────────────────

run(`git tag -a "v${dsVersion}" -m "@finografic/design-system v${dsVersion}"`);
run(`git tag -a "icons-v${iconsVersion}" -m "@finografic/icons v${iconsVersion}"`);

// ── Publish ───────────────────────────────────────────────────────────────────

run(`pnpm --filter @finografic/icons publish --no-git-checks --ignore-scripts --registry ${REGISTRY}`);
run(
  `pnpm --filter @finografic/design-system publish --no-git-checks --ignore-scripts --registry ${REGISTRY}`,
);

// ── Push ──────────────────────────────────────────────────────────────────────

run('git push --follow-tags');

console.log(
  `\n  ✔  Released @finografic/design-system@${dsVersion}` + ` + @finografic/icons@${iconsVersion}\n`,
);
