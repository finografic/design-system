import { SlotRecipeRuntimeFn, SlotRecipeVariantRecord } from "../../../styled-system/types/recipe.js";
import * as react from "react";
import * as react_jsx_runtime0 from "react/jsx-runtime";
import { Popover, PopoverOpenChangeDetails } from "@ark-ui/react";
import * as _styled_system_jsx0 from "@styled-system/jsx";

//#region src/components/popover/popover.d.ts
declare const Popover$1: {
  Root: _styled_system_jsx0.StyleContextRootProvider<(props: Popover.RootProps) => react_jsx_runtime0.JSX.Element, SlotRecipeRuntimeFn<"content" | "trigger" | "positioner" | "arrow" | "arrowTip" | "description" | "title" | "closeTrigger", SlotRecipeVariantRecord<"content" | "trigger" | "positioner" | "arrow" | "arrowTip" | "description" | "title" | "closeTrigger">>>;
  RootProvider: _styled_system_jsx0.StyleContextRootProvider<(props: Popover.RootProviderProps) => react_jsx_runtime0.JSX.Element, SlotRecipeRuntimeFn<"content" | "trigger" | "positioner" | "arrow" | "arrowTip" | "description" | "title" | "closeTrigger", SlotRecipeVariantRecord<"content" | "trigger" | "positioner" | "arrow" | "arrowTip" | "description" | "title" | "closeTrigger">>>;
  Trigger: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Popover.TriggerProps & react.RefAttributes<HTMLButtonElement>>>;
  Anchor: react.ForwardRefExoticComponent<Popover.AnchorProps & react.RefAttributes<HTMLDivElement>>;
  Positioner: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Popover.PositionerProps & react.RefAttributes<HTMLDivElement>>>;
  Content: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Popover.ContentProps & react.RefAttributes<HTMLDivElement>>>;
  Title: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Popover.TitleProps & react.RefAttributes<HTMLDivElement>>>;
  Description: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Popover.DescriptionProps & react.RefAttributes<HTMLDivElement>>>;
  CloseTrigger: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Popover.CloseTriggerProps & react.RefAttributes<HTMLButtonElement>>>;
  Arrow: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Popover.ArrowProps & react.RefAttributes<HTMLDivElement>>>;
  ArrowTip: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Popover.ArrowTipProps & react.RefAttributes<HTMLDivElement>>>;
  Context: (props: Popover.ContextProps) => react.ReactNode;
};
//#endregion
export { Popover$1 as Popover, type PopoverOpenChangeDetails };
//# sourceMappingURL=popover.d.ts.map