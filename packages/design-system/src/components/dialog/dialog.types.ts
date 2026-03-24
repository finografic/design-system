import type { DialogRootProps } from '@ark-ui/react';
import type React from 'react';

import type { DialogVariants } from './dialog.recipe';

// ── Size scale ────────────────────────────────────────────────────────────────

export type DialogSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'cover' | 'full';

// ── Dialog.Root ───────────────────────────────────────────────────────────────

export interface DialogRootPropsDS extends Omit<DialogRootProps, 'onOpenChange'>, DialogVariants {
  /** Controlled open state. */
  open?: boolean;
  /**
   * Called when the dialog requests open/close.
   * Receives a plain `boolean` (Ark's `{ open }` shape is normalised away).
   */
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}
