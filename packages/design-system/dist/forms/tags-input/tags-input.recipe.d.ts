import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../recipes/recipes.types.js";

//#region src/forms/tags-input/tags-input.recipe.d.ts
declare const tagsInputRecipe: SlotRecipeRuntimeFn<"description" | "root" | "item" | "control" | "label" | "errorText" | "input" | "clearTrigger" | "itemText" | "itemPreview" | "itemInput" | "itemDeleteTrigger", {
  size: {
    sm: {
      label: {
        fontSize: "xs";
      };
      control: {
        minH: "9";
        px: "2";
        py: "0.5";
      };
      itemPreview: {
        px: "1.5";
        py: "0.5";
        fontSize: "xs";
      };
      itemInput: {
        px: "1.5";
        py: "0.5";
        fontSize: "xs";
      };
      itemDeleteTrigger: {
        p: "0.5";
        '& svg': {
          w: "3";
          h: "3";
        };
      };
      input: {
        h: "6";
        px: "1";
        fontSize: "xs";
      };
      clearTrigger: {
        '& svg': {
          w: "3";
          h: "3";
        };
      };
      description: {
        fontSize: "xs";
      };
      errorText: {
        fontSize: "xs";
      };
    };
    md: {
      label: {
        fontSize: "sm";
      };
      control: {
        minH: "10";
        px: "2";
        py: "1";
      };
      itemPreview: {
        px: "2";
        py: "0.5";
        fontSize: "sm";
      };
      itemInput: {
        px: "2";
        py: "0.5";
        fontSize: "sm";
      };
      itemDeleteTrigger: {
        p: "0.5";
        '& svg': {
          w: "3.5";
          h: "3.5";
        };
      };
      input: {
        h: "7";
        px: "1";
        fontSize: "sm";
      };
      clearTrigger: {
        '& svg': {
          w: "4";
          h: "4";
        };
      };
      description: {
        fontSize: "sm";
      };
      errorText: {
        fontSize: "sm";
      };
    };
    lg: {
      label: {
        fontSize: "md";
      };
      control: {
        minH: "11";
        px: "3";
        py: "1.5";
      };
      itemPreview: {
        px: "2";
        py: "1";
        fontSize: "sm";
      };
      itemInput: {
        px: "2";
        py: "1";
        fontSize: "sm";
      };
      itemDeleteTrigger: {
        p: "1";
        '& svg': {
          w: "3.5";
          h: "3.5";
        };
      };
      input: {
        h: "7";
        px: "1";
        fontSize: "md";
      };
      clearTrigger: {
        '& svg': {
          w: "4";
          h: "4";
        };
      };
      description: {
        fontSize: "md";
      };
      errorText: {
        fontSize: "md";
      };
    };
  };
}>;
type TagsInputVariants = RecipeProps<typeof tagsInputRecipe>;
//#endregion
export { TagsInputVariants, tagsInputRecipe };
//# sourceMappingURL=tags-input.recipe.d.ts.map