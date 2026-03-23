import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
//#region src/forms/checkbox/checkbox.recipe.d.ts
declare const checkboxRecipe: SlotRecipeRuntimeFn<"label" | "description" | "root" | "indicator" | "control" | "errorText", {
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
      };
      indicator: {
        width: "2.5";
        height: "2.5";
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
      };
      indicator: {
        width: "3";
        height: "3";
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
      };
      indicator: {
        width: "4";
        height: "4";
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
}>;
//#endregion
export { checkboxRecipe };
//# sourceMappingURL=checkbox.recipe.d.ts.map