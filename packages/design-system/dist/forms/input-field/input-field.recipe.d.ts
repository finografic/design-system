import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../types/recipes.types.js";

//#region src/forms/input-field/input-field.recipe.d.ts
declare const inputFieldRecipe: SlotRecipeRuntimeFn<"input" | "slot" | "root", {
  size: {
    sm: {
      input: {
        height: "9";
        fontSize: "sm";
        paddingInline: "3";
      };
      slot: {
        width: "9";
        height: "9";
        fontSize: "sm";
      };
    };
    md: {
      input: {
        height: "10";
        fontSize: "sm";
        paddingInline: "3";
      };
      slot: {
        width: "10";
        height: "10";
        fontSize: "sm";
      };
    };
    lg: {
      input: {
        height: "12";
        fontSize: "md";
        paddingInline: "4";
      };
      slot: {
        width: "12";
        height: "12";
        fontSize: "md";
      };
    };
  };
  hasLeadingSlot: {
    true: {};
  };
  hasTrailingSlot: {
    true: {};
  };
}>;
type InputFieldVariants = RecipeProps<typeof inputFieldRecipe>;
//#endregion
export { InputFieldVariants, inputFieldRecipe };
//# sourceMappingURL=input-field.recipe.d.ts.map