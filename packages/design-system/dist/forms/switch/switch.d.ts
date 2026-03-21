import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { SwitchVariants } from "./switch.types.js";
import * as react from "react";
import { ReactNode } from "react";
import { Switch } from "@ark-ui/react";
import * as _styled_system_jsx0 from "@styled-system/jsx";
import { FieldError } from "react-hook-form";

//#region src/forms/switch/switch.d.ts
declare const Switch$1: {
  Root: _styled_system_jsx0.StyleContextProvider<react.ForwardRefExoticComponent<Switch.RootProps & react.RefAttributes<HTMLLabelElement>>, SlotRecipeRuntimeFn<"description" | "root" | "label" | "control" | "thumb" | "errorText", {
    size: {
      sm: {
        control: {
          width: "8";
          height: "4";
          padding: "0.5";
        };
        thumb: {
          width: "3";
          height: "3";
          _checked: {
            transform: "translateX(0.75rem)";
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
      };
      primary: {
        root: {
          colorPalette: "primary";
        };
      };
      secondary: {
        root: {
          colorPalette: "secondary";
        };
      };
      success: {
        root: {
          colorPalette: "success";
        };
      };
      warning: {
        root: {
          colorPalette: "warning";
        };
      };
      danger: {
        root: {
          colorPalette: "danger";
        };
      };
      info: {
        root: {
          colorPalette: "info";
        };
      };
      grey: {
        root: {
          colorPalette: "grey";
        };
      };
    };
  }>>;
  Control: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Switch.ControlProps & react.RefAttributes<HTMLSpanElement>>>;
  Thumb: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Switch.ThumbProps & react.RefAttributes<HTMLSpanElement>>>;
  Label: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Switch.LabelProps & react.RefAttributes<HTMLSpanElement>>>;
  HiddenInput: react.ForwardRefExoticComponent<Switch.HiddenInputProps & react.RefAttributes<HTMLInputElement>>;
};
interface LabeledSwitchClassNames {
  root?: string;
  control?: string;
  thumb?: string;
  label?: string;
  description?: string;
  errorText?: string;
}
type LabeledSwitchProps = SwitchVariants & {
  label?: ReactNode;
  description?: ReactNode;
  error?: FieldError | string;
  checked?: boolean;
  onCheckedChange?: (details: {
    checked: boolean;
  }) => void;
  onBlur?: () => void;
  name?: string;
  disabled?: boolean; /** Merged onto the root slot after recipe classes */
  className?: string; /** @deprecated Prefer `classNames.control` */
  controlClassName?: string;
  classNames?: LabeledSwitchClassNames;
};
declare const LabeledSwitch: react.ForwardRefExoticComponent<{
  size?: "sm" | "md" | "lg" | undefined;
  palette?: "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "grey" | "default" | undefined;
} & {
  label?: ReactNode;
  description?: ReactNode;
  error?: FieldError | string;
  checked?: boolean;
  onCheckedChange?: (details: {
    checked: boolean;
  }) => void;
  onBlur?: () => void;
  name?: string;
  disabled?: boolean; /** Merged onto the root slot after recipe classes */
  className?: string; /** @deprecated Prefer `classNames.control` */
  controlClassName?: string;
  classNames?: LabeledSwitchClassNames;
} & react.RefAttributes<HTMLLabelElement>>;
//#endregion
export { LabeledSwitch, LabeledSwitchClassNames, LabeledSwitchProps, Switch$1 as Switch };
//# sourceMappingURL=switch.d.ts.map