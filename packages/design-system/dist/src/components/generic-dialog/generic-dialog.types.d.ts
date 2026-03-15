import { ButtonVariants } from "../button/button.types.js";
import { DialogSize } from "../dialog/dialog.types.js";
import React from "react";

//#region src/components/generic-dialog/generic-dialog.types.d.ts
interface TabConfig {
  id: string;
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}
type ButtonColorScheme = NonNullable<ButtonVariants>['colorScheme'];
type ButtonVariant = NonNullable<ButtonVariants>;
interface FooterButton {
  label: string;
  onClick: () => void;
  variant?: ButtonVariant;
  colorScheme?: ButtonColorScheme;
}
interface DialogConfig {
  title: string;
  subtitle?: string;
  description?: string;
  tabs: TabConfig[];
  /** Panel size. @default 'md' */
  size?: DialogSize;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
  footer?: {
    primaryButton?: FooterButton;
    secondaryButton?: FooterButton;
  };
}
//#endregion
export { DialogConfig, TabConfig };
//# sourceMappingURL=generic-dialog.types.d.ts.map