# @finografic/icons — Icon Manager Guide

> How to manage the Lucide icon registry — both inside the DS repo and from a consumer project.

---

## Overview

The icon set is managed by two packages working together:

| Package                          | Role                                                                                                        |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **`@finografic/icons`**          | The icon library. Owns the Hono server, codegen script, and `src/icons.json`. Publishes `bin/icons-server`. |
| **`@finografic/lucide-manager`** | The browser picker UI only. No file I/O. Talks to the server over HTTP.                                     |

When you run the icon manager, the server handles all file reads and writes. The picker
is a dumb UI — it fetches the current selection, lets you toggle icons, and POSTs the
updated list back. Codegen runs automatically after every save.

### Two modes, same server

The server detects its context from `process.cwd()`:

|                   | **DS mode**                     | **Consumer mode**                        |
| ----------------- | ------------------------------- | ---------------------------------------- |
| When              | CWD = `packages/icons/`         | CWD = consumer project root              |
| Source file       | `src/icons.json`                | `icons.config.json` in CWD               |
| Generated output  | `src/icons.ts` + `src/index.ts` | `icons.generated.ts` in CWD              |
| Seed on first run | —                               | copies DS defaults from `src/icons.json` |

---

## Workflow A — Inside the DS repo

> **Run from:** `packages/icons/` (or via `pnpm --filter @finografic/icons icons:config` from root)

This is for managing the default icon set that ships with `@finografic/icons`.

### Start the manager

```bash
pnpm icons:config
```

This starts two processes concurrently:

- **Icons Server** on `http://localhost:5001` — reads/writes `src/icons.json`, runs codegen on save
- **Lucide Manager UI** on `http://localhost:5199` — opens automatically in your browser

### Make your selections

The browser UI shows all 1700+ Lucide icons. Toggle icons in/out of the registry.
Every change auto-saves — the server writes `src/icons.json` and regenerates
`src/icons.ts` + `src/index.ts` immediately.

### Commit

```bash
git add src/icons.json src/icons.ts src/index.ts
git commit -m "icons: ..."
```

All three files are committed. `src/icons.json` is the source of truth; the generated
files are committed so consumers and CI never need to run codegen.

### Manual codegen (if needed)

```bash
pnpm build   # generates icons.ts + index.ts, then compiles dist/
```

---

## Workflow B — Consumer project

> **Run from:** your consumer project root (the package that installs `@finografic/icons`)

This is for projects that want a **custom icon set** separate from the DS defaults.
On first run the server seeds `icons.config.json` from the DS defaults so you have a
starting point. After that you own the file.

### 1. Install the picker UI

`@finografic/lucide-manager` is a peer — add it as a devDependency in your project:

```bash
pnpm add -D @finografic/lucide-manager
```

(`@finografic/icons` is already installed as a dep; the server comes with it.)

### 2. Add the script

In your project's `package.json`:

```json
{
  "scripts": {
    "icons": "concurrently \"pnpm exec icons-server\" \"pnpm exec lucide-manager\""
  }
}
```

> `concurrently` is available from `@finografic/icons`'s devDeps — if it's not on your
> PATH, add it: `pnpm add -D concurrently`.

### 3. Run it

```bash
pnpm icons
```

**First run only:**

1. Server starts on `http://localhost:5001`, writes `lucide-manager.config.json` to your project root.
2. No `icons.config.json` found → seeds it from the DS defaults.
3. Picker opens at `http://localhost:5199`.

**Every run:** reads and writes your local `icons.config.json`.

### 4. Select your icons

Toggle icons in the browser UI. Every save writes `icons.config.json` and generates
`icons.generated.ts` in your project root.

### 5. Commit and import

```bash
# Commit the source of truth
git add icons.config.json
git commit -m "icons: initial consumer icon set"

# icons.generated.ts is regenerated on every save — you can either commit it
# (recommended, so your project works without running the server) or gitignore it
# (and always regenerate before build). Committing is simpler.
git add icons.generated.ts
```

Import from the generated file in your app:

```ts
import { ArrowDownIcon, CheckIcon, CloseIcon } from './icons.generated';
import { icons, ICON_NAMES } from './icons.generated';
import type { IconName, IconComponent } from './icons.generated';
```

### Subsequent runs

```bash
pnpm icons   # opens picker, loads icons.config.json, saves on toggle
```

---

## File reference

### DS repo files

| File                         | Managed by                     | Notes                                                    |
| ---------------------------- | ------------------------------ | -------------------------------------------------------- |
| `src/icons.json`             | Picker (server writes on save) | Source of truth — commit this                            |
| `src/icons.ts`               | Codegen (auto after save)      | Generated — commit, never edit                           |
| `src/index.ts`               | Codegen (auto after save)      | Generated — commit, never edit                           |
| `src/icons.utils.ts`         | You (handwritten)              | `createIconWrapper` + `IconProps` — never overwritten    |
| `lucide-manager.config.json` | Server (written on startup)    | `{ "serverUrl": "http://localhost:5001" }` — commit this |

### Consumer project files

| File                         | Managed by                     | Notes                                               |
| ---------------------------- | ------------------------------ | --------------------------------------------------- |
| `icons.config.json`          | Picker (server writes on save) | Your icon selections — commit this                  |
| `icons.generated.ts`         | Codegen (auto after save)      | Generated — commit or gitignore (see above)         |
| `lucide-manager.config.json` | Server (written on startup)    | Created automatically on first run — gitignore this |

---

## How the picker connects to the server

`lucide-manager` reads `lucide-manager.config.json` from your project root (or the first
parent directory that contains it) on startup. The file has one field:

```json
{ "serverUrl": "http://localhost:5001" }
```

The server writes this file to `process.cwd()` every time it starts — so the picker
always connects to the correct URL without any manual configuration.

---

## Troubleshooting

### "Save failed" / "Included: 0" in the picker

The picker shows "Save failed" when its initial GET to `/api/icons-json` fails. This
means the server is not running or is on a different port than what was baked into the
picker at startup.

**Fix:** Always start server and picker together (via the `concurrently` script). Never
open the picker URL from a previous session after restarting only the server.

### Port 5001 already in use

A previous run of the server may still be running. Find and kill it:

```bash
lsof -ti :5001 | xargs kill
```

Then restart normally.

### `icons.config.json` not seeded / empty

If `src/icons.json` is not included in the installed package (should not happen with
published versions ≥ 1.14), the server will log a clear error and exit. Confirm the
installed version includes `src/icons.json` in its `files` field.

### Consumer: `lucide-manager` not found

`lucide-manager` must be a direct devDependency of your project — pnpm does not expose
transitive-dep binaries by default. Run `pnpm add -D @finografic/lucide-manager`.

### Consumer: `icons-server` not found

`icons-server` is the bin published with `@finografic/icons`. Confirm it is installed:

```bash
pnpm exec icons-server --help   # should print nothing / start the server
```

If it's missing, the installed version of `@finografic/icons` may be older than `1.14`.
Update: `pnpm update @finografic/icons --latest`.
