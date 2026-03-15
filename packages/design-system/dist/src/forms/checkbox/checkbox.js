import { checkboxRecipe } from "./checkbox.recipe.js";
import { CheckIcon, MinusIcon } from "@finografic/icons";
import { forwardRef } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Checkbox } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/forms/checkbox/checkbox.tsx
const { withProvider, withContext } = createStyleContext(checkboxRecipe);
const Checkbox$1 = {
	Root: withProvider(Checkbox.Root, "root"),
	Control: withContext(Checkbox.Control, "control"),
	Indicator: withContext(Checkbox.Indicator, "indicator"),
	Label: withContext(Checkbox.Label, "label"),
	HiddenInput: Checkbox.HiddenInput
};
const CheckboxField = forwardRef(({ label, description, error, checked, onCheckedChange, onBlur, name, disabled, size = "md", indicator, classNames = {} }, ref) => {
	const cls = checkboxRecipe({ size });
	const errorMessage = typeof error === "string" ? error : error?.message;
	return /* @__PURE__ */ jsxs(Checkbox.Root, {
		ref,
		checked,
		onCheckedChange,
		onBlur,
		name,
		disabled,
		"data-size": size,
		"data-invalid": errorMessage ? "true" : void 0,
		className: classNames.root ?? cls.root,
		children: [
			/* @__PURE__ */ jsx(Checkbox.Control, {
				className: classNames.control ?? cls.control,
				children: /* @__PURE__ */ jsx(Checkbox.Indicator, {
					className: classNames.indicator ?? cls.indicator,
					children: indicator ?? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(CheckIcon, {
						className: "icon",
						"aria-hidden": true
					}), /* @__PURE__ */ jsx(MinusIcon, {
						className: "icon",
						"aria-hidden": true,
						"data-indeterminate": true
					})] })
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				style: {
					display: "flex",
					flexDirection: "column",
					gap: "0.125rem"
				},
				children: [
					label && /* @__PURE__ */ jsx(Checkbox.Label, {
						className: classNames.label ?? cls.label,
						children: label
					}),
					description && /* @__PURE__ */ jsx("span", {
						className: classNames.description ?? cls.description,
						children: description
					}),
					errorMessage && /* @__PURE__ */ jsx("span", {
						className: classNames.errorText ?? cls.errorText,
						role: "alert",
						children: errorMessage
					})
				]
			}),
			/* @__PURE__ */ jsx(Checkbox.HiddenInput, {})
		]
	});
});
CheckboxField.displayName = "CheckboxField";
//#endregion
export { Checkbox$1 as Checkbox, CheckboxField };

//# sourceMappingURL=checkbox.js.map