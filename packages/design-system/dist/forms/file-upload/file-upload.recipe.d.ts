import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../types/recipes.types.js";

//#region src/forms/file-upload/file-upload.recipe.d.ts
declare const fileUploadRecipe: SlotRecipeRuntimeFn<"root" | "item" | "label" | "trigger" | "itemGroup" | "itemPreview" | "itemDeleteTrigger" | "dropzone" | "dropzoneIcon" | "dropzoneContent" | "dropzoneTitle" | "dropzoneDescription" | "itemCompact" | "itemPreviewImage" | "itemName" | "itemSizeText", {
  size: {
    sm: {
      trigger: {
        px: "3";
        py: "1.5";
        fontSize: "xs";
        '& svg': {
          w: "3.5";
          h: "3.5";
        };
      };
      dropzone: {
        minH: "32";
        px: "4";
        py: "4";
      };
      dropzoneIcon: {
        w: "8";
        h: "8";
      };
      item: {
        p: "2";
      };
      itemCompact: {
        px: "2.5";
        py: "1.5";
      };
      itemPreview: {
        '& svg': {
          w: "4";
          h: "4";
        };
      };
      itemPreviewImage: {
        w: "8";
        h: "8";
      };
      itemDeleteTrigger: {
        w: "5";
        h: "5";
        '& svg': {
          w: "3.5";
          h: "3.5";
        };
      };
    };
    md: {
      trigger: {
        px: "4";
        py: "2";
        fontSize: "sm";
        '& svg': {
          w: "4";
          h: "4";
        };
      };
      dropzone: {
        minH: "40";
        px: "6";
        py: "6";
      };
      dropzoneIcon: {
        w: "10";
        h: "10";
      };
      item: {
        p: "3";
      };
      itemCompact: {
        px: "3";
        py: "2";
      };
      itemPreview: {
        '& svg': {
          w: "5";
          h: "5";
        };
      };
      itemPreviewImage: {
        w: "10";
        h: "10";
      };
      itemDeleteTrigger: {
        w: "6";
        h: "6";
        '& svg': {
          w: "4";
          h: "4";
        };
      };
    };
    lg: {
      trigger: {
        px: "5";
        py: "2.5";
        fontSize: "md";
        '& svg': {
          w: "5";
          h: "5";
        };
      };
      dropzone: {
        minH: "48";
        px: "8";
        py: "8";
      };
      dropzoneIcon: {
        w: "12";
        h: "12";
      };
      item: {
        p: "4";
      };
      itemCompact: {
        px: "4";
        py: "2.5";
      };
      itemPreview: {
        '& svg': {
          w: "6";
          h: "6";
        };
      };
      itemPreviewImage: {
        w: "12";
        h: "12";
      };
      itemDeleteTrigger: {
        w: "7";
        h: "7";
        '& svg': {
          w: "4";
          h: "4";
        };
      };
    };
  };
}>;
/** Props accepted by `fileUploadRecipe`. */
type FileUploadRecipeProps = RecipeProps<typeof fileUploadRecipe>;
/** List density. */
type FileUploadSize = 'sm' | 'md' | 'lg';
//#endregion
export { FileUploadRecipeProps, FileUploadSize, fileUploadRecipe };
//# sourceMappingURL=file-upload.recipe.d.ts.map