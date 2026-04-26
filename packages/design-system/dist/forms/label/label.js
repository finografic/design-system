import { labelRecipe } from "./label.recipe.js";
import { forwardRef } from "react";
import { cx } from "@styled-system/css";
import { jsx } from "react/jsx-runtime";
//#region src/forms/label/label.tsx
/**
* Label — styled `<label>` element sized to align with form control heights.
*
* Commonly composed inside `FieldBox`, `InputField`, `Checkbox`, etc. Can also be used standalone with an
* `htmlFor` attribute.
*
* @example
*   ```tsx
*   import { Label } from '@finografic/design-system/forms';
*
*   <Label htmlFor="email">Email address</Label>
*   <Label size="sm">Small label</Label>
*   ```;
*/
const Label = forwardRef(({ size, className, children, ...props }, ref) => {
	return /* @__PURE__ */ jsx("label", {
		ref,
		className: cx(labelRecipe({ size }), className),
		...props,
		children
	});
});
Label.displayName = "Label";
//#endregion
export { Label };

//# sourceMappingURL=label.js.map