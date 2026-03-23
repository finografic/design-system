import { calloutRecipe } from "./callout.recipe.js";
import { forwardRef } from "react";
import { cx } from "@styled-system/css";
import { jsx } from "react/jsx-runtime";
//#region src/components/callout/callout.tsx
/**
* **Callout** — inline status message with coloured border and background.
*
* @example
* ```tsx
* import { Callout } from '@finografic/design-system/components';
*
* <Callout status="warning">
*   Please review your settings before continuing.
* </Callout>
* ```
*/
const Callout = forwardRef(({ status, className, children, ...props }, ref) => {
	return /* @__PURE__ */ jsx("div", {
		ref,
		role: "alert",
		className: cx(calloutRecipe({ status }), className),
		...props,
		children
	});
});
Callout.displayName = "Callout";
//#endregion
export { Callout };

//# sourceMappingURL=callout.js.map