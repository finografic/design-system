import { listboxRecipe } from "./listbox.recipe.js";
import { forwardRef, useMemo } from "react";
import { cx } from "@styled-system/css";
import { jsx, jsxs } from "react/jsx-runtime";
import { Listbox, createListCollection as createListCollection$1 } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/forms/listbox/listbox.tsx
const { withProvider, withContext } = createStyleContext(listboxRecipe);
/**
* Styled Ark **Listbox** compound — each part is wired to `listboxRecipe` via context.
*
* An always-visible, keyboard-navigable list of selectable options. Ark handles all a11y:
* `listbox` role, roving focus (`_highlighted`), `aria-selected` on chosen items.
* Unlike Select/Combobox, the list is never hidden in a dropdown.
*
* @example
* ```tsx
* import { Listbox as ArkListbox, createListCollection } from '@ark-ui/react';
* import { Listbox } from '@finografic/design-system/forms';
*
* const collection = createListCollection({ items: [
*   { value: 'en', label: 'English' },
*   { value: 'es', label: 'Spanish' },
* ]});
*
* <Listbox.Root collection={collection} size="md">
*   <Listbox.Label>Language</Listbox.Label>
*   <Listbox.Content>
*     <Listbox.ItemGroup>
*       <ArkListbox.Items>
*         {(item) => (
*           <Listbox.Item key={item.value} item={item}>
*             <Listbox.ItemText>{item.label}</Listbox.ItemText>
*             <Listbox.ItemIndicator>✓</Listbox.ItemIndicator>
*           </Listbox.Item>
*         )}
*       </ArkListbox.Items>
*     </Listbox.ItemGroup>
*   </Listbox.Content>
* </Listbox.Root>
* ```
*/
const Listbox$1 = {
	Root: withProvider(Listbox.Root, "root"),
	RootProvider: withProvider(Listbox.RootProvider, "root"),
	Label: withContext(Listbox.Label, "label"),
	Content: withContext(Listbox.Content, "content"),
	Item: withContext(Listbox.Item, "item"),
	ItemText: withContext(Listbox.ItemText, "itemText"),
	ItemIndicator: withContext(Listbox.ItemIndicator, "itemIndicator"),
	ItemGroup: withContext(Listbox.ItemGroup, "itemGroup"),
	ItemGroupLabel: withContext(Listbox.ItemGroupLabel, "itemGroupLabel"),
	Context: Listbox.Context,
	ItemContext: Listbox.ItemContext
};
/**
* Design-system convenience listbox — renders a flat list of selectable items.
* **`Listbox`** stays the styled compound for full composition; **`ListboxDS`** =
* packaged DS API with normalized handlers.
*
* @example
* ```tsx
* import { ListboxDS } from '@finografic/design-system/forms';
*
* <ListboxDS
*   label="Language"
*   items={[
*     { value: 'en', label: 'English' },
*     { value: 'es', label: 'Spanish' },
*   ]}
*   onChange={(value, items) => setLanguages(value)}
* />
* ```
*/
const ListboxDS = forwardRef(({ items, value, defaultValue, multiple, onChange, onHighlightChange, onSelect, label, size = "md", classNames = {} }, ref) => {
	const styles = listboxRecipe({ size });
	const collection = useMemo(() => createListCollection$1({ items }), [JSON.stringify(items)]);
	return /* @__PURE__ */ jsxs(Listbox.Root, {
		ref,
		collection,
		value,
		defaultValue,
		selectionMode: multiple ? "multiple" : "single",
		onValueChange: ({ value: v, items: its }) => onChange?.(v, its),
		onHighlightChange: ({ highlightedValue, highlightedItem }) => onHighlightChange?.(highlightedValue, highlightedItem),
		onSelect: ({ value: v }) => {
			const item = items.find((i) => i.value === v);
			if (item) onSelect?.(v, item);
		},
		className: cx(styles.root, classNames.root),
		children: [label && /* @__PURE__ */ jsx(Listbox.Label, {
			className: cx(styles.label, classNames.label),
			children: label
		}), /* @__PURE__ */ jsx(Listbox.Content, {
			className: cx(styles.content, classNames.content),
			children: /* @__PURE__ */ jsx(Listbox.ItemGroup, {
				className: cx(styles.itemGroup),
				children: items.map((item) => /* @__PURE__ */ jsxs(Listbox.Item, {
					item,
					className: cx(styles.item, classNames.item),
					children: [/* @__PURE__ */ jsx(Listbox.ItemText, {
						className: cx(styles.itemText, classNames.itemText),
						children: item.label
					}), /* @__PURE__ */ jsx(Listbox.ItemIndicator, {
						className: cx(styles.itemIndicator, classNames.itemIndicator),
						children: "✓"
					})]
				}, item.value))
			})
		})]
	});
});
ListboxDS.displayName = "ListboxDS";
//#endregion
export { Listbox$1 as Listbox, ListboxDS, createListCollection$1 as createListCollection };

//# sourceMappingURL=listbox.js.map