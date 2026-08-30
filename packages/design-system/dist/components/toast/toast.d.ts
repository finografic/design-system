import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import "../../packages/design-system/styled-system/types/index.js";
import { Toast, Toaster, createToaster } from "@ark-ui/react";
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
  /** Toast root — accepts `status` variant (info | success | warning | error). @default 'info' */
  Root: import("@styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<Toast.RootProps & import("react").RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"actionTrigger" | "closeTrigger" | "description" | "root" | "title", {
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
  }>>;
  /** Toast title — bold label at the top. */
  Title: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Toast.TitleProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Optional supporting description below the title. */
  Description: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Toast.DescriptionProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Absolutely-positioned dismiss button (top-right corner). */
  CloseTrigger: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Toast.CloseTriggerProps & import("react").RefAttributes<HTMLButtonElement>>>;
  /** Optional inline action button. */
  ActionTrigger: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Toast.ActionTriggerProps & import("react").RefAttributes<HTMLButtonElement>>>;
  /** Ark render-prop context. */
  Context: (props: Toast.ContextProps) => import("react").ReactNode;
};
//#endregion
export { Toast$1 as Toast, Toaster, createToaster };
//# sourceMappingURL=toast.d.ts.map