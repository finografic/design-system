import { ChevronDownIcon, ChevronUpIcon } from '@finografic/icons';

import { NumberInput as ArkNumberInput } from '@ark-ui/react';
import { cx } from '@styled-system/css';
import { forwardRef, type ReactNode } from 'react';
import type { FieldError } from 'react-hook-form';

import type { InputNumberVariants } from './input-number.recipe';
import { inputNumberRecipe } from './input-number.recipe';

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
export type InputNumberProps = InputNumberVariants & {
  // ── Value ────────────────────────────────────────────────────────────────
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

  // ── Constraints ──────────────────────────────────────────────────────────
  min?: number;
  max?: number;
  step?: number;
  /** Decimal places shown and allowed. Default: any */
  precision?: number;

  // ── Formatting ───────────────────────────────────────────────────────────
  /** Intl.NumberFormat locale (e.g. 'en-US', 'de-DE'). Default: navigator.language */
  locale?: string;
  /** Extra Intl.NumberFormat options (e.g. { style: 'currency', currency: 'USD' }) */
  formatOptions?: Intl.NumberFormatOptions;

  // ── Decoration ───────────────────────────────────────────────────────────
  /** Content rendered before the input (e.g. "$", "€", an icon) */
  prefix?: ReactNode;
  /** Content rendered after the input (e.g. "%", "kg", "lbs") */
  suffix?: ReactNode;
  /** Show increment/decrement stepper buttons. Default: true */
  showStepper?: boolean;

  // ── Label / validation ───────────────────────────────────────────────────
  label?: ReactNode;
  error?: FieldError | string;

  // ── HTML ─────────────────────────────────────────────────────────────────
  id?: string;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  className?: string;
};

export const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      onValueCommit,
      onValueInvalid,
      onBlur,
      name,
      min,
      max,
      step = 1,
      precision,
      locale,
      formatOptions,
      prefix,
      suffix,
      showStepper = true,
      label,
      error,
      id,
      disabled,
      readOnly,
      placeholder,
      size = 'md',
      className,
    },
    ref,
  ) => {
    const styles = inputNumberRecipe({ size });
    const errorMessage = typeof error === 'string' ? error : error?.message;

    const resolvedFormatOptions: Intl.NumberFormatOptions = {
      maximumFractionDigits: precision,
      minimumFractionDigits: precision,
      ...formatOptions,
    };

    return (
      <ArkNumberInput.Root
        id={id}
        name={name}
        value={value !== undefined ? String(value) : undefined}
        defaultValue={defaultValue !== undefined ? String(defaultValue) : undefined}
        onValueChange={({ value: v, valueAsNumber }) => onChange?.(v, valueAsNumber)}
        onValueCommit={({ value: v, valueAsNumber }) => onValueCommit?.(v, valueAsNumber)}
        onValueInvalid={({ reason }) => onValueInvalid?.(reason)}
        min={min}
        max={max}
        step={step}
        locale={locale}
        formatOptions={resolvedFormatOptions}
        disabled={disabled}
        readOnly={readOnly}
        invalid={Boolean(errorMessage)}
        className={cx(styles.root, className)}
      >
        {label && <ArkNumberInput.Label className={styles.label}>{label}</ArkNumberInput.Label>}

        <ArkNumberInput.Control className={styles.control}>
          {prefix && <span className={styles.prefix}>{prefix}</span>}

          <ArkNumberInput.Input
            ref={ref}
            onBlur={onBlur}
            placeholder={placeholder}
            className={styles.input}
          />

          {suffix && <span className={styles.suffix}>{suffix}</span>}

          {showStepper && (
            <>
              <ArkNumberInput.DecrementTrigger className={styles.decrementTrigger} aria-label="Decrement">
                <ChevronDownIcon className="icon icon-sm" aria-hidden />
              </ArkNumberInput.DecrementTrigger>
              <ArkNumberInput.IncrementTrigger className={styles.incrementTrigger} aria-label="Increment">
                <ChevronUpIcon className="icon icon-sm" aria-hidden />
              </ArkNumberInput.IncrementTrigger>
            </>
          )}
        </ArkNumberInput.Control>

        {errorMessage && (
          <span role="alert" className={styles.errorText}>
            {errorMessage}
          </span>
        )}
      </ArkNumberInput.Root>
    );
  },
);

InputNumber.displayName = 'InputNumber';
