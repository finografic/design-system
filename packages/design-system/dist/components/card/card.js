import { cardRecipe } from "./card.recipe.js";
import { forwardRef } from "react";
import { cx } from "@styled-system/css";
import { jsx } from "react/jsx-runtime";
//#region src/components/card/card.tsx
/**
* **Card** — surface container with border, background, and optional elevation.
*
* @example
*   ```tsx
*   import { Card } from '@finografic/design-system/components';
*
*   <Card size="md" variant="elevated">
*     <h3>Card title</h3>
*     <p>Card content goes here.</p>
*   </Card>;
*   ```;
*/
const Card = forwardRef(({ size, variant, className, children, ...props }, ref) => {
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: cx(cardRecipe({
			size,
			variant
		}), className),
		...props,
		children
	});
});
Card.displayName = "Card";
//#endregion
export { Card };

//# sourceMappingURL=card.js.map