import { SlotRecipeRuntimeFn, SlotRecipeVariantRecord } from "../../packages/design-system/styled-system/types/recipe.js";
import * as _$react from "react";
import { ReactNode } from "react";
import * as _$react_jsx_runtime0 from "react/jsx-runtime";
import { Tooltip, TooltipOpenChangeDetails } from "@ark-ui/react";
import * as _$_styled_system_jsx0 from "@styled-system/jsx";

//#region src/components/tooltip/tooltip.d.ts
/**
 * Styled Ark **Tooltip** compound — each part is wired to `tooltipRecipe` via context.
 *
 * Ark handles all a11y: tooltip role, `aria-describedby`, hover/focus show/hide, configurable open/close
 * delay. Recipe variant props are accepted directly on `Tooltip.Root`.
 *
 * @example
 *   ```tsx
 *   import { Tooltip } from '@finografic/design-system/components';
 *
 *   <Tooltip.Root openDelay={300} closeDelay={100}>
 *     <Tooltip.Trigger asChild>
 *       <button aria-label="Help">
 *         <InfoIcon />
 *       </button>
 *     </Tooltip.Trigger>
 *     <Tooltip.Positioner>
 *       <Tooltip.Content>
 *         <Tooltip.Arrow>
 *           <Tooltip.ArrowTip />
 *         </Tooltip.Arrow>
 *         Helpful hint text
 *       </Tooltip.Content>
 *     </Tooltip.Positioner>
 *   </Tooltip.Root>;
 *   ```;
 */
declare const Tooltip$1: {
  Root: _$_styled_system_jsx0.StyleContextRootProvider<(props: Tooltip.RootProps) => _$react_jsx_runtime0.JSX.Element, SlotRecipeRuntimeFn<"content" | "positioner" | "arrow" | "arrowTip" | "trigger", SlotRecipeVariantRecord<"content" | "positioner" | "arrow" | "arrowTip" | "trigger">>>;
  RootProvider: _$_styled_system_jsx0.StyleContextRootProvider<(props: Tooltip.RootProviderProps) => _$react_jsx_runtime0.JSX.Element, SlotRecipeRuntimeFn<"content" | "positioner" | "arrow" | "arrowTip" | "trigger", SlotRecipeVariantRecord<"content" | "positioner" | "arrow" | "arrowTip" | "trigger">>>; /** Element that triggers the tooltip on hover/focus. */
  Trigger: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Tooltip.TriggerProps & _$react.RefAttributes<HTMLButtonElement>>>; /** Positions the floating content. */
  Positioner: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Tooltip.PositionerProps & _$react.RefAttributes<HTMLDivElement>>>; /** The tooltip bubble. */
  Content: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Tooltip.ContentProps & _$react.RefAttributes<HTMLDivElement>>>; /** Arrow wrapper — place inside Content. */
  Arrow: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Tooltip.ArrowProps & _$react.RefAttributes<HTMLDivElement>>>; /** The visible arrow triangle. */
  ArrowTip: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Tooltip.ArrowTipProps & _$react.RefAttributes<HTMLDivElement>>>; /** Ark render-prop context. */
  Context: (props: Tooltip.ContextProps) => ReactNode;
};
/** Slot class overrides for {@link TooltipDS}. */
interface TooltipDSClassNames {
  positioner?: string;
  content?: string;
  arrow?: string;
  arrowTip?: string;
}
interface TooltipDSProps {
  /** The trigger element — rendered inside `Tooltip.Trigger asChild`. */
  trigger: ReactNode;
  /** The tooltip content. */
  content: ReactNode;
  /** Delay in ms before the tooltip opens. @default 1000 */
  openDelay?: number;
  /** Delay in ms before the tooltip closes. @default 500 */
  closeDelay?: number;
  /** Controlled open state. */
  open?: boolean;
  /** Called when the tooltip opens or closes. */
  onOpenChange?: (open: boolean) => void;
  /** Whether to show the arrow. @default false */
  arrow?: boolean;
  /** Per-slot class overrides. */
  classNames?: TooltipDSClassNames;
}
/**
 * Design-system convenience tooltip — pass a `trigger` element and `content` for the common case.
 * **`Tooltip`** stays the styled compound; **`TooltipDS`** = packaged DS API with normalized
 * `onOpenChange(open: boolean)`.
 *
 * @example
 *   ```tsx
 *   import { TooltipDS } from '@finografic/design-system/components';
 *
 *   <TooltipDS
 *     trigger={
 *       <button aria-label="Help">
 *         <InfoIcon />
 *       </button>
 *     }
 *     content="This is a helpful tooltip"
 *     openDelay={300}
 *   />;
 *   ```;
 */
declare const TooltipDS: _$react.ForwardRefExoticComponent<TooltipDSProps & _$react.RefAttributes<HTMLButtonElement>>;
//#endregion
export { Tooltip$1 as Tooltip, TooltipDS, TooltipDSClassNames, TooltipDSProps, type TooltipOpenChangeDetails };
//# sourceMappingURL=tooltip.d.ts.map