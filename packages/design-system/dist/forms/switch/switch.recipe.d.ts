import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
//#region src/forms/switch/switch.recipe.d.ts
declare const switchRecipe: SlotRecipeRuntimeFn<"label" | "description" | "root" | "control" | "thumb" | "errorText", {
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
}>;
//#endregion
export { switchRecipe };
//# sourceMappingURL=switch.recipe.d.ts.map