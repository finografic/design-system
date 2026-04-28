import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../recipes/recipes.types.js";

//#region src/forms/checkbox/checkbox.recipe.d.ts
declare const checkboxRecipe: SlotRecipeRuntimeFn<"root" | "description" | "label" | "indicator" | "control" | "errorText", {
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
}>;
type CheckboxVariants = RecipeProps<typeof checkboxRecipe>;
//#endregion
export { CheckboxVariants, checkboxRecipe };
//# sourceMappingURL=checkbox.recipe.d.ts.map