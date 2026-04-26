import { DialogGenericConfig } from "./dialog-generic.types.js";
import { FC } from "react";

//#region src/components/dialog-generic/dialog-generic.d.ts
interface DialogGenericProps {
  isOpen: boolean;
  onClose: () => void;
  config: DialogGenericConfig;
  className?: string;
  defaultTab?: string;
  onTabChange?: (tab: string) => void;
}
/**
 * **DialogGeneric** — pre-composed dialog supporting tabs, title/subtitle, and optional footer buttons. Built
 * on `Dialog.*` parts.
 *
 * Mirrors the consumer's `GenericDialog` API. For full composition control, use `Dialog.*` parts directly.
 *
 * @example
 *   ```tsx
 *   import { DialogGeneric } from '@finografic/design-system/components';
 *   import type { DialogGenericConfig } from '@finografic/design-system/components';
 *
 *   const config: DialogGenericConfig = {
 *     title: 'Settings',
 *     size: 'lg',
 *     tabs: [{ id: 'general', label: 'General', content: <GeneralTab /> }],
 *     footer: {
 *       buttons: [
 *         { children: 'Cancel', variant: 'outline', onClick: handleClose },
 *         { children: 'Save', variant: 'solid', palette: 'primary', onClick: handleSave },
 *       ],
 *     },
 *   };
 *
 *   <DialogGeneric isOpen={open} onClose={() => setOpen(false)} config={config} />;
 *   ```;
 */
declare const DialogGeneric: FC<DialogGenericProps>;
//#endregion
export { DialogGeneric };
//# sourceMappingURL=dialog-generic.d.ts.map