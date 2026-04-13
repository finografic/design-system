import { EyeOffIcon, EyeOnIcon } from '@finografic/icons';

import { PasswordInput as ArkPasswordInput } from '@ark-ui/react';
import { cx } from '@styled-system/css';
import { createStyleContext } from '@styled-system/jsx';
import { forwardRef, type ReactNode } from 'react';
import type { FieldError } from 'react-hook-form';

import type { InputPasswordRecipeProps } from './input-password.recipe';
import { inputPasswordRecipe } from './input-password.recipe';

// ── Compound (createStyleContext) ─────────────────────────────────────────────

const { withProvider, withContext } = createStyleContext(inputPasswordRecipe);

/**
 * Styled Ark **PasswordInput** compound — each part is wired to `inputPasswordRecipe` via context.
 *
 * Provides a text/password toggle with accessible visibility trigger. Ark manages the `data-state="visible" |
 * "hidden"` attribute on the root and controls the input type. Variant props (`size`) go on
 * **`InputPassword.Root`**.
 *
 * @example
 *   ```tsx
 *   import { InputPassword } from '@finografic/design-system/forms';
 *
 *   <InputPassword.Root size="md">
 *     <InputPassword.Label>Password</InputPassword.Label>
 *     <InputPassword.Control>
 *       <InputPassword.Input placeholder="Enter password" />
 *       <InputPassword.VisibilityTrigger>
 *         <InputPassword.Context>
 *           {({ visible }) => (visible ? <EyeOffIcon /> : <EyeOnIcon />)}
 *         </InputPassword.Context>
 *       </InputPassword.VisibilityTrigger>
 *     </InputPassword.Control>
 *   </InputPassword.Root>;
 *   ```;
 */
export const InputPassword = {
  /** Root — `disabled`, `invalid`, `readOnly`, `required`, plus `size`. */
  Root: withProvider(ArkPasswordInput.Root, 'root'),
  /** Root with external machine state from `usePasswordInput`. */
  RootProvider: withProvider(ArkPasswordInput.RootProvider, 'root'),
  /** Optional text label above the control. */
  Label: withContext(ArkPasswordInput.Label, 'label'),
  /** Input + visibility toggle wrapper. */
  Control: withContext(ArkPasswordInput.Control, 'control'),
  /** The password/text input field. */
  Input: withContext(ArkPasswordInput.Input, 'input'),
  /** Eye toggle button — switches between showing and hiding the password. */
  VisibilityTrigger: withContext(ArkPasswordInput.VisibilityTrigger, 'visibilityTrigger'),
  /** Render prop — exposes machine context (e.g. `visible`) to children; no DOM, no recipe slot. */
  Context: ArkPasswordInput.Context,
};

// ── InputPasswordDS — convenience wrapper ─────────────────────────────────────

/** Slot class overrides for {@link InputPasswordDS}. */
export interface InputPasswordDSClassNames {
  root?: string;
  label?: string;
  control?: string;
  input?: string;
  visibilityTrigger?: string;
  description?: string;
  errorText?: string;
}

export type InputPasswordDSProps = InputPasswordRecipeProps & {
  /** Current value (controlled). */
  value?: string;
  /** Default value (uncontrolled). */
  defaultValue?: string;
  /** Placeholder text. */
  placeholder?: string;
  /** Called when the input value changes. */
  onChange?: (value: string) => void;
  /** Called when the input loses focus. */
  onBlur?: () => void;
  /** Called when the input gains focus. */
  onFocus?: () => void;
  /** Disables the input. */
  disabled?: boolean;
  /** Makes the input read-only. */
  readOnly?: boolean;
  /** Marks the input as required. */
  required?: boolean;
  /** Marks the input as invalid. */
  invalid?: boolean;
  /** Native input name for form submission. */
  name?: string;
  /** Native input id. */
  id?: string;
  /** Label rendered above the control. */
  label?: ReactNode;
  /** Helper text rendered below the control. */
  description?: ReactNode;
  /** RHF FieldError or plain string — renders an error message. */
  error?: FieldError | string;
  /** Per-slot class overrides. */
  classNames?: InputPasswordDSClassNames;
};

/**
 * Design-system convenience password input — label, description, error, and eye toggle included.
 * **`InputPassword`** stays the styled compound for full composition; **`InputPasswordDS`** = packaged DS API
 * (`onChange(value: string)` from the native input event).
 *
 * @example
 *   ```tsx
 *   import { InputPasswordDS } from '@finografic/design-system/forms';
 *
 *   <InputPasswordDS
 *     label="Password"
 *     placeholder="Enter your password"
 *     onChange={(value) => setPassword(value)}
 *     error={errors.password}
 *   />;
 *   ```;
 */
export const InputPasswordDS = forwardRef<HTMLDivElement, InputPasswordDSProps>(
  (
    {
      value,
      defaultValue,
      placeholder,
      onChange,
      onBlur,
      onFocus,
      disabled,
      readOnly,
      required,
      invalid,
      name,
      id,
      label,
      description,
      error,
      size = 'md',
      classNames = {},
    },
    ref,
  ) => {
    const styles = inputPasswordRecipe({ size });
    const errorMessage = typeof error === 'string' ? error : error?.message;

    return (
      <ArkPasswordInput.Root
        ref={ref}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        invalid={invalid}
        className={cx(styles.root, classNames.root)}
      >
        {label && (
          <ArkPasswordInput.Label htmlFor={id} className={cx(styles.label, classNames.label)}>
            {label}
          </ArkPasswordInput.Label>
        )}

        <ArkPasswordInput.Control className={cx(styles.control, classNames.control)}>
          <ArkPasswordInput.Input
            id={id}
            name={name}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            onChange={(e) => onChange?.(e.target.value)}
            onBlur={() => onBlur?.()}
            onFocus={() => onFocus?.()}
            className={cx(styles.input, classNames.input)}
          />
          <ArkPasswordInput.VisibilityTrigger
            className={cx(styles.visibilityTrigger, classNames.visibilityTrigger)}
            aria-label="Toggle password visibility"
          >
            <ArkPasswordInput.Context>
              {({ visible }) => (visible ? <EyeOffIcon aria-hidden /> : <EyeOnIcon aria-hidden />)}
            </ArkPasswordInput.Context>
          </ArkPasswordInput.VisibilityTrigger>
        </ArkPasswordInput.Control>

        {(description || errorMessage) && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {description && <span className={cx(styles.label, classNames.description)}>{description}</span>}
            {errorMessage && (
              <span
                className={classNames.errorText}
                role="alert"
                style={{ color: 'var(--colors-danger-solid)', fontSize: 'var(--font-sizes-sm)' }}
              >
                {errorMessage}
              </span>
            )}
          </div>
        )}
      </ArkPasswordInput.Root>
    );
  },
);

InputPasswordDS.displayName = 'InputPasswordDS';

export type { PasswordInputVisibilityChangeDetails } from '@ark-ui/react';
