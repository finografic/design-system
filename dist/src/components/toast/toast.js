import { toastRecipe } from "./toast.recipe.js";
import { Toast, Toaster, createToaster } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/components/toast/toast.tsx
/**
* Toast Component
*
* Styled wrapper around Ark UI Toast using `createStyleContext`.
* Ark handles placement, stacking, auto-dismiss timers, and a11y (role="status").
*
* Setup (once in app root):
* ```tsx
* import { createToaster, Toaster } from '@workspace/design-system/components';
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
const { withProvider, withContext } = createStyleContext(toastRecipe);
const Toast$1 = {
	Root: withProvider(Toast.Root, "root"),
	Title: withContext(Toast.Title, "title"),
	Description: withContext(Toast.Description, "description"),
	CloseTrigger: withContext(Toast.CloseTrigger, "closeTrigger"),
	ActionTrigger: withContext(Toast.ActionTrigger, "actionTrigger"),
	Context: Toast.Context
};
//#endregion
export { Toast$1 as Toast, Toaster, createToaster };

//# sourceMappingURL=toast.js.map