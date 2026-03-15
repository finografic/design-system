import { switchRecipe } from "./switch.recipe.js";
import { forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Switch } from "@ark-ui/react";
//#region src/forms/switch/switch.tsx
const Switch$1 = Switch;
const SwitchField = forwardRef(({ label, description, error, checked, onCheckedChange, onBlur, name, disabled, size = "md", className, controlClassName }, ref) => {
	const errorMessage = typeof error === "string" ? error : error?.message;
	const controlCls = controlClassName ?? switchRecipe({ size });
	return /* @__PURE__ */ jsxs(Switch.Root, {
		ref,
		name,
		checked,
		onCheckedChange,
		onBlur,
		disabled,
		"data-size": size,
		className,
		style: {
			display: "inline-flex",
			alignItems: "flex-start",
			gap: "0.5rem",
			cursor: "pointer"
		},
		children: [
			/* @__PURE__ */ jsx(Switch.Control, {
				className: controlCls,
				children: /* @__PURE__ */ jsx(Switch.Thumb, { className: "switch-thumb" })
			}),
			(label || description || errorMessage) && /* @__PURE__ */ jsxs("div", {
				style: {
					display: "flex",
					flexDirection: "column",
					gap: "0.125rem"
				},
				children: [
					label && /* @__PURE__ */ jsx(Switch.Label, { children: label }),
					description && /* @__PURE__ */ jsx("span", {
						style: {
							fontSize: "var(--font-sizes-sm)",
							color: "var(--colors-fg-muted)"
						},
						children: description
					}),
					errorMessage && /* @__PURE__ */ jsx("span", {
						role: "alert",
						style: {
							fontSize: "var(--font-sizes-sm)",
							color: "var(--colors-fg-error)",
							fontWeight: 600
						},
						children: errorMessage
					})
				]
			}),
			/* @__PURE__ */ jsx(Switch.HiddenInput, {})
		]
	});
});
SwitchField.displayName = "SwitchField";
//#endregion
export { Switch$1 as Switch, SwitchField };

//# sourceMappingURL=switch.js.map