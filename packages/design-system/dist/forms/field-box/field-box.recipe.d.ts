import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../types/recipes.types.js";

//#region src/forms/field-box/field-box.recipe.d.ts
declare const fieldBoxRecipe: SlotRecipeRuntimeFn<"label" | "root" | "requiredIndicator" | "helperText" | "errorText" | "warningText", {
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
type FieldBoxVariants = RecipeProps<typeof fieldBoxRecipe>;
//#endregion
export { FieldBoxVariants, fieldBoxRecipe };
//# sourceMappingURL=field-box.recipe.d.ts.map