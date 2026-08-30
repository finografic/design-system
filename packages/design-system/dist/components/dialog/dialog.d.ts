import { DialogVariants } from "./dialog.recipe.js";
import { DialogRootPropsDS } from "./dialog.types.js";
import { HTMLAttributes, ReactNode } from "react";
import { Dialog } from "@ark-ui/react";
//#region src/components/dialog/dialog.d.ts
declare function Root({ onOpenChange, ...props }: DialogRootPropsDS): import("react").JSX.Element;
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
declare const Dialog$1: {
  /** Dialog root — accepts `size` variant (xs | sm | md | lg | xl | cover | full). @default 'md' */
  Root: typeof Root;
  /** Unstyled trigger — compose with `asChild` + `<Button>` to open the dialog. */
  Trigger: import("react").ForwardRefExoticComponent<Dialog.TriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
  /** Fixed overlay behind the dialog panel. */
  Backdrop: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Dialog.BackdropProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Centres the Content panel in the viewport. */
  Positioner: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Dialog.PositionerProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** The dialog panel itself. */
  Content: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Dialog.ContentProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Flex row: title on the left, close trigger on the right. */
  Header: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>>;
  /** Dialog title — linked to ARIA `aria-labelledby`. */
  Title: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Dialog.TitleProps & import("react").RefAttributes<HTMLHeadingElement>>>;
  /** Visually-hidden description for screen readers — linked to `aria-describedby`. */
  Description: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Dialog.DescriptionProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Scrollable body area. */
  Body: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>>;
  /** Footer row — right-aligned actions. */
  Footer: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>>;
  /** Closes the dialog; use `asChild` to render as a Button. */
  CloseTrigger: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Dialog.CloseTriggerProps & import("react").RefAttributes<HTMLButtonElement>>>;
  /** Ark render-prop context. */
  Context: (props: Dialog.ContextProps) => ReactNode;
};
/** Slot class overrides for {@link DialogDS}. */
interface DialogDSClassNames {
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
type DialogDSProps = DialogVariants & {
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
declare const DialogDS: import("react").ForwardRefExoticComponent<{
  size?: "cover" | "full" | "lg" | "md" | "sm" | "xl" | "xs" | undefined;
} & {
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
} & import("react").RefAttributes<HTMLButtonElement>>;
//#endregion
export { Dialog$1 as Dialog, DialogDS, DialogDSClassNames, DialogDSProps };
//# sourceMappingURL=dialog.d.ts.map