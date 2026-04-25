import { CloseIcon } from '@finografic/icons';

import { Dialog as ArkDialog } from '@ark-ui/react';
import { cx } from '@styled-system/css';
import { createStyleContext } from '@styled-system/jsx';
import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

import type { DialogVariants } from './dialog.recipe';
import { dialogRecipe } from './dialog.recipe';
import type { DialogRootPropsDS } from './dialog.types';

// ── Compound (createStyleContext) ─────────────────────────────────────────────

const { withProvider, withContext } = createStyleContext(dialogRecipe);

/** Base div forwardRef — used for Header / Body / Footer slots that render as plain divs. */
const Div = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => (
  <div {...props} ref={ref} />
));
Div.displayName = 'Div';

const _DialogRoot = withProvider(ArkDialog.Root, 'root');

function Root({ onOpenChange, ...props }: DialogRootPropsDS) {
  return (
    <_DialogRoot onOpenChange={onOpenChange ? ({ open }) => onOpenChange(open) : undefined} {...props} />
  );
}
Root.displayName = 'Dialog.Root';

/**
 * Styled Ark **Dialog** compound — each part is wired to `dialogRecipe` via context.
 *
 * Ark handles all a11y: `dialog` role, focus trap, `aria-labelledby`, `aria-describedby`, and Escape to
 * close. `size` variant lives on **`Dialog.Root`**.
 *
 * **`Dialog.Trigger`** is unstyled — compose it with `asChild` + `<Button>`.
 *
 * @example
 *   ```tsx
 *   import { Dialog } from '@finografic/design-system/components';
 *   import { Button } from '@finografic/design-system/components';
 *
 *   <Dialog.Root size="md" open={open} onOpenChange={(open) => !open && onClose()}>
 *     <Dialog.Backdrop />
 *     <Dialog.Positioner>
 *       <Dialog.Content>
 *         <Dialog.Header>
 *           <Dialog.Title>Title</Dialog.Title>
 *           <Dialog.CloseTrigger asChild>
 *             <Button variant="ghost" size="sm" aria-label="Close">
 *               <CloseIcon />
 *             </Button>
 *           </Dialog.CloseTrigger>
 *         </Dialog.Header>
 *         <Dialog.Description>Hidden by default — for screen readers.</Dialog.Description>
 *         <Dialog.Body>…</Dialog.Body>
 *         <Dialog.Footer>…</Dialog.Footer>
 *       </Dialog.Content>
 *     </Dialog.Positioner>
 *   </Dialog.Root>;
 *   ```;
 */
export const Dialog = {
  /** Dialog root — accepts `size` variant (xs | sm | md | lg | xl | cover | full). @default 'md' */
  Root,
  /** Unstyled trigger — compose with `asChild` + `<Button>` to open the dialog. */
  Trigger: ArkDialog.Trigger,
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

// ── DialogDS — convenience wrapper ────────────────────────────────────────────

/** Slot class overrides for {@link DialogDS}. */
export interface DialogDSClassNames {
  backdrop?: string;
  positioner?: string;
  content?: string;
  header?: string;
  title?: string;
  description?: string;
  body?: string;
  footer?: string;
  closeTrigger?: string;
}

export type DialogDSProps = DialogVariants & {
  /**
   * The trigger element — rendered inside `Dialog.Trigger asChild`. Omit for programmatic-only control (use
   * `open` + `onOpenChange`).
   */
  trigger?: ReactNode;
  /** Dialog title rendered in the header. */
  title?: ReactNode;
  /**
   * Visually-hidden description for screen readers — linked to `aria-describedby`. If omitted, the slot is
   * not rendered.
   */
  description?: ReactNode;
  /** Body content — placed in the scrollable body area. */
  children?: ReactNode;
  /** Footer content — typically action buttons. */
  footer?: ReactNode;
  /** Controlled open state. */
  open?: boolean;
  /** Called when the dialog requests open/close. */
  onOpenChange?: (open: boolean) => void;
  /** Whether to show the built-in close button in the header. @default true */
  closeButton?: boolean;
  /** Per-slot class overrides. */
  classNames?: DialogDSClassNames;
};

/**
 * Design-system convenience dialog — pass a `trigger`, `title`, `children`, and `footer` for the common case.
 * **`Dialog`** stays the styled compound; **`DialogDS`** = packaged DS API with normalized
 * `onOpenChange(open: boolean)`.
 *
 * @example
 *   ```tsx
 *   import { DialogDS, Dialog } from '@finografic/design-system/components';
 *   import { Button } from '@finografic/design-system/components';
 *
 *   <DialogDS
 *     trigger={<Button>Open dialog</Button>}
 *     title="Confirm action"
 *     size="sm"
 *     onOpenChange={(open) => console.log(open)}
 *     footer={
 *       <>
 *         <Dialog.CloseTrigger asChild>
 *           <Button variant="ghost">Cancel</Button>
 *         </Dialog.CloseTrigger>
 *         <Button>Confirm</Button>
 *       </>
 *     }
 *   >
 *     <p>Are you sure you want to continue?</p>
 *   </DialogDS>;
 *   ```;
 */
export const DialogDS = forwardRef<HTMLButtonElement, DialogDSProps>(
  (
    {
      trigger,
      title,
      description,
      children,
      footer,
      open,
      onOpenChange,
      closeButton = true,
      size = 'md',
      classNames = {},
    },
    ref,
  ) => {
    const styles = dialogRecipe({ size });

    return (
      <ArkDialog.Root open={open} onOpenChange={({ open: o }) => onOpenChange?.(o)}>
        {trigger && (
          <ArkDialog.Trigger ref={ref} asChild>
            {trigger}
          </ArkDialog.Trigger>
        )}

        <ArkDialog.Backdrop className={cx(styles.backdrop, classNames.backdrop)} />
        <ArkDialog.Positioner className={cx(styles.positioner, classNames.positioner)}>
          <ArkDialog.Content className={cx(styles.content, classNames.content)}>
            {(title || closeButton) && (
              <div className={cx(styles.header, classNames.header)}>
                {title && (
                  <ArkDialog.Title className={cx(styles.title, classNames.title)}>{title}</ArkDialog.Title>
                )}
                {closeButton && (
                  <ArkDialog.CloseTrigger className={cx(styles.closeTrigger, classNames.closeTrigger)}>
                    <CloseIcon aria-hidden />
                  </ArkDialog.CloseTrigger>
                )}
              </div>
            )}
            {description && (
              <ArkDialog.Description className={cx(styles.description, classNames.description)}>
                {description}
              </ArkDialog.Description>
            )}
            {children && <div className={cx(styles.body, classNames.body)}>{children}</div>}
            {footer && <div className={cx(styles.footer, classNames.footer)}>{footer}</div>}
          </ArkDialog.Content>
        </ArkDialog.Positioner>
      </ArkDialog.Root>
    );
  },
);

DialogDS.displayName = 'DialogDS';
