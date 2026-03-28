# Component Refactor TODO

> **AGENTS:** Keep this file up to date. Check off a component as soon as its
> refactor is committed. The refactor checklist for each component is:
>
> - `cls` → `styles`; array joins → `cx()`
> - Inline `style={{}}` → `css()` / recipe slot
> - `*Variants` type in recipe file (no separate `*.types.ts`)
> - JSDoc with `@example` on compound / wrapper export
> - Ark CSS reference incorporated (`src/ark-reference/css/`)
> - `dist/` built and committed alongside source

## Phase 1 — Initial refactor (complete)

### `components/`

- [x] Badge
- [x] Button — spinner loading state, `fullWidth`, `fontFamily: inherit`
- [x] Callout — `cls` → `styles`, `cx()`, JSDoc
- [x] Card — `cls` → `styles`, `cx()`, JSDoc
- [x] DataTable — inline `style={{}}` → `css()`, JSDoc with `@example`
- [x] Dialog — `createStyleContext` wiring, recipe slots replace BEM, `size` moves to Root, `xs`/`cover` variants added, JSDoc
- [x] GenericDialog — footer inline `style={{}}` → `css()`, JSDoc
- [x] Menu — scale animation, maxH guard, item truncation, _checked, arrowTip border
- [x] Popover — section comment, JSDoc on compound export, per-member docs
- [x] Spinner
- [x] Tabs — `py` content padding, `_disabled` grayscale filter
- [x] Text — `cls` → `styles`, `cx()`, JSDoc
- [x] Toast — closeTrigger absolute position, root column flex, actionTrigger button chrome, section comment + JSDoc on compound
- [x] Tooltip — section comment, JSDoc on compound export, per-member docs

### `forms/`

- [x] Checkbox
- [x] FieldBox — `_disabled` grayscale on root
- [x] InputField — `fontFamily: inherit`, `lineHeight`, `minWidth: 0`
- [x] InputNumber — `errorText` slot, `isolation: isolate`, stepper `_focusVisible`
- [x] Label — `lineHeight` from Field.css, `cx()`, JSDoc
- [x] RadioGroup — section comment, JSDoc with @example, per-member docs
- [x] Slider — `createStyleContext` wiring, Ark CSS spec, vertical orientation, touch thumb sizing, marker `::before` ticks; `SliderDS` wrapper, `description`/`errorText` slots, section comments
- [x] Select — Ark CSS spec (scale animation, maxH guard, itemText truncation, itemGroup spacing, indicator layout, clearTrigger layout)
- [x] SelectDefault — `cx()`, JSDoc, multi-select (`multiple` prop, discriminated-union types)
- [x] SelectSearchable — `cls` → `styles`, `cx()`, `css()`, JSDoc, recipe content/item/itemIndicator aligned with selectRecipe
- [x] TagsInput — NEW component; `sva` recipe, `createStyleContext` compound, `TagsInputDS` wrapper, `description`/`errorText` slots, section comments
- [x] Switch

---

## Phase 2 — Pattern normalization (2026-03-24)

**Goal:** ALL SVA compounds → Pattern B: `createStyleContext` compound + `*DS` `forwardRef` wrapper.
**Reference:** `Popover` / `Tooltip` for compound structure; `Switch` / `Checkbox` for DS wrapper.

Per-component checklist (apply to every item below):

- `// ── Compound (createStyleContext) ─────` section comment present
- JSDoc directly above `export const`, not top-of-file
- All members inline in object literal (no named intermediate `const` variables)
- `RootProvider` exported in compound where Ark supports it
- `*DS` wrapper: `forwardRef`, recipe called directly, slot classes via `cx()`, normalized handlers
- `*DSClassNames` interface + `*DSProps` type in component `.tsx` (not a separate `.types.ts`)
- Handler signatures: all details props destructured, DS naming (`onChange` / `onOpenChange`)
- `dist/` built and committed

### Structural fixes (compound only — no wrapper yet)

- [ ] Tabs — named intermediate consts → inline members; JSDoc move from top-of-file to above `export const`; add section comment
- [ ] Menu — remove duplicate top-of-file JSDoc; single block above `export const`; add section comment
- [ ] Select — same fixes as Menu (duplicate JSDoc, missing section comment)
- [ ] RadioGroup — verify structure matches Popover/Tooltip pattern (likely already correct)

### DS wrappers to add

- [ ] DialogDS
- [ ] MenuDS
- [ ] PopoverDS
- [ ] TabsDS
- [ ] TooltipDS
- [ ] RadioGroupDS

### Handler updates on existing DS wrappers

- [ ] SliderDS — `onChange(value: number[])` (was scalar `number`); add `onChangeEnd`, `onFocusChange`
- [ ] InputNumber — `onChange(value: string, valueAsNumber: number)` (was `number | null`); add `onValueCommit`, `onValueInvalid`
- [ ] TagsInputDS — add `onInputValueChange`, `onHighlightChange`, `onValueInvalid`
- [ ] SelectDefault / SelectSearchable — add `onHighlightChange`, `onSelect`, `onOpenChange`

---

## Phase 3 — New component builds (2026-03-24)

Each has a CSS spec in `src/ark-reference/css/`. Build checklist (per component):

- `sva` recipe + `createStyleContext` compound + `*DS` wrapper (Pattern B from the start)
- Ark reference CSS fully translated into Panda tokens + structural `sva` base styles
- JSDoc `@example` on compound and DS wrapper
- Exported from correct sub-path (`/components` or `/forms`)
- `COMPONENTS_LIST.md` updated (handler signatures confirmed)
- `dist/` built and committed

### `forms/`

- [ ] Accordion — `onChange(value: string[])`, `onFocusChange`
- [ ] Combobox — `onChange(value[], items[])`, `onInputValueChange`, `onHighlightChange`, `onSelect`, `onOpenChange`
- [ ] DatePicker — `onChange(value: DateValue[], valueAsString: string[])`, `onOpenChange`, `onViewChange`
- [ ] Editable — `onChange(value: string)`, `onValueCommit`, `onValueRevert`
- [ ] Listbox — `onChange(value[], items[])`, `onHighlightChange`, `onSelect`
- [ ] Pagination — `onPageChange(page, pageSize)`, `onPageSizeChange`
- [ ] PasswordInput — `onChange(value: string)`
- [ ] SegmentGroup — `onChange(value: string)`
- [ ] Toggle — `onChange(pressed: boolean)`

### `components/`

- [ ] ScrollArea — `onScrollPositionChange(x, y)` (no `*DS` wrapper needed)
