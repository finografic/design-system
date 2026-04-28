/**
 * Server/icons-server.ts
 *
 * Minimal Hono HTTP server for the icon picker workflow.
 *
 * Routes:
 * GET  /api/icons-json → returns current icon selections as JSON array
 * POST /api/icons-json → validates + writes selections, runs codegen in-process
 *
 * Two modes — detected automatically from process.cwd():
 *
 * DS mode (CWD === package root):
 * Reads/writes src/icons.json. Generates src/icons.ts + src/index.ts.
 * Used when running pnpm icons:config from within packages/icons/.
 *
 * Consumer mode (CWD is a host project):
 * Reads/writes icons.config.json in CWD. Seeds it from src/icons.json defaults
 * on first run. Generates icons.generated.ts in CWD.
 * Used when consumers run pnpm exec icons-server from their project root.
 *
 * Port: fixed at 5001. lucide-manager.config.json is written to CWD on startup
 * so the picker (lucide-manager) can always connect regardless of context.
 *
 * This server is dev-only. It is not part of the package library output.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import pc from 'picocolors';

import { generate } from '../scripts/generate.js';

// ── Paths ──────────────────────────────────────────────────────────────────────

// When compiled to dist/server.js: two dirnames up = package root ✓
// When run via tsx server/icons-server.ts: two dirnames up = package root ✓
const packageRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const cwd = process.cwd();

// ── Mode detection ─────────────────────────────────────────────────────────────

const isConsumerMode = path.resolve(cwd) !== path.resolve(packageRoot);

const jsonPath = isConsumerMode
  ? path.join(cwd, 'icons.config.json')
  : path.join(packageRoot, 'src', 'icons.json');

const defaultsPath = path.join(packageRoot, 'src', 'icons.json');

const generatedTsPath = isConsumerMode
  ? path.join(cwd, 'icons.generated.ts')
  : path.join(packageRoot, 'src', 'icons.ts');

// ── Port ───────────────────────────────────────────────────────────────────────

const PORT = 5001;
const configPath = path.join(cwd, 'lucide-manager.config.json');

// ── Types ──────────────────────────────────────────────────────────────────────

interface IconEntry {
  lucideName: string;
  exportName: string;
}

// ── Bootstrap ──────────────────────────────────────────────────────────────────

// Write lucide-manager.config.json so the picker knows where to find this server.
// Idempotent in DS mode (always 5001); creates it on first run in consumer mode.
fs.writeFileSync(
  configPath,
  JSON.stringify({ serverUrl: `http://localhost:${PORT}` }, null, 2) + '\n',
  'utf8',
);

// In consumer mode: seed icons.config.json from the DS defaults if it doesn't exist yet.
if (isConsumerMode && !fs.existsSync(jsonPath)) {
  if (!fs.existsSync(defaultsPath)) {
    console.error(pc.red(`[icons-server] Cannot seed — defaults not found at: ${defaultsPath}`));
    process.exit(1);
  }
  fs.copyFileSync(defaultsPath, jsonPath);
  console.log('');
  console.log(`  ${pc.green('✓')}  Created ${pc.cyan('icons.config.json')} from DS defaults`);
}

// ── Codegen ────────────────────────────────────────────────────────────────────

function runGenerate(): void {
  generate({
    jsonPath,
    tsOutputPath: generatedTsPath,
    indexOutputPath: isConsumerMode ? null : undefined, // consumer skips index.ts
    mode: isConsumerMode ? 'consumer' : 'ds',
  });
}

// ── App ────────────────────────────────────────────────────────────────────────

const app = new Hono();

app.use(
  '*',
  cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'OPTIONS'],
  }),
);

// ── GET /api/icons-json ───────────────────────────────────────────────────────

app.get('/api/icons-json', async (c) => {
  try {
    const content = fs.readFileSync(jsonPath, 'utf8');
    return c.json(JSON.parse(content));
  } catch (err) {
    console.error('[icons-server] Failed to read icon selections:', err);
    return c.json({ error: 'Failed to read icon selections' }, 500);
  }
});

// ── POST /api/icons-json ──────────────────────────────────────────────────────

app.post('/api/icons-json', async (c) => {
  let body: unknown;

  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: 'Invalid JSON body' }, 400);
  }

  if (!Array.isArray(body)) {
    return c.json({ error: 'Body must be a JSON array' }, 400);
  }

  for (const entry of body) {
    if (
      typeof entry !== 'object' ||
      entry === null ||
      typeof (entry as IconEntry).lucideName !== 'string' ||
      typeof (entry as IconEntry).exportName !== 'string'
    ) {
      return c.json({ error: 'Each entry must have lucideName and exportName strings' }, 400);
    }
  }

  const entries = body as IconEntry[];

  // Write selections — exportName first so the file is alphabetically readable
  const ordered = entries.map(({ exportName, lucideName }) => ({ exportName, lucideName }));
  try {
    fs.writeFileSync(jsonPath, JSON.stringify(ordered, null, 2) + '\n', 'utf8');
  } catch (err) {
    console.error('[icons-server] Failed to write icon selections:', err);
    return c.json({ error: 'Failed to write icon selections' }, 500);
  }

  try {
    runGenerate();
  } catch (err) {
    // Selections were saved — generation failure shouldn't block the picker.
    console.error('[icons-server] Codegen failed:', err);
    return c.json({ ok: true, count: entries.length, generateError: String(err) }, 200);
  }

  return c.json({ ok: true, count: entries.length });
});

// ── Start ─────────────────────────────────────────────────────────────────────

serve({ fetch: app.fetch, port: PORT }, () => {
  const modeLabel = isConsumerMode ? pc.yellow('consumer') : pc.blue('ds');
  const fileLabel = isConsumerMode ? 'icons.config.json' : 'src/icons.json';
  console.log('');
  console.log(
    `  ${pc.cyan('●')}  Icons Server:  ${pc.cyan(`http://localhost:${PORT}`)}  [${modeLabel} mode — ${fileLabel}]`,
  );
  console.log('');
});
