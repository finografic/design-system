import { popoverRecipe } from "./popover.recipe.js";
import { Popover } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/components/popover/popover.tsx
const { withRootProvider, withContext } = createStyleContext(popoverRecipe);
/**
* Styled Ark **Popover** compound — each part is wired to `popoverRecipe` via context.
*
* Ark handles all a11y: dialog role, optional focus trap,
* `aria-expanded`, `aria-controls`, Escape to close, click-outside to dismiss.
* Recipe variant props are accepted directly on `Popover.Root`.
*
* @example
* ```tsx
* import { Popover } from '@finografic/design-system/components';
*
* <Popover.Root>
*   <Popover.Trigger asChild>
*     <button>Open popover</button>
*   </Popover.Trigger>
*   <Popover.Positioner>
*     <Popover.Content>
*       <Popover.Arrow><Popover.ArrowTip /></Popover.Arrow>
*       <Popover.Title>Title</Popover.Title>
*       <Popover.Description>Some descriptive content.</Popover.Description>
*       <Popover.CloseTrigger asChild>
*         <button aria-label="Close" />
*       </Popover.CloseTrigger>
*     </Popover.Content>
*   </Popover.Positioner>
* </Popover.Root>
* ```
*/
const Popover$1 = {
	Root: withRootProvider(Popover.Root),
	RootProvider: withRootProvider(Popover.RootProvider),
	Trigger: withContext(Popover.Trigger, "trigger"),
	Anchor: Popover.Anchor,
	Positioner: withContext(Popover.Positioner, "positioner"),
	Content: withContext(Popover.Content, "content"),
	Title: withContext(Popover.Title, "title"),
	Description: withContext(Popover.Description, "description"),
	CloseTrigger: withContext(Popover.CloseTrigger, "closeTrigger"),
	Arrow: withContext(Popover.Arrow, "arrow"),
	ArrowTip: withContext(Popover.ArrowTip, "arrowTip"),
	Context: Popover.Context
};
//#endregion
export { Popover$1 as Popover };

//# sourceMappingURL=popover.js.map