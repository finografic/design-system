import { checkboxRecipe } from "./checkbox.recipe.js";
import { CheckIcon, MinusIcon } from "@finografic/icons";
import { forwardRef } from "react";
import { css, cx } from "@styled-system/css";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { Checkbox } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/forms/checkbox/checkbox.tsx
const { withProvider, withContext } = createStyleContext(checkboxRecipe);
/**
* Styled Ark **Checkbox** compound — each part is wired to `checkboxRecipe` via context.
*
* Pass **`size`** and **`palette`** on `Root` so slot styles resolve. Control state and handlers
* (`checked`, `onCheckedChange`, `disabled`, `name`) also go on **`Root`**.
*
* @example
* ```tsx
* <Checkbox.Root size="md" palette="success" checked={checked} onCheckedChange={({ checked }) => setChecked(checked)}>
*   <Checkbox.Control>
*     <Checkbox.Indicator>
*       <CheckIcon aria-hidden />
*     </Checkbox.Indicator>
*   </Checkbox.Control>
*   <Checkbox.Label>Accept terms</Checkbox.Label>
*   <Checkbox.HiddenInput />
* </Checkbox.Root>
* ```
*/
const Checkbox$1 = {
	Root: withProvider(Checkbox.Root, "root"),
	Control: withContext(Checkbox.Control, "control"),
	Indicator: withContext(Checkbox.Indicator, "indicator"),
	Label: withContext(Checkbox.Label, "label"),
	HiddenInput: Checkbox.HiddenInput
};
const textColumnStyle = css({
	display: "flex",
	flexDirection: "column",
	gap: "0.5"
});
/**
* Design-system convenience checkbox — label, description, and error text included.
* **`Checkbox`** stays the styled compound; **`CheckboxDS`** = packaged DS API (`onChange(checked)`;
* bare **`Checkbox.Root`** still uses Ark's `onCheckedChange`).
*/
const CheckboxDS = forwardRef(({ label, description, error, checked, onChange, onBlur, name, disabled, size = "md", palette = "primary", indicator, className, classNames = {} }, ref) => {
	const styles = checkboxRecipe({
		size,
		palette
	});
	const errorMessage = typeof error === "string" ? error : error?.message;
	return /* @__PURE__ */ jsxs(Checkbox.Root, {
		ref,
		checked,
		onCheckedChange: (details) => onChange?.(details.checked),
		onBlur,
		name,
		disabled,
		"data-size": size,
		"data-invalid": errorMessage ? "true" : void 0,
		className: cx(styles.root, classNames.root, className),
		children: [
			/* @__PURE__ */ jsx(Checkbox.Control, {
				className: cx(styles.control, classNames.control),
				children: /* @__PURE__ */ jsx(Checkbox.Indicator, {
					className: cx(styles.indicator, classNames.indicator),
					children: indicator ?? /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(CheckIcon, {
						className: "icon",
						"aria-hidden": true
					}), /* @__PURE__ */ jsx(MinusIcon, {
						className: "icon",
						"aria-hidden": true,
						"data-indeterminate": true
					})] })
				})
			}),
			(label || description || errorMessage) && /* @__PURE__ */ jsxs("div", {
				className: textColumnStyle,
				children: [
					label && /* @__PURE__ */ jsx(Checkbox.Label, {
						className: cx(styles.label, classNames.label),
						children: label
					}),
					description && /* @__PURE__ */ jsx("span", {
						className: cx(styles.description, classNames.description),
						children: description
					}),
					errorMessage && /* @__PURE__ */ jsx("span", {
						className: cx(styles.errorText, classNames.errorText),
						role: "alert",
						children: errorMessage
					})
				]
			}),
			/* @__PURE__ */ jsx(Checkbox.HiddenInput, {})
		]
	});
});
CheckboxDS.displayName = "CheckboxDS";
//#endregion
export { Checkbox$1 as Checkbox, CheckboxDS };

//# sourceMappingURL=checkbox.js.map