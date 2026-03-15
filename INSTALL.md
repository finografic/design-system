# Publishing & Release Guide

This repo is a **pnpm workspace** containing two publishable packages:

| Package                     | Path                     | Registry        |
| --------------------------- | ------------------------ | --------------- |
| `@finografic/design-system` | `packages/design-system` | GitHub Packages |
| `@finografic/icons`         | `packages/icons`         | GitHub Packages |

`@finografic/icons` must always be published **before** `@finografic/design-system`
because the DS lists it as a dependency.

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

## Publishing

### First publish (both packages, new repo / new package)

This is the only time you publish icons manually. After this, icons only needs
re-publishing when its content changes.

```bash
# 1. Ensure everything is built and committed
pnpm build.all
pnpm typecheck

# 2. Publish icons first
pnpm publish.icons

# 3. Release the design-system
#    Choose the correct version bump:
pnpm release.ds.patch   # 0.0.x → 0.0.x+1
pnpm release.ds.minor   # 0.x.0 → 0.x+1.0
pnpm release.ds.major   # x.0.0 → x+1.0.0
```

`release.ds.*` bumps the version in `packages/design-system/package.json`,
commits the change, creates a git tag (`v1.x.x`), and pushes with `--follow-tags`.
The tag triggers the GitHub Actions `release.yml` workflow, which:

1. Builds icons, then builds the DS
2. Publishes `@finografic/design-system` to GitHub Packages
3. Creates a GitHub Release with auto-generated notes

---

### Routine release — DS only changed

The common case: you changed components, tokens, or styles. Icons untouched.

```bash
# 1. Build and verify
pnpm build
pnpm typecheck

# 2. Commit your changes
git add -p
git commit -m "feat: ..."

# 3. Release (choose bump level)
pnpm release.ds.patch
```

That's it. GitHub Actions handles the publish.

---

### Releasing icons + DS together

When you add, remove, or change icons:

```bash
# 1. Regenerate icons (runs generate script + build)
pnpm build.icons

# 2. Bump icons version and publish manually
pnpm --filter @finografic/icons version patch
pnpm publish.icons

# 3. Update the DS dependency to the new icons version
#    Edit packages/design-system/package.json:
#      "@finografic/icons": "workspace:*"  ← leave as-is during dev
#    pnpm install re-locks it automatically

# 4. Build and release DS
pnpm build
pnpm typecheck
pnpm release.ds.patch
```

> The `workspace:*` specifier is automatically replaced with the real published
> version (e.g. `"0.0.2"`) when pnpm packages the DS tarball for publish.
> Consumers get a concrete version, not `workspace:*`.

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
