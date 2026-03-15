import { SwitchVariants } from "./switch.types.js";
import * as react from "react";
import { ReactNode } from "react";
import { Switch } from "@ark-ui/react";
import { FieldError } from "react-hook-form";

//#region src/forms/switch/switch.d.ts
declare const Switch$1: typeof Switch;
type SwitchFieldProps = SwitchVariants & {
  label?: ReactNode;
  description?: ReactNode;
  error?: FieldError | string;
  checked?: boolean;
  onCheckedChange?: (details: {
    checked: boolean;
  }) => void;
  onBlur?: () => void;
  name?: string;
  disabled?: boolean;
  className?: string;
  controlClassName?: string;
};
declare const SwitchField: react.ForwardRefExoticComponent<{
  size?: "sm" | "md" | "lg" | undefined;
} & {
  label?: ReactNode;
  description?: ReactNode;
  error?: FieldError | string;
  checked?: boolean;
  onCheckedChange?: (details: {
    checked: boolean;
  }) => void;
  onBlur?: () => void;
  name?: string;
  disabled?: boolean;
  className?: string;
  controlClassName?: string;
} & react.RefAttributes<HTMLLabelElement>>;
//#endregion
export { Switch$1 as Switch, SwitchField, SwitchFieldProps };
//# sourceMappingURL=switch.d.ts.map