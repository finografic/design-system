import { SlotRecipeRuntimeFn } from "../../../styled-system/types/recipe.js";
//#region src/components/toast/toast.recipe.d.ts
declare const toastRecipe: SlotRecipeRuntimeFn<"root" | "description" | "title" | "closeTrigger" | "actionTrigger", {
  status: {
    info: {
      root: {
        borderLeftWidth: "4px";
        borderLeftColor: "border.info";
      };
      title: {
        color: "fg.info";
      };
    };
    success: {
      root: {
        borderLeftWidth: "4px";
        borderLeftColor: "border.success";
      };
      title: {
        color: "fg.success";
      };
    };
    warning: {
      root: {
        borderLeftWidth: "4px";
        borderLeftColor: "border.warning";
      };
      title: {
        color: "fg.warning";
      };
    };
    error: {
      root: {
        borderLeftWidth: "4px";
        borderLeftColor: "border.error";
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