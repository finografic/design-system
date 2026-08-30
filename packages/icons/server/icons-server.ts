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
 * Port: searches upward from 5001 for a free one, so several projects can each run a picker without
 * coordinating. ICONS_SERVER_PORT pins it instead. lucide-manager.config.json is written to CWD
 * *after* the port is bound, so the picker is never pointed at a server this process does not own.
 *
 * This server is dev-only. It is not part of the package library output.
 */

import fs from 'node:fs';
import net from 'node:net';
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

const DEFAULT_PORT = 5001;
const MAX_PORT_ATTEMPTS = 20;

const configPath = path.join(cwd, 'lucide-manager.config.json');

/**
 * Starting port. `ICONS_SERVER_PORT` pins it; otherwise search upward from the default.
 */
function requestedPort(): { port: number; pinned: boolean } {
  const raw = process.env['ICONS_SERVER_PORT'];
  if (raw === undefined) return { port: DEFAULT_PORT, pinned: false };

  const parsed = Number(raw);
  if (!Number.isInteger(parsed) || parsed < 1 || parsed > 65535) {
    console.error(pc.red(`[icons-server] ICONS_SERVER_PORT is not a valid port: ${raw}`));
    process.exit(1);
  }

  return { port: parsed, pinned: true };
}

/**
 * True when nothing is listening on `port`, so we can take it.
 *
 * Binds the wildcard address, with no host argument, because that is how the real server binds.
 * Probing `127.0.0.1` instead reports a port as free while another process holds the IPv6 wildcard
 * — which is exactly the case here, since a server already running on `*:5001` does not stop an
 * IPv4-loopback bind from succeeding.
 */
async function isPortFree(port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const probe = net.createServer();
    probe.once('error', () => resolve(false));
    probe.once('listening', () => probe.close(() => resolve(true)));
    probe.listen(port);
  });
}

/**
 * Find a port to serve on.
 *
 * Collisions are the normal case, not an error: a permanently running picker in one project would
 * otherwise block every other project forever. Icons picked in one repo were written into another
 * twice because of exactly that — the server could not bind, and the picker attached to whichever
 * server already held the port.
 *
 * A pinned `ICONS_SERVER_PORT` is honoured exactly and never searched past: if you asked for a
 * specific port, silently using a different one would be worse than failing.
 */
async function findPort(): Promise<number> {
  const { port: start, pinned } = requestedPort();

  if (pinned) {
    if (await isPortFree(start)) return start;
    console.error('');
    console.error(pc.red(`  ✘  Port ${start} is in use, and ICONS_SERVER_PORT pinned it.`));
    console.error(`     ${pc.dim('Free that port, or unset ICONS_SERVER_PORT to search automatically.')}`);
    console.error('');
    process.exit(1);
  }

  for (let port = start; port < start + MAX_PORT_ATTEMPTS; port += 1) {
    if (await isPortFree(port)) return port;
  }

  console.error('');
  console.error(pc.red(`  ✘  No free port between ${start} and ${start + MAX_PORT_ATTEMPTS - 1}.`));
  console.error('');
  process.exit(1);
}

const PORT = await findPort();

// ── Types ──────────────────────────────────────────────────────────────────────

interface IconEntry {
  lucideName: string;
  exportName: string;
}

// ── Bootstrap ──────────────────────────────────────────────────────────────────

/**
 * Point the picker at this server — but only once the port is actually ours.
 *
 * This used to run at startup, before binding. On a port collision the bind failed while the
 * config had already been written, so the picker read it, connected to the *other* project's
 * server, and wrote every icon there.
 */
function writePickerConfig(): void {
  fs.writeFileSync(
    configPath,
    JSON.stringify({ serverUrl: `http://localhost:${PORT}` }, null, 2) + '\n',
    'utf8',
  );
}

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

const server = serve({ fetch: app.fetch, port: PORT }, () => {
  // Only now is the port ours, so only now is it safe to tell the picker where to connect.
  writePickerConfig();

  const modeLabel = isConsumerMode ? pc.yellow('consumer') : pc.blue('ds');
  const fileLabel = isConsumerMode ? 'icons.config.json' : 'src/icons.json';
  console.log('');
  console.log(
    `  ${pc.cyan('●')}  Icons Server:  ${pc.cyan(`http://localhost:${PORT}`)}  [${modeLabel} mode — ${fileLabel}]`,
  );
  // Say which project this is serving. Two pickers at once is now normal, and a port number alone
  // does not tell you which repo a browser window is about to write into.
  console.log(`     ${pc.dim('writing to')}  ${pc.bold(cwd)}`);
  console.log('');
});

// A collision has to be loud. Silently carrying on is what let the picker attach to another
// project's server and write icons into the wrong repository.
server.on('error', (error: NodeJS.ErrnoException) => {
  if (error.code !== 'EADDRINUSE') throw error;

  console.error('');
  console.error(pc.red(`  ✘  Port ${PORT} is already in use — another icons-server is running.`));
  console.error('');
  console.error(
    `     ${pc.dim('Stop it, or start this one on another port:')} ${pc.bold(pc.yellow(`ICONS_SERVER_PORT=5002 pnpm icons:manager`))}`,
  );
  console.error(
    `     ${pc.dim('Continuing would point the picker at the other project and write icons there.')}`,
  );
  console.error('');
  process.exit(1);
});
