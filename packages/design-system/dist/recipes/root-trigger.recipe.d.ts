import { RecipeRuntimeFn } from "../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../types/recipes.types.js";

//#region src/recipes/root-trigger.recipe.d.ts
declare const rootTriggerRecipe: RecipeRuntimeFn<{
  /** Mirrors Ark example `data-variant` on the trigger node */tone: {
    outline: {
      '&:is(:hover, [aria-expanded=true]):not(:disabled, [data-disabled])': {
        bg: "bg.subtle";
      };
    };
    surface: {
      borderColor: "border.emphasized";
      color: "accent.fg";
      '&:is(:hover, [aria-expanded=true]):not(:disabled, [data-disabled])': {
        bg: "bg.subtle";
      };
    };
    solid: {
      bg: "accent.solid";
      borderColor: "accent.solid";
      color: "accent.contrast";
      '&:hover:not(:disabled, [data-disabled])': {
        bg: "accent.fg";
        borderColor: "accent.fg";
      };
    };
  };
}>;
type RootTriggerRecipeProps = RecipeProps<typeof rootTriggerRecipe>;
//#endregion
export { RootTriggerRecipeProps, rootTriggerRecipe };
//# sourceMappingURL=root-trigger.recipe.d.ts.map