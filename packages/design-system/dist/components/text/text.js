import { textRecipe } from "./text.recipe.js";
import "react";
import { cx } from "@styled-system/css";
import { jsx } from "react/jsx-runtime";
//#region src/components/text/text.tsx
const variantToElement = {
	"h1": "h1",
	"h2": "h2",
	"h3": "h3",
	"h4": "h4",
	"h5": "h5",
	"h6": "h6",
	"body-lg": "p",
	"body": "p",
	"body-sm": "p",
	"caption": "span",
	"overline": "span"
};
/**
* **Text** — semantic text element with variant-based typography scale.
*
* Renders the appropriate HTML tag for each variant by default (e.g. `h1–h6`,
* `p`, `span`) — override with `as` when needed.
*
* @example
* ```tsx
* import { Text } from '@finografic/design-system/components';
*
* <Text variant="h2">Section heading</Text>
* <Text variant="body-sm" color="muted">Supporting copy</Text>
* <Text variant="overline" as="div">Category label</Text>
* ```
*/
function Text({ as, variant = "body", color, truncate, className, children, ...props }) {
	return /* @__PURE__ */ jsx(as ?? variantToElement[variant], {
		className: cx(textRecipe({
			variant,
			color,
			truncate
		}), className),
		...props,
		children
	});
}
//#endregion
export { Text };

//# sourceMappingURL=text.js.map