import { InputNumberVariants } from "./input-number.recipe.js";
import * as _$react from "react";
import { ReactNode } from "react";
import { FieldError } from "react-hook-form";

//#region src/forms/input-number/input-number.d.ts
/**
 * Numeric stepper input — Ark `NumberInput` wired to `inputNumberRecipe`.
 *
 * **Stepper layout:** increment (↑) and decrement (↓) buttons are stacked vertically as an absolute column on
 * the right edge of the control.
 *
 * **Adornments:** `prefix` renders at the left edge, `suffix` at the right edge (left of the stepper). Any
 * ReactNode is accepted — text, icons, or strings. Use `palette` to tint the adornment background and text
 * color to convey meaning.
 *
 * `onChange` is simplified from Ark's `onValueChange` detail — receives `(value: string, valueAsNumber:
 * number)` directly. `valueAsNumber` is `NaN` when the input is empty.
 *
 * @example
 *
 * ```tsx
 * // Basic
 * <InputNumber label="Quantity" value={qty} onChange={(_, n) => setQty(n)} min={0} max={100} />
 *
 * // Currency prefix
 * <InputNumber prefix="$" suffix="USD" value={price} onChange={(_, n) => setPrice(n)} />
 *
 * // Colored unit suffix (e.g. temperature)
 * <InputNumber suffix="°C" palette="info" value={temp} onChange={(_, n) => setTemp(n)} />
 *
 * // Danger palette to signal out-of-range
 * <InputNumber suffix="°C" palette="danger" value={temp} onChange={(_, n) => setTemp(n)} />
 * ```
 */
type InputNumberProps = InputNumberVariants & {
  value?: number;
  defaultValue?: number;
  /**
   * Called on every keystroke — receives the raw string value and its parsed number. `valueAsNumber` is `NaN`
   * when the field is empty or the text is not a valid number.
   */
  onChange?: (value: string, valueAsNumber: number) => void;
  /**
   * Called when the value is committed (Enter, blur, stepper click). Receives the same `(value,
   * valueAsNumber)` shape as `onChange`.
   */
  onValueCommit?: (value: string, valueAsNumber: number) => void;
  /**
   * Called when a submitted value is out of range or otherwise invalid. `reason` is one of: `'rangeUnderflow'
   * | 'rangeOverflow' | 'stepMismatch' | 'typeMismatch'`.
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
declare const InputNumber: _$react.ForwardRefExoticComponent<{
  size?: "sm" | "md" | "lg" | undefined;
  palette?: "primary" | "success" | "warning" | "danger" | "info" | "default" | undefined;
} & {
  value?: number;
  defaultValue?: number;
  /**
   * Called on every keystroke — receives the raw string value and its parsed number. `valueAsNumber` is `NaN`
   * when the field is empty or the text is not a valid number.
   */
  onChange?: (value: string, valueAsNumber: number) => void;
  /**
   * Called when the value is committed (Enter, blur, stepper click). Receives the same `(value,
   * valueAsNumber)` shape as `onChange`.
   */
  onValueCommit?: (value: string, valueAsNumber: number) => void;
  /**
   * Called when a submitted value is out of range or otherwise invalid. `reason` is one of: `'rangeUnderflow'
   * | 'rangeOverflow' | 'stepMismatch' | 'typeMismatch'`.
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
} & _$react.RefAttributes<HTMLInputElement>>;
//#endregion
export { InputNumber, InputNumberProps };
//# sourceMappingURL=input-number.d.ts.map