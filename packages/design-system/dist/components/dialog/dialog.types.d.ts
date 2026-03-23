import { RootTriggerRecipeProps } from "../../recipes/root-trigger.recipe.js";
import { DialogVariants } from "./dialog.recipe.js";
import React from "react";
import { Dialog, DialogRootProps } from "@ark-ui/react";

//#region src/components/dialog/dialog.types.d.ts
type DialogSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'cover' | 'full';
interface DialogRootPropsDS extends Omit<DialogRootProps, 'onOpenChange'>, DialogVariants {
  /** Controlled open state. */
  open?: boolean;
  /**
   * Called when the dialog requests open/close.
   * Receives a plain `boolean` (Ark's `{ open }` shape is normalised away).
   */
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}
type DialogTriggerTone = NonNullable<RootTriggerRecipeProps['tone']>;
interface DialogTriggerPropsDS extends React.ComponentPropsWithoutRef<typeof Dialog.Trigger> {
  /**
   * Trigger chrome — maps to Ark docs `data-variant` (`outline` → no attribute).
   * @default 'outline'
   */
  tone?: DialogTriggerTone;
}
//#endregion
export { DialogRootPropsDS, DialogSize, DialogTriggerPropsDS, DialogTriggerTone };
//# sourceMappingURL=dialog.types.d.ts.map