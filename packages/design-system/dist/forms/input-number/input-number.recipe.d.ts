import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../types/recipes.types.js";

//#region src/forms/input-number/input-number.recipe.d.ts
declare const inputNumberRecipe: SlotRecipeRuntimeFn<"root" | "label" | "control" | "errorText" | "input" | "triggerGroup" | "incrementTrigger" | "decrementTrigger" | "prefix" | "suffix", {
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
        paddingInlineStart: "2.5";
        paddingInlineEnd: "8";
      };
      triggerGroup: {
        width: "7";
      };
      incrementTrigger: {
        fontSize: "xs";
      };
      decrementTrigger: {
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
        paddingInlineStart: "3";
        paddingInlineEnd: "9";
      };
      triggerGroup: {
        width: "8";
      };
      incrementTrigger: {
        fontSize: "sm";
      };
      decrementTrigger: {
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
        paddingInlineStart: "4";
        paddingInlineEnd: "11";
      };
      triggerGroup: {
        width: "10";
      };
      incrementTrigger: {
        fontSize: "md";
      };
      decrementTrigger: {
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