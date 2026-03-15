# Release & Install Guide

This repo is a **pnpm workspace** containing two publishable packages:

| Package                     | Path                     | Registry        |
| --------------------------- | ------------------------ | --------------- |
| `@finografic/design-system` | `packages/design-system` | GitHub Packages |
| `@finografic/icons`         | `packages/icons`         | GitHub Packages |

---

## Prerequisites (one-time)

### 1. GitHub Personal Access Token

Create a PAT at **GitHub → Settings → Developer Settings → Personal Access Tokens**
with scopes: `read:packages`, `write:packages`, `repo`.

### 2. Authenticate with GitHub Packages

Add to `~/.npmrc` (your global npmrc, **not** this repo's):

```
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT
```

This is required both to **install** `@finografic/*` packages and to **publish** them.

### 3. Install workspace dependencies

From the repo root:

```bash
pnpm install
```

This wires up the `workspace:*` symlink so `packages/design-system` can resolve
`@finografic/icons` locally without needing it published first.

---

## Development workflow

```bash
# Install / re-sync after any package.json changes
pnpm install

# Build icons (required before DS build if icons changed)
pnpm build.icons

# Build design-system (runs panda codegen then tsdown)
pnpm build

# Build both in sequence
pnpm build.all

# Type-check all packages
pnpm typecheck

# Lint (workspace-wide)
pnpm lint.fix

# Format
pnpm format
```

---

## Releasing

Both packages are always released together with a single command from the workspace
root. Choose the bump level that matches the nature of your changes:

```bash
pnpm release.patch   # 0.0.x → 0.0.x+1  (bug fixes)
pnpm release.minor   # 0.x.0 → 0.x+1.0  (new features, backwards-compatible)
pnpm release.major   # x.0.0 → x+1.0.0  (breaking changes)
```

Each script runs the following steps in order, then leaves git clean:

1. **Build icons** — `packages/icons/dist` is regenerated
2. **Build design-system** — `packages/design-system/dist` is regenerated
3. **Stage both dists** — `git add packages/icons/dist packages/design-system/dist` — all at once so the working tree is clean before versioning
4. **Version icons** — bumps `packages/icons/package.json`, commits staged files + version, creates git tag
5. **Version design-system** — bumps `packages/design-system/package.json`, commits + creates git tag
6. **Publish icons** — pushes `@finografic/icons` to GitHub Packages
7. **Publish design-system** — pushes `@finografic/design-system` to GitHub Packages
8. **Push** — `git push --follow-tags` — pushes both commits and both tags

> Icons is always built and published first because the DS lists it as a dependency.
> The `workspace:*` specifier in the DS is automatically replaced with the real
> published icons version (e.g. `"0.1.0"`) when pnpm packages the tarball.
> Consumers receive a concrete version, not `workspace:*`.

---

### Checking what will be published (dry run)

```bash
pnpm --filter @finografic/design-system publish --dry-run --no-git-checks
pnpm --filter @finografic/icons publish --dry-run --no-git-checks
```

The output lists every file that will be included in the tarball.

**DS should include:**

- `dist/**` — compiled JS + type declarations
- `src/styles/*.css` — reset, keyframes, global
- `src/grid/grid.css`
- `src/forms/forms.css`
- `package.json`, `README.md`

**DS should NOT include:**

- `styled-system/` — consumer generates their own
- `src/**/*.ts` — source TypeScript
- `node_modules/`, `tsconfig.json`, `panda.config.ts`

---

### Viewing published versions

```bash
pnpm view @finografic/design-system --registry=https://npm.pkg.github.com
pnpm view @finografic/icons --registry=https://npm.pkg.github.com
```

---

## Build output notes

`pnpm build` will emit some **warnings** that are expected and harmless:

- `MISSING_EXPORT` / `IMPORT_IS_UNDEFINED` — TypeScript 5.9 compatibility issues
  inside `@pandacss/dev`'s transitive deps (`pkg-types`, `ts-evaluator`). These
  affect only the bundled `.d.mts` declaration for `panda.preset` and do not
  affect runtime behaviour.

The build is successful when you see two `✔ Build complete` lines.

---

## Installing in a consumer monorepo

### 1. Auth

The consumer's environment also needs the GitHub PAT to install from GitHub
Packages. Add to the **consumer repo's** `.npmrc` (checked in, token excluded):

```
@finografic:registry=https://npm.pkg.github.com
```

And in `~/.npmrc` (global, never commit):

```
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT
```

For CI, set `NODE_AUTH_TOKEN` as a repository secret.

### 2. Install

```bash
# In the consumer monorepo (e.g. apps/client or root)
pnpm add @finografic/design-system @finografic/icons
pnpm add -D @pandacss/dev @ark-ui/react
```

`@ark-ui/react` is a peer dependency of the DS — it must be installed by the
consumer. The DS will not install it automatically.

### 3. Panda config

In the consumer's `panda.config.ts`:

```ts
import { designSystemPreset } from '@finografic/design-system/panda.preset';
import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  presets: [designSystemPreset],
  include: ['./src/**/*.{ts,tsx}'],
  outdir: 'styled-system',
  jsxFramework: 'react',
  preflight: false, // DS ships its own reset.css
});
```

Then run `panda codegen` to generate the consumer's `styled-system/` directory.

### 4. Vite alias (required)

The DS `dist/` files contain imports like `@styled-system/css`. These must resolve
to the **consumer's own** `styled-system/` output. Add to `vite.config.ts`:

```ts
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@styled-system/css': resolve(__dirname, 'styled-system/css'),
      '@styled-system/jsx': resolve(__dirname, 'styled-system/jsx'),
    },
  },
});
```

Without this alias, the consumer's Vite build will throw
`Cannot resolve '@styled-system/css'` errors.

### 5. CSS imports

Import the DS stylesheets once, early in your app entry point:

```ts
import '@finografic/design-system/styles/reset.css';
import '@finografic/design-system/styles/keyframes.css';
import '@finografic/design-system/styles/global.css';
import '@finografic/design-system/grid/grid.css'; // if using Row/Col/Container
import '@finografic/design-system/forms/forms.css'; // if using form components
```

### 6. Import paths

```ts
import { Button, Badge, Dialog, Tabs, Menu } from '@finografic/design-system/components';
import { InputField, Checkbox, Select, Slider } from '@finografic/design-system/forms';
import { Row, Col, Container } from '@finografic/design-system/grid';
import { colors } from '@finografic/design-system/tokens';
import { buttonRecipe } from '@finografic/design-system/recipes';
```

### Gotchas

- **`panda codegen` must run after install.** The consumer's `styled-system/` is
  not shipped in the DS package — the consumer generates it locally using the
  DS preset. Add `"prepare": "panda codegen"` to the consumer's `package.json`
  so it runs automatically on `pnpm install`.

- **`styled-system/` is per-app.** If the monorepo has multiple apps, each app
  needs its own `panda.config.ts` and runs its own `panda codegen`. They can
  share the same DS preset.

- **`workspace:*` is not valid outside the DS repo.** The published package
  lists `@finografic/icons` as a concrete version (e.g. `"0.0.1"`). If the
  consumer has `@finografic/icons` installed separately, both resolve to the
  same published version — no conflict.

- **React peer dep.** Both `@finografic/design-system` and `@finografic/icons`
  declare `react` as a peer dependency. The consumer must provide it. In a
  monorepo, hoist React to the workspace root to ensure a single instance.

- **GitHub Packages in CI.** If the consumer's CI runs `pnpm install`, it needs
  `NODE_AUTH_TOKEN` set as an environment variable pointing to a PAT with
  `read:packages` scope. Without it, pnpm will fail to download `@finografic/*`
  packages.
