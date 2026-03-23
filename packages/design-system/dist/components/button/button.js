import { Spinner } from "../spinner/spinner.js";
import "../spinner/index.js";
import { buttonRecipe } from "./button.recipe.js";
import { forwardRef } from "react";
import { cx } from "@styled-system/css";
import { jsx, jsxs } from "react/jsx-runtime";
import { ark } from "@ark-ui/react";
//#region src/components/button/button.tsx
/**
* Button
*
* Single-element interactive control styled via `buttonRecipe`. Variant props
* (`size`, `variant`, `palette`) are applied by the component — consumers pass
* them as regular props; no manual recipe call needed.
*
* When `loading` is `true` a spinner replaces (or precedes) the icon slot and
* interaction is disabled.
*
* @example
* ```tsx
* import { Button } from '@finografic/design-system/components';
*
* <Button variant="solid" palette="primary">Save</Button>
* <Button variant="ghost" palette="danger" icon={<TrashIcon aria-hidden />}>Delete</Button>
* <Button variant="outline" size="sm" loading>Saving…</Button>
* <Button variant="solid" palette="primary" icon={<PlusIcon aria-hidden />} iconPosition="right">
*   Add item
* </Button>
* ```
*/
/** Size of the spinner in px — matches button size scale. */
const spinnerSizeMap = {
	xs: 12,
	sm: 14,
	md: 16,
	lg: 18,
	xl: 20
};
const Button = forwardRef(({ size = "md", variant = "outline", palette = "default", loading = false, icon, iconPosition = "left", disabled, children, className, ...props }, ref) => {
	const styles = buttonRecipe({
		size,
		variant,
		palette,
		iconOnly: Boolean((icon || loading) && !children)
	});
	const spinnerNode = loading ? /* @__PURE__ */ jsx(Spinner, {
		size: spinnerSizeMap[size ?? "md"],
		"aria-hidden": true
	}) : null;
	return /* @__PURE__ */ jsxs(ark.button, {
		ref,
		disabled: disabled || loading,
		"aria-busy": loading || void 0,
		"data-size": size,
		"data-variant": variant,
		"data-loading": loading || void 0,
		className: cx(styles, className),
		...props,
		children: [
			iconPosition === "left" && (spinnerNode ?? icon),
			children,
			iconPosition === "right" && (spinnerNode ?? icon)
		]
	});
});
Button.displayName = "Button";
//#endregion
export { Button };

//# sourceMappingURL=button.js.map