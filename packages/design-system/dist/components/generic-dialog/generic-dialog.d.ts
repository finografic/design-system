import { DialogConfig } from "./generic-dialog.types.js";
import { FC } from "react";

//#region src/components/generic-dialog/generic-dialog.d.ts
/**
 * **GenericDialog** — pre-composed dialog supporting tabs, a title/subtitle, and
 * optional footer buttons. Built on `Dialog.*` parts.
 *
 * For full composition control use `Dialog.*` parts directly.
 *
 * @example
 * ```tsx
 * import { GenericDialog } from '@finografic/design-system/components';
 * import type { DialogConfig } from '@finografic/design-system/components';
 *
 * const config: DialogConfig = {
 *   title: 'Settings',
 *   size: 'lg',
 *   tabs: [{ id: 'general', label: 'General', content: <GeneralTab /> }],
 *   footer: {
 *     primaryButton: { label: 'Save', onClick: handleSave },
 *     secondaryButton: { label: 'Cancel', onClick: handleClose },
 *   },
 * };
 *
 * <GenericDialog isOpen={open} onClose={() => setOpen(false)} config={config} />
 * ```
 */
interface GenericDialogProps {
  isOpen: boolean;
  onClose: () => void;
  config: DialogConfig;
  className?: string;
  defaultTab?: string;
  onTabChange?: (tab: string) => void;
}
declare const GenericDialog: FC<GenericDialogProps>;
//#endregion
export { GenericDialog };
//# sourceMappingURL=generic-dialog.d.ts.map