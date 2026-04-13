import { segmentGroupRecipe } from "./segment-group.recipe.js";
import { forwardRef } from "react";
import { cx } from "@styled-system/css";
import { jsx, jsxs } from "react/jsx-runtime";
import { SegmentGroup } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/components/segment-group/segment-group.tsx
const { withProvider, withContext } = createStyleContext(segmentGroupRecipe);
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
const SegmentGroup$1 = {
	Root: withProvider(SegmentGroup.Root, "root"),
	RootProvider: withProvider(SegmentGroup.RootProvider, "root"),
	Label: withContext(SegmentGroup.Label, "label"),
	Item: withContext(SegmentGroup.Item, "item"),
	ItemText: withContext(SegmentGroup.ItemText, "itemText"),
	ItemControl: withContext(SegmentGroup.ItemControl, "itemControl"),
	ItemHiddenInput: SegmentGroup.ItemHiddenInput,
	Indicator: withContext(SegmentGroup.Indicator, "indicator"),
	Context: SegmentGroup.Context
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
const SegmentGroupDS = forwardRef(({ items, value, defaultValue, onChange, disabled, label, orientation, size = "md", className, classNames = {} }, ref) => {
	const styles = segmentGroupRecipe({ size });
	return /* @__PURE__ */ jsxs("div", {
		ref,
		children: [label && /* @__PURE__ */ jsx(SegmentGroup.Label, {
			className: cx(styles.label, classNames.label),
			children: label
		}), /* @__PURE__ */ jsxs(SegmentGroup.Root, {
			value,
			defaultValue,
			onValueChange: ({ value: v }) => onChange?.(v),
			disabled,
			orientation,
			className: cx(styles.root, classNames.root, className),
			children: [/* @__PURE__ */ jsx(SegmentGroup.Indicator, { className: cx(styles.indicator, classNames.indicator) }), items.map((item) => /* @__PURE__ */ jsxs(SegmentGroup.Item, {
				value: item.value,
				disabled: item.disabled,
				className: cx(styles.item, classNames.item),
				children: [/* @__PURE__ */ jsx(SegmentGroup.ItemText, {
					className: cx(styles.itemText, classNames.itemText),
					children: item.label
				}), /* @__PURE__ */ jsx(SegmentGroup.ItemHiddenInput, {})]
			}, item.value))]
		})]
	});
});
SegmentGroupDS.displayName = "SegmentGroupDS";
//#endregion
export { SegmentGroup$1 as SegmentGroup, SegmentGroupDS };

//# sourceMappingURL=segment-group.js.map