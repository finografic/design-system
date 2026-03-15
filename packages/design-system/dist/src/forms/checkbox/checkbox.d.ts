import { SlotRecipeRuntimeFn } from "../../../styled-system/types/recipe.js";
import { CheckboxVariants } from "./checkbox.types.js";
import * as react from "react";
import { ReactNode } from "react";
import { Checkbox } from "@ark-ui/react";
import * as _styled_system_jsx0 from "@styled-system/jsx";
import { FieldError } from "react-hook-form";

//#region src/forms/checkbox/checkbox.d.ts
declare const Checkbox$1: {
  Root: _styled_system_jsx0.StyleContextProvider<react.ForwardRefExoticComponent<Checkbox.RootProps & react.RefAttributes<HTMLLabelElement>>, SlotRecipeRuntimeFn<"root" | "description" | "control" | "indicator" | "label" | "errorText", {
    size: {
      sm: {
        control: {
          width: "4";
          height: "4";
          marginTop: "0.5";
        };
        indicator: {
          width: "2.5";
          height: "2.5";
          '& svg': {
            w: "2.5";
            h: "2.5";
          };
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
        };
        indicator: {
          width: "3";
          height: "3";
          '& svg': {
            w: "3";
            h: "3";
          };
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
        };
        indicator: {
          width: "4";
          height: "4";
          '& svg': {
            w: "4";
            h: "4";
          };
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
  }>>;
  Control: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Checkbox.ControlProps & react.RefAttributes<HTMLDivElement>>>;
  Indicator: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Checkbox.IndicatorProps & react.RefAttributes<HTMLDivElement>>>;
  Label: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Checkbox.LabelProps & react.RefAttributes<HTMLSpanElement>>>;
  HiddenInput: react.ForwardRefExoticComponent<Checkbox.HiddenInputProps & react.RefAttributes<HTMLInputElement>>;
};
interface CheckboxFieldClassNames {
  root?: string;
  control?: string;
  indicator?: string;
  label?: string;
  description?: string;
  errorText?: string;
}
type CheckboxFieldProps = CheckboxVariants & {
  /** Label text beside the checkbox */label?: ReactNode; /** Helper text below the label */
  description?: ReactNode; /** RHF FieldError or plain string */
  error?: FieldError | string; /** Controlled checked state */
  checked?: boolean | 'indeterminate';
  onCheckedChange?: (details: {
    checked: boolean | 'indeterminate';
  }) => void;
  onBlur?: () => void;
  name?: string;
  disabled?: boolean; /** Custom indicator icon; defaults to CheckIcon / MinusIcon */
  indicator?: ReactNode; /** Per-slot class overrides */
  classNames?: CheckboxFieldClassNames;
};
declare const CheckboxField: react.ForwardRefExoticComponent<{
  size?: "sm" | "md" | "lg" | undefined;
} & {
  /** Label text beside the checkbox */label?: ReactNode; /** Helper text below the label */
  description?: ReactNode; /** RHF FieldError or plain string */
  error?: FieldError | string; /** Controlled checked state */
  checked?: boolean | "indeterminate";
  onCheckedChange?: (details: {
    checked: boolean | "indeterminate";
  }) => void;
  onBlur?: () => void;
  name?: string;
  disabled?: boolean; /** Custom indicator icon; defaults to CheckIcon / MinusIcon */
  indicator?: ReactNode; /** Per-slot class overrides */
  classNames?: CheckboxFieldClassNames;
} & react.RefAttributes<HTMLLabelElement>>;
//#endregion
export { Checkbox$1 as Checkbox, CheckboxField, CheckboxFieldClassNames, CheckboxFieldProps };
//# sourceMappingURL=checkbox.d.ts.map