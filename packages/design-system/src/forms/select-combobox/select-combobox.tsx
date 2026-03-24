import { Combobox as ArkCombobox, createListCollection } from '@ark-ui/react';
import { createStyleContext } from '@styled-system/jsx';
import { forwardRef, type HTMLAttributes } from 'react';

import { selectComboboxRecipe } from './select-combobox.recipe';

// ── Compound (createStyleContext) ─────────────────────────────────────────────

const { withProvider, withContext } = createStyleContext(selectComboboxRecipe);

/** Plain div used for the Indicators slot (not an Ark part). */
const Div = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => (
  <div {...props} ref={ref} />
));
Div.displayName = 'SelectComboboxIndicatorsDiv';

/**
 * Styled Ark **Combobox** compound — low-level primitive for building searchable selects.
 * Each part is wired to `selectComboboxRecipe` via context.
 *
 * Use `createListCollection` from `@ark-ui/react` to create the collection for `Root`.
 * Ark handles all a11y: `combobox` role, `listbox` popup, keyboard navigation (arrows,
 * Enter, Escape), and ARIA attributes.
 *
 * **This is the low-level primitive** — for the high-level searchable select with filtering
 * use `SelectSearchable` from `@finografic/design-system/forms`.
 *
 * @example
 * ```tsx
 * import { Combobox as ArkCombobox, createListCollection } from '@ark-ui/react';
 * import { SelectCombobox } from '@finografic/design-system/forms';
 *
 * const collection = createListCollection({ items: [
 *   { value: 'en', label: 'English' },
 *   { value: 'es', label: 'Spanish' },
 * ]});
 *
 * <SelectCombobox.Root collection={collection} size="md">
 *   <SelectCombobox.Label>Language</SelectCombobox.Label>
 *   <SelectCombobox.Control>
 *     <SelectCombobox.Input placeholder="Search…" />
 *     <SelectCombobox.Indicators>
 *       <SelectCombobox.ClearTrigger>✕</SelectCombobox.ClearTrigger>
 *       <SelectCombobox.Trigger>▾</SelectCombobox.Trigger>
 *     </SelectCombobox.Indicators>
 *   </SelectCombobox.Control>
 *   <SelectCombobox.Positioner>
 *     <SelectCombobox.Content>
 *       <SelectCombobox.ItemGroup>
 *         <ArkCombobox.Items>
 *           {(item) => (
 *             <SelectCombobox.Item key={item.value} item={item}>
 *               <SelectCombobox.ItemText>{item.label}</SelectCombobox.ItemText>
 *               <SelectCombobox.ItemIndicator>✓</SelectCombobox.ItemIndicator>
 *             </SelectCombobox.Item>
 *           )}
 *         </ArkCombobox.Items>
 *       </SelectCombobox.ItemGroup>
 *     </SelectCombobox.Content>
 *   </SelectCombobox.Positioner>
 * </SelectCombobox.Root>
 * ```
 */
export const SelectCombobox = {
  /** Root — `collection`, `value`, `onValueChange`, `onInputValueChange`, plus `size`. */
  Root: withProvider(ArkCombobox.Root, 'root'),
  /** Root with external machine state from `useCombobox`. */
  RootProvider: withProvider(ArkCombobox.RootProvider, 'root'),
  /** Text label above the control. */
  Label: withContext(ArkCombobox.Label, 'label'),
  /** Input + indicator wrapper — contains `Input`, `ClearTrigger`, `Trigger`. */
  Control: withContext(ArkCombobox.Control, 'control'),
  /** Text input for filtering options. */
  Input: withContext(ArkCombobox.Input, 'input'),
  /** Plain div wrapper for grouping `ClearTrigger` and `Trigger`. */
  Indicators: withContext(Div, 'indicators'),
  /** Dropdown chevron button. */
  Trigger: withContext(ArkCombobox.Trigger, 'trigger'),
  /** Clear (×) button — visible when a value is selected. */
  ClearTrigger: withContext(ArkCombobox.ClearTrigger, 'clearTrigger'),
  /** Floating positioner that anchors the content below the control. */
  Positioner: withContext(ArkCombobox.Positioner, 'positioner'),
  /** Dropdown list panel. */
  Content: withContext(ArkCombobox.Content, 'content'),
  /** Groups related items with optional label. */
  ItemGroup: withContext(ArkCombobox.ItemGroup, 'itemGroup'),
  /** Section heading for an item group. */
  ItemGroupLabel: withContext(ArkCombobox.ItemGroupLabel, 'itemGroupLabel'),
  /** A single option row — pass `item` from the collection. */
  Item: withContext(ArkCombobox.Item, 'item'),
  /** Text label inside an item. */
  ItemText: withContext(ArkCombobox.ItemText, 'itemText'),
  /** Check indicator shown when the item is selected. */
  ItemIndicator: withContext(ArkCombobox.ItemIndicator, 'itemIndicator'),
  /** Render prop — exposes machine context to children; no DOM, no recipe slot. */
  Context: ArkCombobox.Context,
};

export { createListCollection };
