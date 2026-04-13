import { inputFieldRecipe } from "./input-field.recipe.js";
import { Children, forwardRef, isValidElement } from "react";
import { cx } from "@styled-system/css";
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
	const styles = inputFieldRecipe({
		size,
		hasLeadingSlot: leadingSlots.length > 0,
		hasTrailingSlot: trailingSlots.length > 0
	});
	return /* @__PURE__ */ jsxs("div", {
		className: cx(styles.root, className),
		"data-invalid": invalid ? "true" : void 0,
		"data-disabled": disabled ? "true" : void 0,
		children: [
			leadingSlots.map((slot, i) => isValidElement(slot) ? slot.type === InputFieldSlot ? {
				...slot,
				props: {
					...slot.props,
					className: cx(styles.slot, slot.props.className)
				},
				key: i
			} : slot : slot),
			/* @__PURE__ */ jsx(Field.Input, {
				ref,
				className: styles.input,
				disabled,
				"aria-invalid": invalid,
				...inputProps
			}),
			trailingSlots.map((slot, i) => isValidElement(slot) ? {
				...slot,
				props: {
					...slot.props,
					className: cx(styles.slot, slot.props.className)
				},
				key: i
			} : slot)
		]
	});
});
InputFieldRoot.displayName = "InputField.Root";
/**
* Styled text input compound with optional leading/trailing decoration slots.
*
* Pass **`size`** and `invalid` on **`Root`**; place **`Slot`** children with `side="left"` or `side="right"`
* — the recipe adjusts input padding automatically.
*
* @example
*   ```tsx
*   <InputField.Root size="md" invalid={!!error}>
*     <InputField.Slot side="left">
*       <SearchIcon aria-hidden />
*     </InputField.Slot>
*     <InputField.Slot side="right" interactive>
*       <XIcon aria-hidden />
*     </InputField.Slot>
*   </InputField.Root>;
*   ```;
*/
const InputField = {
	Root: InputFieldRoot,
	Slot: InputFieldSlot
};
//#endregion
export { InputField, InputFieldRoot, InputFieldSlot };

//# sourceMappingURL=input-field.js.map