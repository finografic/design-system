# Project — Handoff

> **How to maintain this file**
> Update after sessions that change architecture, add/remove features, resolve open questions, or shift priorities — not every session.
> — Update only the sections that changed. Keep the total under 150 lines.
> — Write in present tense. No code snippets — describe what exists, not how it works.
> — `.claude/memory.md` = session work log. `.ai/handoff.md` = project state snapshot. Never duplicate between the two.

# @finografic/design-system — Handoff

## Project

`@finografic/design-system` v1.0.0 — pnpm workspace containing 2 publishable packages.
Token-driven React design system with Panda CSS tokens, accessible headless inputs, and layout primitives.
Published to GitHub Packages.

## Architecture

pnpm workspace with `packages/*` glob. Two publishable packages:

- `packages/design-system/` → `@finografic/design-system` — component library
- `packages/icons/` → `@finografic/icons` — icon wrappers around lucide-react

DS imports icons via `workspace:*` dep (symlinked during dev, published separately for production).
DS built by `panda codegen && tsdown` into `dist/`. tsdown: browser config (all component entries) +
node config (`panda.preset` only — imports `@pandacss/dev` which is Node-only).
Consumers run their own `panda codegen` using the exported `designSystemPreset`, generating
their own `styled-system/`. Their Vite config must alias `@styled-system/*` → their own `styled-system/`.

## Stack

- **Core:** Panda CSS 1.x, Ark UI 5.x (headless), React 18 (peer), lucide-react (via icons package)
- **Build:** tsdown (browser + node split), TypeScript 5.9
- **Tooling:** ESLint (root-level), dprint, pnpm workspaces
- **Registry:** GitHub Packages (`https://npm.pkg.github.com`)
- **AI tooling:** Panda CSS MCP (`pnpm panda:mcp`) + Ark UI MCP (`.vscode/mcp.json`)

## Schema / Types

- `RecipeProps<T>` — extracts variant prop types from any `cva()`/`sva()` recipe
- `SelectOption` — `{ value, label?, description?, category?, disabled? }`
- `DialogSize` — `'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'cover' | 'full'`
- `DialogGenericConfig` — config-driven modal: `{ title, body, footer: { buttons, isRTL?, isFilled? } }`
- Recipe type convention: `sva` → `*RecipeProps`; `cva` → `*Variants` (older SVA recipes still use `*Variants` — clean up on next touch)

## Sub-path Exports

| Import path                                   | Contents                                                                                                                                                                                                                                   |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `@finografic/design-system`                   | Root barrel                                                                                                                                                                                                                                |
| `@finografic/design-system/components`        | Accordion, Badge, Button, Callout, Card, DataTable, Dialog, DialogGeneric, Menu, Pagination, Popover, ScrollArea, SegmentGroup, Spinner, Tabs, Text, Toast, Toggle, Tooltip, **TreeView** (+ DS wrappers)                                  |
| `@finografic/design-system/forms`             | Checkbox, DatePicker, Editable, FieldBox, **FileUpload**, InputField, InputNumber, InputPassword, Label, Listbox, RadioGroup, Select, SelectCombobox, SelectDefault, SelectSearchable, Slider, Switch, TagsInput, Textarea (+ DS wrappers) |
| `@finografic/design-system/grid`              | Row, Col, Container                                                                                                                                                                                                                        |
| `@finografic/design-system/tokens`            | colors, spacing, typography, layout tokens                                                                                                                                                                                                 |
| `@finografic/design-system/recipes`           | All slot/pattern recipes                                                                                                                                                                                                                   |
| `@finografic/design-system/panda.preset`      | `designSystemPreset` — for consumer `panda.config.ts`                                                                                                                                                                                      |
| `@finografic/design-system/styles/global.css` | reset + keyframes                                                                                                                                                                                                                          |
| `@finografic/design-system/forms/forms.css`   | form component CSS                                                                                                                                                                                                                         |
| `@finografic/design-system/grid/grid.css`     | grid layout CSS                                                                                                                                                                                                                            |

## Component Patterns

All components follow one of three patterns (see `docs/COMPONENTS_LIST.md` for full inventory):

- **CVA** (`*Variants`): single `forwardRef` + `cx(recipe({ variants }), className)`. Badge, Button, Callout, Card, Label, Spinner, Text, Textarea.
- **SVA** (`*RecipeProps`): `createStyleContext(recipe)` → compound object + `{Component}DS` `forwardRef` wrapper. All Ark-based components.
- **Custom:** DialogGeneric, DataTable, FieldBox — hand-composed, no standard recipe pattern.

DS wrapper handler convention: scalar args extracted from Ark details (`onChange(value)`, `onOpenChange(open: boolean)`). Overlay events (`onFocusOutside`, etc.) pass through with Ark signatures. `dist/` is committed — run `pnpm build` + commit after every source change.

## Decisions

1. Repo restructured to pnpm workspace: `packages/design-system/` + `packages/icons/` (2026-03-15)
2. `@finografic/*` naming — no `@workspace/*` alias; `workspace:*` for local resolution (2026-03-15)
3. DS imports icons via `@finografic/icons` (2026-03-15)
4. DS build: `panda codegen && tsdown`; browser + node split; `panda.preset` must use `platform: 'node'` (2026-03-14)
5. All components refactored to `createStyleContext`/`sva`/`cva` patterns (2026-03-23)
6. Phase 3 complete: Accordion, DatePicker, Editable, InputPassword, Listbox, Pagination, ScrollArea, SegmentGroup, SelectCombobox, Toggle + Editable.multiline + standalone Textarea (2026-03-24)
7. `DialogGeneric` (renamed from `GenericDialog`): config-driven modal, footer `isRTL` defaults `true` (2026-03-24)
8. Recipe type convention locked: SVA = `*RecipeProps`, CVA = `*Variants` (2026-03-24)
9. `recipes` not re-exported from root index — caused TS2590 in consumers; use `/recipes` sub-path (2026-03-14)
10. `watch: true` must NOT be in `panda.config.ts` — causes `panda codegen` to hang (2026-03-14)
11. Added FileUpload (`forms/file-upload/`) + TreeView (`components/tree-view/`) (2026-04-13). TreeView recipe uses CSS custom props from Ark's runtime `--depth` var for depth-based indentation. FileUpload exposes `ItemCompact` as a second `withContext` alias of the same Ark Item part.

## Open Questions

1. **`@finografic/icons` publish** — not yet published to GitHub Packages; must be published before DS can be installed outside this repo.
2. **Versioning strategy** — patch/minor/major release scripts exist; decide on changelog tooling.
3. **SVA `*Variants` cleanup** — older SVA recipes (Switch, Dialog, RadioGroup, etc.) still export `*Variants`; should be renamed to `*RecipeProps` in a dedicated cleanup pass.

## Status

As of 2026-04-13. Two new components added: FileUpload (forms) + TreeView (components). Listbox was
already complete. All docs updated: README, FORMS.md, COMPONENTS.md, COMPONENTS_LIST.md,
design-system.instructions.md (import paths), AGENTS.md (workspace facts). Dist not yet rebuilt —
run `pnpm build` from `packages/design-system/` and commit `dist/` before publishing.
Next: build + publish packages, decide versioning/changelog.
