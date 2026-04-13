# @finografic/design-system

Token-driven React design system — Panda CSS tokens, accessible headless inputs, and layout primitives.

---

## Quick Start

### 1. Configure Panda CSS in the consuming app

Scan **design-system source** so recipe CSS is generated (see [STYLING_GUIDE.md](./STYLING_GUIDE.md)):

```ts
// apps/client/panda.config.ts
import { defineConfig } from '@pandacss/dev';
import { designSystemPreset } from '@finografic/design-system/panda.preset';

export default defineConfig({
  presets: ['@pandacss/dev/presets', designSystemPreset],
  include: ['./src/**/*.{ts,tsx}', './node_modules/@finografic/design-system/src/**/*.{ts,tsx}'],
  outdir: 'styled-system',
  jsxFramework: 'react',
});
```

> If you use a workspace alias (e.g. `@workspace/design-system`), substitute that in the `import` and keep the same `include` path to the package **source** under `node_modules`.

### 2. Import global styles once at app entry

```tsx
// apps/client/src/main.tsx
import '@workspace/design-system/styles/global.css';
import '@workspace/design-system/forms/forms.css';
import '@workspace/design-system/grid/grid.css';
```

### 3. Run Panda codegen

```bash
pnpm panda codegen
```

---

## Package Exports

| Import path                                  | Contents                                       |
| -------------------------------------------- | ---------------------------------------------- |
| `@workspace/design-system`                   | Main re-export barrel                          |
| `@workspace/design-system/components`        | All components (see below)                     |
| `@workspace/design-system/forms`             | All form inputs (see below)                    |
| `@workspace/design-system/forms/forms.css`   | Import once at app entry                       |
| `@workspace/design-system/recipes`           | All recipe functions                           |
| `@workspace/design-system/grid`              | `Row`, `Col`, `Container`                      |
| `@workspace/design-system/grid/grid.css`     | Import once at app entry                       |
| `@workspace/design-system/tokens`            | `colors` palette map (camelCase → CSS vars)    |
| `@workspace/design-system/viewport`          | Breakpoint constants                           |
| `@workspace/design-system/palette/colors`    | Raw OKLCH color palette                        |
| `@workspace/design-system/panda.preset`      | Panda CSS preset — import in `panda.config.ts` |
| `@workspace/design-system/styles/global.css` | Aggregates reset + keyframes                   |

---

## Components

All from `@workspace/design-system/components`.
See [COMPONENTS_LIST.md](./docs/COMPONENTS_LIST.md) for the full inventory, patterns, and handler conventions.

### Single-element (CVA)

| Component | Element           | Notes                                                                |
| --------- | ----------------- | -------------------------------------------------------------------- |
| `Badge`   | `span`            | Props: `variant`, `palette`, `size`                                  |
| `Button`  | `button`          | Props: `variant`, `palette`, `size`, `loading`                       |
| `Callout` | `div[role=alert]` | Prop: `status`                                                       |
| `Card`    | `div`             | Props: `size`, `variant`                                             |
| `Spinner` | SVG               | Prop: `size` (number, default `20`)                                  |
| `Text`    | polymorphic       | Prop: `variant` infers element (h1–h6, p, span). Override with `as`. |

### TanStack Table

| Component   | Notes                                                                         |
| ----------- | ----------------------------------------------------------------------------- |
| `DataTable` | Pagination, sorting, filtering, row selection. Props via `classNames` object. |

### Headless compounds (SVA + `createStyleContext`)

Variant props (`size`, `variant`) go on the **Root**. Use `*DS` wrappers for the quick-start API; use the compound directly for full layout control.

| Component           | DS Wrapper        | Sub-components                                                                                                                                    |
| ------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Accordion`         | `AccordionDS`     | Root · Item · ItemTrigger · ItemContent · ItemIndicator                                                                                           |
| `Dialog`            | —                 | Root · Trigger · Backdrop · Positioner · Content · Header · Title · Description · Body · Footer · CloseTrigger                                    |
| `DialogGeneric`     | —                 | Config-driven modal; accepts `config: DialogGenericConfig`                                                                                        |
| `Menu`              | —                 | Root · Trigger · Positioner · Content · Item · ItemGroup · ItemGroupLabel · Separator · Arrow                                                     |
| `Pagination`        | `PaginationDS`    | Root · PrevTrigger · NextTrigger · PageTrigger · Ellipsis                                                                                         |
| `Popover`           | —                 | Root · Trigger · Positioner · Content · Arrow · Title · Description · CloseTrigger                                                                |
| `ScrollArea`        | `ScrollAreaDS`    | Root · Viewport · Content · Scrollbar · Thumb · Corner                                                                                            |
| `SegmentGroup`      | `SegmentGroupDS`  | Root · Item · ItemText · ItemControl · Indicator                                                                                                  |
| `Tabs`              | `TabsDS`          | Root · List · Trigger · Content · Indicator                                                                                                       |
| `Toast` / `Toaster` | — (createToaster) | Root · Title · Description · CloseTrigger · `createToaster`                                                                                       |
| `Toggle`            | `ToggleDS`        | Root (single element with pressed state)                                                                                                          |
| `Tooltip`           | —                 | Root · Trigger · Positioner · Content · Arrow                                                                                                     |
| `TreeView`          | `TreeViewDS`      | Root · Label · Tree · Branch · BranchControl · BranchIndicator · BranchText · BranchContent · BranchIndentGuide · Item · ItemText · ItemIndicator |

---

## Form inputs

All from `@workspace/design-system/forms`.
See [COMPONENTS_LIST.md](./docs/COMPONENTS_LIST.md) for full handler signatures.

| Component / DS wrapper              | Description                                                                  |
| ----------------------------------- | ---------------------------------------------------------------------------- |
| `Checkbox` / `CheckboxDS`           | Checkbox compound + convenience wrapper                                      |
| `DatePicker` / `DatePickerDS`       | Calendar picker with month/year navigation                                   |
| `Editable` / `EditableDS`           | Inline preview→edit field; `multiline` prop switches to textarea             |
| `FieldBox`                          | RHF-aware label / hint / error layout wrapper                                |
| `FileUpload` / `FileUploadDS`       | File picker or drag-and-drop upload zone; `variant: 'trigger' \| 'dropzone'` |
| `InputField`                        | Text input with leading/trailing decoration slots                            |
| `InputNumber`                       | Number input with prefix/suffix and `Intl` formatting                        |
| `InputPassword` / `InputPasswordDS` | Password input with visibility toggle                                        |
| `Label`                             | Plain `<label>` with size variant                                            |
| `Listbox` / `ListboxDS`             | Always-visible selectable list (no dropdown)                                 |
| `RadioGroup` / `RadioGroupDS`       | Radio group — default + card variant                                         |
| `Select`                            | Dropdown select compound — Root, Trigger, Content, Item, etc.                |
| `SelectCombobox`                    | Low-level combobox compound — full composition control                       |
| `SelectDefault`                     | Convenience wrapper: `options: SelectOption[]`                               |
| `SelectSearchable`                  | Searchable combobox with `match-sorter` filtering + `onAddNew`               |
| `Slider` / `SliderDS`               | Range slider — single or multi-thumb                                         |
| `Switch` / `SwitchDS`               | Toggle switch                                                                |
| `TagsInput` / `TagsInputDS`         | Token / tag input with keyboard editing                                      |
| `Textarea`                          | Styled `<textarea>` — `size` + `resize` variants                             |

---

## Recipes

All exported from `@workspace/design-system/recipes`.

### Single-element (`cva`) — `*Variants`

| Recipe           | Variants                                                                            |
| ---------------- | ----------------------------------------------------------------------------------- |
| `badgeRecipe`    | `variant` (solid, soft, outline) · `palette` · `size` (sm, md, lg)                  |
| `buttonRecipe`   | `variant` (solid, subtle, outline, ghost, link) · `palette` · `size` (sm, md, lg)   |
| `calloutRecipe`  | `status` (error, warning, success, info)                                            |
| `cardRecipe`     | `size` (sm, md, lg) · `variant` (elevated, outlined)                                |
| `labelRecipe`    | `size` (sm, md, lg)                                                                 |
| `spinnerRecipe`  | — (base only)                                                                       |
| `textRecipe`     | `variant` (h1–h6, body, body-lg, body-sm, caption, overline) · `color` · `truncate` |
| `textareaRecipe` | `size` (sm, md, lg) · `resize` (none, vertical, horizontal, both)                   |

### Slot recipes (`sva`) — `*RecipeProps`

| Recipe                   | `className`         | Slots                                                                                                                                                                                                                    |
| ------------------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accordionRecipe`        | `accordion`         | root · item · itemTrigger · itemContent · itemIndicator                                                                                                                                                                  |
| `checkboxRecipe`         | `checkbox`          | root · control · indicator · label · description · errorText                                                                                                                                                             |
| `datePickerRecipe`       | `date-picker`       | root · label · control · trigger · positioner · content · viewControl · prevTrigger · nextTrigger · grid · gridHeader · gridBody · cell · cellTrigger                                                                    |
| `dialogRecipe`           | `dialog`            | backdrop · positioner · content · header · body · footer · title · description · closeTrigger                                                                                                                            |
| `editableRecipe`         | `editable`          | root · label · area · input · textarea · preview · control · editTrigger · submitTrigger · cancelTrigger                                                                                                                 |
| `fieldBoxRecipe`         | `field-box`         | root · label · requiredIndicator · helperText · errorText · warningText                                                                                                                                                  |
| `inputFieldRecipe`       | `input-field`       | root · input · slot                                                                                                                                                                                                      |
| `inputNumberRecipe`      | `input-number`      | root · label · control · input · incrementTrigger · decrementTrigger · prefix · suffix                                                                                                                                   |
| `inputPasswordRecipe`    | `input-password`    | root · label · input · visibilityTrigger                                                                                                                                                                                 |
| `fileUploadRecipe`       | `file-upload`       | root · label · trigger · dropzone · dropzoneIcon · dropzoneContent · dropzoneTitle · dropzoneDescription · itemGroup · item · itemCompact · itemPreview · itemPreviewImage · itemName · itemSizeText · itemDeleteTrigger |
| `listboxRecipe`          | `listbox`           | root · label · content · item · itemText · itemIndicator · itemGroup · itemGroupLabel                                                                                                                                    |
| `menuRecipe`             | `menu`              | root · positioner · content · trigger · item · itemGroup · itemGroupLabel · separator · arrow                                                                                                                            |
| `paginationRecipe`       | `pagination`        | root · item · ellipsis · prevTrigger · nextTrigger · pageText                                                                                                                                                            |
| `popoverRecipe`          | `popover`           | positioner · content · arrow · title · description · trigger · closeTrigger                                                                                                                                              |
| `radioGroupRecipe`       | `radio-group`       | root · label · item · itemControl · indicator · itemText · itemDescription                                                                                                                                               |
| `scrollAreaRecipe`       | `scroll-area`       | root · viewport · content · scrollbar · thumb · corner                                                                                                                                                                   |
| `segmentGroupRecipe`     | `segment-group`     | root · label · item · itemText · itemControl · indicator                                                                                                                                                                 |
| `selectRecipe`           | `select`            | root · control · trigger · valueText · indicator · positioner · content · item · itemText · itemIndicator · itemGroup · label · clearTrigger · list                                                                      |
| `selectComboboxRecipe`   | `select-combobox`   | root · label · control · input · trigger · positioner · content · item · itemText · itemIndicator · itemGroup · clearTrigger · list                                                                                      |
| `selectSearchableRecipe` | `select-searchable` | root · control · input · leadIcon · positioner · content · item · itemText · itemIndicator · itemGroup · emptyState · addNew                                                                                             |
| `sliderRecipe`           | `slider`            | root · label · valueText · control · track · range · thumb · markerGroup · marker                                                                                                                                        |
| `switchRecipe`           | `switch`            | root · label · control · thumb · description · errorText                                                                                                                                                                 |
| `tableRecipe`            | `table`             | root · table · thead · tbody · tfoot · tr · headerRow · th · td · sortIcon · emptyState · caption                                                                                                                        |
| `tagsInputRecipe`        | `tags-input`        | root · label · control · item · itemPreview · itemText · itemInput · itemDeleteTrigger · input · clearTrigger · description · errorText                                                                                  |
| `tabsRecipe`             | `tabs`              | root · list · trigger · content · indicator                                                                                                                                                                              |
| `toastRecipe`            | `toast`             | root · group · title · description · actionTrigger · closeTrigger                                                                                                                                                        |
| `toggleRecipe`           | `toggle`            | root                                                                                                                                                                                                                     |
| `tooltipRecipe`          | `tooltip`           | positioner · content · arrow · trigger                                                                                                                                                                                   |
| `treeViewRecipe`         | `tree-view`         | root · label · tree · branch · branchControl · branchIndicator · branchText · branchContent · branchIndentGuide · item · itemText · itemIndicator                                                                        |

---

## Tokens

### Design tokens (used in Panda recipes and `css()` calls)

```ts
// Semantic colors
bg: 'bg.panel'; // panel background
bg: 'bg.muted'; // subtle background
bg: 'bg.hover'; // hover state
color: 'fg'; // primary text
color: 'fg.muted'; // secondary text
borderColor: 'border'; // default border
borderColor: 'border.subtle';

// Spacing (numeric scale — 1 = 0.25rem)
p: '4'; // 1rem
gap: '2'; // 0.5rem
px: '3'; // 0.75rem

// Typography
textStyle: 'heading.1' | 'heading.2' | 'heading.3' | 'heading.4';
textStyle: 'body.sm' | 'body.md' | 'body.lg';
fontSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
fontWeight: 'normal' | 'medium' | 'semibold' | 'bold';

// Border radius
borderRadius: 'sm' | 'md' | 'lg' | 'xl' | 'full';

// Z-index
zIndex: 'base' | 'overlay' | 'modal' | 'popover' | 'tooltip';
```

### `colors` map — `@workspace/design-system/tokens`

Maps camelCase keys to CSS custom properties. Useful when migrating from a direct color object.

```ts
import { colors } from '@workspace/design-system/tokens';

borderColor: colors.primaryLight,    // var(--colors-primary-light)
color: colors.greyXXXLight,          // var(--colors-grey-xxxlight)
background: colors.danger,           // var(--colors-danger)
```

**Shade scale** (11 stops, no alpha variants):
`xxxlight` · `xxlight` · `xlight` · `lighter` · `light` · base · `dark` · `darker` · `xdark` · `xxdark` · `xxxdark`

**Color groups:** `primary` · `secondary` · `success` · `warning` · `danger` · `info` · `grey` · `neutral`

---

## Color System

All colors use **OKLCH** for perceptually uniform shade generation. Shades are derived at
runtime using CSS `color-mix()` — no build step, no generated color values.

```text
┌─────────────────────────────────────────────────────┐
│  Raw palette    colors.primary = oklch(48.8% ...)   │
├─────────────────────────────────────────────────────┤
│  Semantic       bg.error = colors.danger.xlight     │
│                 fg.error = colors.danger            │
│                 border.error = colors.danger        │
├─────────────────────────────────────────────────────┤
│  Recipe         callout({ status: 'error' })        │
│                   → bg: bg.error, color: fg.error   │
└─────────────────────────────────────────────────────┘
```

Color palette preview: open `docs/color-palette-preview.html` in a browser.

---

## Grid

Bootstrap-style responsive 12-column grid. Import the CSS once, use components anywhere.

```tsx
import { Row, Col, Container } from '@workspace/design-system/grid';

<Container>
  <Row>
    <Col xs={12} md={8}>
      main content
    </Col>
    <Col xs={12} md={4}>
      sidebar
    </Col>
  </Row>
</Container>;
```

| Prop  | Breakpoint      |
| ----- | --------------- |
| `xs`  | base (no query) |
| `sm`  | 640px           |
| `md`  | 768px           |
| `lg`  | 1024px          |
| `xl`  | 1280px          |
| `xxl` | 1536px          |

`Row` props: `align` · `justify` · `wrap` · `direction` · `nogutter` · `gutterWidth`

`Col` accepts `1–12` or `'content'` (shrinks to content width) per breakpoint.

---

## Development

### DS package (`packages/design-system/`)

```bash
# Build — panda codegen + tsdown (run after any source change)
pnpm build

# Panda codegen only — regenerates styled-system/ without bundling
pnpm panda:codegen

# Type check
pnpm typecheck

# Panda Studio (token browser)
pnpm panda:studio

# Panda MCP server — gives AI assistants live access to tokens, recipes, and slot schemas
pnpm panda:mcp
```

### AI-assisted development — Panda MCP + Ark MCP

Two MCP servers are pre-configured for Claude Code, Cursor, and other MCP-compatible agents:

- **Panda CSS MCP** (`pnpm panda:mcp`) — live token values, recipe slots, and config. Run from `packages/design-system/`. Config: `.mcp.json` (Claude Code), `.cursor/mcp.json` (Cursor).
- **Ark UI MCP** — component props, examples, and styling guide for the headless layer. Config: `.vscode/mcp.json` (shared).

These let agents query the actual design system state instead of guessing from static docs.

### After a DS change — update the client

Any change to tokens or recipes requires the client to regenerate its `styled-system/`:

```bash
# From apps/client/
pnpm panda:codegen
```

The client's `panda.config.ts` extends `@workspace/design-system/panda.preset` and
scans DS source files directly — stale codegen means missing or incorrect CSS.

> **Build order:** `pnpm build` (DS) → `pnpm panda:codegen` (client) → `pnpm build` (client)

---

## Folder Structure

```text
packages/design-system/src/
├── panda.preset.ts          ← THE PRESET — import in consuming app panda.config.ts
├── index.ts                 ← Main barrel
│
├── components/              ← All components (one folder per component)
│   ├── accordion/
│   ├── badge/
│   ├── button/
│   ├── callout/
│   ├── card/
│   ├── data-table/
│   ├── dialog/
│   ├── dialog-generic/
│   ├── menu/
│   ├── pagination/
│   ├── popover/
│   ├── scroll-area/
│   ├── segment-group/
│   ├── spinner/
│   ├── tabs/
│   ├── text/
│   ├── toast/
│   ├── toggle/
│   ├── tooltip/
│   └── tree-view/
│
├── forms/                   ← Pre-composed form inputs (one folder per component)
│   ├── checkbox/
│   ├── date-picker/
│   ├── editable/
│   ├── field-box/
│   ├── file-upload/
│   ├── input-field/
│   ├── input-number/
│   ├── input-password/
│   ├── label/
│   ├── listbox/
│   ├── radio-group/
│   ├── select/
│   ├── select-combobox/
│   ├── select-default/
│   ├── select-searchable/
│   ├── slider/
│   ├── switch/
│   ├── tags-input/
│   └── textarea/
│
├── recipes/                 ← index.ts only — re-exports all recipes
│
├── tokens/                  ← Design tokens
│   ├── colors.ts            ← OKLCH base palette + semantic tokens
│   ├── typography.ts        ← Font families, sizes, weights, text styles
│   ├── spacing.ts           ← Spacing, radii, borders, shadows, breakpoints, z-index
│   └── animations.ts        ← Keyframes, durations, easings
│
├── grid/                    ← Row · Col · Container + grid.css
├── styles/                  ← global.css · reset.css · keyframes.css
├── viewport/                ← Breakpoint constants
├── palette/                 ← Raw color palette
└── ark-reference/css/       ← Ark UI reference stylesheets (spec only — not shipped)
```
