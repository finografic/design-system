import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../types/recipes.types.js";

//#region src/forms/select-searchable/select-searchable.recipe.d.ts
declare const selectSearchableRecipe: SlotRecipeRuntimeFn<"content" | "root" | "item" | "itemIndicator" | "positioner" | "itemText" | "emptyState" | "trigger" | "list" | "control" | "input" | "clearTrigger" | "leadIcon" | "addNew", {
  size: {
    sm: {
      control: {
        h: "9";
      };
      leadIcon: {
        w: "9";
        h: "9";
      };
      input: {
        fontSize: "sm";
        paddingInline: "9";
        paddingInlineEnd: "7";
      };
      clearTrigger: {
        w: "7";
        h: "7";
      };
      trigger: {
        w: "7";
        h: "7";
      };
      item: {
        px: "2";
        py: "1";
        fontSize: "sm";
      };
      itemText: {
        fontSize: "sm";
      };
      addNew: {
        px: "2";
        py: "1";
        fontSize: "sm";
      };
      emptyState: {
        fontSize: "sm";
      };
    };
    md: {
      control: {
        h: "10";
      };
      leadIcon: {
        w: "10";
        h: "10";
      };
      input: {
        fontSize: "sm";
        paddingInline: "10";
        paddingInlineEnd: "8";
      };
      clearTrigger: {
        w: "8";
        h: "8";
      };
      trigger: {
        w: "8";
        h: "8";
      };
      item: {
        px: "3";
        py: "1.5";
        fontSize: "sm";
      };
      itemText: {
        fontSize: "sm";
      };
      addNew: {
        px: "3";
        py: "1.5";
        fontSize: "sm";
      };
      emptyState: {
        fontSize: "sm";
      };
    };
    lg: {
      control: {
        h: "12";
      };
      leadIcon: {
        w: "12";
        h: "12";
      };
      input: {
        fontSize: "md";
        paddingInline: "12";
        paddingInlineEnd: "10";
      };
      clearTrigger: {
        w: "10";
        h: "10";
      };
      trigger: {
        w: "10";
        h: "10";
      };
      item: {
        px: "3";
        py: "2";
        fontSize: "md";
      };
      itemText: {
        fontSize: "md";
      };
      addNew: {
        px: "3";
        py: "2";
        fontSize: "md";
      };
      emptyState: {
        fontSize: "md";
      };
    };
  };
}>;
type SelectSearchableVariants = RecipeProps<typeof selectSearchableRecipe>;
//#endregion
export { SelectSearchableVariants, selectSearchableRecipe };
//# sourceMappingURL=select-searchable.recipe.d.ts.map