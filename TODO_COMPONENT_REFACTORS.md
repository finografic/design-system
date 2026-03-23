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
- [ ] Callout
- [ ] Card
- [ ] DataTable
- [ ] Dialog
- [ ] GenericDialog
- [x] Menu — scale animation, maxH guard, item truncation, _checked, arrowTip border
- [ ] Popover
- [x] Spinner
- [x] Tabs — `py` content padding, `_disabled` grayscale filter
- [ ] Text
- [ ] Toast
- [ ] Tooltip

## `forms/`

- [x] Checkbox
- [x] FieldBox — `_disabled` grayscale on root
- [x] InputField — `fontFamily: inherit`, `lineHeight`, `minWidth: 0`
- [x] InputNumber — `errorText` slot, `isolation: isolate`, stepper `_focusVisible`
- [x] Label — `lineHeight` from Field.css, `cx()`, JSDoc
- [ ] RadioGroup
- [x] Slider — `createStyleContext` wiring, Ark CSS spec, vertical orientation, touch thumb sizing, marker `::before` ticks; `SliderDS` wrapper, `description`/`errorText` slots, section comments
- [x] Select — Ark CSS spec (scale animation, maxH guard, itemText truncation, itemGroup spacing, indicator layout, clearTrigger layout)
- [x] SelectDefault — `cx()`, JSDoc, multi-select (`multiple` prop, discriminated-union types)
- [ ] SelectSearchable
- [x] TagsInput — NEW component; `sva` recipe, `createStyleContext` compound, `TagsInputDS` wrapper, `description`/`errorText` slots, section comments
- [x] Switch
