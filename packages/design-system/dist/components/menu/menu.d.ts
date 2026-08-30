import { SlotRecipeRuntimeFn, SlotRecipeVariantRecord } from "../../packages/design-system/styled-system/types/recipe.js";
import "../../packages/design-system/styled-system/types/index.js";
import { ReactNode } from "react";
import { Menu, MenuHighlightChangeDetails, MenuOpenChangeDetails, MenuSelectionDetails } from "@ark-ui/react";
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
  /** Root — open state, event handlers (`onSelect`, `onOpenChange`), and recipe variants. */
  Root: import("@styled-system/jsx").StyleContextProvider<(props: Menu.RootProps) => import("react").JSX.Element, SlotRecipeRuntimeFn<"arrow" | "arrowTip" | "content" | "indicator" | "item" | "itemGroup" | "itemGroupLabel" | "itemIndicator" | "itemText" | "positioner" | "root" | "separator", SlotRecipeVariantRecord<"arrow" | "arrowTip" | "content" | "indicator" | "item" | "itemGroup" | "itemGroupLabel" | "itemIndicator" | "itemText" | "positioner" | "root" | "separator">>>;
  /** Root with external machine state from `useMenu`. */
  RootProvider: import("@styled-system/jsx").StyleContextProvider<(props: Menu.RootProviderProps) => import("react").JSX.Element, SlotRecipeRuntimeFn<"arrow" | "arrowTip" | "content" | "indicator" | "item" | "itemGroup" | "itemGroupLabel" | "itemIndicator" | "itemText" | "positioner" | "root" | "separator", SlotRecipeVariantRecord<"arrow" | "arrowTip" | "content" | "indicator" | "item" | "itemGroup" | "itemGroupLabel" | "itemIndicator" | "itemText" | "positioner" | "root" | "separator">>>;
  /** Floating positioner — sets z-index and anchors the panel. */
  Positioner: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Menu.PositionerProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Menu panel — the scrollable list container. */
  Content: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Menu.ContentProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Horizontal rule between sections. */
  Separator: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Menu.SeparatorProps & import("react").RefAttributes<HTMLHRElement>>>;
  /** A single action row; also used for `CheckboxItem` and `RadioItem`. */
  Item: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Menu.ItemProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Text label inside an item — truncates on overflow. */
  ItemText: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Menu.ItemTextProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Check/radio tick shown when the item is selected. */
  ItemIndicator: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Menu.ItemIndicatorProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Wraps a set of related items; adds vertical spacing between groups. */
  ItemGroup: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Menu.ItemGroupProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Section heading for an item group. */
  ItemGroupLabel: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Menu.ItemGroupLabelProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Checkbox-style toggleable item — shares the `item` slot. */
  CheckboxItem: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Menu.CheckboxItemProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Radio-style item (exclusive within a group) — shares the `item` slot. */
  RadioItem: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Menu.RadioItemProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Radio item group — shares the `itemGroup` slot. */
  RadioItemGroup: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Menu.RadioItemGroupProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Arrow element for the floating panel (when `withArrow` is used). */
  Arrow: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Menu.ArrowProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** The visible arrow tip; styled with a border to match the panel edge. */
  ArrowTip: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Menu.ArrowTipProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Open/close chevron indicator inside a trigger. */
  Indicator: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Menu.IndicatorProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Unstyled trigger — style with `rootTriggerRecipe` or `buttonRecipe` on the consumer side. */
  Trigger: import("react").ForwardRefExoticComponent<Menu.TriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
  /** Right-click context menu trigger — no recipe slot. */
  ContextTrigger: import("react").ForwardRefExoticComponent<Menu.ContextTriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
  /** Render prop — exposes machine context to children. */
  Context: (props: Menu.ContextProps) => ReactNode;
  /** Render prop — exposes per-item context inside `Item`. */
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
interface MenuDSProps {
  /**
   * The trigger element — rendered inside an unstyled `Menu.Trigger asChild`. Style it with `Button`,
   * `rootTriggerRecipe`, or any element.
   */
  trigger: ReactNode;
  /** Flat list of items — convenience for single-group menus. */
  items?: MenuDSItem[];
  /**
   * Grouped items — renders each group in an `ItemGroup` with an optional label and a `Separator` between
   * groups. Takes precedence over `items`.
   */
  groups?: MenuDSGroup[];
  /** Controlled open state. */
  open?: boolean;
  /** Called when the menu opens or closes. */
  onOpenChange?: (open: boolean) => void;
  /** Called when an item is selected. */
  onSelect?: (value: string) => void;
  /** Called when keyboard/pointer highlight moves between items. */
  onHighlightChange?: (highlightedValue: string | null) => void;
  /** Per-slot class overrides. */
  classNames?: MenuDSClassNames;
}
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
declare const MenuDS: import("react").ForwardRefExoticComponent<MenuDSProps & import("react").RefAttributes<HTMLButtonElement>>;
//#endregion
export { Menu$1 as Menu, MenuDS, MenuDSClassNames, MenuDSGroup, MenuDSItem, MenuDSProps, type MenuHighlightChangeDetails, type MenuOpenChangeDetails, type MenuSelectionDetails };
//# sourceMappingURL=menu.d.ts.map