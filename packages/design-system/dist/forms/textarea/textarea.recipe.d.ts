import { RecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../types/recipes.types.js";

//#region src/forms/textarea/textarea.recipe.d.ts
declare const textareaRecipe: RecipeRuntimeFn<{
  size: {
    sm: {
      minH: "20";
      px: "2.5";
      py: "1.5";
      fontSize: "sm";
    };
    md: {
      minH: "24";
      px: "3";
      py: "2";
      fontSize: "sm";
    };
    lg: {
      minH: "28";
      px: "4";
      py: "2.5";
      fontSize: "md";
    };
  };
  resize: {
    none: {
      resize: "none";
    };
    vertical: {
      resize: "vertical";
    };
    horizontal: {
      resize: "horizontal";
    };
    both: {
      resize: "both";
    };
  };
}>;
/** Props accepted by `textareaRecipe`. */
type TextareaRecipeProps = RecipeProps<typeof textareaRecipe>;
/** Field size. */
type TextareaSize = 'sm' | 'md' | 'lg';
/** Resize direction. */
type TextareaResize = 'none' | 'vertical' | 'horizontal' | 'both';
//#endregion
export { TextareaRecipeProps, TextareaResize, TextareaSize, textareaRecipe };
//# sourceMappingURL=textarea.recipe.d.ts.map