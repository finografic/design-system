# DONE — Icon Manager: Consumer Project Support

> **Completed:** 2026-04-28 — Published `icons-server` bin, consumer mode (CWD detection), `icons.config.json` seeding, and `icons.generated.ts` codegen. See `docs/LUCIDE.README.md`.

---

## Problem (historical)

The icon manager (`pnpm icons:config`) originally only worked from within the DS source repo.
Consumers had no supported path to customize the icon set per project without forking.

---

## Architecture (shipped)

### Two config files, two concerns

| File                         | Owned by                      | Purpose                                         |
| ---------------------------- | ----------------------------- | ----------------------------------------------- |
| `lucide-manager.config.json` | Tooling (server writes it)    | Server URL for the Vite picker UI               |
| `icons.config.json`          | Project (consumer commits it) | Icon selections — which Lucide icons to include |

### `src/icons.json` role

The DS default set, shipped with the published package (`files` includes `src/icons.json`).
On a consumer's first run the server seeds `icons.config.json` from it. After that,
`icons.config.json` is the consumer's own file.

Within the DS repo, `src/icons.json` continues to be read/written directly (DS mode).

### Server mode detection

`process.cwd() !== packageRoot` → consumer mode.

|                                    | DS mode                         | Consumer mode                    |
| ---------------------------------- | ------------------------------- | -------------------------------- |
| Reads/writes                       | `src/icons.json`                | `icons.config.json` in CWD       |
| Generates                          | `src/icons.ts` + `src/index.ts` | `icons.generated.ts` in CWD      |
| Seed on first run                  | n/a                             | copies `src/icons.json` defaults |
| Write `lucide-manager.config.json` | to CWD (idempotent)             | to CWD (bootstrap)               |

### Consumer-generated file

`icons.generated.ts` imports `createIconWrapper` from `@finografic/icons`.

### What did NOT change

- `@finografic/lucide-manager` — separate package; consumer runs its bin alongside the server.
- DS repo workflow (`pnpm icons` → `icons:config`) — unchanged.
- Published `dist/` library output — unchanged.

---

## Progress

- [x] Phase 1 — Server + generate consumer mode (2026-04-28)
- [x] Phase 2 — `dist/server.mjs` + `bin/icons-server.js` + publish `src/icons.json` (2026-04-28)
- [x] Phase 3 — `docs/LUCIDE.README.md` + `packages/icons/README.md` (2026-04-28)

---

## Follow-up

Ergonomic one-command `pnpm icons` from consumer apps without manual `concurrently` setup is tracked in **`docs/TODO_ICONS_CONSUMER_WORKFLOW.md`**.
