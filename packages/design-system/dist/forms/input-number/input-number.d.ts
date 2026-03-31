import { InputNumberVariants } from "./input-number.recipe.js";
import * as react from "react";
import { ReactNode } from "react";
import { FieldError } from "react-hook-form";

//#region src/forms/input-number/input-number.d.ts
/**
 * Numeric stepper input — Ark `NumberInput` wired to `inputNumberRecipe`.
 *
 * Supports optional prefix/suffix decorations and increment/decrement stepper buttons.
 * Pass `onChange(value)` — simplified from Ark's `onValueChange` detail object.
 *
 * @example
 * ```tsx
 * <InputNumber
 *   label="Quantity"
 *   value={qty}
 *   onChange={setQty}
 *   min={0} max={100}
 *   prefix="$"
 *   size="md"
 * />
 * ```
 */
type InputNumberProps = InputNumberVariants & {
  value?: number;
  defaultValue?: number;
  /**
   * Called on every keystroke — receives the raw string value and its parsed number.
   * `valueAsNumber` is `NaN` when the field is empty or the text is not a valid number.
   */
  onChange?: (value: string, valueAsNumber: number) => void;
  /**
   * Called when the value is committed (Enter, blur, stepper click).
   * Receives the same `(value, valueAsNumber)` shape as `onChange`.
   */
  onValueCommit?: (value: string, valueAsNumber: number) => void;
  /**
   * Called when a submitted value is out of range or otherwise invalid.
   * `reason` is one of: `'rangeUnderflow' | 'rangeOverflow' | 'stepMismatch' | 'typeMismatch'`.
   */
  onValueInvalid?: (reason: string) => void;
  onBlur?: () => void;
  name?: string;
  min?: number;
  max?: number;
  step?: number; /** Decimal places shown and allowed. Default: any */
  precision?: number; /** Intl.NumberFormat locale (e.g. 'en-US', 'de-DE'). Default: navigator.language */
  locale?: string; /** Extra Intl.NumberFormat options (e.g. { style: 'currency', currency: 'USD' }) */
  formatOptions?: Intl.NumberFormatOptions; /** Content rendered at the left edge of the control (e.g. "$", an icon). */
  prefix?: ReactNode; /** Content rendered at the right edge of the control (e.g. "kg", "°C"). Sits left of the stepper buttons. */
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
  palette?: "primary" | "success" | "warning" | "danger" | "info" | "default" | undefined;
} & {
  value?: number;
  defaultValue?: number;
  /**
   * Called on every keystroke — receives the raw string value and its parsed number.
   * `valueAsNumber` is `NaN` when the field is empty or the text is not a valid number.
   */
  onChange?: (value: string, valueAsNumber: number) => void;
  /**
   * Called when the value is committed (Enter, blur, stepper click).
   * Receives the same `(value, valueAsNumber)` shape as `onChange`.
   */
  onValueCommit?: (value: string, valueAsNumber: number) => void;
  /**
   * Called when a submitted value is out of range or otherwise invalid.
   * `reason` is one of: `'rangeUnderflow' | 'rangeOverflow' | 'stepMismatch' | 'typeMismatch'`.
   */
  onValueInvalid?: (reason: string) => void;
  onBlur?: () => void;
  name?: string;
  min?: number;
  max?: number;
  step?: number; /** Decimal places shown and allowed. Default: any */
  precision?: number; /** Intl.NumberFormat locale (e.g. 'en-US', 'de-DE'). Default: navigator.language */
  locale?: string; /** Extra Intl.NumberFormat options (e.g. { style: 'currency', currency: 'USD' }) */
  formatOptions?: Intl.NumberFormatOptions; /** Content rendered at the left edge of the control (e.g. "$", an icon). */
  prefix?: ReactNode; /** Content rendered at the right edge of the control (e.g. "kg", "°C"). Sits left of the stepper buttons. */
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