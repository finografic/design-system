import { switchRecipe } from "./switch.recipe.js";
import { forwardRef } from "react";
import { cx } from "@styled-system/css";
import { jsx, jsxs } from "react/jsx-runtime";
import { Switch } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/forms/switch/switch.tsx
const { withProvider, withContext } = createStyleContext(switchRecipe);
const Switch$1 = {
	Root: withProvider(Switch.Root, "root"),
	Control: withContext(Switch.Control, "control"),
	Thumb: withContext(Switch.Thumb, "thumb"),
	Label: withContext(Switch.Label, "label"),
	HiddenInput: Switch.HiddenInput
};
const LabeledSwitch = forwardRef(({ label, description, error, checked, onCheckedChange, onBlur, name, disabled, size = "md", palette = "primary", className, controlClassName, classNames = {} }, ref) => {
	const cls = switchRecipe({
		size,
		palette
	});
	const errorMessage = typeof error === "string" ? error : error?.message;
	const rootClass = cx(cls.root, classNames.root, className);
	const controlClass = cx(cls.control, classNames.control, controlClassName);
	const thumbClass = cx(cls.thumb, classNames.thumb);
	return /* @__PURE__ */ jsxs(Switch.Root, {
		ref,
		name,
		checked,
		onCheckedChange,
		onBlur,
		disabled,
		"data-size": size,
		className: rootClass,
		children: [
			/* @__PURE__ */ jsx(Switch.Control, {
				className: controlClass,
				children: /* @__PURE__ */ jsx(Switch.Thumb, { className: thumbClass })
			}),
			(label || description || errorMessage) && /* @__PURE__ */ jsxs("div", {
				style: {
					display: "flex",
					flexDirection: "column",
					gap: "0.125rem"
				},
				children: [
					label && /* @__PURE__ */ jsx(Switch.Label, {
						className: cx(cls.label, classNames.label),
						children: label
					}),
					description && /* @__PURE__ */ jsx("span", {
						className: cx(cls.description, classNames.description),
						children: description
					}),
					errorMessage && /* @__PURE__ */ jsx("span", {
						className: cx(cls.errorText, classNames.errorText),
						role: "alert",
						children: errorMessage
					})
				]
			}),
			/* @__PURE__ */ jsx(Switch.HiddenInput, {})
		]
	});
});
LabeledSwitch.displayName = "LabeledSwitch";
//#endregion
export { LabeledSwitch, Switch$1 as Switch };

//# sourceMappingURL=switch.js.map