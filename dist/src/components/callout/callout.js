import { calloutRecipe } from "./callout.recipe.js";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/callout/callout.tsx
const Callout = forwardRef(({ status, className, children, ...props }, ref) => {
	const cls = calloutRecipe({ status });
	return /* @__PURE__ */ jsx("div", {
		ref,
		role: "alert",
		className: className ? `${cls} ${className}` : cls,
		...props,
		children
	});
});
Callout.displayName = "Callout";
//#endregion
export { Callout };

//# sourceMappingURL=callout.js.map