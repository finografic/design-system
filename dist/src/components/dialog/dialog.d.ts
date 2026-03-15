import { DialogContentPropsDS, DialogRootPropsDS } from "./dialog.types.js";
import React from "react";
import * as react_jsx_runtime0 from "react/jsx-runtime";
import { Dialog } from "@ark-ui/react";

//#region src/components/dialog/dialog.d.ts
declare function Root({
  onOpenChange,
  children,
  ...props
}: DialogRootPropsDS): react_jsx_runtime0.JSX.Element;
declare namespace Root {
  var displayName: string;
}
declare function Backdrop({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Dialog.Backdrop>): react_jsx_runtime0.JSX.Element;
declare namespace Backdrop {
  var displayName: string;
}
declare function Positioner({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Dialog.Positioner>): react_jsx_runtime0.JSX.Element;
declare namespace Positioner {
  var displayName: string;
}
declare function Content({
  className,
  size,
  children,
  ...props
}: DialogContentPropsDS): react_jsx_runtime0.JSX.Element;
declare namespace Content {
  var displayName: string;
}
declare function Header({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime0.JSX.Element;
declare namespace Header {
  var displayName: string;
}
declare function Title({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Dialog.Title>): react_jsx_runtime0.JSX.Element;
declare namespace Title {
  var displayName: string;
}
declare function Description({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Dialog.Description>): react_jsx_runtime0.JSX.Element;
declare namespace Description {
  var displayName: string;
}
declare function Body({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime0.JSX.Element;
declare namespace Body {
  var displayName: string;
}
declare function Footer({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime0.JSX.Element;
declare namespace Footer {
  var displayName: string;
}
declare function CloseTrigger({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Dialog.CloseTrigger>): react_jsx_runtime0.JSX.Element;
declare namespace CloseTrigger {
  var displayName: string;
}
declare const Dialog$1: {
  Root: typeof Root;
  Backdrop: typeof Backdrop;
  Positioner: typeof Positioner;
  Content: typeof Content;
  Header: typeof Header;
  Title: typeof Title;
  Description: typeof Description;
  Body: typeof Body;
  Footer: typeof Footer;
  CloseTrigger: typeof CloseTrigger;
};
//#endregion
export { Dialog$1 as Dialog };
//# sourceMappingURL=dialog.d.ts.map