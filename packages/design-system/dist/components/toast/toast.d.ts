import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import * as react from "react";
import { Toast, Toaster, createToaster } from "@ark-ui/react";
import * as _styled_system_jsx0 from "@styled-system/jsx";

//#region src/components/toast/toast.d.ts
/**
 * Styled Ark **Toast** compound — each part is wired to `toastRecipe` via context.
 *
 * Setup (once in app root):
 * ```tsx
 * import { createToaster, Toaster } from '@finografic/design-system/components';
 *
 * export const toaster = createToaster({ placement: 'top-end', gap: 8 });
 *
 * // In your root component:
 * <Toaster toaster={toaster} />
 * ```
 *
 * Fire a toast anywhere:
 * ```tsx
 * toaster.create({ title: 'Saved', description: 'Settings saved.', type: 'success' });
 * ```
 *
 * Custom render with styled Toast parts:
 * ```tsx
 * <Toaster
 *   toaster={toaster}
 *   render={(toast) => (
 *     <Toast.Root key={toast.id} status={toast.type}>
 *       <Toast.Title>{toast.title}</Toast.Title>
 *       {toast.description && <Toast.Description>{toast.description}</Toast.Description>}
 *       <Toast.CloseTrigger asChild>
 *         <button aria-label="Dismiss"><XIcon /></button>
 *       </Toast.CloseTrigger>
 *     </Toast.Root>
 *   )}
 * />
 * ```
 */
declare const Toast$1: {
  /** Toast root — accepts `status` variant (info | success | warning | error). @default 'info' */Root: _styled_system_jsx0.StyleContextProvider<react.ForwardRefExoticComponent<Toast.RootProps & react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"description" | "root" | "title" | "closeTrigger" | "actionTrigger", {
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
  }>>; /** Toast title — bold label at the top. */
  Title: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Toast.TitleProps & react.RefAttributes<HTMLDivElement>>>; /** Optional supporting description below the title. */
  Description: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Toast.DescriptionProps & react.RefAttributes<HTMLDivElement>>>; /** Absolutely-positioned dismiss button (top-right corner). */
  CloseTrigger: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Toast.CloseTriggerProps & react.RefAttributes<HTMLButtonElement>>>; /** Optional inline action button. */
  ActionTrigger: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Toast.ActionTriggerProps & react.RefAttributes<HTMLButtonElement>>>; /** Ark render-prop context. */
  Context: (props: Toast.ContextProps) => react.ReactNode;
};
//#endregion
export { Toast$1 as Toast, Toaster, createToaster };
//# sourceMappingURL=toast.d.ts.map