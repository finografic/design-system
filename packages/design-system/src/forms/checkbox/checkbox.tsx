import { CheckIcon, MinusIcon } from '@finografic/icons';
import { Checkbox as ArkCheckbox } from '@ark-ui/react';
import { css, cx } from '@styled-system/css';
import { createStyleContext } from '@styled-system/jsx';
import { forwardRef } from 'react';
import type { CheckboxVariants } from './checkbox.recipe';
import type { ReactNode } from 'react';
import type { FieldError } from 'react-hook-form';

import { checkboxRecipe } from './checkbox.recipe';

// ── Compound (createStyleContext) ─────────────────────────────────────────────

const { withProvider, withContext } = createStyleContext(checkboxRecipe);

/**
 * Styled Ark **Checkbox** compound — each part is wired to `checkboxRecipe` via context.
 *
 * Pass **`size`** and **`palette`** on `Root` so slot styles resolve. Control state and handlers (`checked`,
 * `onCheckedChange`, `disabled`, `name`) also go on **`Root`**.
 *
 * @example
 *   ```tsx
 *   <Checkbox.Root
 *     size="md"
 *     palette="success"
 *     checked={checked}
 *     onCheckedChange={({ checked }) => setChecked(checked)}
 *   >
 *     <Checkbox.Control>
 *       <Checkbox.Indicator>
 *         <CheckIcon aria-hidden />
 *       </Checkbox.Indicator>
 *     </Checkbox.Control>
 *     <Checkbox.Label>Accept terms</Checkbox.Label>
 *     <Checkbox.HiddenInput />
 *   </Checkbox.Root>;
 *   ```;
 */
export const Checkbox = {
  /** Root — controlled state, handlers, and recipe variants (`size`, `palette`). */
  Root: withProvider(ArkCheckbox.Root, 'root'),
  /** Box + hit target; receives `control` slot classes from context. */
  Control: withContext(ArkCheckbox.Control, 'control'),
  /** Icon container; receives `indicator` slot classes from context. */
  Indicator: withContext(ArkCheckbox.Indicator, 'indicator'),
  /** Text label; receives `label` slot classes from context. */
  Label: withContext(ArkCheckbox.Label, 'label'),
  /** Native input for forms; no recipe slot. */
  HiddenInput: ArkCheckbox.HiddenInput,
};

// ── CheckboxDS — convenience wrapper ─────────────────────────────────────────

const textColumnStyle = css({ display: 'flex', flexDirection: 'column', gap: '0.5' });

/** Slot class overrides for {@link CheckboxDS}. */
export interface CheckboxDSClassNames {
  root?: string;
  control?: string;
  indicator?: string;
  label?: string;
  description?: string;
  errorText?: string;
}

export type CheckboxDSProps = CheckboxVariants & {
  /** Label text beside the checkbox */
  label?: ReactNode;
  /** Helper text below the label */
  description?: ReactNode;
  /** RHF FieldError or plain string */
  error?: FieldError | string;
  /** Controlled checked state */
  checked?: boolean | 'indeterminate';
  /** Value toggle — forwarded to Ark `onCheckedChange` internally. */
  onChange?: (checked: boolean | 'indeterminate') => void;
  onBlur?: () => void;
  name?: string;
  disabled?: boolean;
  /** Custom indicator icon; defaults to CheckIcon / MinusIcon */
  indicator?: ReactNode;
  /** Merged onto the root slot after recipe classes. */
  className?: string;
  /** Per-slot class overrides */
  classNames?: CheckboxDSClassNames;
};

/**
 * Design-system convenience checkbox — label, description, and error text included. **`Checkbox`** stays the
 * styled compound; **`CheckboxDS`** = packaged DS API (`onChange(checked)`; bare **`Checkbox.Root`** still
 * uses Ark's `onCheckedChange`).
 */
export const CheckboxDS = forwardRef<HTMLLabelElement, CheckboxDSProps>(
  (
    {
      label,
      description,
      error,
      checked,
      onChange,
      onBlur,
      name,
      disabled,
      size = 'md',
      palette = 'primary',
      indicator,
      className,
      classNames = {},
    },
    ref,
  ) => {
    const styles = checkboxRecipe({ size, palette });
    const errorMessage = typeof error === 'string' ? error : error?.message;

    return (
      <ArkCheckbox.Root
        ref={ref}
        checked={checked}
        onCheckedChange={(details) => onChange?.(details.checked)}
        onBlur={onBlur}
        name={name}
        disabled={disabled}
        data-size={size}
        data-invalid={errorMessage ? 'true' : undefined}
        className={cx(styles.root, classNames.root, className)}
      >
        <ArkCheckbox.Control className={cx(styles.control, classNames.control)}>
          <ArkCheckbox.Indicator className={cx(styles.indicator, classNames.indicator)}>
            {indicator ?? (
              <>
                <CheckIcon className="icon" aria-hidden />
                <MinusIcon className="icon" aria-hidden data-indeterminate />
              </>
            )}
          </ArkCheckbox.Indicator>
        </ArkCheckbox.Control>

        {(label || description || errorMessage) && (
          <div className={textColumnStyle}>
            {label && (
              <ArkCheckbox.Label className={cx(styles.label, classNames.label)}>{label}</ArkCheckbox.Label>
            )}
            {description && (
              <span className={cx(styles.description, classNames.description)}>{description}</span>
            )}
            {errorMessage && (
              <span className={cx(styles.errorText, classNames.errorText)} role="alert">
                {errorMessage}
              </span>
            )}
          </div>
        )}

        <ArkCheckbox.HiddenInput />
      </ArkCheckbox.Root>
    );
  },
);

CheckboxDS.displayName = 'CheckboxDS';
