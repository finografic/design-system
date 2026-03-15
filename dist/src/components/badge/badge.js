import { badgeRecipe } from "./badge.recipe.js";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/badge/badge.tsx
const Badge = forwardRef(({ variant, colorScheme, size, className, children, ...props }, ref) => {
	const cls = badgeRecipe({
		variant,
		colorScheme,
		size
	});
	return /* @__PURE__ */ jsx("span", {
		ref,
		className: className ? `${cls} ${className}` : cls,
		...props,
		children
	});
});
Badge.displayName = "Badge";
//#endregion
export { Badge };

//# sourceMappingURL=badge.js.map