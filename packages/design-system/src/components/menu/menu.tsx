import { Menu as ArkMenu } from '@ark-ui/react';
import { cx } from '@styled-system/css';
import { createStyleContext } from '@styled-system/jsx';
import { forwardRef, Fragment } from 'react';
import type { ReactNode } from 'react';

import { menuRecipe } from './menu.recipe';

// ── Compound (createStyleContext) ─────────────────────────────────────────────

const { withProvider, withContext } = createStyleContext(menuRecipe);

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
export const Menu = {
  /** Root — open state, event handlers (`onSelect`, `onOpenChange`), and recipe variants. */
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

// ── MenuDS — convenience wrapper ──────────────────────────────────────────────

/** A single menu item for {@link MenuDS}. */
export interface MenuDSItem {
  value: string;
  label: ReactNode;
  /** Optional icon rendered before the label. */
  icon?: ReactNode;
  disabled?: boolean;
}

/** A group of related items for {@link MenuDS}. */
export interface MenuDSGroup {
  /** Optional section heading. */
  label?: ReactNode;
  items: MenuDSItem[];
}

/** Slot class overrides for {@link MenuDS}. */
export interface MenuDSClassNames {
  positioner?: string;
  content?: string;
  item?: string;
  itemText?: string;
  itemGroup?: string;
  itemGroupLabel?: string;
  separator?: string;
}

export interface MenuDSProps {
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
export const MenuDS = forwardRef<HTMLButtonElement, MenuDSProps>(
  ({ trigger, items, groups, open, onOpenChange, onSelect, onHighlightChange, classNames = {} }, ref) => {
    const styles = menuRecipe();
    const resolvedGroups: MenuDSGroup[] = groups ?? (items ? [{ items }] : []);

    return (
      <ArkMenu.Root
        open={open}
        onOpenChange={({ open: o }) => onOpenChange?.(o)}
        onSelect={({ value }) => onSelect?.(value)}
        onHighlightChange={({ highlightedValue }) => onHighlightChange?.(highlightedValue)}
      >
        <ArkMenu.Trigger ref={ref} asChild>
          {trigger}
        </ArkMenu.Trigger>

        <ArkMenu.Positioner className={classNames.positioner}>
          <ArkMenu.Content className={cx(styles.content, classNames.content)}>
            {resolvedGroups.map((group, i) => (
              <Fragment key={i}>
                {i > 0 && <ArkMenu.Separator className={cx(styles.separator, classNames.separator)} />}
                <ArkMenu.ItemGroup className={cx(styles.itemGroup, classNames.itemGroup)}>
                  {group.label && (
                    <ArkMenu.ItemGroupLabel className={cx(styles.itemGroupLabel, classNames.itemGroupLabel)}>
                      {group.label}
                    </ArkMenu.ItemGroupLabel>
                  )}
                  {group.items.map((item) => (
                    <ArkMenu.Item
                      key={item.value}
                      value={item.value}
                      disabled={item.disabled}
                      className={cx(styles.item, classNames.item)}
                    >
                      {item.icon}
                      <ArkMenu.ItemText className={cx(styles.itemText, classNames.itemText)}>
                        {item.label}
                      </ArkMenu.ItemText>
                    </ArkMenu.Item>
                  ))}
                </ArkMenu.ItemGroup>
              </Fragment>
            ))}
          </ArkMenu.Content>
        </ArkMenu.Positioner>
      </ArkMenu.Root>
    );
  },
);

MenuDS.displayName = 'MenuDS';

export type { MenuHighlightChangeDetails, MenuOpenChangeDetails, MenuSelectionDetails } from '@ark-ui/react';
