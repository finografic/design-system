import type { ButtonProps } from '../button/button';
import type { DialogSize } from '../dialog/dialog.types';
import type React from 'react';

export type { DialogSize };

export interface DialogGenericTab {
  id: string;
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface DialogGenericFooter {
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

export interface DialogGenericConfig {
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
