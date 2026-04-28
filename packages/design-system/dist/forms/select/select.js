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
* Ark handles all a11y: `listbox` / `option` roles, keyboard navigation (arrows, Home/End, typeahead), and
* Escape to close. Variant props go on **`Select.Root`**.
*
* **Multi-select:** pass `multiple` to `Select.Root`. Ark manages selection state; `Select.ItemIndicator`
* (check icon) shows for each selected item. `SelectDefault` also accepts `multiple` for a simpler
* options-array API.
*
* @example
*   ```tsx
*   import { Select, createListCollection } from '@finografic/design-system/forms';
*   import { CheckIcon, ChevronDownIcon } from '@finografic/icons';
*
*   const collection = createListCollection({
*     items: [
*       { value: 'en', label: 'English' },
*       { value: 'es', label: 'Spanish' },
*     ],
*   });
*
*   <Select.Root collection={collection} onValueChange={({ value, items }) => setValue(value)}>
*     <Select.Label>Language</Select.Label>
*     <Select.Control>
*       <Select.Trigger>
*         <Select.ValueText placeholder="Pick one…" />
*         <Select.Indicator>
*           <ChevronDownIcon aria-hidden />
*         </Select.Indicator>
*       </Select.Trigger>
*     </Select.Control>
*     <Select.Positioner>
*       <Select.Content>
*         <Select.List>
*           {collection.items.map((item) => (
*             <Select.Item key={item.value} item={item}>
*               <Select.ItemText>{item.label}</Select.ItemText>
*               <Select.ItemIndicator>
*                 <CheckIcon aria-hidden />
*               </Select.ItemIndicator>
*             </Select.Item>
*           ))}
*         </Select.List>
*       </Select.Content>
*     </Select.Positioner>
*     <Select.HiddenSelect />
*   </Select.Root>;
*   ```;
*/
const Select$1 = {
	/**
	* Root — collection, value state, event handlers, multi-select flag, and recipe variants. Defaults to
	* `positioning={{ strategy: 'fixed', sameWidth: true }}` so the dropdown escapes `overflow: hidden`
	* ancestors. Override via `positioning` prop if needed.
	*/
	Root: withProvider(SelectRootFixed, "root"),
	/** Root with external machine state from `useSelect`. */
	RootProvider: withProvider(Select.RootProvider, "root"),
	/** Text label above the trigger. */
	Label: withContext(Select.Label, "label"),
	/** Flex row wrapping the trigger and optional clear button. */
	Control: withContext(Select.Control, "control"),
	/** The button that opens the dropdown — shows selected value and chevron. */
	Trigger: withContext(Select.Trigger, "trigger"),
	/** Displays selected item label(s); truncates on overflow. */
	ValueText: withContext(Select.ValueText, "valueText"),
	/** Chevron icon wrapper; rotates 180° when open. */
	Indicator: withContext(Select.Indicator, "indicator"),
	/** Floating positioner — portalled into document.body to escape ancestor stacking contexts. */
	Positioner: withContext(ArkSelectPositionerPortal, "positioner"),
	/** Dropdown panel — scrollable list container with scale animation. */
	Content: withContext(Select.Content, "content"),
	/** Flex column wrapping all items and groups. */
	List: withContext(Select.List, "list"),
	/** A single selectable row; check icon appears via `ItemIndicator` when selected. */
	Item: withContext(Select.Item, "item"),
	/** Primary label inside an item — truncates on overflow. */
	ItemText: withContext(Select.ItemText, "itemText"),
	/** Check indicator shown when the item is selected. */
	ItemIndicator: withContext(Select.ItemIndicator, "itemIndicator"),
	/** Wraps a set of related items; adds vertical spacing between groups. */
	ItemGroup: withContext(Select.ItemGroup, "itemGroup"),
	/** Section heading for an item group. */
	ItemGroupLabel: withContext(Select.ItemGroupLabel, "itemGroupLabel"),
	/** Button to clear the current selection — renders inside `Control`. */
	ClearTrigger: withContext(Select.ClearTrigger, "clearTrigger"),
	/** Hidden native `<select>` for form integration — no recipe slot. */
	HiddenSelect: Select.HiddenSelect,
	/** Render prop — exposes machine context to children. */
	Context: Select.Context
};
//#endregion
export { Select$1 as Select, useListCollection };

//# sourceMappingURL=select.js.map