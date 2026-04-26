import { InputFieldVariants } from "./input-field.recipe.js";
import * as _$react from "react";
import { HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import * as _$react_jsx_runtime0 from "react/jsx-runtime";

//#region src/forms/input-field/input-field.d.ts
interface InputFieldSlotProps extends HTMLAttributes<HTMLDivElement> {
  side?: 'left' | 'right';
  /** Makes the slot interactive (pointer-events: auto, cursor: pointer) */
  interactive?: boolean;
}
declare function InputFieldSlot({
  side,
  interactive,
  className,
  children,
  ...props
}: InputFieldSlotProps): _$react_jsx_runtime0.JSX.Element;
declare namespace InputFieldSlot {
  var displayName: string;
}
type InputFieldRootProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & InputFieldVariants & {
  /** Decoration slots — InputField.Slot with side="left" | "right" */children?: ReactNode;
  invalid?: boolean;
};
declare const InputFieldRoot: _$react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  size?: "sm" | "md" | "lg" | undefined;
  hasLeadingSlot?: boolean | undefined;
  hasTrailingSlot?: boolean | undefined;
} & {
  /** Decoration slots — InputField.Slot with side="left" | "right" */children?: ReactNode;
  invalid?: boolean;
} & _$react.RefAttributes<HTMLInputElement>>;
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
declare const InputField: {
  /** Root — controlled state, size, invalid flag, and native input props. */Root: _$react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    size?: "sm" | "md" | "lg" | undefined;
    hasLeadingSlot?: boolean | undefined;
    hasTrailingSlot?: boolean | undefined;
  } & {
    /** Decoration slots — InputField.Slot with side="left" | "right" */children?: ReactNode;
    invalid?: boolean;
  } & _$react.RefAttributes<HTMLInputElement>>; /** Decoration slot — place icons or buttons; `side="left" | "right"` positions it. */
  Slot: typeof InputFieldSlot;
};
//#endregion
export { InputField, InputFieldRoot, InputFieldRootProps, InputFieldSlot, InputFieldSlotProps };
//# sourceMappingURL=input-field.d.ts.map