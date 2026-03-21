import { Switch as ArkSwitch } from '@ark-ui/react';
import { cx } from '@styled-system/css';
import { createStyleContext } from '@styled-system/jsx';
import { forwardRef, type ReactNode } from 'react';
import type { FieldError } from 'react-hook-form';

import { switchRecipe } from './switch.recipe';
import type { SwitchVariants } from './switch.types';

// ── Styled compound (matches Checkbox + `createStyleContext` pattern) ─────────

const { withProvider, withContext } = createStyleContext(switchRecipe);

export const Switch = {
  Root: withProvider(ArkSwitch.Root, 'root'),
  Control: withContext(ArkSwitch.Control, 'control'),
  Thumb: withContext(ArkSwitch.Thumb, 'thumb'),
  Label: withContext(ArkSwitch.Label, 'label'),
  HiddenInput: ArkSwitch.HiddenInput,
};

// ── LabeledSwitch — form wrapper (label / description / error) ───────────────

export interface LabeledSwitchClassNames {
  root?: string;
  control?: string;
  thumb?: string;
  label?: string;
  description?: string;
  errorText?: string;
}

export type LabeledSwitchProps = SwitchVariants & {
  label?: ReactNode;
  description?: ReactNode;
  error?: FieldError | string;
  checked?: boolean;
  onCheckedChange?: (details: { checked: boolean }) => void;
  onBlur?: () => void;
  name?: string;
  disabled?: boolean;
  /** Merged onto the root slot after recipe classes */
  className?: string;
  /** @deprecated Prefer `classNames.control` */
  controlClassName?: string;
  classNames?: LabeledSwitchClassNames;
};

export const LabeledSwitch = forwardRef<HTMLLabelElement, LabeledSwitchProps>(
  (
    {
      label,
      description,
      error,
      checked,
      onCheckedChange,
      onBlur,
      name,
      disabled,
      size = 'md',
      palette = 'primary',
      className,
      controlClassName,
      classNames = {},
    },
    ref,
  ) => {
    const cls = switchRecipe({ size, palette });
    const errorMessage = typeof error === 'string' ? error : error?.message;

    const rootClass = cx(cls.root, classNames.root, className);
    const controlClass = cx(cls.control, classNames.control, controlClassName);
    const thumbClass = cx(cls.thumb, classNames.thumb);

    return (
      <ArkSwitch.Root
        ref={ref}
        name={name}
        checked={checked}
        onCheckedChange={onCheckedChange}
        onBlur={onBlur}
        disabled={disabled}
        data-size={size}
        className={rootClass}
      >
        <ArkSwitch.Control className={controlClass}>
          <ArkSwitch.Thumb className={thumbClass} />
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

LabeledSwitch.displayName = 'LabeledSwitch';
