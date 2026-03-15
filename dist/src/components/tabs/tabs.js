import { tabsRecipe } from "./tabs.recipe.js";
import { Tabs } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/components/tabs/tabs.tsx
/**
* Tabs Component
*
* Styled wrapper around Ark UI Tabs using `createStyleContext`.
* Ark handles all a11y: tablist/tab/tabpanel roles,
* arrow-key navigation, aria-selected, aria-controls.
*
* Recipe variant props (`variant`, `size`) are accepted directly on `Tabs.Root` —
* no manual recipe call or className threading needed.
*
* Usage:
* ```tsx
* import { Tabs } from '@workspace/design-system/components';
*
* <Tabs.Root defaultValue="overview" variant="line" size="md">
*   <Tabs.List>
*     <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
*     <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
*     <Tabs.Indicator />
*   </Tabs.List>
*   <Tabs.Content value="overview">…</Tabs.Content>
*   <Tabs.Content value="settings">…</Tabs.Content>
* </Tabs.Root>
* ```
*/
const { withProvider, withContext } = createStyleContext(tabsRecipe);
const Tabs$1 = {
	Root: withProvider(Tabs.Root, "root"),
	RootProvider: withProvider(Tabs.RootProvider, "root"),
	List: withContext(Tabs.List, "list"),
	Trigger: withContext(Tabs.Trigger, "trigger"),
	Content: withContext(Tabs.Content, "content"),
	Indicator: withContext(Tabs.Indicator, "indicator"),
	Context: Tabs.Context
};
//#endregion
export { Tabs$1 as Tabs };

//# sourceMappingURL=tabs.js.map