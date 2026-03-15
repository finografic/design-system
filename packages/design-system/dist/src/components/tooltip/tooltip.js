import { tooltipRecipe } from "./tooltip.recipe.js";
import { Tooltip } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/components/tooltip/tooltip.tsx
/**
* Tooltip Component
*
* Styled wrapper around Ark UI Tooltip using `createStyleContext`.
* Ark handles all a11y: tooltip role, aria-describedby,
* hover/focus show/hide, configurable open/close delay.
*
* Recipe variant props are accepted directly on `Tooltip.Root` —
* no manual recipe call or className threading needed.
*
* Usage:
* ```tsx
* import { Tooltip } from '@workspace/design-system/components';
*
* <Tooltip.Root openDelay={300} closeDelay={100}>
*   <Tooltip.Trigger asChild>
*     <button aria-label="Help"><InfoIcon /></button>
*   </Tooltip.Trigger>
*   <Tooltip.Positioner>
*     <Tooltip.Content>
*       <Tooltip.Arrow><Tooltip.ArrowTip /></Tooltip.Arrow>
*       Helpful hint text
*     </Tooltip.Content>
*   </Tooltip.Positioner>
* </Tooltip.Root>
* ```
*/
const { withRootProvider, withContext } = createStyleContext(tooltipRecipe);
const Tooltip$1 = {
	Root: withRootProvider(Tooltip.Root),
	RootProvider: withRootProvider(Tooltip.RootProvider),
	Trigger: withContext(Tooltip.Trigger, "trigger"),
	Positioner: withContext(Tooltip.Positioner, "positioner"),
	Content: withContext(Tooltip.Content, "content"),
	Arrow: withContext(Tooltip.Arrow, "arrow"),
	ArrowTip: withContext(Tooltip.ArrowTip, "arrowTip"),
	Context: Tooltip.Context
};
//#endregion
export { Tooltip$1 as Tooltip };

//# sourceMappingURL=tooltip.js.map