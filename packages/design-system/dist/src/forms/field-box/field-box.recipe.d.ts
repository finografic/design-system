import { SlotRecipeRuntimeFn } from "../../../styled-system/types/recipe.js";
//#region src/forms/field-box/field-box.recipe.d.ts
declare const fieldBoxRecipe: SlotRecipeRuntimeFn<"label" | "root" | "errorText" | "requiredIndicator" | "helperText" | "warningText", {
  size: {
    sm: {
      root: {
        gap: "1";
      };
      label: {
        fontSize: "xs";
      };
      helperText: {
        fontSize: "xs";
      };
      errorText: {
        fontSize: "xs";
      };
      warningText: {
        fontSize: "xs";
      };
    };
    md: {
      root: {
        gap: "1.5";
      };
      label: {
        fontSize: "sm";
      };
      helperText: {
        fontSize: "xs";
      };
      errorText: {
        fontSize: "sm";
      };
      warningText: {
        fontSize: "sm";
      };
    };
    lg: {
      root: {
        gap: "2";
      };
      label: {
        fontSize: "md";
      };
      helperText: {
        fontSize: "sm";
      };
      errorText: {
        fontSize: "sm";
      };
      warningText: {
        fontSize: "sm";
      };
    };
  };
}>;
//#endregion
export { fieldBoxRecipe };
//# sourceMappingURL=field-box.recipe.d.ts.map