import { textRecipe } from "./text.recipe.js";
import "react";
import { jsx } from "react/jsx-runtime";
//#region src/components/text/text.tsx
const variantToElement = {
	h1: "h1",
	h2: "h2",
	h3: "h3",
	h4: "h4",
	h5: "h5",
	h6: "h6",
	"body-lg": "p",
	body: "p",
	"body-sm": "p",
	caption: "span",
	overline: "span"
};
function Text({ as, variant = "body", color, truncate, className, children, ...props }) {
	const Tag = as ?? variantToElement[variant];
	const cls = textRecipe({
		variant,
		color,
		truncate
	});
	return /* @__PURE__ */ jsx(Tag, {
		className: className ? `${cls} ${className}` : cls,
		...props,
		children
	});
}
//#endregion
export { Text };

//# sourceMappingURL=text.js.map