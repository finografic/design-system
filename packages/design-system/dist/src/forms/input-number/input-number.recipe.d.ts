import { SlotRecipeRuntimeFn } from "../../../styled-system/types/recipe.js";
//#region src/forms/input-number/input-number.recipe.d.ts
declare const inputNumberRecipe: SlotRecipeRuntimeFn<"root" | "control" | "label" | "input" | "incrementTrigger" | "decrementTrigger" | "prefix" | "suffix", {
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
    };
  };
}>;
//#endregion
export { inputNumberRecipe };
//# sourceMappingURL=input-number.recipe.d.ts.map