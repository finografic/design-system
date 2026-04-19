import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../recipes/recipes.types.js";

//#region src/forms/listbox/listbox.recipe.d.ts
declare const listboxRecipe: SlotRecipeRuntimeFn<"content" | "root" | "item" | "itemIndicator" | "label" | "itemText" | "itemGroup" | "itemGroupLabel", {
  size: {
    sm: {
      item: {
        px: "2";
        py: "1";
        fontSize: "sm";
      };
      itemText: {
        fontSize: "sm";
      };
      itemIndicator: {
        w: "4";
        h: "4";
        '& svg': {
          w: "3";
          h: "3";
        };
      };
    };
    md: {
      item: {
        px: "3";
        py: "1.5";
        fontSize: "sm";
      };
      itemText: {
        fontSize: "sm";
      };
      itemIndicator: {
        w: "5";
        h: "5";
        '& svg': {
          w: "3.5";
          h: "3.5";
        };
      };
    };
    lg: {
      item: {
        px: "3";
        py: "2";
        fontSize: "md";
      };
      itemText: {
        fontSize: "md";
      };
      itemIndicator: {
        w: "5";
        h: "5";
        '& svg': {
          w: "4";
          h: "4";
        };
      };
    };
  };
}>;
/** Props accepted by `listboxRecipe`. */
type ListboxRecipeProps = RecipeProps<typeof listboxRecipe>;
/** List density. */
type ListboxSize = 'sm' | 'md' | 'lg';
//#endregion
export { ListboxRecipeProps, ListboxSize, listboxRecipe };
//# sourceMappingURL=listbox.recipe.d.ts.map