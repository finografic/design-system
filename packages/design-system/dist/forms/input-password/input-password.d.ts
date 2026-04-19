import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { InputPasswordRecipeProps } from "./input-password.recipe.js";
import * as _$react from "react";
import { ReactNode } from "react";
import { PasswordInput, PasswordInputVisibilityChangeDetails } from "@ark-ui/react";
import * as _$_styled_system_jsx0 from "@styled-system/jsx";
import { FieldError } from "react-hook-form";

//#region src/forms/input-password/input-password.d.ts
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
declare const InputPassword: {
  /** Root — `disabled`, `invalid`, `readOnly`, `required`, plus `size`. */Root: _$_styled_system_jsx0.StyleContextProvider<_$react.ForwardRefExoticComponent<PasswordInput.RootProps & _$react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"root" | "control" | "label" | "input" | "visibilityTrigger", {
    size: {
      sm: {
        control: {
          h: "9";
        };
        input: {
          fontSize: "sm";
          pl: "3";
          pr: "1";
        };
        visibilityTrigger: {
          w: "7";
          h: "7";
        };
      };
      md: {
        control: {
          h: "10";
        };
        input: {
          fontSize: "sm";
          pl: "3";
          pr: "1";
        };
        visibilityTrigger: {
          w: "8";
          h: "8";
        };
      };
      lg: {
        control: {
          h: "12";
        };
        input: {
          fontSize: "md";
          pl: "4";
          pr: "1";
        };
        visibilityTrigger: {
          w: "10";
          h: "10";
        };
      };
    };
  }>>; /** Root with external machine state from `usePasswordInput`. */
  RootProvider: _$_styled_system_jsx0.StyleContextProvider<_$react.ForwardRefExoticComponent<PasswordInput.RootProviderProps & _$react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"root" | "control" | "label" | "input" | "visibilityTrigger", {
    size: {
      sm: {
        control: {
          h: "9";
        };
        input: {
          fontSize: "sm";
          pl: "3";
          pr: "1";
        };
        visibilityTrigger: {
          w: "7";
          h: "7";
        };
      };
      md: {
        control: {
          h: "10";
        };
        input: {
          fontSize: "sm";
          pl: "3";
          pr: "1";
        };
        visibilityTrigger: {
          w: "8";
          h: "8";
        };
      };
      lg: {
        control: {
          h: "12";
        };
        input: {
          fontSize: "md";
          pl: "4";
          pr: "1";
        };
        visibilityTrigger: {
          w: "10";
          h: "10";
        };
      };
    };
  }>>; /** Optional text label above the control. */
  Label: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<PasswordInput.LabelProps & _$react.RefAttributes<HTMLLabelElement>>>; /** Input + visibility toggle wrapper. */
  Control: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<PasswordInput.ControlProps & _$react.RefAttributes<HTMLDivElement>>>; /** The password/text input field. */
  Input: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<PasswordInput.InputProps & _$react.RefAttributes<HTMLInputElement>>>; /** Eye toggle button — switches between showing and hiding the password. */
  VisibilityTrigger: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<PasswordInput.VisibilityTriggerProps & _$react.RefAttributes<HTMLButtonElement>>>; /** Render prop — exposes machine context (e.g. `visible`) to children; no DOM, no recipe slot. */
  Context: (props: PasswordInput.ContextProps) => ReactNode;
};
/** Slot class overrides for {@link InputPasswordDS}. */
interface InputPasswordDSClassNames {
  root?: string;
  label?: string;
  control?: string;
  input?: string;
  visibilityTrigger?: string;
  description?: string;
  errorText?: string;
}
type InputPasswordDSProps = InputPasswordRecipeProps & {
  /** Current value (controlled). */value?: string; /** Default value (uncontrolled). */
  defaultValue?: string; /** Placeholder text. */
  placeholder?: string; /** Called when the input value changes. */
  onChange?: (value: string) => void; /** Called when the input loses focus. */
  onBlur?: () => void; /** Called when the input gains focus. */
  onFocus?: () => void; /** Disables the input. */
  disabled?: boolean; /** Makes the input read-only. */
  readOnly?: boolean; /** Marks the input as required. */
  required?: boolean; /** Marks the input as invalid. */
  invalid?: boolean; /** Native input name for form submission. */
  name?: string; /** Native input id. */
  id?: string; /** Label rendered above the control. */
  label?: ReactNode; /** Helper text rendered below the control. */
  description?: ReactNode; /** RHF FieldError or plain string — renders an error message. */
  error?: FieldError | string; /** Per-slot class overrides. */
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
declare const InputPasswordDS: _$react.ForwardRefExoticComponent<{
  size?: "sm" | "md" | "lg" | undefined;
} & {
  /** Current value (controlled). */value?: string; /** Default value (uncontrolled). */
  defaultValue?: string; /** Placeholder text. */
  placeholder?: string; /** Called when the input value changes. */
  onChange?: (value: string) => void; /** Called when the input loses focus. */
  onBlur?: () => void; /** Called when the input gains focus. */
  onFocus?: () => void; /** Disables the input. */
  disabled?: boolean; /** Makes the input read-only. */
  readOnly?: boolean; /** Marks the input as required. */
  required?: boolean; /** Marks the input as invalid. */
  invalid?: boolean; /** Native input name for form submission. */
  name?: string; /** Native input id. */
  id?: string; /** Label rendered above the control. */
  label?: ReactNode; /** Helper text rendered below the control. */
  description?: ReactNode; /** RHF FieldError or plain string — renders an error message. */
  error?: FieldError | string; /** Per-slot class overrides. */
  classNames?: InputPasswordDSClassNames;
} & _$react.RefAttributes<HTMLDivElement>>;
//#endregion
export { InputPassword, InputPasswordDS, InputPasswordDSClassNames, InputPasswordDSProps, type PasswordInputVisibilityChangeDetails };
//# sourceMappingURL=input-password.d.ts.map