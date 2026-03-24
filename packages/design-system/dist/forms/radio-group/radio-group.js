import { radioGroupRecipe } from "./radio-group.recipe.js";
import { forwardRef } from "react";
import { css, cx } from "@styled-system/css";
import { jsx, jsxs } from "react/jsx-runtime";
import { RadioGroup } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/forms/radio-group/radio-group.tsx
const { withProvider, withContext } = createStyleContext(radioGroupRecipe);
/**
* Styled Ark **RadioGroup** compound — each part is wired to `radioGroupRecipe` via context.
*
* Supports `size` (sm | md | lg), `variant` (default | card), and
* `orientation` (vertical | horizontal) via `RadioGroup.Root`.
* Ark manages keyboard navigation, focus management, and ARIA.
*
* @example
* ```tsx
* import { RadioGroup } from '@finografic/design-system/forms';
*
* <RadioGroup.Root name="plan" size="md" value={plan} onValueChange={({ value }) => setPlan(value)}>
*   <RadioGroup.Label>Billing plan</RadioGroup.Label>
*   {options.map((opt) => (
*     <RadioGroup.Item key={opt.value} value={opt.value}>
*       <RadioGroup.ItemControl>
*         <RadioGroup.Indicator />
*       </RadioGroup.ItemControl>
*       <RadioGroup.ItemText>{opt.label}</RadioGroup.ItemText>
*       <RadioGroup.ItemHiddenInput />
*     </RadioGroup.Item>
*   ))}
* </RadioGroup.Root>
* ```
*/
const RadioGroup$1 = {
	Root: withProvider(RadioGroup.Root, "root"),
	RootProvider: withProvider(RadioGroup.RootProvider, "root"),
	Label: withContext(RadioGroup.Label, "label"),
	Item: withContext(RadioGroup.Item, "item"),
	ItemControl: withContext(RadioGroup.ItemControl, "itemControl"),
	ItemHiddenInput: RadioGroup.ItemHiddenInput,
	Indicator: withContext(RadioGroup.Indicator, "indicator"),
	ItemText: withContext(RadioGroup.ItemText, "itemText"),
	ItemDescription: withContext("span", "itemDescription")
};
const textColumnStyle = css({
	display: "flex",
	flexDirection: "column",
	gap: "0.5"
});
/**
* Design-system convenience radio group — label, options array, description, and error included.
* **`RadioGroup`** stays the styled compound; **`RadioGroupDS`** = packaged DS API
* (`onChange(value: string)` instead of Ark's `onValueChange` detail object).
*
* @example
* ```tsx
* import { RadioGroupDS } from '@finografic/design-system/forms';
*
* <RadioGroupDS
*   label="Billing plan"
*   value={plan}
*   onChange={setPlan}
*   options={[
*     { value: 'free', label: 'Free', description: 'Up to 3 projects' },
*     { value: 'pro', label: 'Pro', description: 'Unlimited projects' },
*   ]}
* />
* ```
*/
const RadioGroupDS = forwardRef(({ options, value, defaultValue, onChange, label, description, error, name, disabled, size = "md", variant = "default", orientation = "vertical", className, classNames = {} }, ref) => {
	const styles = radioGroupRecipe({
		size,
		variant,
		orientation
	});
	const errorMessage = typeof error === "string" ? error : error?.message;
	return /* @__PURE__ */ jsxs(RadioGroup.Root, {
		ref,
		value,
		defaultValue,
		onValueChange: ({ value: v }) => v != null && onChange?.(v),
		name,
		disabled,
		orientation,
		"data-invalid": errorMessage ? "true" : void 0,
		className: cx(styles.root, classNames.root, className),
		children: [
			label && /* @__PURE__ */ jsx(RadioGroup.Label, {
				className: cx(styles.label, classNames.label),
				children: label
			}),
			options.map((opt) => /* @__PURE__ */ jsxs(RadioGroup.Item, {
				value: opt.value,
				disabled: opt.disabled,
				className: cx(styles.item, classNames.item),
				children: [
					/* @__PURE__ */ jsx(RadioGroup.ItemControl, {
						className: cx(styles.itemControl, classNames.itemControl),
						children: /* @__PURE__ */ jsx(RadioGroup.Indicator, { className: cx(styles.indicator, classNames.indicator) })
					}),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(RadioGroup.ItemText, {
						className: cx(styles.itemText, classNames.itemText),
						children: opt.label
					}), opt.description && /* @__PURE__ */ jsx("span", {
						className: cx(styles.itemDescription, classNames.itemDescription),
						children: opt.description
					})] }),
					/* @__PURE__ */ jsx(RadioGroup.ItemHiddenInput, {})
				]
			}, opt.value)),
			(description || errorMessage) && /* @__PURE__ */ jsxs("div", {
				className: textColumnStyle,
				children: [description && /* @__PURE__ */ jsx("span", {
					className: cx(styles.description, classNames.description),
					children: description
				}), errorMessage && /* @__PURE__ */ jsx("span", {
					className: cx(styles.errorText, classNames.errorText),
					role: "alert",
					children: errorMessage
				})]
			})
		]
	});
});
RadioGroupDS.displayName = "RadioGroupDS";
//#endregion
export { RadioGroup$1 as RadioGroup, RadioGroupDS };

//# sourceMappingURL=radio-group.js.map