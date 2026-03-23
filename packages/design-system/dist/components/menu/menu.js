import { menuRecipe } from "./menu.recipe.js";
import { Menu } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/components/menu/menu.tsx
/**
* Menu — styled Ark UI **Menu** compound wired to `menuRecipe` via `createStyleContext`.
*
* Ark handles all a11y: `menu` / `menuitem` roles, keyboard navigation (arrows,
* Home/End, typeahead), and Escape to close. Variant props go on **`Menu.Root`**.
*
* **`Menu.Trigger`** is unstyled — compose it with `rootTriggerRecipe` or `buttonRecipe`
* on the consumer side (or use `asChild` with your own element).
*
* @example
* ```tsx
* import { Menu } from '@finografic/design-system/components';
*
* <Menu.Root>
*   <Menu.Trigger asChild>
*     <button>Options</button>
*   </Menu.Trigger>
*   <Menu.Positioner>
*     <Menu.Content>
*       <Menu.ItemGroup>
*         <Menu.ItemGroupLabel>Actions</Menu.ItemGroupLabel>
*         <Menu.Item value="edit">
*           <Menu.ItemText>Edit</Menu.ItemText>
*         </Menu.Item>
*         <Menu.Item value="duplicate">
*           <Menu.ItemText>Duplicate</Menu.ItemText>
*         </Menu.Item>
*       </Menu.ItemGroup>
*       <Menu.Separator />
*       <Menu.Item value="delete">
*         <Menu.ItemText>Delete</Menu.ItemText>
*       </Menu.Item>
*     </Menu.Content>
*   </Menu.Positioner>
* </Menu.Root>
* ```
*/
const { withProvider, withContext } = createStyleContext(menuRecipe);
/**
* Styled Ark **Menu** compound — each part is wired to `menuRecipe` via context.
*
* Place `onSelect`, `onOpenChange`, and any variant props on **`Root`**.
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
//#endregion
export { Menu$1 as Menu };

//# sourceMappingURL=menu.js.map