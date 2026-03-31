import { selectComboboxRecipe } from "./select-combobox.recipe.js";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
import { Combobox, Portal } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/forms/select-combobox/select-combobox.tsx
const { withProvider, withContext } = createStyleContext(selectComboboxRecipe);
/** Plain div used for the Indicators slot (not an Ark part). */
const Div = forwardRef((props, ref) => /* @__PURE__ */ jsx("div", {
	...props,
	ref
}));
Div.displayName = "SelectComboboxIndicatorsDiv";
const ArkComboboxPositionerPortal = forwardRef((props, ref) => /* @__PURE__ */ jsx(Portal, { children: /* @__PURE__ */ jsx(Combobox.Positioner, {
	ref,
	...props
}) }));
ArkComboboxPositionerPortal.displayName = "SelectCombobox.Positioner";
/**
* Styled Ark **Combobox** compound — low-level primitive for building searchable selects.
* Each part is wired to `selectComboboxRecipe` via context.
*
* Use `createListCollection` from `@ark-ui/react` to create the collection for `Root`.
* Ark handles all a11y: `combobox` role, `listbox` popup, keyboard navigation (arrows,
* Enter, Escape), and ARIA attributes.
*
* **This is the low-level primitive** — for the high-level searchable select with filtering
* use `SelectSearchable` from `@finografic/design-system/forms`.
*
* @example
* ```tsx
* import { Combobox as ArkCombobox, createListCollection } from '@ark-ui/react';
* import { SelectCombobox } from '@finografic/design-system/forms';
*
* const collection = createListCollection({ items: [
*   { value: 'en', label: 'English' },
*   { value: 'es', label: 'Spanish' },
* ]});
*
* <SelectCombobox.Root collection={collection} size="md">
*   <SelectCombobox.Label>Language</SelectCombobox.Label>
*   <SelectCombobox.Control>
*     <SelectCombobox.Input placeholder="Search…" />
*     <SelectCombobox.Indicators>
*       <SelectCombobox.ClearTrigger>✕</SelectCombobox.ClearTrigger>
*       <SelectCombobox.Trigger>▾</SelectCombobox.Trigger>
*     </SelectCombobox.Indicators>
*   </SelectCombobox.Control>
*   <SelectCombobox.Positioner>
*     <SelectCombobox.Content>
*       <SelectCombobox.ItemGroup>
*         <ArkCombobox.Items>
*           {(item) => (
*             <SelectCombobox.Item key={item.value} item={item}>
*               <SelectCombobox.ItemText>{item.label}</SelectCombobox.ItemText>
*               <SelectCombobox.ItemIndicator>✓</SelectCombobox.ItemIndicator>
*             </SelectCombobox.Item>
*           )}
*         </ArkCombobox.Items>
*       </SelectCombobox.ItemGroup>
*     </SelectCombobox.Content>
*   </SelectCombobox.Positioner>
* </SelectCombobox.Root>
* ```
*/
const SelectCombobox = {
	Root: withProvider(Combobox.Root, "root"),
	RootProvider: withProvider(Combobox.RootProvider, "root"),
	Label: withContext(Combobox.Label, "label"),
	Control: withContext(Combobox.Control, "control"),
	Input: withContext(Combobox.Input, "input"),
	Indicators: withContext(Div, "indicators"),
	Trigger: withContext(Combobox.Trigger, "trigger"),
	ClearTrigger: withContext(Combobox.ClearTrigger, "clearTrigger"),
	Positioner: withContext(ArkComboboxPositionerPortal, "positioner"),
	Content: withContext(Combobox.Content, "content"),
	ItemGroup: withContext(Combobox.ItemGroup, "itemGroup"),
	ItemGroupLabel: withContext(Combobox.ItemGroupLabel, "itemGroupLabel"),
	Item: withContext(Combobox.Item, "item"),
	ItemText: withContext(Combobox.ItemText, "itemText"),
	ItemIndicator: withContext(Combobox.ItemIndicator, "itemIndicator"),
	Context: Combobox.Context
};
//#endregion
export { SelectCombobox };

//# sourceMappingURL=select-combobox.js.map