import { inputPasswordRecipe } from "./input-password.recipe.js";
import { EyeOffIcon, EyeOnIcon } from "@finografic/icons";
import { forwardRef } from "react";
import { cx } from "@styled-system/css";
import { jsx, jsxs } from "react/jsx-runtime";
import { PasswordInput } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/forms/input-password/input-password.tsx
const { withProvider, withContext } = createStyleContext(inputPasswordRecipe);
/**
* Styled Ark **PasswordInput** compound — each part is wired to `inputPasswordRecipe` via context.
*
* Provides a text/password toggle with accessible visibility trigger. Ark manages the `data-state="visible" |
* "hidden"` attribute on the root and controls the input type. Variant props (`size`) go on
* **`InputPassword.Root`**.
*
* @example
*   ```tsx
*   import { InputPassword } from '@finografic/design-system/forms';
*
*   <InputPassword.Root size="md">
*     <InputPassword.Label>Password</InputPassword.Label>
*     <InputPassword.Control>
*       <InputPassword.Input placeholder="Enter password" />
*       <InputPassword.VisibilityTrigger>
*         <InputPassword.Context>
*           {({ visible }) => (visible ? <EyeOffIcon /> : <EyeOnIcon />)}
*         </InputPassword.Context>
*       </InputPassword.VisibilityTrigger>
*     </InputPassword.Control>
*   </InputPassword.Root>;
*   ```;
*/
const InputPassword = {
	/** Root — `disabled`, `invalid`, `readOnly`, `required`, plus `size`. */
	Root: withProvider(PasswordInput.Root, "root"),
	/** Root with external machine state from `usePasswordInput`. */
	RootProvider: withProvider(PasswordInput.RootProvider, "root"),
	/** Optional text label above the control. */
	Label: withContext(PasswordInput.Label, "label"),
	/** Input + visibility toggle wrapper. */
	Control: withContext(PasswordInput.Control, "control"),
	/** The password/text input field. */
	Input: withContext(PasswordInput.Input, "input"),
	/** Eye toggle button — switches between showing and hiding the password. */
	VisibilityTrigger: withContext(PasswordInput.VisibilityTrigger, "visibilityTrigger"),
	/** Render prop — exposes machine context (e.g. `visible`) to children; no DOM, no recipe slot. */
	Context: PasswordInput.Context
};
/**
* Design-system convenience password input — label, description, error, and eye toggle included.
* **`InputPassword`** stays the styled compound for full composition; **`InputPasswordDS`** = packaged DS API
* (`onChange(value: string)` from the native input event).
*
* @example
*   ```tsx
*   import { InputPasswordDS } from '@finografic/design-system/forms';
*
*   <InputPasswordDS
*     label="Password"
*     placeholder="Enter your password"
*     onChange={(value) => setPassword(value)}
*     error={errors.password}
*   />;
*   ```;
*/
const InputPasswordDS = forwardRef(({ value, defaultValue, placeholder, onChange, onBlur, onFocus, disabled, readOnly, required, invalid, name, id, label, description, error, size = "md", classNames = {} }, ref) => {
	const styles = inputPasswordRecipe({ size });
	const errorMessage = typeof error === "string" ? error : error?.message;
	return /* @__PURE__ */ jsxs(PasswordInput.Root, {
		ref,
		disabled,
		readOnly,
		required,
		invalid,
		className: cx(styles.root, classNames.root),
		children: [
			label && /* @__PURE__ */ jsx(PasswordInput.Label, {
				htmlFor: id,
				className: cx(styles.label, classNames.label),
				children: label
			}),
			/* @__PURE__ */ jsxs(PasswordInput.Control, {
				className: cx(styles.control, classNames.control),
				children: [/* @__PURE__ */ jsx(PasswordInput.Input, {
					id,
					name,
					value,
					defaultValue,
					placeholder,
					onChange: (e) => onChange?.(e.target.value),
					onBlur: () => onBlur?.(),
					onFocus: () => onFocus?.(),
					className: cx(styles.input, classNames.input)
				}), /* @__PURE__ */ jsx(PasswordInput.VisibilityTrigger, {
					className: cx(styles.visibilityTrigger, classNames.visibilityTrigger),
					"aria-label": "Toggle password visibility",
					children: /* @__PURE__ */ jsx(PasswordInput.Context, { children: ({ visible }) => visible ? /* @__PURE__ */ jsx(EyeOffIcon, { "aria-hidden": true }) : /* @__PURE__ */ jsx(EyeOnIcon, { "aria-hidden": true }) })
				})]
			}),
			(description || errorMessage) && /* @__PURE__ */ jsxs("div", {
				style: {
					display: "flex",
					flexDirection: "column",
					gap: "4px"
				},
				children: [description && /* @__PURE__ */ jsx("span", {
					className: cx(styles.label, classNames.description),
					children: description
				}), errorMessage && /* @__PURE__ */ jsx("span", {
					className: classNames.errorText,
					role: "alert",
					style: {
						color: "var(--colors-danger-solid)",
						fontSize: "var(--font-sizes-sm)"
					},
					children: errorMessage
				})]
			})
		]
	});
});
InputPasswordDS.displayName = "InputPasswordDS";
//#endregion
export { InputPassword, InputPasswordDS };

//# sourceMappingURL=input-password.js.map