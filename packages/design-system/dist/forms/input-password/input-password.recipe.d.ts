import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../types/recipes.types.js";

//#region src/forms/input-password/input-password.recipe.d.ts
declare const inputPasswordRecipe: SlotRecipeRuntimeFn<"root" | "label" | "input" | "control" | "visibilityTrigger", {
  size: {
    sm: {
      control: {
        h: "9";
      };
      input: {
        fontSize: "sm";
        pl: "3";
        pr: "1";
      };
      visibilityTrigger: {
        w: "7";
        h: "7";
      };
    };
    md: {
      control: {
        h: "10";
      };
      input: {
        fontSize: "sm";
        pl: "3";
        pr: "1";
      };
      visibilityTrigger: {
        w: "8";
        h: "8";
      };
    };
    lg: {
      control: {
        h: "12";
      };
      input: {
        fontSize: "md";
        pl: "4";
        pr: "1";
      };
      visibilityTrigger: {
        w: "10";
        h: "10";
      };
    };
  };
}>;
/** Props accepted by `inputPasswordRecipe`. */
type InputPasswordRecipeProps = RecipeProps<typeof inputPasswordRecipe>;
/** Field density. */
type InputPasswordSize = 'sm' | 'md' | 'lg';
//#endregion
export { InputPasswordRecipeProps, InputPasswordSize, inputPasswordRecipe };
//# sourceMappingURL=input-password.recipe.d.ts.map