import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../types/recipes.types.js";

//#region src/forms/select/select.recipe.d.ts
declare const selectRecipe: SlotRecipeRuntimeFn<"label" | "content" | "root" | "positioner" | "item" | "itemText" | "itemIndicator" | "itemGroup" | "itemGroupLabel" | "indicator" | "trigger" | "control" | "list" | "valueText" | "clearTrigger", {
  size: {
    sm: {
      label: {
        fontSize: "xs";
      };
      trigger: {
        h: "9";
        px: "2.5";
        fontSize: "sm";
        gap: "1.5";
      };
      item: {
        px: "2";
        py: "1";
        fontSize: "sm";
      };
      itemGroupLabel: {
        px: "2";
        py: "1";
      };
      itemIndicator: {
        w: "3";
        h: "3";
      };
      clearTrigger: {
        '& svg': {
          w: "3";
          h: "3";
        };
      };
    };
    md: {
      label: {
        fontSize: "sm";
      };
      trigger: {
        h: "10";
        px: "3";
        fontSize: "sm";
        gap: "2";
      };
      item: {
        px: "3";
        py: "1.5";
        fontSize: "sm";
      };
      itemGroupLabel: {
        px: "3";
        py: "1.5";
      };
      itemIndicator: {
        w: "4";
        h: "4";
      };
      clearTrigger: {
        '& svg': {
          w: "4";
          h: "4";
        };
      };
    };
    lg: {
      label: {
        fontSize: "md";
      };
      trigger: {
        h: "11";
        px: "4";
        fontSize: "md";
        gap: "2";
      };
      item: {
        px: "3";
        py: "2";
        fontSize: "md";
      };
      itemGroupLabel: {
        px: "3";
        py: "2";
      };
      itemIndicator: {
        w: "4";
        h: "4";
      };
      clearTrigger: {
        '& svg': {
          w: "4";
          h: "4";
        };
      };
    };
  };
}>;
type SelectVariants = RecipeProps<typeof selectRecipe>;
//#endregion
export { SelectVariants, selectRecipe };
//# sourceMappingURL=select.recipe.d.ts.map