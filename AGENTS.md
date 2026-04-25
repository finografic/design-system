# AGENTS.md - AI Assistant Guide

<!--
FILE ZONES — read before editing this file
  • Sections marked (universal) are portable rules, safe to copy to any project.
  • Sections marked (this repo) are specific to @finografic/design-system — never copy elsewhere.
  When adding a learned fact: check the label first. Never place project-specific facts in a
  (universal) section. Never treat (this repo) content as if it applies to other codebases.
-->

## Roadmap and Planning Docs

**`docs/todo/ROADMAP.md` is the primary high-level plan for this project.**
**`docs/todo/NEXT_STEPS.md` is the near-term working list** — small tasks, fixes, and manual testing checklists too small for ROADMAP.

- Before proposing or generating new features, check the roadmap for existing items.
- When conceiving a new feature or initiative, add it to the appropriate priority tier.
- Detailed planning docs live alongside in `docs/todo/` as `TODO_*.md` (active) or `DONE_*.md` (complete).
- **TODO/DONE doc conventions:** `.github/instructions/documentation/todo-done-docs.instructions.md`
  — rules for naming, status headers, checkboxes, and graduating `TODO_` → `DONE_`.

---

## Rules — Project-Specific (this repo)

- Project-specific rules live in `.github/instructions/project/**/*.instructions.md`.
- Do not reference `@workspace/*` — all imports and deps must use published package names.

- [Design System](.github/instructions/project/design-system.instructions.md)
- [SVA components (slot recipes)](.github/instructions/project/sva-components.instructions.md)
- [CVA components (atomic recipes)](.github/instructions/project/cva-components.instructions.md)

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

## Dropdown / Portal Positioning (this repo)

### Root cause of z-index / clipping bugs

`filter` (e.g. `grayscale(100%)` on disabled elements), `transform`, `zoom`, `isolation: isolate`, and `will-change: transform` all create a new **CSS containing block** for `position: fixed` descendants. This means any Ark UI positioner using `strategy: 'fixed'` will still be trapped inside the ancestor that has one of those properties — regardless of its `z-index`. This is also the Ark docs' own pattern: `Root.css` uses `filter: grayscale(100%)` on `[data-disabled]`, so a disabled **FieldBox** (or any disabled trigger wrapper) will always trap its child positioner.

`overflow: hidden` / `overflow: clip` clips `position: absolute` positioners. `position: fixed` normally escapes it, but **not** when an ancestor also has `filter`, `transform`, or `zoom`.

### The correct fix: Portal rendering

Wrap every Ark positioner in Ark's `<Portal>` from `@ark-ui/react`. This renders the positioner directly into `document.body`, escaping **all** ancestor CSS constraints. Apply `strategy: 'fixed'` in addition so Floating UI uses `position: fixed` for the anchor calculation.

Current state — all three select primitives use Portal + fixed strategy:

- **`SelectSearchable`** (`select-searchable.tsx`) — `<Portal>` wraps `ArkCombobox.Positioner`; `positioning={{ strategy: 'fixed', sameWidth: true }}`
- **`Select`** (`select.tsx`) — `ArkSelectPositionerPortal` wrapper; `SelectRootFixed` injects `{ strategy: 'fixed', sameWidth: true }` as default (overridable via `positioning` prop)
- **`SelectCombobox`** (`select-combobox.tsx`) — `ArkComboboxPositionerPortal` wrapper

When adding **new overlay components** (DatePicker, ColorPicker, Popover, etc.) always:

1. Wrap the `Positioner` part in `<Portal>`.
2. Set `strategy: 'fixed'` in the root `positioning` prop.
3. Keep the portal wrapper as a named `forwardRef` so `displayName` is preserved for DevTools.

### z-index: layered dropdowns (future)

The Ark docs reference CSS uses:

```css
z-index: calc(var(--demo-popover-z-index) + var(--layer-index, 0));
```

The `--layer-index` variable allows nested portals (e.g. a Select inside a Dialog) to stack correctly by incrementing the layer. Our recipes currently use the flat `zIndex: 'dropdown'` token (`1150`). If a "dropdown appearing behind dialog" regression is reported, add `--layer-index` support to the `content` slot of the affected recipe.

### Open/close animations

`Select.css` from the Ark docs defines **both** `scale-fade-in` (enter) and `scale-fade-out` (exit) keyed off `data-state="open"` / `data-state="closed"`. DS recipes may only ship the enter animation. Add the exit animation to the `content` slot (`_closed: { animation: 'scale-fade-out …' }`) when smooth close transitions are needed.

### forms.css positioner class names

`forms.css` must target **both** the Panda recipe class name **and** Ark's data-attributes as a fallback, because recipe class names can drift between builds:

```css
.select__positioner,
[data-scope='select'][data-part='positioner'],
[data-scope='combobox'][data-part='positioner'] {
  z-index: var(--z-index-dropdown, 1150);
}
```

Unlayered CSS in `forms.css` always wins over `@layer utilities` (Panda), so this override is reliable.

---

## Rules — Global

Rules are canonical in `.github/instructions/` — see `README.md` there for folder structure.
Shared across Claude Code, Cursor, and GitHub Copilot.

**General**

- General baseline: `.github/instructions/general.instructions.md`

**Code**

- TypeScript patterns: `.github/instructions/code/typescript-patterns.instructions.md`
- Modern TS patterns: `.github/instructions/code/modern-typescript-patterns.instructions.md`
- ESLint & style: `.github/instructions/code/eslint-code-style.instructions.md`
- Provider/context patterns: `.github/instructions/code/provider-context-patterns.instructions.md`
- Picocolors CLI styling: `.github/instructions/code/picocolors-cli-styling.instructions.md`

**Naming**

- File naming: `.github/instructions/naming/file-naming.instructions.md`
- Variable naming: `.github/instructions/naming/variable-naming.instructions.md`

**Documentation**

- Documentation: `.github/instructions/documentation/documentation.instructions.md`
- README standards: `.github/instructions/documentation/readme-standards.instructions.md`
- Agent-facing markdown: `.github/instructions/documentation/agent-facing-markdown.instructions.md`
- Feature design specs: `.github/instructions/documentation/feature-design-specs.instructions.md`
- TODO/DONE docs: `.github/instructions/documentation/todo-done-docs.instructions.md`

**Git**

- Git policy: `.github/instructions/git/git-policy.instructions.md`

---

## Rules — Markdown Tables (universal)

- Padded pipes: one space on each side of every `|`, including the separator row.
- Align column widths so all cells in the same column are equal width.

---

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
- **TreeView depth indentation:** `treeViewRecipe` sets `--tree-depth`, `--tree-offset`, etc. as CSS custom props on `branchControl` and `item` slots. These derive from Ark's runtime-injected `--depth` var. The root slot's size variant overrides `--tree-indentation`, `--tree-padding-inline`, etc. No inline styles are needed — indentation is fully CSS-driven.
- **FileUpload compound layout modes:** `FileUpload.Item` (slot `'item'`) uses a CSS Grid layout (preview + name + size + delete). `FileUpload.ItemCompact` (slot `'itemCompact'`) is a second `withContext` alias of the same `ArkFileUpload.Item` part — same Ark element, different recipe slot class, inline-flex compact layout. Use `ItemCompact` in the trigger-only (basic) mode; use `Item` in the dropzone mode with `ItemPreview`.
- **Listbox vs Select:** `Listbox` is always visible (no dropdown, no positioner). Use it for side-panel or inline multi-select UI. For dropdown single-select use `SelectDefault`; for searchable dropdown use `SelectSearchable`.

## Claude Code — Session Memory and Handoff

> This section applies to Claude Code only. Other agents can ignore it.

- **Session log:** `.claude/memory.md` (gitignored) — maintenance rules are in that file.
- **Project state snapshot:** `.agents/handoff.md` (git-tracked) — maintenance rules are in that file.

---
