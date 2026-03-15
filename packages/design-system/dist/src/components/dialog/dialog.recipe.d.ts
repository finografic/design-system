import { SlotRecipeRuntimeFn } from "../../../styled-system/types/recipe.js";
//#region src/components/dialog/dialog.recipe.d.ts
declare const dialogRecipe: SlotRecipeRuntimeFn<"header" | "footer" | "content" | "positioner" | "description" | "title" | "closeTrigger" | "body" | "backdrop", {
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