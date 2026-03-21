import type { DialogRootProps } from '@ark-ui/react';
import type { Dialog as ArkDialog } from '@ark-ui/react';
import type React from 'react';

import type { RootTriggerRecipeProps } from '../../recipes/root-trigger.recipe';
import type { RecipeProps } from '../../types/recipes.types';
import type { dialogRecipe } from './dialog.recipe';

export type DialogVariants = RecipeProps<typeof dialogRecipe>;

// ── Size scale ────────────────────────────────────────────────────────────────

export type DialogSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'cover' | 'full';

// ── Dialog.Root ───────────────────────────────────────────────────────────────

export interface DialogRootPropsDS extends Omit<DialogRootProps, 'onOpenChange'> {
  /** Controlled open state */
  open?: boolean;
  /** Called when the dialog requests open/close */
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

export interface DialogContentPropsDS
  extends React.ComponentPropsWithoutRef<typeof ArkDialog.Content>
{
  /** Controls panel dimensions. @default 'md' */
  size?: DialogSize;
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
