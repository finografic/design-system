import { InputNumberVariants } from "./input-number.types.js";
import * as react from "react";
import { ReactNode } from "react";
import { FieldError } from "react-hook-form";

//#region src/forms/input-number/input-number.d.ts
type InputNumberProps = InputNumberVariants & {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number | null) => void;
  onBlur?: () => void;
  name?: string;
  min?: number;
  max?: number;
  step?: number; /** Decimal places shown and allowed. Default: any */
  precision?: number; /** Intl.NumberFormat locale (e.g. 'en-US', 'de-DE'). Default: navigator.language */
  locale?: string; /** Extra Intl.NumberFormat options (e.g. { style: 'currency', currency: 'USD' }) */
  formatOptions?: Intl.NumberFormatOptions; /** Content rendered before the input (e.g. "$", "€", an icon) */
  prefix?: ReactNode; /** Content rendered after the input (e.g. "%", "kg", "lbs") */
  suffix?: ReactNode; /** Show increment/decrement stepper buttons. Default: true */
  showStepper?: boolean;
  label?: ReactNode;
  error?: FieldError | string;
  id?: string;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  className?: string;
};
declare const InputNumber: react.ForwardRefExoticComponent<{
  size?: "sm" | "md" | "lg" | undefined;
} & {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number | null) => void;
  onBlur?: () => void;
  name?: string;
  min?: number;
  max?: number;
  step?: number; /** Decimal places shown and allowed. Default: any */
  precision?: number; /** Intl.NumberFormat locale (e.g. 'en-US', 'de-DE'). Default: navigator.language */
  locale?: string; /** Extra Intl.NumberFormat options (e.g. { style: 'currency', currency: 'USD' }) */
  formatOptions?: Intl.NumberFormatOptions; /** Content rendered before the input (e.g. "$", "€", an icon) */
  prefix?: ReactNode; /** Content rendered after the input (e.g. "%", "kg", "lbs") */
  suffix?: ReactNode; /** Show increment/decrement stepper buttons. Default: true */
  showStepper?: boolean;
  label?: ReactNode;
  error?: FieldError | string;
  id?: string;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  className?: string;
} & react.RefAttributes<HTMLInputElement>>;
//#endregion
export { InputNumber, InputNumberProps };
//# sourceMappingURL=input-number.d.ts.map