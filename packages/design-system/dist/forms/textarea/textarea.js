import { textareaRecipe } from "./textarea.recipe.js";
import { forwardRef } from "react";
import { cx } from "@styled-system/css";
import { jsx } from "react/jsx-runtime";
//#region src/forms/textarea/textarea.tsx
/**
* Styled multi-line text input — same border, bg, and focus tokens as `InputField`.
*
* Pass **`size`** and **`resize`** for layout control. Use `invalid` for error state.
*
* @example
*   ```tsx
*   import { Textarea } from '@finografic/design-system/forms';
*
*   <Textarea
*     size="md"
*     resize="vertical"
*     placeholder="Enter a description…"
*     onChange={(e) => setValue(e.target.value)}
*   />;
*   ```;
*/
const Textarea = forwardRef(({ className, size = "md", resize = "vertical", invalid, ...props }, ref) => /* @__PURE__ */ jsx("textarea", {
	ref,
	"aria-invalid": invalid || void 0,
	className: cx(textareaRecipe({
		size,
		resize
	}), className),
	...props
}));
Textarea.displayName = "Textarea";
//#endregion
export { Textarea };

//# sourceMappingURL=textarea.js.map