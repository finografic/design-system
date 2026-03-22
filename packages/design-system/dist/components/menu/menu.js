import { menuRecipe } from "./menu.recipe.js";
import { Menu } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/components/menu/menu.tsx
/**
* Menu Component
*
* Styled wrapper around Ark UI Menu using `createStyleContext`.
* Ark handles all a11y: menu/menuitem roles, keyboard navigation,
* arrow keys, Home/End, typeahead, Escape to close.
*
* Recipe variant props are accepted directly on `Menu.Root` —
* no manual recipe call or className threading needed.
*
* Usage:
* ```tsx
* import { Menu } from '@workspace/design-system/components';
*
* <Menu.Root>
*   <Menu.Trigger asChild>
*     <button>Options</button>
*   </Menu.Trigger>
*   <Menu.Positioner>
*     <Menu.Content>
*       <Menu.Item value="edit">
*         <Menu.ItemText>Edit</Menu.ItemText>
*       </Menu.Item>
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