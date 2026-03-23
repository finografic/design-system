import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../types/recipes.types.js";

//#region src/forms/input-number/input-number.recipe.d.ts
declare const inputNumberRecipe: SlotRecipeRuntimeFn<"root" | "label" | "control" | "input" | "incrementTrigger" | "decrementTrigger" | "prefix" | "suffix" | "errorText", {
  size: {
    sm: {
      label: {
        fontSize: "xs";
      };
      control: {
        height: "9";
      };
      input: {
        fontSize: "sm";
        paddingInline: "2.5";
      };
      incrementTrigger: {
        width: "7";
        fontSize: "xs";
      };
      decrementTrigger: {
        width: "7";
        fontSize: "xs";
      };
      prefix: {
        paddingInline: "2";
        fontSize: "xs";
      };
      suffix: {
        paddingInline: "2";
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
      control: {
        height: "10";
      };
      input: {
        fontSize: "sm";
        paddingInline: "3";
      };
      incrementTrigger: {
        width: "8";
        fontSize: "sm";
      };
      decrementTrigger: {
        width: "8";
        fontSize: "sm";
      };
      prefix: {
        paddingInline: "2.5";
        fontSize: "sm";
      };
      suffix: {
        paddingInline: "2.5";
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
      control: {
        height: "12";
      };
      input: {
        fontSize: "md";
        paddingInline: "4";
      };
      incrementTrigger: {
        width: "10";
        fontSize: "md";
      };
      decrementTrigger: {
        width: "10";
        fontSize: "md";
      };
      prefix: {
        paddingInline: "3";
        fontSize: "md";
      };
      suffix: {
        paddingInline: "3";
        fontSize: "md";
      };
      errorText: {
        fontSize: "sm";
      };
    };
  };
}>;
type InputNumberVariants = RecipeProps<typeof inputNumberRecipe>;
//#endregion
export { InputNumberVariants, inputNumberRecipe };
//# sourceMappingURL=input-number.recipe.d.ts.map