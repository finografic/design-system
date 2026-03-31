import { selectRecipe } from "./select.recipe.js";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
import { Portal, Select, useListCollection } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/forms/select/select.tsx
const SelectRootFixed = forwardRef(({ positioning, ...props }, ref) => /* @__PURE__ */ jsx(Select.Root, {
	ref,
	positioning: {
		strategy: "fixed",
		sameWidth: true,
		...positioning
	},
	...props
}));
SelectRootFixed.displayName = "Select.Root";
const ArkSelectPositionerPortal = forwardRef((props, ref) => /* @__PURE__ */ jsx(Portal, { children: /* @__PURE__ */ jsx(Select.Positioner, {
	ref,
	...props
}) }));
ArkSelectPositionerPortal.displayName = "Select.Positioner";
const { withProvider, withContext } = createStyleContext(selectRecipe);
/**
* Styled Ark **Select** compound — each part is wired to `selectRecipe` via context.
*
* Ark handles all a11y: `listbox` / `option` roles, keyboard navigation (arrows,
* Home/End, typeahead), and Escape to close. Variant props go on **`Select.Root`**.
*
* **Multi-select:** pass `multiple` to `Select.Root`. Ark manages selection state;
* `Select.ItemIndicator` (check icon) shows for each selected item. `SelectDefault`
* also accepts `multiple` for a simpler options-array API.
*
* @example
* ```tsx
* import { Select, createListCollection } from '@finografic/design-system/forms';
* import { CheckIcon, ChevronDownIcon } from '@finografic/icons';
*
* const collection = createListCollection({
*   items: [
*     { value: 'en', label: 'English' },
*     { value: 'es', label: 'Spanish' },
*   ],
* });
*
* <Select.Root collection={collection} onValueChange={({ value, items }) => setValue(value)}>
*   <Select.Label>Language</Select.Label>
*   <Select.Control>
*     <Select.Trigger>
*       <Select.ValueText placeholder="Pick one…" />
*       <Select.Indicator><ChevronDownIcon aria-hidden /></Select.Indicator>
*     </Select.Trigger>
*   </Select.Control>
*   <Select.Positioner>
*     <Select.Content>
*       <Select.List>
*         {collection.items.map((item) => (
*           <Select.Item key={item.value} item={item}>
*             <Select.ItemText>{item.label}</Select.ItemText>
*             <Select.ItemIndicator><CheckIcon aria-hidden /></Select.ItemIndicator>
*           </Select.Item>
*         ))}
*       </Select.List>
*     </Select.Content>
*   </Select.Positioner>
*   <Select.HiddenSelect />
* </Select.Root>
* ```
*/
const Select$1 = {
	Root: withProvider(SelectRootFixed, "root"),
	RootProvider: withProvider(Select.RootProvider, "root"),
	Label: withContext(Select.Label, "label"),
	Control: withContext(Select.Control, "control"),
	Trigger: withContext(Select.Trigger, "trigger"),
	ValueText: withContext(Select.ValueText, "valueText"),
	Indicator: withContext(Select.Indicator, "indicator"),
	Positioner: withContext(ArkSelectPositionerPortal, "positioner"),
	Content: withContext(Select.Content, "content"),
	List: withContext(Select.List, "list"),
	Item: withContext(Select.Item, "item"),
	ItemText: withContext(Select.ItemText, "itemText"),
	ItemIndicator: withContext(Select.ItemIndicator, "itemIndicator"),
	ItemGroup: withContext(Select.ItemGroup, "itemGroup"),
	ItemGroupLabel: withContext(Select.ItemGroupLabel, "itemGroupLabel"),
	ClearTrigger: withContext(Select.ClearTrigger, "clearTrigger"),
	HiddenSelect: Select.HiddenSelect,
	Context: Select.Context
};
//#endregion
export { Select$1 as Select, useListCollection };

//# sourceMappingURL=select.js.map