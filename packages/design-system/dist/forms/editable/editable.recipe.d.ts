import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../types/recipes.types.js";

//#region src/forms/editable/editable.recipe.d.ts
declare const editableRecipe: SlotRecipeRuntimeFn<"area" | "input" | "label" | "textarea" | "root" | "control" | "preview" | "editTrigger" | "submitTrigger" | "cancelTrigger", {
  size: {
    sm: {
      input: {
        h: "8";
        px: "2.5";
        fontSize: "sm";
      };
      textarea: {
        minH: "16";
        px: "2.5";
        py: "1.5";
        fontSize: "sm";
      };
      preview: {
        h: "8";
        px: "2.5";
        fontSize: "sm";
      };
      editTrigger: {
        w: "7";
        h: "7";
      };
      submitTrigger: {
        w: "7";
        h: "7";
      };
      cancelTrigger: {
        w: "7";
        h: "7";
      };
    };
    md: {
      input: {
        h: "9";
        px: "3";
        fontSize: "sm";
      };
      textarea: {
        minH: "20";
        px: "3";
        py: "2";
        fontSize: "sm";
      };
      preview: {
        h: "9";
        px: "3";
        fontSize: "sm";
      };
      editTrigger: {
        w: "8";
        h: "8";
      };
      submitTrigger: {
        w: "8";
        h: "8";
      };
      cancelTrigger: {
        w: "8";
        h: "8";
      };
    };
    lg: {
      input: {
        h: "11";
        px: "4";
        fontSize: "md";
      };
      textarea: {
        minH: "24";
        px: "4";
        py: "2.5";
        fontSize: "md";
      };
      preview: {
        h: "11";
        px: "4";
        fontSize: "md";
      };
      editTrigger: {
        w: "9";
        h: "9";
      };
      submitTrigger: {
        w: "9";
        h: "9";
      };
      cancelTrigger: {
        w: "9";
        h: "9";
      };
    };
  };
}>;
/** Props accepted by `editableRecipe`. */
type EditableRecipeProps = RecipeProps<typeof editableRecipe>;
/** Field density. */
type EditableSize = 'sm' | 'md' | 'lg';
//#endregion
export { EditableRecipeProps, EditableSize, editableRecipe };
//# sourceMappingURL=editable.recipe.d.ts.map