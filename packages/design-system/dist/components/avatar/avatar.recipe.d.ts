import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../recipes/recipes.types.js";

//#region src/components/avatar/avatar.recipe.d.ts
declare const avatarRecipe: SlotRecipeRuntimeFn<"root" | "image" | "fallback", {
  size: {
    sm: {
      root: {
        width: "8";
        height: "8";
        fontSize: "xs";
      };
    };
    md: {
      root: {
        width: "12";
        height: "12";
        fontSize: "md";
      };
    };
    lg: {
      root: {
        width: "16";
        height: "16";
        fontSize: "lg";
      };
    };
  };
  variant: {
    elevated: {
      root: {
        boxShadow: "sm";
      };
    };
    outlined: {
      root: {};
    };
  };
}>;
type AvatarRecipeProps = RecipeProps<typeof avatarRecipe>;
//#endregion
export { AvatarRecipeProps, avatarRecipe };
//# sourceMappingURL=avatar.recipe.d.ts.map