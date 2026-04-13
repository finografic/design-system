import { createListCollection, Listbox as ArkListbox } from '@ark-ui/react';
import { cx } from '@styled-system/css';
import { createStyleContext } from '@styled-system/jsx';
import { forwardRef, type ReactNode, useMemo } from 'react';

import type { ListboxRecipeProps } from './listbox.recipe';
import { listboxRecipe } from './listbox.recipe';

// ── Compound (createStyleContext) ─────────────────────────────────────────────

const { withProvider, withContext } = createStyleContext(listboxRecipe);

/**
 * Styled Ark **Listbox** compound — each part is wired to `listboxRecipe` via context.
 *
 * An always-visible, keyboard-navigable list of selectable options. Ark handles all a11y: `listbox` role,
 * roving focus (`_highlighted`), `aria-selected` on chosen items. Unlike Select/Combobox, the list is never
 * hidden in a dropdown.
 *
 * @example
 *   ```tsx
 *   import { Listbox as ArkListbox, createListCollection } from '@ark-ui/react';
 *   import { Listbox } from '@finografic/design-system/forms';
 *
 *   const collection = createListCollection({
 *     items: [
 *       { value: 'en', label: 'English' },
 *       { value: 'es', label: 'Spanish' },
 *     ],
 *   });
 *
 *   <Listbox.Root collection={collection} size="md">
 *     <Listbox.Label>Language</Listbox.Label>
 *     <Listbox.Content>
 *       <Listbox.ItemGroup>
 *         <ArkListbox.Items>
 *           {(item) => (
 *             <Listbox.Item key={item.value} item={item}>
 *               <Listbox.ItemText>{item.label}</Listbox.ItemText>
 *               <Listbox.ItemIndicator>✓</Listbox.ItemIndicator>
 *             </Listbox.Item>
 *           )}
 *         </ArkListbox.Items>
 *       </Listbox.ItemGroup>
 *     </Listbox.Content>
 *   </Listbox.Root>;
 *   ```;
 */
export const Listbox = {
  /** Root — `collection`, `value`, `onValueChange`, `selectionMode`, plus `size`. */
  Root: withProvider(ArkListbox.Root, 'root'),
  /** Root with external machine state from `useListbox`. */
  RootProvider: withProvider(ArkListbox.RootProvider, 'root'),
  /** Text label above the list. */
  Label: withContext(ArkListbox.Label, 'label'),
  /** Scrollable list container. */
  Content: withContext(ArkListbox.Content, 'content'),
  /** A single option row — pass `item` from the collection. */
  Item: withContext(ArkListbox.Item, 'item'),
  /** Text label inside an item. */
  ItemText: withContext(ArkListbox.ItemText, 'itemText'),
  /** Check indicator shown when the item is selected. */
  ItemIndicator: withContext(ArkListbox.ItemIndicator, 'itemIndicator'),
  /** Groups related items — provides visual separation. */
  ItemGroup: withContext(ArkListbox.ItemGroup, 'itemGroup'),
  /** Section heading for an item group. */
  ItemGroupLabel: withContext(ArkListbox.ItemGroupLabel, 'itemGroupLabel'),
  /** Render prop — exposes machine context to children; no DOM, no recipe slot. */
  Context: ArkListbox.Context,
  /** Render prop — exposes per-item state inside `Item`. */
  ItemContext: ArkListbox.ItemContext,
};

// ── ListboxDS — convenience wrapper ───────────────────────────────────────────

/** A single item descriptor for {@link ListboxDS}. */
export interface ListboxDSItem {
  /** Unique value. */
  value: string;
  /** Display label. */
  label: string;
  /** Disables this item. */
  disabled?: boolean;
}

/** Slot class overrides for {@link ListboxDS}. */
export interface ListboxDSClassNames {
  root?: string;
  label?: string;
  content?: string;
  item?: string;
  itemText?: string;
  itemIndicator?: string;
}

export type ListboxDSProps = ListboxRecipeProps & {
  /** Item descriptors. */
  items: ListboxDSItem[];
  /** Controlled selected values. */
  value?: string[];
  /** Default selected values (uncontrolled). */
  defaultValue?: string[];
  /** Allow multiple selections. */
  multiple?: boolean;
  /** Called when the selected values change. */
  onChange?: (value: string[], items: ListboxDSItem[]) => void;
  /** Called when the highlighted (keyboard-focused) item changes. */
  onHighlightChange?: (value: string | null, item: ListboxDSItem | null) => void;
  /** Called when an item is selected. */
  onSelect?: (value: string, item: ListboxDSItem) => void;
  /** Optional label above the list. */
  label?: ReactNode;
  /** Per-slot class overrides. */
  classNames?: ListboxDSClassNames;
};

/**
 * Design-system convenience listbox — renders a flat list of selectable items. **`Listbox`** stays the styled
 * compound for full composition; **`ListboxDS`** = packaged DS API with normalized handlers.
 *
 * @example
 *   ```tsx
 *   import { ListboxDS } from '@finografic/design-system/forms';
 *
 *   <ListboxDS
 *     label="Language"
 *     items={[
 *       { value: 'en', label: 'English' },
 *       { value: 'es', label: 'Spanish' },
 *     ]}
 *     onChange={(value, items) => setLanguages(value)}
 *   />;
 *   ```;
 */
export const ListboxDS = forwardRef<HTMLDivElement, ListboxDSProps>(
  (
    {
      items,
      value,
      defaultValue,
      multiple,
      onChange,
      onHighlightChange,
      onSelect,
      label,
      size = 'md',
      classNames = {},
    },
    ref,
  ) => {
    const styles = listboxRecipe({ size });

    const collection = useMemo(() => createListCollection({ items }), [items]);

    return (
      <ArkListbox.Root
        ref={ref}
        collection={collection}
        value={value}
        defaultValue={defaultValue}
        selectionMode={multiple ? 'multiple' : 'single'}
        onValueChange={({ value: v, items: its }) => onChange?.(v, its as ListboxDSItem[])}
        onHighlightChange={({ highlightedValue, highlightedItem }) =>
          onHighlightChange?.(highlightedValue, highlightedItem as ListboxDSItem | null)
        }
        onSelect={({ value: v }) => {
          const item = items.find((i) => i.value === v);
          if (item) onSelect?.(v, item);
        }}
        className={cx(styles.root, classNames.root)}
      >
        {label && <ArkListbox.Label className={cx(styles.label, classNames.label)}>{label}</ArkListbox.Label>}
        <ArkListbox.Content className={cx(styles.content, classNames.content)}>
          <ArkListbox.ItemGroup className={cx(styles.itemGroup)}>
            {items.map((item) => (
              <ArkListbox.Item key={item.value} item={item} className={cx(styles.item, classNames.item)}>
                <ArkListbox.ItemText className={cx(styles.itemText, classNames.itemText)}>
                  {item.label}
                </ArkListbox.ItemText>
                <ArkListbox.ItemIndicator className={cx(styles.itemIndicator, classNames.itemIndicator)}>
                  ✓
                </ArkListbox.ItemIndicator>
              </ArkListbox.Item>
            ))}
          </ArkListbox.ItemGroup>
        </ArkListbox.Content>
      </ArkListbox.Root>
    );
  },
);

ListboxDS.displayName = 'ListboxDS';

export { createListCollection };
export type { ListboxHighlightChangeDetails, ListboxValueChangeDetails } from '@ark-ui/react';
