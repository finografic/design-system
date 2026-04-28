import { defineConfig } from 'tsdown';

export default defineConfig([
  // ── Library build (browser) ────────────────────────────────────────────────
  {
    entry: {
      index: 'src/index.ts',
    },
    format: ['esm'],
    platform: 'browser',
    dts: true,
    sourcemap: true,
    deps: {
      neverBundle: ['react', 'react-dom', 'lucide-react'],
    },
    unbundle: true,
  },

  // ── Server build (node) ────────────────────────────────────────────────────
  // Compiles server + generate into dist/server.js for the published bin.
  // generate.ts is bundled in (static import from server.ts).
  // External: hono, @hono/node-server, picocolors — installed as deps.
  {
    entry: {
      server: 'server/icons-server.ts',
    },
    format: ['esm'],
    platform: 'node',
    dts: false,
    sourcemap: false,
    // hono, @hono/node-server, picocolors are devDeps — bundle them so consumers
    // don't need them installed. Silence the tsdown hint about detected deps.
    deps: {
      onlyBundle: false,
    },
  },
]);
