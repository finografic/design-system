import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import "../../packages/design-system/styled-system/types/index.js";
import { RecipeProps } from "../../recipes/recipes.types.js";
//#region src/forms/select-combobox/select-combobox.recipe.d.ts
declare const selectComboboxRecipe: SlotRecipeRuntimeFn<"clearTrigger" | "content" | "control" | "indicators" | "input" | "item" | "itemGroup" | "itemGroupLabel" | "itemIndicator" | "itemText" | "label" | "positioner" | "root" | "trigger", {
  size: {
    sm: {
      control: {
        h: "9";
      };
      input: {
        fontSize: "sm";
        pl: "3";
        pr: "1";
      };
      clearTrigger: {
        w: "7";
        h: "7";
      };
      trigger: {
        w: "7";
        h: "7";
      };
      item: {
        px: "2";
        py: "1";
        fontSize: "sm";
      };
      itemText: {
        fontSize: "sm";
      };
      itemGroupLabel: {
        fontSize: "xs";
      };
    };
    md: {
      control: {
        h: "10";
      };
      input: {
        fontSize: "sm";
        pl: "3";
        pr: "1";
      };
      clearTrigger: {
        w: "8";
        h: "8";
      };
      trigger: {
        w: "8";
        h: "8";
      };
      item: {
        px: "3";
        py: "1.5";
        fontSize: "sm";
      };
      itemText: {
        fontSize: "sm";
      };
      itemGroupLabel: {
        fontSize: "xs";
      };
    };
    lg: {
      control: {
        h: "12";
      };
      input: {
        fontSize: "md";
        pl: "4";
        pr: "1";
      };
      clearTrigger: {
        w: "10";
        h: "10";
      };
      trigger: {
        w: "10";
        h: "10";
      };
      item: {
        px: "3";
        py: "2";
        fontSize: "md";
      };
      itemText: {
        fontSize: "md";
      };
      itemGroupLabel: {
        fontSize: "sm";
      };
    };
  };
}>;
type SelectComboboxRecipeProps = RecipeProps<typeof selectComboboxRecipe>;
//#endregion
export { SelectComboboxRecipeProps, selectComboboxRecipe };
//# sourceMappingURL=select-combobox.recipe.d.ts.map