import { scrollAreaRecipe } from "./scroll-area.recipe.js";
import { forwardRef } from "react";
import { cx } from "@styled-system/css";
import { jsx, jsxs } from "react/jsx-runtime";
import { ScrollArea } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/components/scroll-area/scroll-area.tsx
const { withProvider, withContext } = createStyleContext(scrollAreaRecipe);
/**
* Styled Ark **ScrollArea** compound — each part is wired to `scrollAreaRecipe` via context.
*
* Provides custom scrollbars that match the design system theme. Scrollbars appear on hover
* and use `data-orientation` to distinguish vertical vs horizontal.
*
* @example
* ```tsx
* import { ScrollArea } from '@finografic/design-system/components';
*
* <ScrollArea.Root style={{ height: '300px' }}>
*   <ScrollArea.Viewport>
*     <ScrollArea.Content>
*       {longContent}
*     </ScrollArea.Content>
*   </ScrollArea.Viewport>
*   <ScrollArea.Scrollbar orientation="vertical">
*     <ScrollArea.Thumb />
*   </ScrollArea.Scrollbar>
*   <ScrollArea.Corner />
* </ScrollArea.Root>
* ```
*/
const ScrollArea$1 = {
	Root: withProvider(ScrollArea.Root, "root"),
	Viewport: withContext(ScrollArea.Viewport, "viewport"),
	Content: withContext(ScrollArea.Content, "content"),
	Scrollbar: withContext(ScrollArea.Scrollbar, "scrollbar"),
	Thumb: withContext(ScrollArea.Thumb, "thumb"),
	Corner: withContext(ScrollArea.Corner, "corner")
};
/**
* Design-system convenience scroll area — wraps content in a styled custom scrollbar container.
* **`ScrollArea`** stays the styled compound for full composition; **`ScrollAreaDS`** = simple
* passthrough with both vertical and horizontal scrollbars included.
*
* @example
* ```tsx
* import { ScrollAreaDS } from '@finografic/design-system/components';
*
* <ScrollAreaDS style={{ height: '300px' }}>
*   <div style={{ height: '1000px' }}>Tall content here</div>
* </ScrollAreaDS>
* ```
*/
const ScrollAreaDS = forwardRef(({ children, dir, className, style }, ref) => {
	const styles = scrollAreaRecipe();
	return /* @__PURE__ */ jsxs(ScrollArea.Root, {
		ref,
		dir,
		className: cx(styles.root, className),
		style,
		children: [
			/* @__PURE__ */ jsx(ScrollArea.Viewport, {
				className: styles.viewport,
				children: /* @__PURE__ */ jsx(ScrollArea.Content, {
					className: styles.content,
					children
				})
			}),
			/* @__PURE__ */ jsx(ScrollArea.Scrollbar, {
				orientation: "vertical",
				className: styles.scrollbar,
				children: /* @__PURE__ */ jsx(ScrollArea.Thumb, { className: styles.thumb })
			}),
			/* @__PURE__ */ jsx(ScrollArea.Scrollbar, {
				orientation: "horizontal",
				className: styles.scrollbar,
				children: /* @__PURE__ */ jsx(ScrollArea.Thumb, { className: styles.thumb })
			}),
			/* @__PURE__ */ jsx(ScrollArea.Corner, { className: styles.corner })
		]
	});
});
ScrollAreaDS.displayName = "ScrollAreaDS";
//#endregion
export { ScrollArea$1 as ScrollArea, ScrollAreaDS };

//# sourceMappingURL=scroll-area.js.map