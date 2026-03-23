/**
 * Dialog — styled Ark **Dialog** compound.
 *
 * `size` lives on `Dialog.Root` (xs | sm | md | lg | xl | cover | full).
 * `onOpenChange` normalised: receives `boolean` (not Ark's `{ open }` shape).
 *
 * @example
 * ```tsx
 * import { Dialog } from '@finografic/design-system/components';
 *
 * <Dialog.Root size="md" open={open} onOpenChange={(open) => !open && onClose()}>
 *   <Dialog.Backdrop />
 *   <Dialog.Positioner>
 *     <Dialog.Content role="alertdialog">
 *       <Dialog.Header>
 *         <Dialog.Title>Title</Dialog.Title>
 *         <Dialog.CloseTrigger asChild>
 *           <Button variant="ghost" size="sm"><XIcon /></Button>
 *         </Dialog.CloseTrigger>
 *       </Dialog.Header>
 *       <Dialog.Description>Hidden by default — for screen readers.</Dialog.Description>
 *       <Dialog.Body>…</Dialog.Body>
 *       <Dialog.Footer>…</Dialog.Footer>
 *     </Dialog.Content>
 *   </Dialog.Positioner>
 * </Dialog.Root>
 * ```
 */
import { Dialog as ArkDialog } from '@ark-ui/react';
import { cx } from '@styled-system/css';
import { createStyleContext } from '@styled-system/jsx';
import { forwardRef, type HTMLAttributes } from 'react';

import { rootTriggerRecipe } from '../../recipes/root-trigger.recipe';
import { dialogRecipe } from './dialog.recipe';
import type { DialogRootPropsDS, DialogTriggerPropsDS } from './dialog.types';

// ── Compound (createStyleContext) ─────────────────────────────────────────────

const { withProvider, withContext } = createStyleContext(dialogRecipe);

/** Base div forwardRef — used for Header / Body / Footer slots that render as plain divs. */
const Div = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => <div {...props} ref={ref} />,
);
Div.displayName = 'Div';

const _DialogRoot = withProvider(ArkDialog.Root, 'root');

/**
 * Dialog root — wraps Ark's Dialog.Root.
 * Accepts `size` variant and normalises `onOpenChange` to `(open: boolean) => void`.
 */
function Root({ onOpenChange, ...props }: DialogRootPropsDS) {
  return (
    <_DialogRoot
      onOpenChange={onOpenChange ? ({ open }) => onOpenChange(open) : undefined}
      {...props}
    />
  );
}
Root.displayName = 'Dialog.Root';

// ── Dialog.Trigger ─────────────────────────────────────────────────────────────

function Trigger({ className, tone = 'outline', ...props }: DialogTriggerPropsDS) {
  const styles = rootTriggerRecipe({ tone });

  return (
    <ArkDialog.Trigger
      className={cx(styles, className)}
      data-variant={tone === 'outline' ? undefined : tone}
      {...props}
    />
  );
}
Trigger.displayName = 'Dialog.Trigger';

// ── Export compound ────────────────────────────────────────────────────────────

export const Dialog = {
  /** Dialog root — accepts `size` variant (xs | sm | md | lg | xl | cover | full). @default 'md' */
  Root,
  /** Button-like trigger that opens the dialog. */
  Trigger,
  /** Fixed overlay behind the dialog panel. */
  Backdrop: withContext(ArkDialog.Backdrop, 'backdrop'),
  /** Centres the Content panel in the viewport. */
  Positioner: withContext(ArkDialog.Positioner, 'positioner'),
  /** The dialog panel itself. */
  Content: withContext(ArkDialog.Content, 'content'),
  /** Flex row: title on the left, close trigger on the right. */
  Header: withContext(Div, 'header'),
  /** Dialog title — linked to ARIA `aria-labelledby`. */
  Title: withContext(ArkDialog.Title, 'title'),
  /** Visually-hidden description for screen readers — linked to `aria-describedby`. */
  Description: withContext(ArkDialog.Description, 'description'),
  /** Scrollable body area. */
  Body: withContext(Div, 'body'),
  /** Footer row — right-aligned actions. */
  Footer: withContext(Div, 'footer'),
  /** Closes the dialog; use `asChild` to render as a Button. */
  CloseTrigger: withContext(ArkDialog.CloseTrigger, 'closeTrigger'),
  /** Ark render-prop context. */
  Context: ArkDialog.Context,
};
