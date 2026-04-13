import { popoverRecipe } from "./popover.recipe.js";
import { forwardRef } from "react";
import { cx } from "@styled-system/css";
import { jsx, jsxs } from "react/jsx-runtime";
import { Popover } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/components/popover/popover.tsx
const { withRootProvider, withContext } = createStyleContext(popoverRecipe);
/**
* Styled Ark **Popover** compound — each part is wired to `popoverRecipe` via context.
*
* Ark handles all a11y: dialog role, optional focus trap, `aria-expanded`, `aria-controls`, Escape to close,
* click-outside to dismiss. Recipe variant props are accepted directly on `Popover.Root`.
*
* @example
*   ```tsx
*   import { Popover } from '@finografic/design-system/components';
*
*   <Popover.Root>
*     <Popover.Trigger asChild>
*       <button>Open popover</button>
*     </Popover.Trigger>
*     <Popover.Positioner>
*       <Popover.Content>
*         <Popover.Arrow>
*           <Popover.ArrowTip />
*         </Popover.Arrow>
*         <Popover.Title>Title</Popover.Title>
*         <Popover.Description>Some descriptive content.</Popover.Description>
*         <Popover.CloseTrigger asChild>
*           <button aria-label="Close" />
*         </Popover.CloseTrigger>
*       </Popover.Content>
*     </Popover.Positioner>
*   </Popover.Root>;
*   ```;
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
/**
* Design-system convenience popover — pass a `trigger` and content for the common case. **`Popover`** stays
* the styled compound; **`PopoverDS`** = packaged DS API with normalized `onOpenChange(open: boolean)`.
*
* @example
*   ```tsx
*   import { PopoverDS } from '@finografic/design-system/components';
*
*   <PopoverDS
*     trigger={<Button variant="outline">Open</Button>}
*     title="Settings"
*     description="Adjust your preferences below."
*     onOpenChange={(open) => console.log(open)}
*   >
*     <input type="text" />
*   </PopoverDS>;
*   ```;
*/
const PopoverDS = forwardRef(({ trigger, title, description, children, open, onOpenChange, closeButton = false, arrow = false, classNames = {} }, ref) => {
	const styles = popoverRecipe();
	return /* @__PURE__ */ jsxs(Popover.Root, {
		open,
		onOpenChange: ({ open: o }) => onOpenChange?.(o),
		children: [/* @__PURE__ */ jsx(Popover.Trigger, {
			ref,
			asChild: true,
			children: trigger
		}), /* @__PURE__ */ jsx(Popover.Positioner, {
			className: classNames.positioner,
			children: /* @__PURE__ */ jsxs(Popover.Content, {
				className: cx(styles.content, classNames.content),
				children: [
					arrow && /* @__PURE__ */ jsx(Popover.Arrow, {
						className: classNames.arrow,
						children: /* @__PURE__ */ jsx(Popover.ArrowTip, { className: classNames.arrowTip })
					}),
					closeButton && /* @__PURE__ */ jsx(Popover.CloseTrigger, {
						className: cx(styles.closeTrigger, classNames.closeTrigger),
						children: "✕"
					}),
					title && /* @__PURE__ */ jsx(Popover.Title, {
						className: cx(styles.title, classNames.title),
						children: title
					}),
					description && /* @__PURE__ */ jsx(Popover.Description, {
						className: cx(styles.description, classNames.description),
						children: description
					}),
					children
				]
			})
		})]
	});
});
PopoverDS.displayName = "PopoverDS";
//#endregion
export { Popover$1 as Popover, PopoverDS };

//# sourceMappingURL=popover.js.map