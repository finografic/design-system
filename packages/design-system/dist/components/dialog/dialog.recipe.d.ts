import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../types/recipes.types.js";

//#region src/components/dialog/dialog.recipe.d.ts
declare const dialogRecipe: SlotRecipeRuntimeFn<"header" | "footer" | "content" | "root" | "description" | "backdrop" | "positioner" | "title" | "body" | "closeTrigger", {
  size: {
    xs: {
      content: {
        maxW: "20rem";
      };
    };
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
    cover: {
      positioner: {
        padding: "0";
      };
      content: {
        maxW: "95vw";
        maxH: "95vh";
        h: "95vh";
      };
    };
    full: {
      positioner: {
        padding: "0";
      };
      content: {
        maxW: "full";
        maxH: "full";
        h: "full";
        borderRadius: "none";
      };
    };
  };
}>;
type DialogVariants = RecipeProps<typeof dialogRecipe>;
//#endregion
export { DialogVariants, dialogRecipe };
//# sourceMappingURL=dialog.recipe.d.ts.map