import { SegmentGroup as ArkSegmentGroup } from '@ark-ui/react';
import { cx } from '@styled-system/css';
import { createStyleContext } from '@styled-system/jsx';
import { forwardRef, type ReactNode } from 'react';

import type { SegmentGroupRecipeProps } from './segment-group.recipe';
import { segmentGroupRecipe } from './segment-group.recipe';

// ── Compound (createStyleContext) ─────────────────────────────────────────────

const { withProvider, withContext } = createStyleContext(segmentGroupRecipe);

/**
 * Styled Ark **SegmentGroup** compound — each part is wired to `segmentGroupRecipe` via context.
 *
 * Renders a set of mutually exclusive options as a pill group with a sliding indicator background.
 * Ark handles all a11y: `radiogroup` role, keyboard navigation (arrows), and ARIA attributes.
 * Variant props (`size`) go on **`SegmentGroup.Root`**.
 *
 * **Indicator:** the sliding pill is positioned via CSS vars `--width`, `--height`, `--top`,
 * `--left` injected by Zag — do not set position manually.
 *
 * @example
 * ```tsx
 * import { SegmentGroup } from '@finografic/design-system/components';
 *
 * <SegmentGroup.Root defaultValue="monthly" size="md">
 *   <SegmentGroup.Indicator />
 *   <SegmentGroup.Item value="monthly">
 *     <SegmentGroup.ItemText>Monthly</SegmentGroup.ItemText>
 *     <SegmentGroup.ItemHiddenInput />
 *   </SegmentGroup.Item>
 *   <SegmentGroup.Item value="annual">
 *     <SegmentGroup.ItemText>Annual</SegmentGroup.ItemText>
 *     <SegmentGroup.ItemHiddenInput />
 *   </SegmentGroup.Item>
 * </SegmentGroup.Root>
 * ```
 */
export const SegmentGroup = {
  /** Root — `value` / `defaultValue` / `onValueChange`, `disabled`, `orientation`, plus `size`. */
  Root: withProvider(ArkSegmentGroup.Root, 'root'),
  /** Root with external machine state from `useSegmentGroup`. */
  RootProvider: withProvider(ArkSegmentGroup.RootProvider, 'root'),
  /** Optional label rendered above the segment group. */
  Label: withContext(ArkSegmentGroup.Label, 'label'),
  /** A single segment option — wraps `ItemText`, `ItemControl`, `ItemHiddenInput`. */
  Item: withContext(ArkSegmentGroup.Item, 'item'),
  /** Text label inside a segment item. */
  ItemText: withContext(ArkSegmentGroup.ItemText, 'itemText'),
  /** Hidden radio control used by Ark internally — `display: none` in recipe. */
  ItemControl: withContext(ArkSegmentGroup.ItemControl, 'itemControl'),
  /** Hidden native radio input for form integration. */
  ItemHiddenInput: ArkSegmentGroup.ItemHiddenInput,
  /** Sliding background pill — position driven by Zag CSS vars. */
  Indicator: withContext(ArkSegmentGroup.Indicator, 'indicator'),
  /** Render prop — exposes machine context to children; no DOM, no recipe slot. */
  Context: ArkSegmentGroup.Context,
};

// ── SegmentGroupDS — convenience wrapper ──────────────────────────────────────

/** A single segment option descriptor for {@link SegmentGroupDS}. */
export interface SegmentGroupDSItem {
  /** Unique value for this segment. */
  value: string;
  /** Label rendered inside the segment button. */
  label: ReactNode;
  /** Disables this segment. */
  disabled?: boolean;
}

/** Slot class overrides for {@link SegmentGroupDS}. */
export interface SegmentGroupDSClassNames {
  root?: string;
  label?: string;
  item?: string;
  itemText?: string;
  indicator?: string;
}

export type SegmentGroupDSProps = SegmentGroupRecipeProps & {
  /** Segment descriptors. */
  items: SegmentGroupDSItem[];
  /** Controlled selected value. */
  value?: string;
  /** Default selected value (uncontrolled). */
  defaultValue?: string;
  /** Called when the selected value changes. */
  onChange?: (value: string | null) => void;
  /** Disables all segments. */
  disabled?: boolean;
  /** Optional group label rendered above the segment row. */
  label?: ReactNode;
  /** Layout direction. */
  orientation?: 'horizontal' | 'vertical';
  /** Merged onto the root slot after recipe classes. */
  className?: string;
  /** Per-slot class overrides. */
  classNames?: SegmentGroupDSClassNames;
};

/**
 * Design-system convenience segment group — pass an `items` array and get a pill-tab selector.
 * **`SegmentGroup`** stays the styled compound for full composition; **`SegmentGroupDS`** =
 * packaged DS API (`onChange(value)` instead of Ark's `onValueChange` detail object).
 *
 * @example
 * ```tsx
 * import { SegmentGroupDS } from '@finografic/design-system/components';
 *
 * <SegmentGroupDS
 *   defaultValue="monthly"
 *   onChange={(value) => setBilling(value)}
 *   items={[
 *     { value: 'monthly', label: 'Monthly' },
 *     { value: 'annual', label: 'Annual' },
 *   ]}
 * />
 * ```
 */
export const SegmentGroupDS = forwardRef<HTMLDivElement, SegmentGroupDSProps>(
  (
    {
      items,
      value,
      defaultValue,
      onChange,
      disabled,
      label,
      orientation,
      size = 'md',
      className,
      classNames = {},
    },
    ref,
  ) => {
    const styles = segmentGroupRecipe({ size });

    return (
      <div ref={ref}>
        {label && (
          <ArkSegmentGroup.Label className={cx(styles.label, classNames.label)}>
            {label}
          </ArkSegmentGroup.Label>
        )}
        <ArkSegmentGroup.Root
          value={value}
          defaultValue={defaultValue}
          onValueChange={({ value: v }) => onChange?.(v)}
          disabled={disabled}
          orientation={orientation}
          className={cx(styles.root, classNames.root, className)}
        >
          <ArkSegmentGroup.Indicator className={cx(styles.indicator, classNames.indicator)} />
          {items.map((item) => (
            <ArkSegmentGroup.Item
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              className={cx(styles.item, classNames.item)}
            >
              <ArkSegmentGroup.ItemText className={cx(styles.itemText, classNames.itemText)}>
                {item.label}
              </ArkSegmentGroup.ItemText>
              <ArkSegmentGroup.ItemHiddenInput />
            </ArkSegmentGroup.Item>
          ))}
        </ArkSegmentGroup.Root>
      </div>
    );
  },
);

SegmentGroupDS.displayName = 'SegmentGroupDS';

export type { SegmentGroupValueChangeDetails } from '@ark-ui/react';
