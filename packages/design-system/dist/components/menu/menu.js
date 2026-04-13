import { menuRecipe } from "./menu.recipe.js";
import { Fragment, forwardRef } from "react";
import { cx } from "@styled-system/css";
import { jsx, jsxs } from "react/jsx-runtime";
import { Menu } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/components/menu/menu.tsx
const { withProvider, withContext } = createStyleContext(menuRecipe);
/**
* Styled Ark **Menu** compound — each part is wired to `menuRecipe` via context.
*
* Ark handles all a11y: `menu` / `menuitem` roles, keyboard navigation (arrows, Home/End, typeahead), and
* Escape to close. Variant props go on **`Menu.Root`**.
*
* **`Menu.Trigger`** is unstyled — compose it with `rootTriggerRecipe` or `buttonRecipe` on the consumer side
* (or use `asChild` with your own element).
*
* @example
*   ```tsx
*   import { Menu } from '@finografic/design-system/components';
*
*   <Menu.Root>
*     <Menu.Trigger asChild>
*       <button>Options</button>
*     </Menu.Trigger>
*     <Menu.Positioner>
*       <Menu.Content>
*         <Menu.ItemGroup>
*           <Menu.ItemGroupLabel>Actions</Menu.ItemGroupLabel>
*           <Menu.Item value="edit">
*             <Menu.ItemText>Edit</Menu.ItemText>
*           </Menu.Item>
*           <Menu.Item value="delete">
*             <Menu.ItemText>Delete</Menu.ItemText>
*           </Menu.Item>
*         </Menu.ItemGroup>
*         <Menu.Separator />
*         <Menu.Item value="archive">
*           <Menu.ItemText>Archive</Menu.ItemText>
*         </Menu.Item>
*       </Menu.Content>
*     </Menu.Positioner>
*   </Menu.Root>;
*   ```;
*/
const Menu$1 = {
	Root: withProvider(Menu.Root, "root"),
	RootProvider: withProvider(Menu.RootProvider, "root"),
	Positioner: withContext(Menu.Positioner, "positioner"),
	Content: withContext(Menu.Content, "content"),
	Separator: withContext(Menu.Separator, "separator"),
	Item: withContext(Menu.Item, "item"),
	ItemText: withContext(Menu.ItemText, "itemText"),
	ItemIndicator: withContext(Menu.ItemIndicator, "itemIndicator"),
	ItemGroup: withContext(Menu.ItemGroup, "itemGroup"),
	ItemGroupLabel: withContext(Menu.ItemGroupLabel, "itemGroupLabel"),
	CheckboxItem: withContext(Menu.CheckboxItem, "item"),
	RadioItem: withContext(Menu.RadioItem, "item"),
	RadioItemGroup: withContext(Menu.RadioItemGroup, "itemGroup"),
	Arrow: withContext(Menu.Arrow, "arrow"),
	ArrowTip: withContext(Menu.ArrowTip, "arrowTip"),
	Indicator: withContext(Menu.Indicator, "indicator"),
	Trigger: Menu.Trigger,
	ContextTrigger: Menu.ContextTrigger,
	Context: Menu.Context,
	ItemContext: Menu.ItemContext
};
/**
* Design-system convenience menu — pass a trigger + items array for the common case. **`Menu`** stays the
* styled compound for full composition; **`MenuDS`** = packaged DS API with normalized handlers
* (`onSelect(value)`, `onOpenChange(open)`).
*
* @example
*   Flat items
*   ```tsx
*   import { MenuDS } from '@finografic/design-system/components';
*   import { Button } from '@finografic/design-system/components';
*
*   <MenuDS
*   trigger={<Button variant="outline">Options</Button>}
*   items={[
*   { value: 'edit', label: 'Edit' },
*   { value: 'duplicate', label: 'Duplicate' },
*   { value: 'delete', label: 'Delete' },
*   ]}
*   onSelect={(value) => handleAction(value)}
*   />
*   ```
*
* @example
*   Grouped items
*   ```tsx
*   <MenuDS
*   trigger={<Button>Options</Button>}
*   groups={[
*   { label: 'Actions', items: [{ value: 'edit', label: 'Edit' }] },
*   { items: [{ value: 'delete', label: 'Delete' }] },
*   ]}
*   onSelect={(value) => handleAction(value)}
*   />
*   ```
*/
const MenuDS = forwardRef(({ trigger, items, groups, open, onOpenChange, onSelect, onHighlightChange, classNames = {} }, ref) => {
	const styles = menuRecipe();
	const resolvedGroups = groups ?? (items ? [{ items }] : []);
	return /* @__PURE__ */ jsxs(Menu.Root, {
		open,
		onOpenChange: ({ open: o }) => onOpenChange?.(o),
		onSelect: ({ value }) => onSelect?.(value),
		onHighlightChange: ({ highlightedValue }) => onHighlightChange?.(highlightedValue),
		children: [/* @__PURE__ */ jsx(Menu.Trigger, {
			ref,
			asChild: true,
			children: trigger
		}), /* @__PURE__ */ jsx(Menu.Positioner, {
			className: classNames.positioner,
			children: /* @__PURE__ */ jsx(Menu.Content, {
				className: cx(styles.content, classNames.content),
				children: resolvedGroups.map((group, i) => /* @__PURE__ */ jsxs(Fragment, { children: [i > 0 && /* @__PURE__ */ jsx(Menu.Separator, { className: cx(styles.separator, classNames.separator) }), /* @__PURE__ */ jsxs(Menu.ItemGroup, {
					className: cx(styles.itemGroup, classNames.itemGroup),
					children: [group.label && /* @__PURE__ */ jsx(Menu.ItemGroupLabel, {
						className: cx(styles.itemGroupLabel, classNames.itemGroupLabel),
						children: group.label
					}), group.items.map((item) => /* @__PURE__ */ jsxs(Menu.Item, {
						value: item.value,
						disabled: item.disabled,
						className: cx(styles.item, classNames.item),
						children: [item.icon, /* @__PURE__ */ jsx(Menu.ItemText, {
							className: cx(styles.itemText, classNames.itemText),
							children: item.label
						})]
					}, item.value))]
				})] }, i))
			})
		})]
	});
});
MenuDS.displayName = "MenuDS";
//#endregion
export { Menu$1 as Menu, MenuDS };

//# sourceMappingURL=menu.js.map