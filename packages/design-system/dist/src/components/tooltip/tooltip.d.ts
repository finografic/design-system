import { SlotRecipeRuntimeFn, SlotRecipeVariantRecord } from "../../../styled-system/types/recipe.js";
import * as react from "react";
import * as react_jsx_runtime0 from "react/jsx-runtime";
import { Tooltip, TooltipOpenChangeDetails } from "@ark-ui/react";
import * as _styled_system_jsx0 from "@styled-system/jsx";

//#region src/components/tooltip/tooltip.d.ts
declare const Tooltip$1: {
  Root: _styled_system_jsx0.StyleContextRootProvider<(props: Tooltip.RootProps) => react_jsx_runtime0.JSX.Element, SlotRecipeRuntimeFn<"positioner" | "content" | "arrow" | "arrowTip" | "trigger", SlotRecipeVariantRecord<"positioner" | "content" | "arrow" | "arrowTip" | "trigger">>>;
  RootProvider: _styled_system_jsx0.StyleContextRootProvider<(props: Tooltip.RootProviderProps) => react_jsx_runtime0.JSX.Element, SlotRecipeRuntimeFn<"positioner" | "content" | "arrow" | "arrowTip" | "trigger", SlotRecipeVariantRecord<"positioner" | "content" | "arrow" | "arrowTip" | "trigger">>>;
  Trigger: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Tooltip.TriggerProps & react.RefAttributes<HTMLButtonElement>>>;
  Positioner: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Tooltip.PositionerProps & react.RefAttributes<HTMLDivElement>>>;
  Content: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Tooltip.ContentProps & react.RefAttributes<HTMLDivElement>>>;
  Arrow: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Tooltip.ArrowProps & react.RefAttributes<HTMLDivElement>>>;
  ArrowTip: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Tooltip.ArrowTipProps & react.RefAttributes<HTMLDivElement>>>;
  Context: (props: Tooltip.ContextProps) => react.ReactNode;
};
//#endregion
export { Tooltip$1 as Tooltip, type TooltipOpenChangeDetails };
//# sourceMappingURL=tooltip.d.ts.map