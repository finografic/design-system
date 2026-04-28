# TODO — Icon Manager: Consumer Project Support

> **Status:** Phases 1–2 complete (2026-04-28). Phase 3 (docs) not started.

---

## Problem

The icon manager (`pnpm icons:config`) currently only works from within the DS source repo.
A consumer monorepo that installs `@finografic/icons` gets `dist/` only — the server,
generate script, and `src/icons.json` are not published. There is no way to customize the
icon set per-project without forking the package.

---

## Architecture

### Two config files, two concerns

| File                         | Owned by                      | Purpose                                         |
| ---------------------------- | ----------------------------- | ----------------------------------------------- |
| `lucide-manager.config.json` | Tooling (server writes it)    | Server URL for the Vite picker UI               |
| `icons.config.json`          | Project (consumer commits it) | Icon selections — which Lucide icons to include |

### `src/icons.json` role

The DS default set, shipped with the published package. On a consumer's first run the server
seeds `icons.config.json` from it. After that, `icons.config.json` is the consumer's own
file — they commit it, they own it.

Within the DS repo itself, `src/icons.json` continues to be read/written directly (no
regression).

### Server mode detection

`process.cwd() !== packageRoot` → consumer mode.

|                                    | DS mode                         | Consumer mode                    |
| ---------------------------------- | ------------------------------- | -------------------------------- |
| Reads/writes                       | `src/icons.json`                | `icons.config.json` in CWD       |
| Generates                          | `src/icons.ts` + `src/index.ts` | `icons.generated.ts` in CWD      |
| Seed on first run                  | n/a                             | copies `src/icons.json` defaults |
| Write `lucide-manager.config.json` | to CWD (idempotent)             | to CWD (bootstrap)               |

### Consumer-generated file

`icons.generated.ts` is a standalone file that imports `createIconWrapper` from
`@finografic/icons`. Consumers import from it directly instead of from the DS default set.

### What does NOT change

- `@finografic/lucide-manager` — zero changes. Already separate, already published.
- DS repo workflow (`pnpm icons:config`) — identical to before.
- Published `dist/` library output — unchanged.

---

## Progress

- [x] Phase 1 — Server + generate support consumer mode (context detection, seeding, consumer template) (2026-04-28)
- [x] Phase 2 — Compile server to `dist/server.mjs`; publish via `bin/icons-server.js`; update `files` in package.json (2026-04-28)
- [ ] Phase 3 — Document consumer setup in `docs/LUCIDE.README.md`

---

## Consumer Setup (once Phase 3 is documented)

```
# In consumer package root (once @finografic/icons is installed):
# 1. Add @finografic/lucide-manager as a devDependency (it's a peer of the server UI)
# 2. Add to your package.json scripts:
"icons": "concurrently \"pnpm exec icons-server\" \"pnpm exec lucide-manager\""
# 3. Run:
pnpm icons
```

First run:

1. Server starts on port 5001, writes `lucide-manager.config.json` to CWD.
2. No `icons.config.json` found → seeds it from the DS defaults (`src/icons.json`).
3. Picker UI opens. Select icons and save.
4. Server writes `icons.config.json` and generates `icons.generated.ts`.
5. Commit `icons.config.json`. Import from `icons.generated.ts` in your app.

Subsequent runs: reads/writes `icons.config.json` directly.

---

## Open Questions / Future

- Support a custom `outputPath` for `icons.generated.ts` (currently always written to CWD).
- `--config` flag for non-standard monorepo layouts where CWD doesn't match the package root.
- Composition mode: consumer's `icons.generated.ts` re-exports DS icons + custom additions.
