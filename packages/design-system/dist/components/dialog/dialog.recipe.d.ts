import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../types/recipes.types.js";

//#region src/components/dialog/dialog.recipe.d.ts
declare const dialogRecipe: SlotRecipeRuntimeFn<"body" | "footer" | "header" | "title" | "content" | "positioner" | "description" | "backdrop" | "closeTrigger", {
  size: {
    sm: {
      content: {
        maxW: "24rem";
      };
    };
    md: {
      content: {
        maxW: "32rem";
      };
    };
    lg: {
      content: {
        maxW: "48rem";
      };
    };
    xl: {
      content: {
        maxW: "64rem";
      };
    };
    full: {
      positioner: {
        padding: "0";
      };
      content: {
        maxW: "full";
        maxH: "full";
        borderRadius: "none";
      };
    };
  };
}>;
type DialogVariants = RecipeProps<typeof dialogRecipe>;
//#endregion
export { DialogVariants, dialogRecipe };
//# sourceMappingURL=dialog.recipe.d.ts.map