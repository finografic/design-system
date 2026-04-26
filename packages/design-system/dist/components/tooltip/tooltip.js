import { tooltipRecipe } from "./tooltip.recipe.js";
import { forwardRef } from "react";
import { cx } from "@styled-system/css";
import { jsx, jsxs } from "react/jsx-runtime";
import { Tooltip } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/components/tooltip/tooltip.tsx
const { withRootProvider, withContext } = createStyleContext(tooltipRecipe);
/**
* Styled Ark **Tooltip** compound — each part is wired to `tooltipRecipe` via context.
*
* Ark handles all a11y: tooltip role, `aria-describedby`, hover/focus show/hide, configurable open/close
* delay. Recipe variant props are accepted directly on `Tooltip.Root`.
*
* @example
*   ```tsx
*   import { Tooltip } from '@finografic/design-system/components';
*
*   <Tooltip.Root openDelay={300} closeDelay={100}>
*     <Tooltip.Trigger asChild>
*       <button aria-label="Help">
*         <InfoIcon />
*       </button>
*     </Tooltip.Trigger>
*     <Tooltip.Positioner>
*       <Tooltip.Content>
*         <Tooltip.Arrow>
*           <Tooltip.ArrowTip />
*         </Tooltip.Arrow>
*         Helpful hint text
*       </Tooltip.Content>
*     </Tooltip.Positioner>
*   </Tooltip.Root>;
*   ```;
*/
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
/**
* Design-system convenience tooltip — pass a `trigger` element and `content` for the common case.
* **`Tooltip`** stays the styled compound; **`TooltipDS`** = packaged DS API with normalized
* `onOpenChange(open: boolean)`.
*
* @example
*   ```tsx
*   import { TooltipDS } from '@finografic/design-system/components';
*
*   <TooltipDS
*     trigger={
*       <button aria-label="Help">
*         <InfoIcon />
*       </button>
*     }
*     content="This is a helpful tooltip"
*     openDelay={300}
*   />;
*   ```;
*/
const TooltipDS = forwardRef(({ trigger, content, openDelay, closeDelay, open, onOpenChange, arrow = false, classNames = {} }, ref) => {
	const styles = tooltipRecipe();
	return /* @__PURE__ */ jsxs(Tooltip.Root, {
		open,
		openDelay,
		closeDelay,
		onOpenChange: ({ open: o }) => onOpenChange?.(o),
		children: [/* @__PURE__ */ jsx(Tooltip.Trigger, {
			ref,
			asChild: true,
			children: trigger
		}), /* @__PURE__ */ jsx(Tooltip.Positioner, {
			className: classNames.positioner,
			children: /* @__PURE__ */ jsxs(Tooltip.Content, {
				className: cx(styles.content, classNames.content),
				children: [arrow && /* @__PURE__ */ jsx(Tooltip.Arrow, {
					className: classNames.arrow,
					children: /* @__PURE__ */ jsx(Tooltip.ArrowTip, { className: classNames.arrowTip })
				}), content]
			})
		})]
	});
});
TooltipDS.displayName = "TooltipDS";
//#endregion
export { Tooltip$1 as Tooltip, TooltipDS };

//# sourceMappingURL=tooltip.js.map