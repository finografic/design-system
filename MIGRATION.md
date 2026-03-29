# Migrations

This document records significant tooling migrations for this repository.

## Migrating from dprint

dprint and `@finografic/dprint-config` were removed in favor of [oxfmt](https://oxc.rs/docs/guide/usage/formatter) and [`@finografic/oxfmt-config`](https://github.com/finografic/oxfmt-config) (v1.x).

### Dependency and config changes

- **Added / upgraded:** `oxfmt` (devDependency) and `@finografic/oxfmt-config` at **^1.0.0**.
- **Removed:** `dprint`, `@finografic/dprint-config`, and root `dprint.jsonc`.
- **New file:** `oxfmt.config.ts` at the workspace root imports presets, `ignorePatterns`, `sorting.rules` / `sorting.sortPackageJson`, and agent-doc markdown overrides from `@finografic/oxfmt-config`.
- **Import order:** This workspace keeps **ESLint `simple-import-sort`** as the source of truth. Oxfmt’s `sortImports` is **not** enabled here because its ordering can disagree with that plugin after `eslint --fix` + `oxfmt` in sequence. Other repos may use `SORT_PRESET_*` from `@finografic/oxfmt-config` when oxfmt alone should own import sorting.

### Scripts (`package.json`)

| Before                   | After                  |
| ------------------------ | ---------------------- |
| `dprint check`           | `oxfmt --check`        |
| `dprint fmt --diff`      | `oxfmt` (writes files) |
| `pnpm dprint check` (CI) | `pnpm format.check`    |

The `update.dprint-config` script was removed; use `update.oxfmt-config` to bump the shared config package.

### lint-staged and git hooks

lint-staged now runs **ESLint first**, then **oxfmt** on matching staged files, mirroring `@finografic/oxfmt-config`:

- `*.{ts,tsx,js,jsx,mjs,cjs}` → `eslint --fix`, then `oxfmt --no-error-on-unmatched-pattern`
- `*.md` → same
- `*.{json,jsonc,yml,yaml,toml}` → `oxfmt --no-error-on-unmatched-pattern`

Pre-commit runs `lint-staged --allow-empty` and then `oxfmt --no-error-on-unmatched-pattern` on the tree. After pulling hook changes, run `pnpm install` (or `npx simple-git-hooks`) so hooks stay registered.

### Editor (VS Code / Cursor)

- Default formatter for JS/TS/JSON/YAML/TOML/CSS is **`oxc.oxc-vscode`** (Oxc extension), not dprint.
- Recommended extension: `oxc.oxc-vscode`; dprint is listed under **unwanted** recommendations.
- Optional: set `oxc.fmt.configPath` to `oxfmt.config.ts` so the formatter always uses this workspace config.

### Import sorting (breaking for copy-paste configs)

If you copied `sortImports` from an older `@finografic/oxfmt-config` example, replace removed names:

- `SORTING_GROUP_HOOKS_ROUTES` → `SORTING_GROUP_HOOKS` and `SORTING_GROUP_CLIENT_ROUTES`
- Group key `'hooks-routes'` → `'hooks'` and `'client-routes'`

This repo does **not** enable oxfmt `sortImports`; see **Import order** above.

### Generated icon registry

`packages/icons/src/icons.ts` is **excluded** from oxfmt via `ignorePatterns` (replacing dprint’s file-level ignore comments). Regeneration still happens via `pnpm icons.generate`; formatting is intentionally skipped for that file.

### pnpm

`onlyBuiltDependencies` no longer lists `dprint`. Native optional deps for oxfmt are pulled via the `oxfmt` package as needed.

The workspace root `package.json` sets `"type": "module"` so Node loads `oxfmt.config.ts` without a module-type warning.

### Further reading

- [oxfmt-config README](https://github.com/finografic/oxfmt-config/blob/master/README.md) — presets, groups, `ignorePatterns`, agent docs.
- Local clone: `docs/SETUP_OXFMT_CONFIG.md` and `docs/OXFMT_SORT_GROUPS.md` inside `@finografic/oxfmt-config`.
