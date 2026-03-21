# AGENTS.md - AI Assistant Guide

Rules are canonical in `.github/instructions/` and shared across Claude Code, Cursor, and GitHub Copilot.

## Rules - Markdown Tables

- Padded pipes: one space on each side of every `|`, including the separator row.
- Align column widths so all cells in the same column are equal width.

## Rule Files

Project-specific instructions live in `.github/instructions/project/`:

- [Design System](.github/instructions/project/design-system.instructions.md)

> Note: the shared numbered rule set (`00-general` … `08-readme`) still lives at `.github/instructions/`. The full monorepo instructions tree has not been copied here yet.
> Until it is, follow general TypeScript, ESLint, and naming conventions from prior context.

- [General](/.github/instructions/00-general.instructions.md)
- [File Naming](/.github/instructions/01-file-naming.instructions.md)
- [TypeScript Patterns](/.github/instructions/02-typescript-patterns.instructions.md)
- [Provider & Context Patterns](/.github/instructions/03-provider-context-patterns.instructions.md)
- [ESLint & Code Style](/.github/instructions/04-eslint-code-style.instructions.md)
- [Documentation](/.github/instructions/05-documentation.instructions.md)
- [Modern TypeScript Patterns](/.github/instructions/06-modern-typescript-patterns.instructions.md)
- [Variable Naming](/.github/instructions/07-variable-naming.instructions.md)
- [README Standards](/.github/instructions/08-readme-standards.instructions.md)

## Project-Specific

- This is a **standalone installable package** (`@finografic/design-system`), not a monorepo workspace.
- Published to GitHub Packages (`https://npm.pkg.github.com`).
- Do not include `Co-Authored-By` lines in commit messages.
- Do not reference `@workspace/*` — all imports and deps must use published package names.
- The `panda.preset` entry must always build with `platform: 'node'` in tsdown.
- Never add `watch: true` to `panda.config.ts` — it causes `panda codegen` to hang.

## Learned User Preferences

- Apply recipes inside design-system components; client uses `<Button variant="..." />` without calling the recipe
- Use `sva` as the default for any Ark-based (multi-slot) component; use `cva` only for genuinely single-DOM-element components (Badge, Spinner, Text)
- Translate Ark UI example CSS files into Panda `sva` recipes — treat them as style specifications, never import them as CSS modules directly
- Always import `cx` from `@styled-system/css`; never create local `cx` helper functions inside components
- Recipe names or JSDoc should indicate the target slot (e.g. a recipe applied to `Control` should be named `switchControlRecipe` or documented with a comment)
- Export explicit variant union types (e.g. `ButtonVariant`, `ButtonPalette`) from component type files; never index `RecipeProps` directly for variant/palette keys
- Button uses the prop name `palette` (not `colorScheme`) to avoid confusion with the CSS `color-scheme` property
- Use `@stylistic/stylelint-plugin` for Stylelint 17; `stylelint-stylistic` is deprecated and incompatible
- Ignore `.cursor/chats` and `.cursor/hooks`; commit `.cursor/mcp.json`
- Use Panda MCP for design-system questions (breakpoints, tokens, recipes) when relevant without explicit user ask
- Follow existing recipe patterns for naming, structure, and variant conventions

## Learned Workspace Facts

- Client `panda.config` must include `./node_modules/@finografic/design-system/src/**/*.{ts,tsx}` for recipe CSS to be generated
- CSS import order: design-system `styles/global.css` first, then Panda `styled-system/styles.css`
- Reset must be wrapped in `@layer reset`; `global.css` declares `@layer reset, base, tokens, recipes, utilities`
- Ark UI `_Root.css` is a trigger base-style spec — absorb it into the `root`/`trigger` slot of each component's `sva` recipe, not into global styles
- Panda MCP in monorepo: command `pnpm`, args `["--filter", "@finografic/design-system", "exec", "panda", "mcp"]`
- `panda.config.ts` and `@pandacss/dev` live in `packages/design-system`
- Watch script for linked library: `pnpm watch` runs `panda codegen -w` and `tsdown --watch` in parallel
