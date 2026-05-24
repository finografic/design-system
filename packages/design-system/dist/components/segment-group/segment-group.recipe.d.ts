import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../recipes/recipes.types.js";

//#region src/components/segment-group/segment-group.recipe.d.ts
declare const segmentGroupRecipe: SlotRecipeRuntimeFn<"root" | "item" | "itemText" | "indicator" | "label" | "itemControl", {
  size: {
    sm: {
      item: {
        px: "2";
        py: "1";
        fontSize: "xs";
        h: "6";
      };
    };
    md: {
      item: {
        px: "3";
        py: "1.5";
        fontSize: "sm";
        h: "7";
      };
    };
    lg: {
      item: {
        px: "4";
        py: "2";
        fontSize: "md";
        h: "8";
      };
    };
  };
}>;
/** Props accepted by `segmentGroupRecipe`. */
type SegmentGroupRecipeProps = RecipeProps<typeof segmentGroupRecipe>;
//#endregion
export { SegmentGroupRecipeProps, segmentGroupRecipe };
//# sourceMappingURL=segment-group.recipe.d.ts.map