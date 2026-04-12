import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { SwitchVariants } from "./switch.recipe.js";
import * as react from "react";
import { ReactNode } from "react";
import { Switch } from "@ark-ui/react";
import * as _styled_system_jsx0 from "@styled-system/jsx";
import { FieldError } from "react-hook-form";

//#region src/forms/switch/switch.d.ts
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
declare const Switch$1: {
  /** Root — controlled state, handlers, and recipe variants (`size`, `palette`). */Root: _styled_system_jsx0.StyleContextProvider<react.ForwardRefExoticComponent<Switch.RootProps & react.RefAttributes<HTMLLabelElement>>, SlotRecipeRuntimeFn<"root" | "description" | "label" | "thumb" | "control" | "errorText", {
    size: {
      sm: {
        control: {
          width: "8";
          height: "4";
          padding: "0.5";
          '@media (pointer: coarse)': {
            width: "10";
            height: "6";
          };
        };
        thumb: {
          width: "3";
          height: "3";
          _checked: {
            transform: "translateX(0.75rem)";
          };
          '@media (pointer: coarse)': {
            width: "5";
            height: "5";
            _checked: {
              transform: "translateX(1rem)";
            };
          };
        };
        label: {
          fontSize: "xs";
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
          width: "10";
          height: "6";
          padding: "0.5";
        };
        thumb: {
          width: "5";
          height: "5";
          _checked: {
            transform: "translateX(1rem)";
          };
        };
        label: {
          fontSize: "sm";
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
          width: "12";
          height: "7";
          padding: "1";
        };
        thumb: {
          width: "6";
          height: "6";
          _checked: {
            transform: "translateX(1.25rem)";
          };
        };
        label: {
          fontSize: "md";
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
        thumb: {
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
        thumb: {
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
        thumb: {
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
        thumb: {
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
        thumb: {
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
        thumb: {
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
        thumb: {
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
        thumb: {
          colorPalette: "grey";
        };
      };
    };
  }>>; /** Track + hit target; receives `control` slot classes from context. */
  Control: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Switch.ControlProps & react.RefAttributes<HTMLSpanElement>>>; /** Knob; receives `thumb` slot classes from context. */
  Thumb: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Switch.ThumbProps & react.RefAttributes<HTMLSpanElement>>>; /** Text label; receives `label` slot classes from context. */
  Label: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Switch.LabelProps & react.RefAttributes<HTMLSpanElement>>>; /** Native input for forms; no recipe slot. */
  HiddenInput: react.ForwardRefExoticComponent<Switch.HiddenInputProps & react.RefAttributes<HTMLInputElement>>;
};
/** Slot class overrides for {@link SwitchDS}. */
interface SwitchDSClassNames {
  root?: string;
  control?: string;
  thumb?: string;
  label?: string;
  description?: string;
  errorText?: string;
}
type SwitchDSProps = SwitchVariants & {
  label?: ReactNode;
  description?: ReactNode;
  error?: FieldError | string;
  checked?: boolean; /** Boolean toggle — forwarded to Ark `onCheckedChange` internally. */
  onChange?: (checked: boolean) => void | Promise<void>;
  onBlur?: () => void;
  name?: string;
  disabled?: boolean; /** Merged onto the root slot after recipe classes. */
  className?: string;
  classNames?: SwitchDSClassNames;
};
/**
 * Design-system convenience switch — label, description, and error text included.
 * **`Switch`** stays the styled compound; **`SwitchDS`** = packaged DS API (`onChange(checked)`;
 * bare **`Switch.Root`** still uses Ark's `onCheckedChange`).
 */
declare const SwitchDS: react.ForwardRefExoticComponent<{
  size?: "sm" | "md" | "lg" | undefined;
  palette?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "grey" | "default" | undefined;
} & {
  label?: ReactNode;
  description?: ReactNode;
  error?: FieldError | string;
  checked?: boolean; /** Boolean toggle — forwarded to Ark `onCheckedChange` internally. */
  onChange?: (checked: boolean) => void | Promise<void>;
  onBlur?: () => void;
  name?: string;
  disabled?: boolean; /** Merged onto the root slot after recipe classes. */
  className?: string;
  classNames?: SwitchDSClassNames;
} & react.RefAttributes<HTMLLabelElement>>;
//#endregion
export { Switch$1 as Switch, SwitchDS, SwitchDSClassNames, SwitchDSProps };
//# sourceMappingURL=switch.d.ts.map