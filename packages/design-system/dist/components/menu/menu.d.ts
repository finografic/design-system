import { SlotRecipeRuntimeFn, SlotRecipeVariantRecord } from "../../packages/design-system/styled-system/types/recipe.js";
import * as _$react from "react";
import { ReactNode } from "react";
import * as _$react_jsx_runtime0 from "react/jsx-runtime";
import { Menu, MenuHighlightChangeDetails, MenuOpenChangeDetails, MenuSelectionDetails } from "@ark-ui/react";
import * as _$_styled_system_jsx0 from "@styled-system/jsx";

//#region src/components/menu/menu.d.ts
/**
 * Styled Ark **Menu** compound — each part is wired to `menuRecipe` via context.
 *
 * Ark handles all a11y: `menu` / `menuitem` roles, keyboard navigation (arrows, Home/End, typeahead), and
 * Escape to close. Variant props go on **`Menu.Root`**.
 *
 * **`Menu.Trigger`** is unstyled — compose it with `rootTriggerRecipe` or `buttonRecipe` on the consumer side
 * (or use `asChild` with your own element).
 *
 * @example
 *   ```tsx
 *   import { Menu } from '@finografic/design-system/components';
 *
 *   <Menu.Root>
 *     <Menu.Trigger asChild>
 *       <button>Options</button>
 *     </Menu.Trigger>
 *     <Menu.Positioner>
 *       <Menu.Content>
 *         <Menu.ItemGroup>
 *           <Menu.ItemGroupLabel>Actions</Menu.ItemGroupLabel>
 *           <Menu.Item value="edit">
 *             <Menu.ItemText>Edit</Menu.ItemText>
 *           </Menu.Item>
 *           <Menu.Item value="delete">
 *             <Menu.ItemText>Delete</Menu.ItemText>
 *           </Menu.Item>
 *         </Menu.ItemGroup>
 *         <Menu.Separator />
 *         <Menu.Item value="archive">
 *           <Menu.ItemText>Archive</Menu.ItemText>
 *         </Menu.Item>
 *       </Menu.Content>
 *     </Menu.Positioner>
 *   </Menu.Root>;
 *   ```;
 */
declare const Menu$1: {
  /** Root — open state, event handlers (`onSelect`, `onOpenChange`), and recipe variants. */Root: _$_styled_system_jsx0.StyleContextProvider<(props: Menu.RootProps) => _$react_jsx_runtime0.JSX.Element, SlotRecipeRuntimeFn<"root" | "item" | "itemIndicator" | "content" | "positioner" | "separator" | "itemText" | "itemGroup" | "itemGroupLabel" | "arrow" | "arrowTip" | "indicator", SlotRecipeVariantRecord<"root" | "item" | "itemIndicator" | "content" | "positioner" | "separator" | "itemText" | "itemGroup" | "itemGroupLabel" | "arrow" | "arrowTip" | "indicator">>>; /** Root with external machine state from `useMenu`. */
  RootProvider: _$_styled_system_jsx0.StyleContextProvider<(props: Menu.RootProviderProps) => _$react_jsx_runtime0.JSX.Element, SlotRecipeRuntimeFn<"root" | "item" | "itemIndicator" | "content" | "positioner" | "separator" | "itemText" | "itemGroup" | "itemGroupLabel" | "arrow" | "arrowTip" | "indicator", SlotRecipeVariantRecord<"root" | "item" | "itemIndicator" | "content" | "positioner" | "separator" | "itemText" | "itemGroup" | "itemGroupLabel" | "arrow" | "arrowTip" | "indicator">>>; /** Floating positioner — sets z-index and anchors the panel. */
  Positioner: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Menu.PositionerProps & _$react.RefAttributes<HTMLDivElement>>>; /** Menu panel — the scrollable list container. */
  Content: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Menu.ContentProps & _$react.RefAttributes<HTMLDivElement>>>; /** Horizontal rule between sections. */
  Separator: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Menu.SeparatorProps & _$react.RefAttributes<HTMLHRElement>>>; /** A single action row; also used for `CheckboxItem` and `RadioItem`. */
  Item: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Menu.ItemProps & _$react.RefAttributes<HTMLDivElement>>>; /** Text label inside an item — truncates on overflow. */
  ItemText: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Menu.ItemTextProps & _$react.RefAttributes<HTMLDivElement>>>; /** Check/radio tick shown when the item is selected. */
  ItemIndicator: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Menu.ItemIndicatorProps & _$react.RefAttributes<HTMLDivElement>>>; /** Wraps a set of related items; adds vertical spacing between groups. */
  ItemGroup: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Menu.ItemGroupProps & _$react.RefAttributes<HTMLDivElement>>>; /** Section heading for an item group. */
  ItemGroupLabel: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Menu.ItemGroupLabelProps & _$react.RefAttributes<HTMLDivElement>>>; /** Checkbox-style toggleable item — shares the `item` slot. */
  CheckboxItem: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Menu.CheckboxItemProps & _$react.RefAttributes<HTMLDivElement>>>; /** Radio-style item (exclusive within a group) — shares the `item` slot. */
  RadioItem: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Menu.RadioItemProps & _$react.RefAttributes<HTMLDivElement>>>; /** Radio item group — shares the `itemGroup` slot. */
  RadioItemGroup: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Menu.RadioItemGroupProps & _$react.RefAttributes<HTMLDivElement>>>; /** Arrow element for the floating panel (when `withArrow` is used). */
  Arrow: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Menu.ArrowProps & _$react.RefAttributes<HTMLDivElement>>>; /** The visible arrow tip; styled with a border to match the panel edge. */
  ArrowTip: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Menu.ArrowTipProps & _$react.RefAttributes<HTMLDivElement>>>; /** Open/close chevron indicator inside a trigger. */
  Indicator: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Menu.IndicatorProps & _$react.RefAttributes<HTMLDivElement>>>; /** Unstyled trigger — style with `rootTriggerRecipe` or `buttonRecipe` on the consumer side. */
  Trigger: _$react.ForwardRefExoticComponent<Menu.TriggerProps & _$react.RefAttributes<HTMLButtonElement>>; /** Right-click context menu trigger — no recipe slot. */
  ContextTrigger: _$react.ForwardRefExoticComponent<Menu.ContextTriggerProps & _$react.RefAttributes<HTMLButtonElement>>; /** Render prop — exposes machine context to children. */
  Context: (props: Menu.ContextProps) => ReactNode; /** Render prop — exposes per-item context inside `Item`. */
  ItemContext: (props: Menu.ItemContextProps) => ReactNode;
};
/** A single menu item for {@link MenuDS}. */
interface MenuDSItem {
  value: string;
  label: ReactNode;
  /** Optional icon rendered before the label. */
  icon?: ReactNode;
  disabled?: boolean;
}
/** A group of related items for {@link MenuDS}. */
interface MenuDSGroup {
  /** Optional section heading. */
  label?: ReactNode;
  items: MenuDSItem[];
}
/** Slot class overrides for {@link MenuDS}. */
interface MenuDSClassNames {
  positioner?: string;
  content?: string;
  item?: string;
  itemText?: string;
  itemGroup?: string;
  itemGroupLabel?: string;
  separator?: string;
}
type MenuDSProps = {
  /**
   * The trigger element — rendered inside an unstyled `Menu.Trigger asChild`. Style it with `Button`,
   * `rootTriggerRecipe`, or any element.
   */
  trigger: ReactNode; /** Flat list of items — convenience for single-group menus. */
  items?: MenuDSItem[];
  /**
   * Grouped items — renders each group in an `ItemGroup` with an optional label and a `Separator` between
   * groups. Takes precedence over `items`.
   */
  groups?: MenuDSGroup[]; /** Controlled open state. */
  open?: boolean; /** Called when the menu opens or closes. */
  onOpenChange?: (open: boolean) => void; /** Called when an item is selected. */
  onSelect?: (value: string) => void; /** Called when keyboard/pointer highlight moves between items. */
  onHighlightChange?: (highlightedValue: string | null) => void; /** Per-slot class overrides. */
  classNames?: MenuDSClassNames;
};
/**
 * Design-system convenience menu — pass a trigger + items array for the common case. **`Menu`** stays the
 * styled compound for full composition; **`MenuDS`** = packaged DS API with normalized handlers
 * (`onSelect(value)`, `onOpenChange(open)`).
 *
 * @example
 *   Flat items
 *   ```tsx
 *   import { MenuDS } from '@finografic/design-system/components';
 *   import { Button } from '@finografic/design-system/components';
 *
 *   <MenuDS
 *   trigger={<Button variant="outline">Options</Button>}
 *   items={[
 *   { value: 'edit', label: 'Edit' },
 *   { value: 'duplicate', label: 'Duplicate' },
 *   { value: 'delete', label: 'Delete' },
 *   ]}
 *   onSelect={(value) => handleAction(value)}
 *   />
 *   ```
 *
 * @example
 *   Grouped items
 *   ```tsx
 *   <MenuDS
 *   trigger={<Button>Options</Button>}
 *   groups={[
 *   { label: 'Actions', items: [{ value: 'edit', label: 'Edit' }] },
 *   { items: [{ value: 'delete', label: 'Delete' }] },
 *   ]}
 *   onSelect={(value) => handleAction(value)}
 *   />
 *   ```
 */
declare const MenuDS: _$react.ForwardRefExoticComponent<MenuDSProps & _$react.RefAttributes<HTMLButtonElement>>;
//#endregion
export { Menu$1 as Menu, MenuDS, MenuDSClassNames, MenuDSGroup, MenuDSItem, MenuDSProps, type MenuHighlightChangeDetails, type MenuOpenChangeDetails, type MenuSelectionDetails };
//# sourceMappingURL=menu.d.ts.map