import { inputNumberRecipe } from "./input-number.recipe.js";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { forwardRef } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { NumberInput } from "@ark-ui/react";
//#region src/forms/input-number/input-number.tsx
const InputNumber = forwardRef(({ value, defaultValue, onChange, onBlur, name, min, max, step = 1, precision, locale, formatOptions, prefix, suffix, showStepper = true, label, error, id, disabled, readOnly, placeholder, size = "md", className }, ref) => {
	const cls = inputNumberRecipe({ size });
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
		onValueChange: ({ valueAsNumber }) => onChange?.(isNaN(valueAsNumber) ? null : valueAsNumber),
		min,
		max,
		step,
		locale,
		formatOptions: resolvedFormatOptions,
		disabled,
		readOnly,
		invalid: Boolean(errorMessage),
		className: [cls.root, className].filter(Boolean).join(" "),
		children: [
			label && /* @__PURE__ */ jsx(NumberInput.Label, {
				className: cls.label,
				children: label
			}),
			/* @__PURE__ */ jsxs(NumberInput.Control, {
				className: cls.control,
				children: [
					prefix && /* @__PURE__ */ jsx("span", {
						className: cls.prefix,
						children: prefix
					}),
					/* @__PURE__ */ jsx(NumberInput.Input, {
						ref,
						onBlur,
						placeholder,
						className: cls.input
					}),
					suffix && /* @__PURE__ */ jsx("span", {
						className: cls.suffix,
						children: suffix
					}),
					showStepper && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(NumberInput.DecrementTrigger, {
						className: cls.decrementTrigger,
						"aria-label": "Decrement",
						children: /* @__PURE__ */ jsx(ChevronDownIcon, {
							className: "icon icon-sm",
							"aria-hidden": true
						})
					}), /* @__PURE__ */ jsx(NumberInput.IncrementTrigger, {
						className: cls.incrementTrigger,
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
				style: {
					fontSize: "var(--font-sizes-sm)",
					color: "var(--colors-fg-error)",
					fontWeight: 600
				},
				children: errorMessage
			})
		]
	});
});
InputNumber.displayName = "InputNumber";
//#endregion
export { InputNumber };

//# sourceMappingURL=input-number.js.map