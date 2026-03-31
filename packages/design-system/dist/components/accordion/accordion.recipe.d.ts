import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../types/recipes.types.js";

//#region src/components/accordion/accordion.recipe.d.ts
declare const accordionRecipe: SlotRecipeRuntimeFn<"root" | "item" | "itemIndicator" | "itemTrigger" | "itemContent" | "itemBody", {
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