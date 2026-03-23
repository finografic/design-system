import { switchRecipe } from "./switch.recipe.js";
import { forwardRef } from "react";
import { css, cx } from "@styled-system/css";
import { jsx, jsxs } from "react/jsx-runtime";
import { Switch } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/forms/switch/switch.tsx
const { withProvider, withContext } = createStyleContext(switchRecipe);
/**
* Styled Ark **Switch** compound — each part is wired to `switchRecipe` via context.
*
* **Anatomy:** put control props on **`Root`** (`checked`, `disabled`, `onCheckedChange`,
* `name`, …). Ark UI uses the name `onCheckedChange` (detail object `{ checked }`), not
* DOM `onChange` — same idea as a boolean toggle handler.
*
* Pass **`size`** and **`palette`** on `Root` so slot styles resolve.
*
* @example
* ```tsx
* <Switch.Root size="md" palette="primary" checked={on} onCheckedChange={({ checked }) => setOn(checked)}>
*   <Switch.Control>
*     <Switch.Thumb />
*   </Switch.Control>
*   <Switch.Label>Notifications</Switch.Label>
* </Switch.Root>
* ```
*/
const Switch$1 = {
	Root: withProvider(Switch.Root, "root"),
	Control: withContext(Switch.Control, "control"),
	Thumb: withContext(Switch.Thumb, "thumb"),
	Label: withContext(Switch.Label, "label"),
	HiddenInput: Switch.HiddenInput
};
const textColumnStyle = css({
	display: "flex",
	flexDirection: "column",
	gap: "0.5"
});
/**
* Design-system convenience switch — label, description, and error text included.
* **`Switch`** stays the styled compound; **`SwitchDS`** = packaged DS API (`onChange(checked)`;
* bare **`Switch.Root`** still uses Ark's `onCheckedChange`).
*/
const SwitchDS = forwardRef(({ label, description, error, checked, onChange, onBlur, name, disabled, size = "md", palette = "primary", className, classNames = {} }, ref) => {
	const styles = switchRecipe({
		size,
		palette
	});
	const errorMessage = typeof error === "string" ? error : error?.message;
	return /* @__PURE__ */ jsxs(Switch.Root, {
		ref,
		name,
		checked,
		onCheckedChange: (details) => {
			onChange?.(details.checked);
		},
		onBlur,
		disabled,
		"data-size": size,
		className: cx(styles.root, classNames.root, className),
		children: [
			/* @__PURE__ */ jsx(Switch.Control, {
				className: cx(styles.control, classNames.control),
				children: /* @__PURE__ */ jsx(Switch.Thumb, { className: cx(styles.thumb, classNames.thumb) })
			}),
			(label || description || errorMessage) && /* @__PURE__ */ jsxs("div", {
				className: textColumnStyle,
				children: [
					label && /* @__PURE__ */ jsx(Switch.Label, {
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
			/* @__PURE__ */ jsx(Switch.HiddenInput, {})
		]
	});
});
SwitchDS.displayName = "SwitchDS";
//#endregion
export { Switch$1 as Switch, SwitchDS };

//# sourceMappingURL=switch.js.map