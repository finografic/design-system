# DS Component Inventory

> Master reference for all built components and their handler conventions.

## Icon legend

| Icon | Meaning                                                                      |
| ---- | ---------------------------------------------------------------------------- |
| ✅   | Built and exported                                                           |
| 🔲   | DS convenience wrapper planned but not built                                 |
| —    | Not applicable (CVA components, or compound-only with no DS wrapper planned) |

---

## Patterns

| Pattern | Description                                                                            |
| ------- | -------------------------------------------------------------------------------------- |
| CVA     | Single-element `cva` recipe + `forwardRef`. No Ark. No DS wrapper.                     |
| SVA     | Multi-slot `sva` + `createStyleContext` compound + `*DS` `forwardRef` wrapper.         |
| Custom  | Hand-composed — wraps other DS components or Ark directly; no standard recipe pattern. |

---

## Built — `components/`

| Component     | Pattern | DS Wrapper        | `onChange` / primary handler           | Other DS handlers                                                     | Ark callback             |
| ------------- | ------- | ----------------- | -------------------------------------- | --------------------------------------------------------------------- | ------------------------ |
| Accordion     | SVA     | AccordionDS ✅    | `onChange(value: string[])`            | `onFocusChange(value: string \| null)`                                | `onValueChange`          |
| Badge         | CVA     | —                 | —                                      | —                                                                     | —                        |
| Button        | CVA     | —                 | —                                      | —                                                                     | —                        |
| Callout       | CVA     | —                 | —                                      | —                                                                     | —                        |
| Card          | CVA     | —                 | —                                      | —                                                                     | —                        |
| DataTable     | Custom  | —                 | —                                      | —                                                                     | —                        |
| Dialog        | SVA     | —                 | `onOpenChange(open: boolean)`          | `onEscapeKeyDown(e: KeyboardEvent)`, `onExitComplete()`               | `onOpenChange`           |
| DialogGeneric | Custom  | —                 | `onClose()`                            | —                                                                     | —                        |
| Menu          | SVA     | —                 | `onOpenChange(open: boolean)`          | `onSelect(value: string)`, `onHighlightChange(value: string \| null)` | `onOpenChange`           |
| Pagination    | SVA     | PaginationDS ✅   | `onPageChange(page, pageSize: number)` | `onPageSizeChange(pageSize: number)`                                  | `onPageChange`           |
| Popover       | SVA     | —                 | `onOpenChange(open: boolean)`          | `onExitComplete()`                                                    | `onOpenChange`           |
| ScrollArea    | SVA     | ScrollAreaDS ✅   | —                                      | `onScrollPositionChange(x: number, y: number)`                        | `onScrollPositionChange` |
| SegmentGroup  | SVA     | SegmentGroupDS ✅ | `onChange(value: string \| null)`      | —                                                                     | `onValueChange`          |
| Spinner       | CVA     | —                 | —                                      | —                                                                     | —                        |
| Tabs          | SVA     | TabsDS ✅         | `onChange(value: string)`              | `onFocusChange(focusedValue: string \| null)`                         | `onValueChange`          |
| Text          | CVA     | —                 | —                                      | —                                                                     | —                        |
| Toast         | SVA     | — (createToaster) | —                                      | —                                                                     | `createToaster` API      |
| Toggle        | SVA     | ToggleDS ✅       | `onChange(pressed: boolean)`           | —                                                                     | `onPressedChange`        |
| Tooltip       | SVA     | —                 | `onOpenChange(open: boolean)`          | `onExitComplete()`                                                    | `onOpenChange`           |
| TreeView      | SVA     | TreeViewDS ✅     | `onSelectionChange({ selectedValue })` | `onExpandedChange({ expandedValue })`                                 | `onSelectionChange`      |

---

## Built — `forms/`

| Component      | Pattern | DS Wrapper                            | `onChange` / primary handler                            | Other DS handlers                                                                                                      | Ark callback      |
| -------------- | ------- | ------------------------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Checkbox       | SVA     | CheckboxDS ✅                         | `onChange(checked: boolean \| 'indeterminate')`         | —                                                                                                                      | `onCheckedChange` |
| DatePicker     | SVA     | DatePickerDS ✅                       | `onChange(value: DateValue[], valueAsString: string[])` | `onOpenChange(open: boolean)`, `onViewChange(view: string)`                                                            | `onValueChange`   |
| Editable       | SVA     | EditableDS ✅                         | `onChange(value: string)`                               | `onValueCommit(value: string)`, `onValueRevert()`                                                                      | `onValueChange`   |
| FieldBox       | Custom  | —                                     | —                                                       | —                                                                                                                      | —                 |
| FileUpload     | SVA     | FileUploadDS ✅                       | `onChange({ acceptedFiles: File[] })`                   | —                                                                                                                      | `onFileChange`    |
| InputField     | SVA     | — (IS the wrapper)                    | `onChange(value: string)`                               | `onFocus()`, `onBlur()`                                                                                                | `onChange`        |
| InputNumber    | SVA     | — (IS the wrapper)                    | `onChange(value: string, valueAsNumber: number)`        | `onValueCommit(value, valueAsNumber)`, `onValueInvalid(reason: string)`                                                | `onValueChange`   |
| InputPassword  | SVA     | InputPasswordDS ✅                    | `onChange(value: string)`                               | `onBlur()`                                                                                                             | `onChange`        |
| Label          | CVA     | —                                     | —                                                       | —                                                                                                                      | —                 |
| Listbox        | SVA     | ListboxDS ✅                          | `onChange(value: string[], items: T[])`                 | `onHighlightChange(value: string \| null)`, `onSelect(value: string, item: T)`                                         | `onValueChange`   |
| RadioGroup     | SVA     | RadioGroupDS ✅                       | `onChange(value: string)`                               | —                                                                                                                      | `onValueChange`   |
| Select         | SVA     | SelectDefault ✅, SelectSearchable ✅ | `onChange(value: string[], items: T[])`                 | `onHighlightChange(value: string \| null, item: T \| null)`, `onSelect(value, item)`, `onOpenChange(open)`             | `onValueChange`   |
| SelectCombobox | SVA     | — (compound only)                     | —                                                       | —                                                                                                                      | —                 |
| Slider         | SVA     | SliderDS ✅                           | `onChange(value: number[])`                             | `onChangeEnd(value: number[])`, `onFocusChange(isFocused: boolean)`                                                    | `onValueChange`   |
| Switch         | SVA     | SwitchDS ✅                           | `onChange(checked: boolean)`                            | —                                                                                                                      | `onCheckedChange` |
| TagsInput      | SVA     | TagsInputDS ✅                        | `onChange(value: string[])`                             | `onInputValueChange(inputValue: string)`, `onHighlightChange(value: string \| null)`, `onValueInvalid(reason: string)` | `onValueChange`   |
| Textarea       | CVA     | —                                     | `onChange` (native)                                     | —                                                                                                                      | —                 |

---

## Handler notes

- **`RootProvider`** — available on all SVA compounds; export it from the compound object
  (`Component.RootProvider`) for consumers that need external machine state via `useTabs()`, `useMenu()`, etc.
- **Overlay interaction props** — `onFocusOutside`, `onInteractOutside`, `onPointerDownOutside` available on
  Dialog, Popover, Menu, Select, DatePicker, TagsInput. These receive Zag event objects (not DOM events) —
  pass through on `*DS` with their original Ark signatures.
- **`onEscapeKeyDown`** — Dialog, Popover, Menu. Receives a real `KeyboardEvent`; pass through as-is.
- **`onExitComplete`** — animation lifecycle hook; no detail object. Expose as `onExitComplete?(): void`.
- **`TreeViewDS.onSelectionChange`** — passes the raw Ark detail `{ selectedValue: string[] }` unchanged (not flattened). Same for `onExpandedChange({ expandedValue: string[] })`.
- **`FileUploadDS.onChange`** — passes `{ acceptedFiles: File[] }`. Rejected files are not surfaced on the DS wrapper; use the bare compound `FileUpload.Context` to access `rejectedFiles`.
- **`onChangeEnd` vs `onValueCommit`** — Slider has both live (`onChange`) and commit (`onChangeEnd`) variants.
  NumberInput uses `onValueCommit` (fires on blur/Enter); keep the Ark name.
- **`Toggle.onPressedChange`** — receives a bare `boolean`, not a detail object. DS: `onChange(pressed: boolean)`.
- **`onPageChange`** — Pagination; detail is `{ page, pageSize }`, expose as two args: `onPageChange(page, pageSize)`.
- **`Editable.multiline`** — `EditableDS` prop; when `true` renders `ArkEditable.Input asChild` wrapping a `<textarea>`.
  Ark v5 has no `Textarea` part; `asChild` bridges machine state onto the native element.
- **No DS wrapper** — Dialog, Menu, Popover, Tooltip are overlay-heavy compounds where the trigger and content
  are always custom. Consumers use the compound directly; `DialogGeneric` covers the common config-driven modal pattern.
