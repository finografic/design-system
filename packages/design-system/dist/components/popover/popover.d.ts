import { SlotRecipeRuntimeFn, SlotRecipeVariantRecord } from "../../packages/design-system/styled-system/types/recipe.js";
import * as _$react from "react";
import { ReactNode } from "react";
import * as _$react_jsx_runtime0 from "react/jsx-runtime";
import { Popover, PopoverOpenChangeDetails } from "@ark-ui/react";
import * as _$_styled_system_jsx0 from "@styled-system/jsx";

//#region src/components/popover/popover.d.ts
/**
 * Styled Ark **Popover** compound — each part is wired to `popoverRecipe` via context.
 *
 * Ark handles all a11y: dialog role, optional focus trap, `aria-expanded`, `aria-controls`, Escape to close,
 * click-outside to dismiss. Recipe variant props are accepted directly on `Popover.Root`.
 *
 * @example
 *   ```tsx
 *   import { Popover } from '@finografic/design-system/components';
 *
 *   <Popover.Root>
 *     <Popover.Trigger asChild>
 *       <button>Open popover</button>
 *     </Popover.Trigger>
 *     <Popover.Positioner>
 *       <Popover.Content>
 *         <Popover.Arrow>
 *           <Popover.ArrowTip />
 *         </Popover.Arrow>
 *         <Popover.Title>Title</Popover.Title>
 *         <Popover.Description>Some descriptive content.</Popover.Description>
 *         <Popover.CloseTrigger asChild>
 *           <button aria-label="Close" />
 *         </Popover.CloseTrigger>
 *       </Popover.Content>
 *     </Popover.Positioner>
 *   </Popover.Root>;
 *   ```;
 */
declare const Popover$1: {
  Root: _$_styled_system_jsx0.StyleContextRootProvider<(props: Popover.RootProps) => _$react_jsx_runtime0.JSX.Element, SlotRecipeRuntimeFn<"content" | "positioner" | "title" | "description" | "closeTrigger" | "trigger" | "arrow" | "arrowTip", SlotRecipeVariantRecord<"content" | "positioner" | "title" | "description" | "closeTrigger" | "trigger" | "arrow" | "arrowTip">>>;
  RootProvider: _$_styled_system_jsx0.StyleContextRootProvider<(props: Popover.RootProviderProps) => _$react_jsx_runtime0.JSX.Element, SlotRecipeRuntimeFn<"content" | "positioner" | "title" | "description" | "closeTrigger" | "trigger" | "arrow" | "arrowTip", SlotRecipeVariantRecord<"content" | "positioner" | "title" | "description" | "closeTrigger" | "trigger" | "arrow" | "arrowTip">>>; /** Button or element that opens the popover. */
  Trigger: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Popover.TriggerProps & _$react.RefAttributes<HTMLButtonElement>>>; /** Positioning anchor — no recipe slot, pure layout. */
  Anchor: _$react.ForwardRefExoticComponent<Popover.AnchorProps & _$react.RefAttributes<HTMLDivElement>>; /** Positions the floating content panel. */
  Positioner: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Popover.PositionerProps & _$react.RefAttributes<HTMLDivElement>>>; /** The floating panel itself. */
  Content: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Popover.ContentProps & _$react.RefAttributes<HTMLDivElement>>>; /** Bold heading at the top of the popover. */
  Title: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Popover.TitleProps & _$react.RefAttributes<HTMLDivElement>>>; /** Supporting text below the title. */
  Description: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Popover.DescriptionProps & _$react.RefAttributes<HTMLDivElement>>>; /** Absolutely-positioned close button. */
  CloseTrigger: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Popover.CloseTriggerProps & _$react.RefAttributes<HTMLButtonElement>>>; /** Arrow wrapper — place inside Content. */
  Arrow: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Popover.ArrowProps & _$react.RefAttributes<HTMLDivElement>>>; /** The visible arrow triangle. */
  ArrowTip: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Popover.ArrowTipProps & _$react.RefAttributes<HTMLDivElement>>>; /** Ark render-prop context. */
  Context: (props: Popover.ContextProps) => ReactNode;
};
/** Slot class overrides for {@link PopoverDS}. */
interface PopoverDSClassNames {
  positioner?: string;
  content?: string;
  title?: string;
  description?: string;
  closeTrigger?: string;
  arrow?: string;
  arrowTip?: string;
}
interface PopoverDSProps {
  /** The trigger element — rendered inside `Popover.Trigger asChild`. */
  trigger: ReactNode;
  /** Title rendered at the top of the popover. */
  title?: ReactNode;
  /** Description text rendered below the title. */
  description?: ReactNode;
  /** Body content of the popover. */
  children?: ReactNode;
  /** Controlled open state. */
  open?: boolean;
  /** Called when the popover opens or closes. */
  onOpenChange?: (open: boolean) => void;
  /** Whether to show the built-in close button. @default false */
  closeButton?: boolean;
  /** Whether to show the arrow. @default false */
  arrow?: boolean;
  /** Per-slot class overrides. */
  classNames?: PopoverDSClassNames;
}
/**
 * Design-system convenience popover — pass a `trigger` and content for the common case. **`Popover`** stays
 * the styled compound; **`PopoverDS`** = packaged DS API with normalized `onOpenChange(open: boolean)`.
 *
 * @example
 *   ```tsx
 *   import { PopoverDS } from '@finografic/design-system/components';
 *
 *   <PopoverDS
 *     trigger={<Button variant="outline">Open</Button>}
 *     title="Settings"
 *     description="Adjust your preferences below."
 *     onOpenChange={(open) => console.log(open)}
 *   >
 *     <input type="text" />
 *   </PopoverDS>;
 *   ```;
 */
declare const PopoverDS: _$react.ForwardRefExoticComponent<PopoverDSProps & _$react.RefAttributes<HTMLButtonElement>>;
//#endregion
export { Popover$1 as Popover, PopoverDS, PopoverDSClassNames, PopoverDSProps, type PopoverOpenChangeDetails };
//# sourceMappingURL=popover.d.ts.map