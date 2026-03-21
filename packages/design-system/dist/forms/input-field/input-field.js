import { inputFieldRecipe } from "./input-field.recipe.js";
import { Children, forwardRef, isValidElement } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Field } from "@ark-ui/react";
//#region src/forms/input-field/input-field.tsx
function InputFieldSlot({ side = "left", interactive, className, children, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		"data-side": side,
		"data-interactive": interactive ? "true" : void 0,
		className,
		...props,
		children
	});
}
InputFieldSlot.displayName = "InputField.Slot";
const InputFieldRoot = forwardRef(({ children, className, size = "md", invalid, disabled, ...inputProps }, ref) => {
	const leadingSlots = [];
	const trailingSlots = [];
	Children.forEach(children, (child) => {
		if (isValidElement(child) && child.type === InputFieldSlot) if ((child.props.side ?? "left") === "right") trailingSlots.push(child);
		else leadingSlots.push(child);
	});
	const cls = inputFieldRecipe({
		size,
		hasLeadingSlot: leadingSlots.length > 0,
		hasTrailingSlot: trailingSlots.length > 0
	});
	return /* @__PURE__ */ jsxs("div", {
		className: [cls.root, className].filter(Boolean).join(" "),
		"data-invalid": invalid ? "true" : void 0,
		"data-disabled": disabled ? "true" : void 0,
		children: [
			leadingSlots.map((slot, i) => isValidElement(slot) ? slot.type === InputFieldSlot ? {
				...slot,
				props: {
					...slot.props,
					className: [cls.slot, slot.props.className].filter(Boolean).join(" ")
				},
				key: i
			} : slot : slot),
			/* @__PURE__ */ jsx(Field.Input, {
				ref,
				className: cls.input,
				disabled,
				"aria-invalid": invalid,
				...inputProps
			}),
			trailingSlots.map((slot, i) => isValidElement(slot) ? {
				...slot,
				props: {
					...slot.props,
					className: [cls.slot, slot.props.className].filter(Boolean).join(" ")
				},
				key: i
			} : slot)
		]
	});
});
InputFieldRoot.displayName = "InputField.Root";
const InputField = {
	Root: InputFieldRoot,
	Slot: InputFieldSlot
};
//#endregion
export { InputField, InputFieldRoot, InputFieldSlot };

//# sourceMappingURL=input-field.js.map