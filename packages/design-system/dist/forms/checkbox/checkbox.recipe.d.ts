import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
//#region src/forms/checkbox/checkbox.recipe.d.ts
declare const checkboxRecipe: SlotRecipeRuntimeFn<"description" | "root" | "indicator" | "label" | "control" | "errorText", {
  size: {
    sm: {
      control: {
        width: "4";
        height: "4";
        marginTop: "0.5";
      };
      indicator: {
        width: "2.5";
        height: "2.5";
        '& svg': {
          w: "2.5";
          h: "2.5";
        };
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
      };
      indicator: {
        width: "3";
        height: "3";
        '& svg': {
          w: "3";
          h: "3";
        };
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
      };
      indicator: {
        width: "4";
        height: "4";
        '& svg': {
          w: "4";
          h: "4";
        };
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