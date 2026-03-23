import { SlotRecipeRuntimeFn, SlotRecipeVariantRecord } from "../../packages/design-system/styled-system/types/recipe.js";
import * as react from "react";
import * as react_jsx_runtime0 from "react/jsx-runtime";
import { Popover, PopoverOpenChangeDetails } from "@ark-ui/react";
import * as _styled_system_jsx0 from "@styled-system/jsx";

//#region src/components/popover/popover.d.ts
/**
 * Styled Ark **Popover** compound — each part is wired to `popoverRecipe` via context.
 *
 * Ark handles all a11y: dialog role, optional focus trap,
 * `aria-expanded`, `aria-controls`, Escape to close, click-outside to dismiss.
 * Recipe variant props are accepted directly on `Popover.Root`.
 *
 * @example
 * ```tsx
 * import { Popover } from '@finografic/design-system/components';
 *
 * <Popover.Root>
 *   <Popover.Trigger asChild>
 *     <button>Open popover</button>
 *   </Popover.Trigger>
 *   <Popover.Positioner>
 *     <Popover.Content>
 *       <Popover.Arrow><Popover.ArrowTip /></Popover.Arrow>
 *       <Popover.Title>Title</Popover.Title>
 *       <Popover.Description>Some descriptive content.</Popover.Description>
 *       <Popover.CloseTrigger asChild>
 *         <button aria-label="Close" />
 *       </Popover.CloseTrigger>
 *     </Popover.Content>
 *   </Popover.Positioner>
 * </Popover.Root>
 * ```
 */
declare const Popover$1: {
  Root: _styled_system_jsx0.StyleContextRootProvider<(props: Popover.RootProps) => react_jsx_runtime0.JSX.Element, SlotRecipeRuntimeFn<"content" | "description" | "positioner" | "title" | "closeTrigger" | "arrow" | "arrowTip" | "trigger", SlotRecipeVariantRecord<"content" | "description" | "positioner" | "title" | "closeTrigger" | "arrow" | "arrowTip" | "trigger">>>;
  RootProvider: _styled_system_jsx0.StyleContextRootProvider<(props: Popover.RootProviderProps) => react_jsx_runtime0.JSX.Element, SlotRecipeRuntimeFn<"content" | "description" | "positioner" | "title" | "closeTrigger" | "arrow" | "arrowTip" | "trigger", SlotRecipeVariantRecord<"content" | "description" | "positioner" | "title" | "closeTrigger" | "arrow" | "arrowTip" | "trigger">>>; /** Button or element that opens the popover. */
  Trigger: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Popover.TriggerProps & react.RefAttributes<HTMLButtonElement>>>; /** Positioning anchor — no recipe slot, pure layout. */
  Anchor: react.ForwardRefExoticComponent<Popover.AnchorProps & react.RefAttributes<HTMLDivElement>>; /** Positions the floating content panel. */
  Positioner: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Popover.PositionerProps & react.RefAttributes<HTMLDivElement>>>; /** The floating panel itself. */
  Content: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Popover.ContentProps & react.RefAttributes<HTMLDivElement>>>; /** Bold heading at the top of the popover. */
  Title: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Popover.TitleProps & react.RefAttributes<HTMLDivElement>>>; /** Supporting text below the title. */
  Description: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Popover.DescriptionProps & react.RefAttributes<HTMLDivElement>>>; /** Absolutely-positioned close button. */
  CloseTrigger: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Popover.CloseTriggerProps & react.RefAttributes<HTMLButtonElement>>>; /** Arrow wrapper — place inside Content. */
  Arrow: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Popover.ArrowProps & react.RefAttributes<HTMLDivElement>>>; /** The visible arrow triangle. */
  ArrowTip: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Popover.ArrowTipProps & react.RefAttributes<HTMLDivElement>>>; /** Ark render-prop context. */
  Context: (props: Popover.ContextProps) => react.ReactNode;
};
//#endregion
export { Popover$1 as Popover, type PopoverOpenChangeDetails };
//# sourceMappingURL=popover.d.ts.map