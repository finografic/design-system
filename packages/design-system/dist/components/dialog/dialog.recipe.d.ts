import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
//#region src/components/dialog/dialog.recipe.d.ts
declare const dialogRecipe: SlotRecipeRuntimeFn<"body" | "footer" | "header" | "title" | "content" | "description" | "positioner" | "closeTrigger" | "backdrop", {
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
//#endregion
export { dialogRecipe };
//# sourceMappingURL=dialog.recipe.d.ts.map