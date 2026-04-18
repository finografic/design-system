import { RecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../recipes/recipes.types.js";

//#region src/components/card/card.recipe.d.ts
declare const cardRecipe: RecipeRuntimeFn<{
  size: {
    sm: {
      padding: "3";
    };
    md: {
      padding: "4";
    };
    lg: {
      padding: "6";
    };
  };
  variant: {
    elevated: {
      boxShadow: "sm";
    };
    outlined: {};
  };
}>;
type CardVariants = RecipeProps<typeof cardRecipe>;
//#endregion
export { CardVariants, cardRecipe };
//# sourceMappingURL=card.recipe.d.ts.map