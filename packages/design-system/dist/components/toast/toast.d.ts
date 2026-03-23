import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import * as react from "react";
import { Toast, Toaster, createToaster } from "@ark-ui/react";
import * as _styled_system_jsx0 from "@styled-system/jsx";

//#region src/components/toast/toast.d.ts
declare const Toast$1: {
  Root: _styled_system_jsx0.StyleContextProvider<react.ForwardRefExoticComponent<Toast.RootProps & react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"title" | "root" | "description" | "closeTrigger" | "actionTrigger", {
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
  }>>;
  Title: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Toast.TitleProps & react.RefAttributes<HTMLDivElement>>>;
  Description: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Toast.DescriptionProps & react.RefAttributes<HTMLDivElement>>>;
  CloseTrigger: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Toast.CloseTriggerProps & react.RefAttributes<HTMLButtonElement>>>;
  ActionTrigger: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Toast.ActionTriggerProps & react.RefAttributes<HTMLButtonElement>>>;
  Context: (props: Toast.ContextProps) => react.ReactNode;
};
//#endregion
export { Toast$1 as Toast, Toaster, createToaster };
//# sourceMappingURL=toast.d.ts.map