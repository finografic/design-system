import { RadioGroup as ArkRadioGroup } from '@ark-ui/react';
import { createStyleContext } from '@styled-system/jsx';

import { radioGroupRecipe } from './radio-group.recipe';

// ── Compound (createStyleContext) ─────────────────────────────────────────────

const { withProvider, withContext } = createStyleContext(radioGroupRecipe);

/**
 * Styled Ark **RadioGroup** compound — each part is wired to `radioGroupRecipe` via context.
 *
 * Supports `size` (sm | md | lg), `variant` (default | card), and
 * `orientation` (vertical | horizontal) via `RadioGroup.Root`.
 * Ark manages keyboard navigation, focus management, and ARIA.
 *
 * @example
 * ```tsx
 * import { RadioGroup } from '@finografic/design-system/forms';
 *
 * <RadioGroup.Root name="plan" size="md" value={plan} onValueChange={({ value }) => setPlan(value)}>
 *   <RadioGroup.Label>Billing plan</RadioGroup.Label>
 *   {options.map((opt) => (
 *     <RadioGroup.Item key={opt.value} value={opt.value}>
 *       <RadioGroup.ItemControl>
 *         <RadioGroup.Indicator />
 *       </RadioGroup.ItemControl>
 *       <RadioGroup.ItemText>{opt.label}</RadioGroup.ItemText>
 *       <RadioGroup.ItemHiddenInput />
 *     </RadioGroup.Item>
 *   ))}
 * </RadioGroup.Root>
 * ```
 */
export const RadioGroup = {
  /** RadioGroup root — accepts `size`, `variant`, and `orientation` variants. */
  Root: withProvider(ArkRadioGroup.Root, 'root'),
  /** Group label above the options. */
  Label: withContext(ArkRadioGroup.Label, 'label'),
  /** Clickable row wrapping control + text. */
  Item: withContext(ArkRadioGroup.Item, 'item'),
  /** The radio circle (border + checked fill). */
  ItemControl: withContext(ArkRadioGroup.ItemControl, 'itemControl'),
  /** Hidden native input for form submission. */
  ItemHiddenInput: ArkRadioGroup.ItemHiddenInput,
  /** The inner dot shown when checked. */
  Indicator: withContext(ArkRadioGroup.Indicator, 'indicator'),
  /** Primary label text for the option. */
  ItemText: withContext(ArkRadioGroup.ItemText, 'itemText'),
};

export type { RadioGroupRootProps } from '@ark-ui/react';
