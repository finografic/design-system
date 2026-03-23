/**
 * Menu — styled Ark UI **Menu** compound wired to `menuRecipe` via `createStyleContext`.
 *
 * Ark handles all a11y: `menu` / `menuitem` roles, keyboard navigation (arrows,
 * Home/End, typeahead), and Escape to close. Variant props go on **`Menu.Root`**.
 *
 * **`Menu.Trigger`** is unstyled — compose it with `rootTriggerRecipe` or `buttonRecipe`
 * on the consumer side (or use `asChild` with your own element).
 *
 * @example
 * ```tsx
 * import { Menu } from '@finografic/design-system/components';
 *
 * <Menu.Root>
 *   <Menu.Trigger asChild>
 *     <button>Options</button>
 *   </Menu.Trigger>
 *   <Menu.Positioner>
 *     <Menu.Content>
 *       <Menu.ItemGroup>
 *         <Menu.ItemGroupLabel>Actions</Menu.ItemGroupLabel>
 *         <Menu.Item value="edit">
 *           <Menu.ItemText>Edit</Menu.ItemText>
 *         </Menu.Item>
 *         <Menu.Item value="duplicate">
 *           <Menu.ItemText>Duplicate</Menu.ItemText>
 *         </Menu.Item>
 *       </Menu.ItemGroup>
 *       <Menu.Separator />
 *       <Menu.Item value="delete">
 *         <Menu.ItemText>Delete</Menu.ItemText>
 *       </Menu.Item>
 *     </Menu.Content>
 *   </Menu.Positioner>
 * </Menu.Root>
 * ```
 */
import { Menu as ArkMenu } from '@ark-ui/react';
import { createStyleContext } from '@styled-system/jsx';

import { menuRecipe } from './menu.recipe';

const { withProvider, withContext } = createStyleContext(menuRecipe);

/**
 * Styled Ark **Menu** compound — each part is wired to `menuRecipe` via context.
 *
 * Place `onSelect`, `onOpenChange`, and any variant props on **`Root`**.
 */
export const Menu = {
  /** Root — open state, event handlers, and recipe variants. */
  Root: withProvider(ArkMenu.Root, 'root'),
  /** Root with external machine state from `useMenu`. */
  RootProvider: withProvider(ArkMenu.RootProvider, 'root'),
  /** Floating positioner — sets z-index and anchors the panel. */
  Positioner: withContext(ArkMenu.Positioner, 'positioner'),
  /** Menu panel — the scrollable list container. */
  Content: withContext(ArkMenu.Content, 'content'),
  /** Horizontal rule between sections. */
  Separator: withContext(ArkMenu.Separator, 'separator'),
  /** A single action row; also used for `CheckboxItem` and `RadioItem`. */
  Item: withContext(ArkMenu.Item, 'item'),
  /** Text label inside an item — truncates on overflow. */
  ItemText: withContext(ArkMenu.ItemText, 'itemText'),
  /** Check/radio tick shown when the item is selected. */
  ItemIndicator: withContext(ArkMenu.ItemIndicator, 'itemIndicator'),
  /** Wraps a set of related items; adds vertical spacing between groups. */
  ItemGroup: withContext(ArkMenu.ItemGroup, 'itemGroup'),
  /** Section heading for an item group. */
  ItemGroupLabel: withContext(ArkMenu.ItemGroupLabel, 'itemGroupLabel'),
  /** Checkbox-style toggleable item — shares the `item` slot. */
  CheckboxItem: withContext(ArkMenu.CheckboxItem, 'item'),
  /** Radio-style item (exclusive within a group) — shares the `item` slot. */
  RadioItem: withContext(ArkMenu.RadioItem, 'item'),
  /** Radio item group — shares the `itemGroup` slot. */
  RadioItemGroup: withContext(ArkMenu.RadioItemGroup, 'itemGroup'),
  /** Arrow element for the floating panel (when `withArrow` is used). */
  Arrow: withContext(ArkMenu.Arrow, 'arrow'),
  /** The visible arrow tip; styled with a border to match the panel edge. */
  ArrowTip: withContext(ArkMenu.ArrowTip, 'arrowTip'),
  /** Open/close chevron indicator inside a trigger. */
  Indicator: withContext(ArkMenu.Indicator, 'indicator'),
  /** Unstyled trigger — style with `rootTriggerRecipe` or `buttonRecipe` on the consumer side. */
  Trigger: ArkMenu.Trigger,
  /** Right-click context menu trigger — no recipe slot. */
  ContextTrigger: ArkMenu.ContextTrigger,
  /** Render prop — exposes machine context to children. */
  Context: ArkMenu.Context,
  /** Render prop — exposes per-item context inside `Item`. */
  ItemContext: ArkMenu.ItemContext,
};

export type {
  MenuHighlightChangeDetails,
  MenuOpenChangeDetails,
  MenuSelectionDetails,
} from '@ark-ui/react';
