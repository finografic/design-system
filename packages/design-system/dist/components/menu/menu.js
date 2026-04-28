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
	/** Root — open state, event handlers (`onSelect`, `onOpenChange`), and recipe variants. */
	Root: withProvider(Menu.Root, "root"),
	/** Root with external machine state from `useMenu`. */
	RootProvider: withProvider(Menu.RootProvider, "root"),
	/** Floating positioner — sets z-index and anchors the panel. */
	Positioner: withContext(Menu.Positioner, "positioner"),
	/** Menu panel — the scrollable list container. */
	Content: withContext(Menu.Content, "content"),
	/** Horizontal rule between sections. */
	Separator: withContext(Menu.Separator, "separator"),
	/** A single action row; also used for `CheckboxItem` and `RadioItem`. */
	Item: withContext(Menu.Item, "item"),
	/** Text label inside an item — truncates on overflow. */
	ItemText: withContext(Menu.ItemText, "itemText"),
	/** Check/radio tick shown when the item is selected. */
	ItemIndicator: withContext(Menu.ItemIndicator, "itemIndicator"),
	/** Wraps a set of related items; adds vertical spacing between groups. */
	ItemGroup: withContext(Menu.ItemGroup, "itemGroup"),
	/** Section heading for an item group. */
	ItemGroupLabel: withContext(Menu.ItemGroupLabel, "itemGroupLabel"),
	/** Checkbox-style toggleable item — shares the `item` slot. */
	CheckboxItem: withContext(Menu.CheckboxItem, "item"),
	/** Radio-style item (exclusive within a group) — shares the `item` slot. */
	RadioItem: withContext(Menu.RadioItem, "item"),
	/** Radio item group — shares the `itemGroup` slot. */
	RadioItemGroup: withContext(Menu.RadioItemGroup, "itemGroup"),
	/** Arrow element for the floating panel (when `withArrow` is used). */
	Arrow: withContext(Menu.Arrow, "arrow"),
	/** The visible arrow tip; styled with a border to match the panel edge. */
	ArrowTip: withContext(Menu.ArrowTip, "arrowTip"),
	/** Open/close chevron indicator inside a trigger. */
	Indicator: withContext(Menu.Indicator, "indicator"),
	/** Unstyled trigger — style with `rootTriggerRecipe` or `buttonRecipe` on the consumer side. */
	Trigger: Menu.Trigger,
	/** Right-click context menu trigger — no recipe slot. */
	ContextTrigger: Menu.ContextTrigger,
	/** Render prop — exposes machine context to children. */
	Context: Menu.Context,
	/** Render prop — exposes per-item context inside `Item`. */
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