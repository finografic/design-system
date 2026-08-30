import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import "../../packages/design-system/styled-system/types/index.js";
import { CheckboxVariants } from "./checkbox.recipe.js";
import { ReactNode } from "react";
import { Checkbox } from "@ark-ui/react";
import { FieldError } from "react-hook-form";
//#region src/forms/checkbox/checkbox.d.ts
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
declare const Checkbox$1: {
  /** Root — controlled state, handlers, and recipe variants (`size`, `palette`). */
  Root: import("@styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<Checkbox.RootProps & import("react").RefAttributes<HTMLLabelElement>>, SlotRecipeRuntimeFn<"control" | "description" | "errorText" | "indicator" | "label" | "root", {
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
            '& svg': {
              width: "3";
              height: "3";
            };
          };
        };
        indicator: {
          width: "2.5";
          height: "2.5";
          '@media (pointer: coarse)': {
            width: "3";
            height: "3";
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
          '& svg': {
            width: "3";
            height: "3";
          };
          '@media (pointer: coarse)': {
            width: "6";
            height: "6";
            '& svg': {
              width: "4";
              height: "4";
            };
          };
        };
        indicator: {
          width: "3";
          height: "3";
          '@media (pointer: coarse)': {
            width: "4";
            height: "4";
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
          '& svg': {
            width: "4";
            height: "4";
          };
          '@media (pointer: coarse)': {
            width: "7";
            height: "7";
            '& svg': {
              width: "4.5";
              height: "4.5";
            };
          };
        };
        indicator: {
          width: "4";
          height: "4";
          '@media (pointer: coarse)': {
            width: "4.5";
            height: "4.5";
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
    palette: {
      default: {
        root: {
          colorPalette: "neutral";
        };
        control: {
          colorPalette: "neutral";
        };
      };
      primary: {
        root: {
          colorPalette: "primary";
        };
        control: {
          colorPalette: "primary";
        };
      };
      secondary: {
        root: {
          colorPalette: "secondary";
        };
        control: {
          colorPalette: "secondary";
        };
      };
      success: {
        root: {
          colorPalette: "success";
        };
        control: {
          colorPalette: "success";
        };
      };
      warning: {
        root: {
          colorPalette: "warning";
        };
        control: {
          colorPalette: "warning";
        };
      };
      danger: {
        root: {
          colorPalette: "danger";
        };
        control: {
          colorPalette: "danger";
        };
      };
      info: {
        root: {
          colorPalette: "info";
        };
        control: {
          colorPalette: "info";
        };
      };
      grey: {
        root: {
          colorPalette: "grey";
        };
        control: {
          colorPalette: "grey";
        };
      };
    };
  }>>;
  /** Box + hit target; receives `control` slot classes from context. */
  Control: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Checkbox.ControlProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Icon container; receives `indicator` slot classes from context. */
  Indicator: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Checkbox.IndicatorProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Text label; receives `label` slot classes from context. */
  Label: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Checkbox.LabelProps & import("react").RefAttributes<HTMLSpanElement>>>;
  /** Native input for forms; no recipe slot. */
  HiddenInput: import("react").ForwardRefExoticComponent<Checkbox.HiddenInputProps & import("react").RefAttributes<HTMLInputElement>>;
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
declare const CheckboxDS: import("react").ForwardRefExoticComponent<{
  size?: "lg" | "md" | "sm" | undefined;
  palette?: "danger" | "default" | "grey" | "info" | "primary" | "secondary" | "success" | "warning" | undefined;
} & {
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
} & import("react").RefAttributes<HTMLLabelElement>>;
//#endregion
export { Checkbox$1 as Checkbox, CheckboxDS, CheckboxDSClassNames, CheckboxDSProps };
//# sourceMappingURL=checkbox.d.ts.map