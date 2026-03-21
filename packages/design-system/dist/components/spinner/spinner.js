import { spinnerRecipe } from "./spinner.recipe.js";
import { LoaderIcon } from "@finografic/icons";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/spinner/spinner.tsx
const Spinner = forwardRef(({ size = 20, className, ...props }, ref) => {
	return /* @__PURE__ */ jsx(LoaderIcon, {
		ref,
		width: size,
		height: size,
		className: className ? `${spinnerRecipe()} ${className}` : spinnerRecipe(),
		...props
	});
});
Spinner.displayName = "Spinner";
//#endregion
export { Spinner };

//# sourceMappingURL=spinner.js.map