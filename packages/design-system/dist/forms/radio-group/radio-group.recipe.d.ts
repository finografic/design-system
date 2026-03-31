import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../types/recipes.types.js";

//#region src/forms/radio-group/radio-group.recipe.d.ts
declare const radioGroupRecipe: SlotRecipeRuntimeFn<"description" | "label" | "root" | "item" | "itemText" | "indicator" | "itemControl" | "errorText" | "itemDescription", {
  size: {
    sm: {
      label: {
        fontSize: "xs";
      };
      itemControl: {
        width: "4";
        height: "4";
      };
      indicator: {
        width: "1.5";
        height: "1.5";
      };
      itemText: {
        fontSize: "sm";
      };
      itemDescription: {
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
      label: {
        fontSize: "sm";
      };
      itemControl: {
        width: "5";
        height: "5";
      };
      indicator: {
        width: "2";
        height: "2";
      };
      itemText: {
        fontSize: "md";
      };
      itemDescription: {
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
      label: {
        fontSize: "md";
      };
      itemControl: {
        width: "6";
        height: "6";
      };
      indicator: {
        width: "2.5";
        height: "2.5";
      };
      itemText: {
        fontSize: "lg";
      };
      itemDescription: {
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
  variant: {
    default: {};
    card: {
      item: {
        width: "full";
        padding: "3";
        borderWidth: "light";
        borderStyle: "solid";
        borderColor: "border";
        borderRadius: "md";
        bg: "bg.panel";
        _checked: {
          borderColor: "accent.solid";
          bg: "accent.subtle";
        };
        _hover: {
          bg: "bg.hover";
        };
      };
    };
  };
  orientation: {
    vertical: {
      root: {
        flexDirection: "column";
      };
    };
    horizontal: {
      root: {
        flexDirection: "row";
        flexWrap: "wrap";
      };
    };
  };
}>;
type RadioGroupVariants = RecipeProps<typeof radioGroupRecipe>;
//#endregion
export { RadioGroupVariants, radioGroupRecipe };
//# sourceMappingURL=radio-group.recipe.d.ts.map