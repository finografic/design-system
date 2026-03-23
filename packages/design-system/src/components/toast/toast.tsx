import { createToaster, Toast as ArkToast, Toaster } from '@ark-ui/react';
import { createStyleContext } from '@styled-system/jsx';

import { toastRecipe } from './toast.recipe';

export { createToaster, Toaster };

// ── Compound (createStyleContext) ─────────────────────────────────────────────

const { withProvider, withContext } = createStyleContext(toastRecipe);

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
export const Toast = {
  /** Toast root — accepts `status` variant (info | success | warning | error). @default 'info' */
  Root: withProvider(ArkToast.Root, 'root'),
  /** Toast title — bold label at the top. */
  Title: withContext(ArkToast.Title, 'title'),
  /** Optional supporting description below the title. */
  Description: withContext(ArkToast.Description, 'description'),
  /** Absolutely-positioned dismiss button (top-right corner). */
  CloseTrigger: withContext(ArkToast.CloseTrigger, 'closeTrigger'),
  /** Optional inline action button. */
  ActionTrigger: withContext(ArkToast.ActionTrigger, 'actionTrigger'),
  /** Ark render-prop context. */
  Context: ArkToast.Context,
};
