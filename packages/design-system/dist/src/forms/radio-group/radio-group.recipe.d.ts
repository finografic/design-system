import { SlotRecipeRuntimeFn } from "../../../styled-system/types/recipe.js";
//#region src/forms/radio-group/radio-group.recipe.d.ts
declare const radioGroupRecipe: SlotRecipeRuntimeFn<"label" | "root" | "indicator" | "item" | "itemText" | "itemControl" | "itemDescription", {
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
    };
  };
  variant: {
    default: {};
    card: {
      item: {
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
//#endregion
export { radioGroupRecipe };
//# sourceMappingURL=radio-group.recipe.d.ts.map