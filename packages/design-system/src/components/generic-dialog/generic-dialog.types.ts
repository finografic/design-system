import type React from 'react';

import type { ButtonVariants } from '../button/button.recipe';
import type { DialogSize } from '../dialog/dialog.types';

export type { DialogSize };

export interface TabConfig {
  id: string;
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

type ButtonPalette = NonNullable<ButtonVariants>['palette'];
type ButtonVariant = NonNullable<ButtonVariants>['variant'];

interface FooterButton {
  label: string;
  onClick: () => void;
  variant?: ButtonVariant;
  palette?: ButtonPalette;
}

export interface DialogConfig {
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
