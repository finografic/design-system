import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../types/recipes.types.js";

//#region src/components/pagination/pagination.recipe.d.ts
declare const paginationRecipe: SlotRecipeRuntimeFn<"trigger" | "root" | "item" | "ellipsis", {
  size: {
    sm: {
      item: {
        w: "7";
        h: "7";
        fontSize: "xs";
      };
      trigger: {
        w: "7";
        h: "7";
      };
      ellipsis: {
        w: "7";
        h: "7";
        fontSize: "xs";
      };
    };
    md: {
      item: {
        w: "8";
        h: "8";
        fontSize: "sm";
      };
      trigger: {
        w: "8";
        h: "8";
      };
      ellipsis: {
        w: "8";
        h: "8";
        fontSize: "sm";
      };
    };
    lg: {
      item: {
        w: "9";
        h: "9";
        fontSize: "md";
      };
      trigger: {
        w: "9";
        h: "9";
      };
      ellipsis: {
        w: "9";
        h: "9";
        fontSize: "md";
      };
    };
  };
}>;
/** Props accepted by `paginationRecipe`. */
type PaginationRecipeProps = RecipeProps<typeof paginationRecipe>;
//#endregion
export { PaginationRecipeProps, paginationRecipe };
//# sourceMappingURL=pagination.recipe.d.ts.map