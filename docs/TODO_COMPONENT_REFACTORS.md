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

## `components/`

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

## `forms/`

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
