import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
//#region src/forms/switch/switch.recipe.d.ts
declare const switchRecipe: SlotRecipeRuntimeFn<"description" | "root" | "label" | "control" | "errorText" | "thumb", {
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
}>;
//#endregion
export { switchRecipe };
//# sourceMappingURL=switch.recipe.d.ts.map