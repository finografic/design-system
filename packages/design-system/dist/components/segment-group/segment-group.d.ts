import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { SegmentGroupRecipeProps } from "./segment-group.recipe.js";
import * as _$react from "react";
import { ReactNode } from "react";
import { SegmentGroup, SegmentGroupValueChangeDetails } from "@ark-ui/react";
import * as _$_styled_system_jsx0 from "@styled-system/jsx";

//#region src/components/segment-group/segment-group.d.ts
/**
 * Styled Ark **SegmentGroup** compound — each part is wired to `segmentGroupRecipe` via context.
 *
 * Renders a set of mutually exclusive options as a pill group with a sliding indicator background. Ark
 * handles all a11y: `radiogroup` role, keyboard navigation (arrows), and ARIA attributes. Variant props
 * (`size`) go on **`SegmentGroup.Root`**.
 *
 * **Indicator:** the sliding pill is positioned via CSS vars `--width`, `--height`, `--top`, `--left`
 * injected by Zag — do not set position manually.
 *
 * @example
 *   ```tsx
 *   import { SegmentGroup } from '@finografic/design-system/components';
 *
 *   <SegmentGroup.Root defaultValue="monthly" size="md">
 *     <SegmentGroup.Indicator />
 *     <SegmentGroup.Item value="monthly">
 *       <SegmentGroup.ItemText>Monthly</SegmentGroup.ItemText>
 *       <SegmentGroup.ItemHiddenInput />
 *     </SegmentGroup.Item>
 *     <SegmentGroup.Item value="annual">
 *       <SegmentGroup.ItemText>Annual</SegmentGroup.ItemText>
 *       <SegmentGroup.ItemHiddenInput />
 *     </SegmentGroup.Item>
 *   </SegmentGroup.Root>;
 *   ```;
 */
declare const SegmentGroup$1: {
  /** Root — `value` / `defaultValue` / `onValueChange`, `disabled`, `orientation`, plus `size`. */Root: _$_styled_system_jsx0.StyleContextProvider<_$react.ForwardRefExoticComponent<SegmentGroup.RootProps & _$react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"root" | "item" | "label" | "itemText" | "indicator" | "itemControl", {
    size: {
      sm: {
        item: {
          px: "2";
          py: "1";
          fontSize: "xs";
          h: "6";
        };
      };
      md: {
        item: {
          px: "3";
          py: "1.5";
          fontSize: "sm";
          h: "7";
        };
      };
      lg: {
        item: {
          px: "4";
          py: "2";
          fontSize: "md";
          h: "8";
        };
      };
    };
  }>>; /** Root with external machine state from `useSegmentGroup`. */
  RootProvider: _$_styled_system_jsx0.StyleContextProvider<_$react.ForwardRefExoticComponent<SegmentGroup.RootProviderProps & _$react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"root" | "item" | "label" | "itemText" | "indicator" | "itemControl", {
    size: {
      sm: {
        item: {
          px: "2";
          py: "1";
          fontSize: "xs";
          h: "6";
        };
      };
      md: {
        item: {
          px: "3";
          py: "1.5";
          fontSize: "sm";
          h: "7";
        };
      };
      lg: {
        item: {
          px: "4";
          py: "2";
          fontSize: "md";
          h: "8";
        };
      };
    };
  }>>; /** Optional label rendered above the segment group. */
  Label: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<SegmentGroup.LabelProps & _$react.RefAttributes<HTMLSpanElement>>>; /** A single segment option — wraps `ItemText`, `ItemControl`, `ItemHiddenInput`. */
  Item: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<SegmentGroup.ItemProps & _$react.RefAttributes<HTMLLabelElement>>>; /** Text label inside a segment item. */
  ItemText: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<SegmentGroup.ItemTextProps & _$react.RefAttributes<HTMLSpanElement>>>; /** Hidden radio control used by Ark internally — `display: none` in recipe. */
  ItemControl: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<SegmentGroup.ItemControlProps & _$react.RefAttributes<HTMLDivElement>>>; /** Hidden native radio input for form integration. */
  ItemHiddenInput: _$react.ForwardRefExoticComponent<SegmentGroup.ItemHiddenInputProps & _$react.RefAttributes<HTMLInputElement>>; /** Sliding background pill — position driven by Zag CSS vars. */
  Indicator: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<SegmentGroup.IndicatorProps & _$react.RefAttributes<HTMLDivElement>>>; /** Render prop — exposes machine context to children; no DOM, no recipe slot. */
  Context: (props: SegmentGroup.ContextProps) => ReactNode;
};
/** A single segment option descriptor for {@link SegmentGroupDS}. */
interface SegmentGroupDSItem {
  /** Unique value for this segment. */
  value: string;
  /** Label rendered inside the segment button. */
  label: ReactNode;
  /** Disables this segment. */
  disabled?: boolean;
}
/** Slot class overrides for {@link SegmentGroupDS}. */
interface SegmentGroupDSClassNames {
  root?: string;
  label?: string;
  item?: string;
  itemText?: string;
  indicator?: string;
}
type SegmentGroupDSProps = SegmentGroupRecipeProps & {
  /** Segment descriptors. */items: SegmentGroupDSItem[]; /** Controlled selected value. */
  value?: string; /** Default selected value (uncontrolled). */
  defaultValue?: string; /** Called when the selected value changes. */
  onChange?: (value: string | null) => void; /** Disables all segments. */
  disabled?: boolean; /** Optional group label rendered above the segment row. */
  label?: ReactNode; /** Layout direction. */
  orientation?: 'horizontal' | 'vertical'; /** Merged onto the root slot after recipe classes. */
  className?: string; /** Per-slot class overrides. */
  classNames?: SegmentGroupDSClassNames;
};
/**
 * Design-system convenience segment group — pass an `items` array and get a pill-tab selector.
 * **`SegmentGroup`** stays the styled compound for full composition; **`SegmentGroupDS`** = packaged DS API
 * (`onChange(value)` instead of Ark's `onValueChange` detail object).
 *
 * @example
 *   ```tsx
 *   import { SegmentGroupDS } from '@finografic/design-system/components';
 *
 *   <SegmentGroupDS
 *     defaultValue="monthly"
 *     onChange={(value) => setBilling(value)}
 *     items={[
 *       { value: 'monthly', label: 'Monthly' },
 *       { value: 'annual', label: 'Annual' },
 *     ]}
 *   />;
 *   ```;
 */
declare const SegmentGroupDS: _$react.ForwardRefExoticComponent<{
  size?: "sm" | "md" | "lg" | undefined;
} & {
  /** Segment descriptors. */items: SegmentGroupDSItem[]; /** Controlled selected value. */
  value?: string; /** Default selected value (uncontrolled). */
  defaultValue?: string; /** Called when the selected value changes. */
  onChange?: (value: string | null) => void; /** Disables all segments. */
  disabled?: boolean; /** Optional group label rendered above the segment row. */
  label?: ReactNode; /** Layout direction. */
  orientation?: "horizontal" | "vertical"; /** Merged onto the root slot after recipe classes. */
  className?: string; /** Per-slot class overrides. */
  classNames?: SegmentGroupDSClassNames;
} & _$react.RefAttributes<HTMLDivElement>>;
//#endregion
export { SegmentGroup$1 as SegmentGroup, SegmentGroupDS, SegmentGroupDSClassNames, SegmentGroupDSItem, SegmentGroupDSProps, type SegmentGroupValueChangeDetails };
//# sourceMappingURL=segment-group.d.ts.map