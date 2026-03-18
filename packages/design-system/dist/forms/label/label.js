import { labelRecipe } from "./label.recipe.js";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/forms/label/label.tsx
const Label = forwardRef(({ size, className, children, ...props }, ref) => {
	const cls = labelRecipe({ size });
	return /* @__PURE__ */ jsx("label", {
		ref,
		className: className ? `${cls} ${className}` : cls,
		...props,
		children
	});
});
Label.displayName = "Label";
//#endregion
export { Label };

//# sourceMappingURL=label.js.map