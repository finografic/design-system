import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
//#region src/components/toast/toast.recipe.d.ts
declare const toastRecipe: SlotRecipeRuntimeFn<"description" | "root" | "title" | "closeTrigger" | "actionTrigger", {
  status: {
    info: {
      root: {
        bg: "bg.info";
        borderColor: "border.info";
      };
      title: {
        color: "fg.info";
      };
    };
    success: {
      root: {
        bg: "bg.success";
        borderColor: "border.success";
      };
      title: {
        color: "fg.success";
      };
    };
    warning: {
      root: {
        bg: "bg.warning";
        borderColor: "border.warning";
      };
      title: {
        color: "fg.warning";
      };
    };
    error: {
      root: {
        bg: "bg.error";
        borderColor: "border.error";
      };
      title: {
        color: "fg.error";
      };
    };
  };
}>;
//#endregion
export { toastRecipe };
//# sourceMappingURL=toast.recipe.d.ts.map