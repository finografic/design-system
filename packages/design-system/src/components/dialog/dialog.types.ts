import type { DialogRootProps } from '@ark-ui/react';
import type { Dialog as ArkDialog } from '@ark-ui/react';
import type React from 'react';

import type { RootTriggerRecipeProps } from '../../recipes/root-trigger.recipe';
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

// ── Dialog.Trigger ────────────────────────────────────────────────────────────

export type DialogTriggerTone = NonNullable<RootTriggerRecipeProps['tone']>;

export interface DialogTriggerPropsDS
  extends React.ComponentPropsWithoutRef<typeof ArkDialog.Trigger>
{
  /**
   * Trigger chrome — maps to Ark docs `data-variant` (`outline` → no attribute).
   * @default 'outline'
   */
  tone?: DialogTriggerTone;
}
