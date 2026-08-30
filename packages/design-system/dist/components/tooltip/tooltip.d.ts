import { SlotRecipeRuntimeFn, SlotRecipeVariantRecord } from "../../packages/design-system/styled-system/types/recipe.js";
import "../../packages/design-system/styled-system/types/index.js";
import { ReactNode } from "react";
import { Tooltip, TooltipOpenChangeDetails } from "@ark-ui/react";
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
  Root: import("@styled-system/jsx").StyleContextRootProvider<(props: Tooltip.RootProps) => import("react").JSX.Element, SlotRecipeRuntimeFn<"arrow" | "arrowTip" | "content" | "positioner" | "trigger", SlotRecipeVariantRecord<"arrow" | "arrowTip" | "content" | "positioner" | "trigger">>>;
  RootProvider: import("@styled-system/jsx").StyleContextRootProvider<(props: Tooltip.RootProviderProps) => import("react").JSX.Element, SlotRecipeRuntimeFn<"arrow" | "arrowTip" | "content" | "positioner" | "trigger", SlotRecipeVariantRecord<"arrow" | "arrowTip" | "content" | "positioner" | "trigger">>>;
  /** Element that triggers the tooltip on hover/focus. */
  Trigger: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Tooltip.TriggerProps & import("react").RefAttributes<HTMLButtonElement>>>;
  /** Positions the floating content. */
  Positioner: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Tooltip.PositionerProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** The tooltip bubble. */
  Content: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Tooltip.ContentProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Arrow wrapper — place inside Content. */
  Arrow: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Tooltip.ArrowProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** The visible arrow triangle. */
  ArrowTip: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Tooltip.ArrowTipProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Ark render-prop context. */
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
declare const TooltipDS: import("react").ForwardRefExoticComponent<TooltipDSProps & import("react").RefAttributes<HTMLButtonElement>>;
//#endregion
export { Tooltip$1 as Tooltip, TooltipDS, TooltipDSClassNames, TooltipDSProps, type TooltipOpenChangeDetails };
//# sourceMappingURL=tooltip.d.ts.map