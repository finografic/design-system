/**
 * Select — styled Ark UI **Select** compound wired to `selectRecipe` via `createStyleContext`.
 *
 * Ark handles all a11y: `listbox` / `option` roles, keyboard navigation (arrows,
 * Home/End, typeahead), and Escape to close. Variant props go on **`Select.Root`**.
 *
 * **Multi-select:** pass `multiple` to `Select.Root`. Ark manages selection state;
 * `Select.ItemIndicator` (check icon) shows for each selected item. `SelectDefault`
 * also accepts `multiple` for a simpler options-array API.
 *
 * @example
 * ```tsx
 * import { Select, createListCollection } from '@finografic/design-system/forms';
 * import { CheckIcon, ChevronDownIcon } from '@finografic/icons';
 *
 * const collection = createListCollection({
 *   items: [
 *     { value: 'en', label: 'English' },
 *     { value: 'es', label: 'Spanish' },
 *   ],
 * });
 *
 * <Select.Root collection={collection} onValueChange={({ value }) => setValue(value)}>
 *   <Select.Label>Language</Select.Label>
 *   <Select.Control>
 *     <Select.Trigger>
 *       <Select.ValueText placeholder="Pick one…" />
 *       <Select.Indicator><ChevronDownIcon aria-hidden /></Select.Indicator>
 *     </Select.Trigger>
 *   </Select.Control>
 *   <Select.Positioner>
 *     <Select.Content>
 *       <Select.List>
 *         {collection.items.map((item) => (
 *           <Select.Item key={item.value} item={item}>
 *             <Select.ItemText>{item.label}</Select.ItemText>
 *             <Select.ItemIndicator><CheckIcon aria-hidden /></Select.ItemIndicator>
 *           </Select.Item>
 *         ))}
 *       </Select.List>
 *     </Select.Content>
 *   </Select.Positioner>
 *   <Select.HiddenSelect />
 * </Select.Root>
 * ```
 */
import { Select as ArkSelect } from '@ark-ui/react';
import { createStyleContext } from '@styled-system/jsx';

import { selectRecipe } from './select.recipe';

const { withProvider, withContext } = createStyleContext(selectRecipe);

/**
 * Styled Ark **Select** compound — each part is wired to `selectRecipe` via context.
 *
 * Place `collection`, `value`, `onValueChange`, `multiple`, and `size` on **`Root`**.
 */
export const Select = {
  /** Root — collection, value state, event handlers, multi-select flag, and recipe variants. */
  Root: withProvider(ArkSelect.Root, 'root'),
  /** Text label above the trigger. */
  Label: withContext(ArkSelect.Label, 'label'),
  /** Flex row wrapping the trigger and optional clear button. */
  Control: withContext(ArkSelect.Control, 'control'),
  /** The button that opens the dropdown — shows selected value and chevron. */
  Trigger: withContext(ArkSelect.Trigger, 'trigger'),
  /** Displays selected item label(s); truncates on overflow. */
  ValueText: withContext(ArkSelect.ValueText, 'valueText'),
  /** Chevron icon wrapper; rotates 180° when open. */
  Indicator: withContext(ArkSelect.Indicator, 'indicator'),
  /** Floating positioner — sets z-index and anchors to the trigger width. */
  Positioner: withContext(ArkSelect.Positioner, 'positioner'),
  /** Dropdown panel — scrollable list container with scale animation. */
  Content: withContext(ArkSelect.Content, 'content'),
  /** Flex column wrapping all items and groups. */
  List: withContext(ArkSelect.List, 'list'),
  /** A single selectable row; check icon appears via `ItemIndicator` when selected. */
  Item: withContext(ArkSelect.Item, 'item'),
  /** Primary label inside an item — truncates on overflow. */
  ItemText: withContext(ArkSelect.ItemText, 'itemText'),
  /** Check indicator shown when the item is selected. */
  ItemIndicator: withContext(ArkSelect.ItemIndicator, 'itemIndicator'),
  /** Wraps a set of related items; adds vertical spacing between groups. */
  ItemGroup: withContext(ArkSelect.ItemGroup, 'itemGroup'),
  /** Section heading for an item group. */
  ItemGroupLabel: withContext(ArkSelect.ItemGroupLabel, 'itemGroupLabel'),
  /** Button to clear the current selection — renders inside `Control`. */
  ClearTrigger: withContext(ArkSelect.ClearTrigger, 'clearTrigger'),
  /** Hidden native `<select>` for form integration — no recipe slot. */
  HiddenSelect: ArkSelect.HiddenSelect,
  /** Render prop — exposes machine context to children. */
  Context: ArkSelect.Context,
};

export type { CollectionItem, ListCollection, SelectValueChangeDetails } from '@ark-ui/react';
export { createListCollection, useListCollection } from '@ark-ui/react';
