import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import "../../packages/design-system/styled-system/types/index.js";
import { RecipeProps } from "../../recipes/recipes.types.js";
//#region src/components/accordion/accordion.recipe.d.ts
declare const accordionRecipe: SlotRecipeRuntimeFn<"item" | "itemBody" | "itemContent" | "itemIndicator" | "itemTrigger" | "root", {
  size: {
    sm: {
      itemTrigger: {
        fontSize: "sm";
        py: "2.5";
        px: "0";
      };
      itemBody: {
        fontSize: "sm";
      };
    };
    md: {
      itemTrigger: {
        fontSize: "md";
        py: "3";
        px: "0";
      };
      itemBody: {
        fontSize: "sm";
      };
    };
    lg: {
      itemTrigger: {
        fontSize: "lg";
        py: "4";
        px: "0";
      };
      itemBody: {
        fontSize: "md";
      };
    };
  };
}>;
/** Props accepted by `accordionRecipe`. */
type AccordionRecipeProps = RecipeProps<typeof accordionRecipe>;
//#endregion
export { AccordionRecipeProps, accordionRecipe };
//# sourceMappingURL=accordion.recipe.d.ts.map