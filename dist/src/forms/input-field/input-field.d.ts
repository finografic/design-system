import { InputFieldVariants } from "./input-field.types.js";
import * as react from "react";
import { HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import * as react_jsx_runtime0 from "react/jsx-runtime";

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
}: InputFieldSlotProps): react_jsx_runtime0.JSX.Element;
declare namespace InputFieldSlot {
  var displayName: string;
}
type InputFieldRootProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & InputFieldVariants & {
  /** Decoration slots — InputField.Slot with side="left" | "right" */children?: ReactNode;
  invalid?: boolean;
};
declare const InputFieldRoot: react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  size?: "sm" | "md" | "lg" | undefined;
  hasLeadingSlot?: boolean | undefined;
  hasTrailingSlot?: boolean | undefined;
} & {
  /** Decoration slots — InputField.Slot with side="left" | "right" */children?: ReactNode;
  invalid?: boolean;
} & react.RefAttributes<HTMLInputElement>>;
declare const InputField: {
  Root: react.ForwardRefExoticComponent<Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    size?: "sm" | "md" | "lg" | undefined;
    hasLeadingSlot?: boolean | undefined;
    hasTrailingSlot?: boolean | undefined;
  } & {
    /** Decoration slots — InputField.Slot with side="left" | "right" */children?: ReactNode;
    invalid?: boolean;
  } & react.RefAttributes<HTMLInputElement>>;
  Slot: typeof InputFieldSlot;
};
//#endregion
export { InputField, InputFieldRoot, InputFieldRootProps, InputFieldSlot, InputFieldSlotProps };
//# sourceMappingURL=input-field.d.ts.map