import { SlotRecipeRuntimeFn, SlotRecipeVariantRecord } from "../../packages/design-system/styled-system/types/recipe.js";
import * as react from "react";
import * as react_jsx_runtime0 from "react/jsx-runtime";
import { Tooltip, TooltipOpenChangeDetails } from "@ark-ui/react";
import * as _styled_system_jsx0 from "@styled-system/jsx";

//#region src/components/tooltip/tooltip.d.ts
/**
 * Styled Ark **Tooltip** compound — each part is wired to `tooltipRecipe` via context.
 *
 * Ark handles all a11y: tooltip role, `aria-describedby`,
 * hover/focus show/hide, configurable open/close delay.
 * Recipe variant props are accepted directly on `Tooltip.Root`.
 *
 * @example
 * ```tsx
 * import { Tooltip } from '@finografic/design-system/components';
 *
 * <Tooltip.Root openDelay={300} closeDelay={100}>
 *   <Tooltip.Trigger asChild>
 *     <button aria-label="Help"><InfoIcon /></button>
 *   </Tooltip.Trigger>
 *   <Tooltip.Positioner>
 *     <Tooltip.Content>
 *       <Tooltip.Arrow><Tooltip.ArrowTip /></Tooltip.Arrow>
 *       Helpful hint text
 *     </Tooltip.Content>
 *   </Tooltip.Positioner>
 * </Tooltip.Root>
 * ```
 */
declare const Tooltip$1: {
  Root: _styled_system_jsx0.StyleContextRootProvider<(props: Tooltip.RootProps) => react_jsx_runtime0.JSX.Element, SlotRecipeRuntimeFn<"content" | "positioner" | "arrow" | "arrowTip" | "trigger", SlotRecipeVariantRecord<"content" | "positioner" | "arrow" | "arrowTip" | "trigger">>>;
  RootProvider: _styled_system_jsx0.StyleContextRootProvider<(props: Tooltip.RootProviderProps) => react_jsx_runtime0.JSX.Element, SlotRecipeRuntimeFn<"content" | "positioner" | "arrow" | "arrowTip" | "trigger", SlotRecipeVariantRecord<"content" | "positioner" | "arrow" | "arrowTip" | "trigger">>>; /** Element that triggers the tooltip on hover/focus. */
  Trigger: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Tooltip.TriggerProps & react.RefAttributes<HTMLButtonElement>>>; /** Positions the floating content. */
  Positioner: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Tooltip.PositionerProps & react.RefAttributes<HTMLDivElement>>>; /** The tooltip bubble. */
  Content: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Tooltip.ContentProps & react.RefAttributes<HTMLDivElement>>>; /** Arrow wrapper — place inside Content. */
  Arrow: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Tooltip.ArrowProps & react.RefAttributes<HTMLDivElement>>>; /** The visible arrow triangle. */
  ArrowTip: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Tooltip.ArrowTipProps & react.RefAttributes<HTMLDivElement>>>; /** Ark render-prop context. */
  Context: (props: Tooltip.ContextProps) => react.ReactNode;
};
//#endregion
export { Tooltip$1 as Tooltip, type TooltipOpenChangeDetails };
//# sourceMappingURL=tooltip.d.ts.map