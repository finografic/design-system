import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { CheckboxVariants } from "./checkbox.recipe.js";
import * as react from "react";
import { ReactNode } from "react";
import { Checkbox } from "@ark-ui/react";
import * as _styled_system_jsx0 from "@styled-system/jsx";
import { FieldError } from "react-hook-form";

//#region src/forms/checkbox/checkbox.d.ts
/**
 * Styled Ark **Checkbox** compound — each part is wired to `checkboxRecipe` via context.
 *
 * Pass **`size`** on `Root` so slot styles resolve. Control state and handlers
 * (`checked`, `onCheckedChange`, `disabled`, `name`) also go on **`Root`**.
 *
 * @example
 * ```tsx
 * <Checkbox.Root size="md" checked={checked} onCheckedChange={({ checked }) => setChecked(checked)}>
 *   <Checkbox.Control>
 *     <Checkbox.Indicator>
 *       <CheckIcon aria-hidden />
 *     </Checkbox.Indicator>
 *   </Checkbox.Control>
 *   <Checkbox.Label>Accept terms</Checkbox.Label>
 *   <Checkbox.HiddenInput />
 * </Checkbox.Root>
 * ```
 */
declare const Checkbox$1: {
  /** Root — controlled state, handlers, and recipe variants (`size`). */Root: _styled_system_jsx0.StyleContextProvider<react.ForwardRefExoticComponent<Checkbox.RootProps & react.RefAttributes<HTMLLabelElement>>, SlotRecipeRuntimeFn<"label" | "description" | "root" | "indicator" | "control" | "errorText", {
    size: {
      sm: {
        control: {
          width: "4";
          height: "4";
          marginTop: "0.5";
          '& svg': {
            width: "2.5";
            height: "2.5";
          };
          '@media (pointer: coarse)': {
            width: "5";
            height: "5";
          };
        };
        indicator: {
          width: "2.5";
          height: "2.5";
        };
        label: {
          fontSize: "sm";
        };
        description: {
          fontSize: "xs";
        };
        errorText: {
          fontSize: "xs";
        };
      };
      md: {
        control: {
          width: "5";
          height: "5";
          marginTop: "0.5";
          '& svg': {
            width: "3";
            height: "3";
          };
        };
        indicator: {
          width: "3";
          height: "3";
        };
        label: {
          fontSize: "md";
        };
        description: {
          fontSize: "sm";
        };
        errorText: {
          fontSize: "sm";
        };
      };
      lg: {
        control: {
          width: "6";
          height: "6";
          marginTop: "0.5";
          '& svg': {
            width: "4";
            height: "4";
          };
        };
        indicator: {
          width: "4";
          height: "4";
        };
        label: {
          fontSize: "lg";
        };
        description: {
          fontSize: "md";
        };
        errorText: {
          fontSize: "md";
        };
      };
    };
  }>>; /** Box + hit target; receives `control` slot classes from context. */
  Control: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Checkbox.ControlProps & react.RefAttributes<HTMLDivElement>>>; /** Icon container; receives `indicator` slot classes from context. */
  Indicator: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Checkbox.IndicatorProps & react.RefAttributes<HTMLDivElement>>>; /** Text label; receives `label` slot classes from context. */
  Label: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Checkbox.LabelProps & react.RefAttributes<HTMLSpanElement>>>; /** Native input for forms; no recipe slot. */
  HiddenInput: react.ForwardRefExoticComponent<Checkbox.HiddenInputProps & react.RefAttributes<HTMLInputElement>>;
};
/** Slot class overrides for {@link CheckboxDS}. */
interface CheckboxDSClassNames {
  root?: string;
  control?: string;
  indicator?: string;
  label?: string;
  description?: string;
  errorText?: string;
}
type CheckboxDSProps = CheckboxVariants & {
  /** Label text beside the checkbox */label?: ReactNode; /** Helper text below the label */
  description?: ReactNode; /** RHF FieldError or plain string */
  error?: FieldError | string; /** Controlled checked state */
  checked?: boolean | 'indeterminate'; /** Value toggle — forwarded to Ark `onCheckedChange` internally. */
  onChange?: (checked: boolean | 'indeterminate') => void;
  onBlur?: () => void;
  name?: string;
  disabled?: boolean; /** Custom indicator icon; defaults to CheckIcon / MinusIcon */
  indicator?: ReactNode; /** Merged onto the root slot after recipe classes. */
  className?: string; /** Per-slot class overrides */
  classNames?: CheckboxDSClassNames;
};
/**
 * Design-system convenience checkbox — label, description, and error text included.
 * **`Checkbox`** stays the styled compound; **`CheckboxDS`** = packaged DS API (`onChange(checked)`;
 * bare **`Checkbox.Root`** still uses Ark's `onCheckedChange`).
 */
declare const CheckboxDS: react.ForwardRefExoticComponent<{
  size?: "sm" | "md" | "lg" | undefined;
} & {
  /** Label text beside the checkbox */label?: ReactNode; /** Helper text below the label */
  description?: ReactNode; /** RHF FieldError or plain string */
  error?: FieldError | string; /** Controlled checked state */
  checked?: boolean | "indeterminate"; /** Value toggle — forwarded to Ark `onCheckedChange` internally. */
  onChange?: (checked: boolean | "indeterminate") => void;
  onBlur?: () => void;
  name?: string;
  disabled?: boolean; /** Custom indicator icon; defaults to CheckIcon / MinusIcon */
  indicator?: ReactNode; /** Merged onto the root slot after recipe classes. */
  className?: string; /** Per-slot class overrides */
  classNames?: CheckboxDSClassNames;
} & react.RefAttributes<HTMLLabelElement>>;
//#endregion
export { Checkbox$1 as Checkbox, CheckboxDS, CheckboxDSClassNames, CheckboxDSProps };
//# sourceMappingURL=checkbox.d.ts.map