import { cardRecipe } from "./card.recipe.js";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/card/card.tsx
const Card = forwardRef(({ size, variant, className, children, ...props }, ref) => {
	const cls = cardRecipe({
		size,
		variant
	});
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: className ? `${cls} ${className}` : cls,
		...props,
		children
	});
});
Card.displayName = "Card";
//#endregion
export { Card };

//# sourceMappingURL=card.js.map