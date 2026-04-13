import { ButtonProps } from "../button/button.js";
import { DialogSize } from "../dialog/dialog.types.js";
import React from "react";

//#region src/components/dialog-generic/dialog-generic.types.d.ts
interface DialogGenericTab {
  id: string;
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}
interface DialogGenericFooter {
  buttons: ButtonProps[];
  /**
   * Render buttons in their original order + `flex-direction: row-reverse`. `false` reverses the array +
   * normal flex direction.
   *
   * @default true
   */
  isRTL?: boolean;
  /** Stretch the footer buttons wrapper to full width. @default false */
  isFilled?: boolean;
}
interface DialogGenericConfig {
  title: string;
  subtitle?: string;
  /**
   * Visually-hidden text for screen readers, appended to `aria-describedby`. Omit to skip the description
   * slot entirely.
   */
  description?: string;
  /** Tabs to render. Pass a single tab for untabbed (no tab list shown). */
  tabs: DialogGenericTab[];
  /** Panel size. @default 'md' */
  size?: DialogSize;
  maxWidth?: string;
  maxHeight?: string;
  minWidth?: string;
  minHeight?: string;
  footer?: DialogGenericFooter | null;
}
//#endregion
export { DialogGenericConfig, DialogGenericFooter, DialogGenericTab };
//# sourceMappingURL=dialog-generic.types.d.ts.map