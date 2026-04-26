import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../recipes/recipes.types.js";

//#region src/components/toggle/toggle.recipe.d.ts
declare const toggleRecipe: SlotRecipeRuntimeFn<"root" | "indicator", {
  size: {
    sm: {
      root: {
        h: "7";
        px: "2";
        fontSize: "xs";
        gap: "1.5";
      };
    };
    md: {
      root: {
        h: "8";
        px: "3";
        fontSize: "sm";
        gap: "2";
      };
    };
    lg: {
      root: {
        h: "9";
        px: "4";
        fontSize: "md";
        gap: "2";
      };
    };
  };
}>;
/** Props accepted by `toggleRecipe`. */
type ToggleRecipeProps = RecipeProps<typeof toggleRecipe>;
//#endregion
export { ToggleRecipeProps, toggleRecipe };
//# sourceMappingURL=toggle.recipe.d.ts.map