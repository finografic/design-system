import React from "react";
import { Dialog, DialogRootProps } from "@ark-ui/react";

//#region src/components/dialog/dialog.types.d.ts
type DialogSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'cover' | 'full';
interface DialogRootPropsDS extends Omit<DialogRootProps, 'onOpenChange'> {
  /** Controlled open state */
  open?: boolean;
  /** Called when the dialog requests open/close */
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}
interface DialogContentPropsDS extends React.ComponentPropsWithoutRef<typeof Dialog.Content> {
  /** Controls panel dimensions. @default 'md' */
  size?: DialogSize;
}
//#endregion
export { DialogContentPropsDS, DialogRootPropsDS, DialogSize };
//# sourceMappingURL=dialog.types.d.ts.map