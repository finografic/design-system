# AGENTS.md - AI Assistant Guide

<!--
FILE ZONES — read before editing this file
  • Sections marked (universal) are portable rules, safe to copy to any project.
  • Sections marked (this repo) are specific to @finografic/design-system — never copy elsewhere.
  When adding a learned fact: check the label first. Never place project-specific facts in a
  (universal) section. Never treat (this repo) content as if it applies to other codebases.
-->

## Markdown Table Rules (universal)

- Padded pipes: one space on each side of every `|`, including the separator row.
- Align column widths so all cells in the same column are equal width.

---

<!-- ═══════════════════════════════════════════════════════════════════════════════
     EVERYTHING BELOW THIS LINE IS SPECIFIC TO @finografic/design-system
     Do not copy, apply, or treat as universal. Do not move entries across this boundary.
     ═══════════════════════════════════════════════════════════════════════════════ -->

## Rule Files (this repo)

Project-specific instructions live in `.github/instructions/project/`:

- [Design System](.github/instructions/project/design-system.instructions.md)
- [SVA components (slot recipes)](.github/instructions/project/sva-components.instructions.md)
- [CVA components (atomic recipes)](.github/instructions/project/cva-components.instructions.md)

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

## Component Refactor Status (this repo)

See **[TODO_COMPONENT_REFACTORS.md](docs/TODO_COMPONENT_REFACTORS.md)** for the completed refactor checklist.
All items are checked off. The file is kept as a reference log.

## Project Identity & Build Rules (this repo)

- This is a **standalone installable package** (`@finografic/design-system`), not a monorepo workspace.
- Published to GitHub Packages (`https://npm.pkg.github.com`).
- Do not include `Co-Authored-By` lines in commit messages.
- Do not reference `@workspace/*` — all imports and deps must use published package names.
- The `panda.preset` entry must always build with `platform: 'node'` in tsdown.
- Never add `watch: true` to `panda.config.ts` — it causes `panda codegen` to hang.
- **`dist/` is committed** — this is a published package library; `dist/` must be included. After every component refactor: run `pnpm build` from `packages/design-system/`, then commit `dist/` with `chore(dist): build — <summary>`.

## Learned Preferences (this repo)

- Apply recipes inside design-system components; consumers use props (e.g. `<Button variant="..." />`). Use **`sva`** for Ark-based multi-slot components; use **`cva`** only for single-DOM-element components (Badge, Spinner, Text). Translate Ark UI example CSS into Panda **`sva` recipes** — style specs only; never import those files as CSS modules.
- Always import **`cx`** from `@styled-system/css`; never add local `cx` helpers. Inline single-use **`cx(...)`** in JSX unless a value is reused (see **`design-system.instructions.md`** / **`sva-components.instructions.md`**).
- Document which slot a recipe targets (name or JSDoc). **No separate `*.types.ts`** — recipe types and unions (`ButtonVariant`, `ButtonPalette`, …) live at the **bottom of the `*.recipe.ts` file**; import **`RecipeProps`** from `'../../types/recipes.types'`. **`sva` → `*RecipeProps`; `cva` → `*Variants`** — align older SVA `*Variants` to `*RecipeProps` when touching those files.
- Button uses the prop name **`palette`** (not `colorScheme`) to avoid confusion with the CSS **`color-scheme`** property.
- Use **`@stylistic/stylelint-plugin`** for Stylelint 17; **`stylelint-stylistic`** is deprecated and incompatible.
- Ignore **`.cursor/chats`** and **`.cursor/hooks`**; commit **`.cursor/mcp.json`**. Use **Panda MCP** for DS questions when relevant; **Ark UI MCP** for Ark props/examples (see **`.vscode/mcp.json`**).
- Convenience wrappers use **`{Component}DS`** as the primary name plus simplified handlers (e.g. **`onChange(checked)`**); bare compounds keep Ark prop names. No **`*Field`** aliases on **`*DS`** wrappers.
- DS authoring/refactors: **`sva-components.instructions.md`** + **`cva-components.instructions.md`**; recipe locals named **`styles`** / **`stylesComponent`**; no deprecated props (consumer overview: **`design-system.instructions.md`**).
- **`variant.palette` + `colorPalette` (multi-slot):** For **Switch**, **Checkbox**, and similar, each palette key sets **`colorPalette`** on **every slot** that needs tokens (**`root`**, **`control`**, **`thumb`**, …), not only root; state styles use **`colorPalette.*`** so **`palette="info"`** (etc.) drives thumb/control. **`palette="default"`** maps to neutral/grey — use **`primary`**, **`success`**, … for saturated track colors.
- **Touch / coarse pointer:** Targets **compact touch displays** (e.g. Raspberry Pi 4 at 1024×600). On **`sm` / `md`** sizes, use **`@media (pointer: coarse)`** to bump **control** and related parts (e.g. switch **thumb**) so hit areas and icons scale up — see **`switch.recipe.ts`** size variants; **Checkbox** follows the same pattern.
- **Linked DS + consumer:** With DS on **`pnpm watch`** and a monorepo consumer on Vite dev, **restart the consumer dev server** after DS changes to pick up new **`node_modules/@finografic/design-system`** output (watch alone often does not refresh the linked package). The consumer also needs its own Panda run that **`include`**s the DS sources so recipe CSS is generated there.
- **Docs beyond MCP:** **Context7** indexes [Panda (repo)](https://context7.com/chakra-ui/panda), [Panda CSS (site)](https://context7.com/websites/panda-css), [Ark](https://context7.com/chakra-ui/ark); Ark overview: [Getting Started](https://ark-ui.com/docs/overview/getting-started).

## Learned Workspace Facts (this repo)

- Client `panda.config` must include `./node_modules/@finografic/design-system/src/**/*.{ts,tsx}` for recipe CSS to be generated
- CSS import order: design-system `styles/global.css` first, then Panda `styled-system/styles.css`
- Reset must be wrapped in `@layer reset`; `global.css` declares `@layer reset, base, tokens, recipes, utilities`
- Shared Ark-style trigger chrome: `rootTriggerRecipe` in `packages/design-system/src/recipes/root-trigger.recipe.ts`; `Dialog.Trigger` composes it — reuse on other overlay triggers with `cx` as you add them
- Switch: `switchRecipe` is `sva` + `createStyleContext`; convenience export is `SwitchDS` (styled compound remains `Switch`)
- Checkbox: `checkboxRecipe` uses **`palette`** + **`colorPalette.*`** on **root/control** (checked fill **`colorPalette.base`**, darker than legacy `success.light`) and **`@media (pointer: coarse)`** on sizes for touch; **`CheckboxDS`** accepts **`palette`**
- Panda MCP in monorepo: command `pnpm`, args `["--filter", "@finografic/design-system", "exec", "panda", "mcp"]`
- `panda.config.ts` and `@pandacss/dev` live in `packages/design-system`
- Watch script for linked library: `pnpm watch` runs `panda codegen -w` and `tsdown --watch` in parallel
- Ark reference CSS files live in **`src/ark-reference/css/`** — translate into **`sva`** recipes only; never import or ship them as CSS modules. In an **`sva`**, any slot using **`colorPalette.*`** inside a **conditional state** (`_checked`, `_hover`, …) needs **`colorPalette`** on **that slot** in **`variants.palette`** (inheritance from root alone is not enough for Panda's extraction). See **`sva-components.instructions.md`** (colorPalette in slot recipes) and **`switch.recipe.ts`** / **`checkbox.recipe.ts`**.
- **`sva` + conditional palette styles:** If utilities for **`_checked`** (or similar) + **`colorPalette.*`** are missing in the consumer's generated CSS, prefer **explicit recipe variants** / **`compoundVariants`** ([Panda slot recipes](https://panda-css.com/docs/concepts/slot-recipes#compound-variants)), **explicit checked selectors** (e.g. **`:is(:checked, [data-state='checked'], …)`** on the control), or **`staticCss`** / safelisting so the atomic combo is emitted — **`accent.solid`** may "work" only because it is generated elsewhere.
