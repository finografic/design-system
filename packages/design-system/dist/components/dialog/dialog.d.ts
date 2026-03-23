import { DialogRootPropsDS, DialogTriggerPropsDS } from "./dialog.types.js";
import * as react from "react";
import { HTMLAttributes } from "react";
import * as react_jsx_runtime0 from "react/jsx-runtime";
import { Dialog } from "@ark-ui/react";
import * as _styled_system_jsx0 from "@styled-system/jsx";

//#region src/components/dialog/dialog.d.ts
/**
 * Dialog root — wraps Ark's Dialog.Root.
 * Accepts `size` variant and normalises `onOpenChange` to `(open: boolean) => void`.
 */
declare function Root({
  onOpenChange,
  ...props
}: DialogRootPropsDS): react_jsx_runtime0.JSX.Element;
declare namespace Root {
  var displayName: string;
}
declare function Trigger({
  className,
  tone,
  ...props
}: DialogTriggerPropsDS): react_jsx_runtime0.JSX.Element;
declare namespace Trigger {
  var displayName: string;
}
declare const Dialog$1: {
  /** Dialog root — accepts `size` variant (xs | sm | md | lg | xl | cover | full). @default 'md' */Root: typeof Root; /** Button-like trigger that opens the dialog. */
  Trigger: typeof Trigger; /** Fixed overlay behind the dialog panel. */
  Backdrop: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Dialog.BackdropProps & react.RefAttributes<HTMLDivElement>>>; /** Centres the Content panel in the viewport. */
  Positioner: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Dialog.PositionerProps & react.RefAttributes<HTMLDivElement>>>; /** The dialog panel itself. */
  Content: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Dialog.ContentProps & react.RefAttributes<HTMLDivElement>>>; /** Flex row: title on the left, close trigger on the right. */
  Header: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>>; /** Dialog title — linked to ARIA `aria-labelledby`. */
  Title: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Dialog.TitleProps & react.RefAttributes<HTMLHeadingElement>>>; /** Visually-hidden description for screen readers — linked to `aria-describedby`. */
  Description: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Dialog.DescriptionProps & react.RefAttributes<HTMLDivElement>>>; /** Scrollable body area. */
  Body: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>>; /** Footer row — right-aligned actions. */
  Footer: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>>; /** Closes the dialog; use `asChild` to render as a Button. */
  CloseTrigger: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Dialog.CloseTriggerProps & react.RefAttributes<HTMLButtonElement>>>; /** Ark render-prop context. */
  Context: (props: Dialog.ContextProps) => react.ReactNode;
};
//#endregion
export { Dialog$1 as Dialog };
//# sourceMappingURL=dialog.d.ts.map