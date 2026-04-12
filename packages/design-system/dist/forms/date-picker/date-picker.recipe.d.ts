import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../types/recipes.types.js";

//#region src/forms/date-picker/date-picker.recipe.d.ts
declare const datePickerRecipe: SlotRecipeRuntimeFn<"content" | "table" | "root" | "positioner" | "label" | "trigger" | "input" | "control" | "clearTrigger" | "view" | "viewControl" | "viewTrigger" | "prevTrigger" | "nextTrigger" | "rangeText" | "tableHeader" | "tableCell" | "tableCellTrigger", {
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
      trigger: {
        w: "7";
        h: "7";
      };
      clearTrigger: {
        w: "7";
        h: "7";
      };
      tableCellTrigger: {
        h: "7";
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
      trigger: {
        w: "8";
        h: "8";
      };
      clearTrigger: {
        w: "8";
        h: "8";
      };
      tableCellTrigger: {
        h: "8";
        fontSize: "sm";
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
      trigger: {
        w: "10";
        h: "10";
      };
      clearTrigger: {
        w: "10";
        h: "10";
      };
      tableCellTrigger: {
        h: "9";
        fontSize: "md";
      };
    };
  };
}>;
/** Props accepted by `datePickerRecipe`. */
type DatePickerRecipeProps = RecipeProps<typeof datePickerRecipe>;
/** Input and cell density. */
type DatePickerSize = 'sm' | 'md' | 'lg';
//#endregion
export { DatePickerRecipeProps, DatePickerSize, datePickerRecipe };
//# sourceMappingURL=date-picker.recipe.d.ts.map