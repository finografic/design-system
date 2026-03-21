import { Switch as ArkSwitch } from '@ark-ui/react';
import { cx } from '@styled-system/css';
import { createStyleContext } from '@styled-system/jsx';
import { forwardRef, type ReactNode } from 'react';
import type { FieldError } from 'react-hook-form';

import { switchRecipe } from './switch.recipe';
import type { SwitchVariants } from './switch.types';

// ── Styled compound (matches Checkbox + `createStyleContext` pattern) ─────────

const { withProvider, withContext } = createStyleContext(switchRecipe);

/**
 * Styled Ark **Switch** compound — each part is wired to `switchRecipe` via context.
 *
 * **Anatomy:** put control props on **`Root`** (`checked`, `disabled`, `onCheckedChange`,
 * `name`, …). Ark UI uses the name `onCheckedChange` (detail object `{ checked }`), not
 * DOM `onChange` — same idea as a boolean toggle handler.
 *
 * Pass **`size`** and **`palette`** on `Root` so slot styles resolve.
 *
 * @example
 * ```tsx
 * <Switch.Root size="md" palette="primary" checked={on} onCheckedChange={({ checked }) => setOn(checked)}>
 *   <Switch.Control>
 *     <Switch.Thumb />
 *   </Switch.Control>
 *   <Switch.Label>Notifications</Switch.Label>
 * </Switch.Root>
 * ```
 */
export const Switch = {
  /** Root — controlled state, handlers, and recipe variants (`size`, `palette`). */
  Root: withProvider(ArkSwitch.Root, 'root'),
  /** Track + hit target; receives `control` slot classes from context. */
  Control: withContext(ArkSwitch.Control, 'control'),
  /** Knob; receives `thumb` slot classes from context. */
  Thumb: withContext(ArkSwitch.Thumb, 'thumb'),
  /** Text label; receives `label` slot classes from context. */
  Label: withContext(ArkSwitch.Label, 'label'),
  /** Native input for forms; no recipe slot. */
  HiddenInput: ArkSwitch.HiddenInput,
};

// ── SwitchDS — convenience wrapper (label / description / error) ─────────────

/** Slot class overrides for {@link SwitchDS}. */
export interface SwitchDSClassNames {
  root?: string;
  control?: string;
  thumb?: string;
  label?: string;
  description?: string;
  errorText?: string;
}

export type SwitchDSProps = SwitchVariants & {
  label?: ReactNode;
  description?: ReactNode;
  error?: FieldError | string;
  checked?: boolean;
  /** Boolean toggle — forwarded to Ark `onCheckedChange` internally. */
  onChange?: (checked: boolean) => void | Promise<void>;
  onBlur?: () => void;
  name?: string;
  disabled?: boolean;
  /** Merged onto the root slot after recipe classes */
  className?: string;
  classNames?: SwitchDSClassNames;
};

/**
 * Design-system convenience switch — label, description, and error text.
 * **`Switch`** stays the styled compound; **`*DS`** = packaged DS API (`onChange(checked)`;
 * bare **`Switch.Root`** still uses Ark’s `onCheckedChange`).
 */
export const SwitchDS = forwardRef<HTMLLabelElement, SwitchDSProps>(
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
      className,
      classNames = {},
    },
    ref,
  ) => {
    const cls = switchRecipe({ size, palette });
    const errorMessage = typeof error === 'string' ? error : error?.message;

    return (
      <ArkSwitch.Root
        ref={ref}
        name={name}
        checked={checked}
        onCheckedChange={(details) => {
          void onChange?.(details.checked);
        }}
        onBlur={onBlur}
        disabled={disabled}
        data-size={size}
        className={cx(cls.root, classNames.root, className)}
      >
        <ArkSwitch.Control className={cx(cls.control, classNames.control)}>
          <ArkSwitch.Thumb className={cx(cls.thumb, classNames.thumb)} />
        </ArkSwitch.Control>

        {(label || description || errorMessage) && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.125rem' }}>
            {label && (
              <ArkSwitch.Label className={cx(cls.label, classNames.label)}>
                {label}
              </ArkSwitch.Label>
            )}
            {description && (
              <span className={cx(cls.description, classNames.description)}>{description}</span>
            )}
            {errorMessage && (
              <span
                className={cx(cls.errorText, classNames.errorText)}
                role="alert"
              >
                {errorMessage}
              </span>
            )}
          </div>
        )}

        <ArkSwitch.HiddenInput />
      </ArkSwitch.Root>
    );
  },
);

SwitchDS.displayName = 'SwitchDS';
