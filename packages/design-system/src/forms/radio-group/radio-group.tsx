import { RadioGroup as ArkRadioGroup } from '@ark-ui/react';
import { css, cx } from '@styled-system/css';
import { createStyleContext } from '@styled-system/jsx';
import { forwardRef, type ReactNode } from 'react';
import type { FieldError } from 'react-hook-form';

import type { RadioGroupVariants } from './radio-group.recipe';
import { radioGroupRecipe } from './radio-group.recipe';

// ── Compound (createStyleContext) ─────────────────────────────────────────────

const { withProvider, withContext } = createStyleContext(radioGroupRecipe);

/**
 * Styled Ark **RadioGroup** compound — each part is wired to `radioGroupRecipe` via context.
 *
 * Supports `size` (sm | md | lg), `variant` (default | card), and
 * `orientation` (vertical | horizontal) via `RadioGroup.Root`.
 * Ark manages keyboard navigation, focus management, and ARIA.
 *
 * @example
 * ```tsx
 * import { RadioGroup } from '@finografic/design-system/forms';
 *
 * <RadioGroup.Root name="plan" size="md" value={plan} onValueChange={({ value }) => setPlan(value)}>
 *   <RadioGroup.Label>Billing plan</RadioGroup.Label>
 *   {options.map((opt) => (
 *     <RadioGroup.Item key={opt.value} value={opt.value}>
 *       <RadioGroup.ItemControl>
 *         <RadioGroup.Indicator />
 *       </RadioGroup.ItemControl>
 *       <RadioGroup.ItemText>{opt.label}</RadioGroup.ItemText>
 *       <RadioGroup.ItemHiddenInput />
 *     </RadioGroup.Item>
 *   ))}
 * </RadioGroup.Root>
 * ```
 */
export const RadioGroup = {
  /** Root — accepts `size`, `variant`, and `orientation` variants; value state and `onValueChange`. */
  Root: withProvider(ArkRadioGroup.Root, 'root'),
  /** Root with external machine state from `useRadioGroup`. */
  RootProvider: withProvider(ArkRadioGroup.RootProvider, 'root'),
  /** Group label above the options. */
  Label: withContext(ArkRadioGroup.Label, 'label'),
  /** Clickable row wrapping control + text. */
  Item: withContext(ArkRadioGroup.Item, 'item'),
  /** The radio circle (border + checked fill). */
  ItemControl: withContext(ArkRadioGroup.ItemControl, 'itemControl'),
  /** Hidden native input for form submission. */
  ItemHiddenInput: ArkRadioGroup.ItemHiddenInput,
  /** The inner dot shown when checked. */
  Indicator: withContext(ArkRadioGroup.Indicator, 'indicator'),
  /** Primary label text for the option. */
  ItemText: withContext(ArkRadioGroup.ItemText, 'itemText'),
  /** Secondary description text for the option. */
  ItemDescription: withContext('span' as unknown as typeof ArkRadioGroup.Label, 'itemDescription'),
};

export type { RadioGroupRootProps } from '@ark-ui/react';

// ── RadioGroupDS — convenience wrapper ───────────────────────────────────────

const textColumnStyle = css({ display: 'flex', flexDirection: 'column', gap: '0.5' });

/** A single option descriptor for {@link RadioGroupDS}. */
export interface RadioGroupDSOption {
  value: string;
  label: ReactNode;
  /** Secondary description rendered below the label. */
  description?: ReactNode;
  disabled?: boolean;
}

/** Slot class overrides for {@link RadioGroupDS}. */
export interface RadioGroupDSClassNames {
  root?: string;
  label?: string;
  item?: string;
  itemControl?: string;
  indicator?: string;
  itemText?: string;
  itemDescription?: string;
  description?: string;
  errorText?: string;
}

export type RadioGroupDSProps = RadioGroupVariants & {
  /** The selectable options. */
  options: RadioGroupDSOption[];
  /** Controlled selected value. */
  value?: string;
  /** Default selected value (uncontrolled). */
  defaultValue?: string;
  /** Called when the selected value changes. */
  onChange?: (value: string) => void;
  /** Field label rendered above the options. */
  label?: ReactNode;
  /** Helper text rendered below the options. */
  description?: ReactNode;
  /** RHF FieldError or plain string. */
  error?: FieldError | string;
  name?: string;
  disabled?: boolean;
  /** Merged onto the root slot after recipe classes. */
  className?: string;
  /** Per-slot class overrides. */
  classNames?: RadioGroupDSClassNames;
};

/**
 * Design-system convenience radio group — label, options array, description, and error included.
 * **`RadioGroup`** stays the styled compound; **`RadioGroupDS`** = packaged DS API
 * (`onChange(value: string)` instead of Ark's `onValueChange` detail object).
 *
 * @example
 * ```tsx
 * import { RadioGroupDS } from '@finografic/design-system/forms';
 *
 * <RadioGroupDS
 *   label="Billing plan"
 *   value={plan}
 *   onChange={setPlan}
 *   options={[
 *     { value: 'free', label: 'Free', description: 'Up to 3 projects' },
 *     { value: 'pro', label: 'Pro', description: 'Unlimited projects' },
 *   ]}
 * />
 * ```
 */
export const RadioGroupDS = forwardRef<HTMLDivElement, RadioGroupDSProps>(
  (
    {
      options,
      value,
      defaultValue,
      onChange,
      label,
      description,
      error,
      name,
      disabled,
      size = 'md',
      variant = 'default',
      orientation = 'vertical',
      className,
      classNames = {},
    },
    ref,
  ) => {
    const styles = radioGroupRecipe({ size, variant, orientation });
    const errorMessage = typeof error === 'string' ? error : error?.message;

    return (
      <ArkRadioGroup.Root
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        onValueChange={({ value: v }) => v != null && onChange?.(v)}
        name={name}
        disabled={disabled}
        orientation={orientation}
        data-invalid={errorMessage ? 'true' : undefined}
        className={cx(styles.root, classNames.root, className)}
      >
        {label && (
          <ArkRadioGroup.Label className={cx(styles.label, classNames.label)}>
            {label}
          </ArkRadioGroup.Label>
        )}

        {options.map((opt) => (
          <ArkRadioGroup.Item
            key={opt.value}
            value={opt.value}
            disabled={opt.disabled}
            className={cx(styles.item, classNames.item)}
          >
            <ArkRadioGroup.ItemControl className={cx(styles.itemControl, classNames.itemControl)}>
              <ArkRadioGroup.Indicator className={cx(styles.indicator, classNames.indicator)} />
            </ArkRadioGroup.ItemControl>

            <div>
              <ArkRadioGroup.ItemText className={cx(styles.itemText, classNames.itemText)}>
                {opt.label}
              </ArkRadioGroup.ItemText>
              {opt.description && (
                <span className={cx(styles.itemDescription, classNames.itemDescription)}>
                  {opt.description}
                </span>
              )}
            </div>

            <ArkRadioGroup.ItemHiddenInput />
          </ArkRadioGroup.Item>
        ))}

        {(description || errorMessage) && (
          <div className={textColumnStyle}>
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
      </ArkRadioGroup.Root>
    );
  },
);

RadioGroupDS.displayName = 'RadioGroupDS';
