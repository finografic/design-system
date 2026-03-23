import { RecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../types/recipes.types.js";

//#region src/components/callout/callout.recipe.d.ts
declare const calloutRecipe: RecipeRuntimeFn<{
  status: {
    error: {
      bg: "bg.error";
      color: "fg.error";
      borderColor: "border.error";
    };
    warning: {
      bg: "bg.warning";
      color: "fg.warning";
      borderColor: "border.warning";
    };
    success: {
      bg: "bg.success";
      color: "fg.success";
      borderColor: "border.success";
    };
    info: {
      bg: "bg.info";
      color: "fg.info";
      borderColor: "border.info";
    };
  };
}>;
type CalloutVariants = RecipeProps<typeof calloutRecipe>;
//#endregion
export { CalloutVariants, calloutRecipe };
//# sourceMappingURL=callout.recipe.d.ts.map