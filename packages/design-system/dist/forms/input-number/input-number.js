import { inputNumberRecipe } from "./input-number.recipe.js";
import { ChevronDownIcon, ChevronUpIcon } from "@finografic/icons";
import { forwardRef } from "react";
import { cx } from "@styled-system/css";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { NumberInput } from "@ark-ui/react";
//#region src/forms/input-number/input-number.tsx
const InputNumber = forwardRef(({ value, defaultValue, onChange, onValueCommit, onValueInvalid, onBlur, name, min, max, step = 1, precision, locale, formatOptions, prefix, suffix, showStepper = true, label, error, id, disabled, readOnly, placeholder, size = "md", className }, ref) => {
	const styles = inputNumberRecipe({ size });
	const errorMessage = typeof error === "string" ? error : error?.message;
	const resolvedFormatOptions = {
		maximumFractionDigits: precision,
		minimumFractionDigits: precision,
		...formatOptions
	};
	return /* @__PURE__ */ jsxs(NumberInput.Root, {
		id,
		name,
		value: value !== void 0 ? String(value) : void 0,
		defaultValue: defaultValue !== void 0 ? String(defaultValue) : void 0,
		onValueChange: ({ value: v, valueAsNumber }) => onChange?.(v, valueAsNumber),
		onValueCommit: ({ value: v, valueAsNumber }) => onValueCommit?.(v, valueAsNumber),
		onValueInvalid: ({ reason }) => onValueInvalid?.(reason),
		min,
		max,
		step,
		locale,
		formatOptions: resolvedFormatOptions,
		disabled,
		readOnly,
		invalid: Boolean(errorMessage),
		className: cx(styles.root, className),
		children: [
			label && /* @__PURE__ */ jsx(NumberInput.Label, {
				className: styles.label,
				children: label
			}),
			/* @__PURE__ */ jsxs(NumberInput.Control, {
				className: styles.control,
				children: [
					prefix && /* @__PURE__ */ jsx("span", {
						className: styles.prefix,
						children: prefix
					}),
					/* @__PURE__ */ jsx(NumberInput.Input, {
						ref,
						onBlur,
						placeholder,
						className: styles.input
					}),
					suffix && /* @__PURE__ */ jsx("span", {
						className: styles.suffix,
						children: suffix
					}),
					showStepper && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(NumberInput.DecrementTrigger, {
						className: styles.decrementTrigger,
						"aria-label": "Decrement",
						children: /* @__PURE__ */ jsx(ChevronDownIcon, {
							className: "icon icon-sm",
							"aria-hidden": true
						})
					}), /* @__PURE__ */ jsx(NumberInput.IncrementTrigger, {
						className: styles.incrementTrigger,
						"aria-label": "Increment",
						children: /* @__PURE__ */ jsx(ChevronUpIcon, {
							className: "icon icon-sm",
							"aria-hidden": true
						})
					})] })
				]
			}),
			errorMessage && /* @__PURE__ */ jsx("span", {
				role: "alert",
				className: styles.errorText,
				children: errorMessage
			})
		]
	});
});
InputNumber.displayName = "InputNumber";
//#endregion
export { InputNumber };

//# sourceMappingURL=input-number.js.map