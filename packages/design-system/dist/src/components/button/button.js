import { forwardRef } from "react";
import { jsxs } from "react/jsx-runtime";
import { ark } from "@ark-ui/react";
//#region src/components/button/button.tsx
/**
* Button Component
*
* Accessible button built on `ark.button`. Styling via `buttonRecipe`
* — pass `className={buttonRecipe({ variant, palette, size })}`.
*
* Usage:
* ```tsx
* import { Button } from '@workspace/design-system/components';
* import { buttonRecipe } from '@workspace/design-system/recipes';
*
* <Button className={buttonRecipe({ variant: 'solid', palette: 'primary' })}>
*   Save
* </Button>
* ```
*/
const Button = forwardRef(({ size = "md", variant = "outline", palette = "default", loading = false, icon, iconPosition = "left", disabled, children, className, ...props }, ref) => {
	return /* @__PURE__ */ jsxs(ark.button, {
		ref,
		disabled: disabled || loading,
		"aria-busy": loading || void 0,
		"data-size": size,
		"data-variant": variant,
		"data-color-scheme": palette,
		"data-loading": loading || void 0,
		className,
		...props,
		children: [
			icon && iconPosition === "left" && icon,
			children,
			icon && iconPosition === "right" && icon
		]
	});
});
Button.displayName = "Button";
//#endregion
export { Button };

//# sourceMappingURL=button.js.map