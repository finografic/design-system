import { DialogConfig } from "./generic-dialog.types.js";
import { FC } from "react";

//#region src/components/generic-dialog/generic-dialog.d.ts
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