import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import * as _$react from "react";
import { Toast, Toaster, createToaster } from "@ark-ui/react";
import * as _$_styled_system_jsx0 from "@styled-system/jsx";

//#region src/components/toast/toast.d.ts
/**
 * Styled Ark **Toast** compound — each part is wired to `toastRecipe` via context.
 *
 * Setup (once in app root):
 *
 * ```tsx
 * import { createToaster, Toaster } from '@finografic/design-system/components';
 *
 * export const toaster = createToaster({ placement: 'top-end', gap: 8 });
 *
 * // In your root component:
 * <Toaster toaster={toaster} />;
 * ```
 *
 * Fire a toast anywhere:
 *
 * ```tsx
 * toaster.create({ title: 'Saved', description: 'Settings saved.', type: 'success' });
 * ```
 *
 * Custom render with styled Toast parts:
 *
 * ```tsx
 * <Toaster
 *   toaster={toaster}
 *   render={(toast) => (
 *     <Toast.Root key={toast.id} status={toast.type}>
 *       <Toast.Title>{toast.title}</Toast.Title>
 *       {toast.description && <Toast.Description>{toast.description}</Toast.Description>}
 *       <Toast.CloseTrigger asChild>
 *         <button aria-label="Dismiss">
 *           <XIcon />
 *         </button>
 *       </Toast.CloseTrigger>
 *     </Toast.Root>
 *   )}
 * />;
 * ```
 */
declare const Toast$1: {
  /** Toast root — accepts `status` variant (info | success | warning | error). @default 'info' */Root: _$_styled_system_jsx0.StyleContextProvider<_$react.ForwardRefExoticComponent<Toast.RootProps & _$react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"description" | "root" | "title" | "closeTrigger" | "actionTrigger", {
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
  }>>; /** Toast title — bold label at the top. */
  Title: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Toast.TitleProps & _$react.RefAttributes<HTMLDivElement>>>; /** Optional supporting description below the title. */
  Description: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Toast.DescriptionProps & _$react.RefAttributes<HTMLDivElement>>>; /** Absolutely-positioned dismiss button (top-right corner). */
  CloseTrigger: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Toast.CloseTriggerProps & _$react.RefAttributes<HTMLButtonElement>>>; /** Optional inline action button. */
  ActionTrigger: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Toast.ActionTriggerProps & _$react.RefAttributes<HTMLButtonElement>>>; /** Ark render-prop context. */
  Context: (props: Toast.ContextProps) => _$react.ReactNode;
};
//#endregion
export { Toast$1 as Toast, Toaster, createToaster };
//# sourceMappingURL=toast.d.ts.map