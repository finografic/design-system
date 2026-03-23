import { SlotRecipeRuntimeFn, SlotRecipeVariantRecord } from "../../packages/design-system/styled-system/types/recipe.js";
import * as react from "react";
import * as react_jsx_runtime0 from "react/jsx-runtime";
import { Menu, MenuOpenChangeDetails, MenuSelectionDetails } from "@ark-ui/react";
import * as _styled_system_jsx0 from "@styled-system/jsx";

//#region src/components/menu/menu.d.ts
/**
 * Styled Ark **Menu** compound — each part is wired to `menuRecipe` via context.
 *
 * Place `onSelect`, `onOpenChange`, and any variant props on **`Root`**.
 */
declare const Menu$1: {
  /** Root — open state, event handlers, and recipe variants. */Root: _styled_system_jsx0.StyleContextProvider<(props: Menu.RootProps) => react_jsx_runtime0.JSX.Element, SlotRecipeRuntimeFn<"root" | "content" | "positioner" | "separator" | "item" | "itemText" | "itemIndicator" | "itemGroup" | "itemGroupLabel" | "arrow" | "arrowTip" | "indicator", SlotRecipeVariantRecord<"root" | "content" | "positioner" | "separator" | "item" | "itemText" | "itemIndicator" | "itemGroup" | "itemGroupLabel" | "arrow" | "arrowTip" | "indicator">>>; /** Root with external machine state from `useMenu`. */
  RootProvider: _styled_system_jsx0.StyleContextProvider<(props: Menu.RootProviderProps) => react_jsx_runtime0.JSX.Element, SlotRecipeRuntimeFn<"root" | "content" | "positioner" | "separator" | "item" | "itemText" | "itemIndicator" | "itemGroup" | "itemGroupLabel" | "arrow" | "arrowTip" | "indicator", SlotRecipeVariantRecord<"root" | "content" | "positioner" | "separator" | "item" | "itemText" | "itemIndicator" | "itemGroup" | "itemGroupLabel" | "arrow" | "arrowTip" | "indicator">>>; /** Floating positioner — sets z-index and anchors the panel. */
  Positioner: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Menu.PositionerProps & react.RefAttributes<HTMLDivElement>>>; /** Menu panel — the scrollable list container. */
  Content: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Menu.ContentProps & react.RefAttributes<HTMLDivElement>>>; /** Horizontal rule between sections. */
  Separator: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Menu.SeparatorProps & react.RefAttributes<HTMLHRElement>>>; /** A single action row; also used for `CheckboxItem` and `RadioItem`. */
  Item: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Menu.ItemProps & react.RefAttributes<HTMLDivElement>>>; /** Text label inside an item — truncates on overflow. */
  ItemText: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Menu.ItemTextProps & react.RefAttributes<HTMLDivElement>>>; /** Check/radio tick shown when the item is selected. */
  ItemIndicator: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Menu.ItemIndicatorProps & react.RefAttributes<HTMLDivElement>>>; /** Wraps a set of related items; adds vertical spacing between groups. */
  ItemGroup: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Menu.ItemGroupProps & react.RefAttributes<HTMLDivElement>>>; /** Section heading for an item group. */
  ItemGroupLabel: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Menu.ItemGroupLabelProps & react.RefAttributes<HTMLDivElement>>>; /** Checkbox-style toggleable item — shares the `item` slot. */
  CheckboxItem: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Menu.CheckboxItemProps & react.RefAttributes<HTMLDivElement>>>; /** Radio-style item (exclusive within a group) — shares the `item` slot. */
  RadioItem: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Menu.RadioItemProps & react.RefAttributes<HTMLDivElement>>>; /** Radio item group — shares the `itemGroup` slot. */
  RadioItemGroup: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Menu.RadioItemGroupProps & react.RefAttributes<HTMLDivElement>>>; /** Arrow element for the floating panel (when `withArrow` is used). */
  Arrow: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Menu.ArrowProps & react.RefAttributes<HTMLDivElement>>>; /** The visible arrow tip; styled with a border to match the panel edge. */
  ArrowTip: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Menu.ArrowTipProps & react.RefAttributes<HTMLDivElement>>>; /** Open/close chevron indicator inside a trigger. */
  Indicator: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Menu.IndicatorProps & react.RefAttributes<HTMLDivElement>>>; /** Unstyled trigger — style with `rootTriggerRecipe` or `buttonRecipe` on the consumer side. */
  Trigger: react.ForwardRefExoticComponent<Menu.TriggerProps & react.RefAttributes<HTMLButtonElement>>; /** Right-click context menu trigger — no recipe slot. */
  ContextTrigger: react.ForwardRefExoticComponent<Menu.ContextTriggerProps & react.RefAttributes<HTMLButtonElement>>; /** Render prop — exposes machine context to children. */
  Context: (props: Menu.ContextProps) => react.ReactNode; /** Render prop — exposes per-item context inside `Item`. */
  ItemContext: (props: Menu.ItemContextProps) => react.ReactNode;
};
//#endregion
export { Menu$1 as Menu, type MenuOpenChangeDetails, type MenuSelectionDetails };
//# sourceMappingURL=menu.d.ts.map