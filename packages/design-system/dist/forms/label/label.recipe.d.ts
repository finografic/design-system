import { RecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../recipes/recipes.types.js";

//#region src/forms/label/label.recipe.d.ts
declare const labelRecipe: RecipeRuntimeFn<{
  size: {
    sm: {
      fontSize: "xs";
      minH: "7";
    };
    md: {
      fontSize: "sm";
      minH: "8";
    };
    lg: {
      fontSize: "md";
      minH: "9";
    };
  };
}>;
type LabelVariants = RecipeProps<typeof labelRecipe>;
//#endregion
export { LabelVariants, labelRecipe };
//# sourceMappingURL=label.recipe.d.ts.map