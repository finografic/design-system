import { sliderRecipe } from "./slider.recipe.js";
import { forwardRef } from "react";
import { css, cx } from "@styled-system/css";
import { jsx, jsxs } from "react/jsx-runtime";
import { Slider } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/forms/slider/slider.tsx
const { withProvider, withContext } = createStyleContext(sliderRecipe);
/**
* Styled Ark **Slider** compound — each part is wired to `sliderRecipe` via context.
*
* Ark handles all a11y: `slider` role, keyboard navigation (arrows, Home/End,
* Page Up/Down), and ARIA attributes for value, min, max. Variant props go on **`Root`**.
*
* **Orientation:** pass `orientation="vertical"` to `Slider.Root` — all parts respond
* via `data-orientation="vertical"` attribute styles in the recipe.
*
* **Touch:** the thumb enlarges automatically at raspberry-pi breakpoints
* (`max-width: 1024px / max-height: 600px` and `800 / 480`) when `pointer: coarse`.
*
* @example
* ```tsx
* import { Slider } from '@finografic/design-system/forms';
*
* <Slider.Root size="md" value={[volume]} onValueChange={({ value }) => setVolume(value[0])}>
*   <Slider.Label>
*     Volume
*     <Slider.ValueText />
*   </Slider.Label>
*   <Slider.Control>
*     <Slider.Track>
*       <Slider.Range />
*     </Slider.Track>
*     <Slider.Thumb index={0} />
*   </Slider.Control>
*   <Slider.HiddenInput />
* </Slider.Root>
* ```
*/
const Slider$1 = {
	Root: withProvider(Slider.Root, "root"),
	Label: withContext(Slider.Label, "label"),
	ValueText: withContext(Slider.ValueText, "valueText"),
	Control: withContext(Slider.Control, "control"),
	Track: withContext(Slider.Track, "track"),
	Range: withContext(Slider.Range, "range"),
	Thumb: withContext(Slider.Thumb, "thumb"),
	MarkerGroup: withContext(Slider.MarkerGroup, "markerGroup"),
	Marker: withContext(Slider.Marker, "marker"),
	HiddenInput: Slider.HiddenInput
};
const textColumnStyle = css({
	display: "flex",
	flexDirection: "column",
	gap: "1"
});
/**
* Design-system convenience slider — label, value display, description, and error included.
* **`Slider`** stays the styled compound for full composition; **`SliderDS`** = packaged DS
* API (`onChange(value: number)`; bare **`Slider.Root`** still uses Ark's `onValueChange`).
*/
const SliderDS = forwardRef(({ value, onChange, onChangeEnd, onFocusChange, min, max, step, label, showValue = true, description, error, name, disabled, size = "md", className, classNames = {} }, ref) => {
	const styles = sliderRecipe({ size });
	const errorMessage = typeof error === "string" ? error : error?.message;
	return /* @__PURE__ */ jsxs(Slider.Root, {
		ref,
		value,
		onValueChange: ({ value: vals }) => onChange?.(vals),
		onValueChangeEnd: ({ value: vals }) => onChangeEnd?.(vals),
		onFocusChange: ({ focusedIndex }) => onFocusChange?.(focusedIndex >= 0),
		min,
		max,
		step,
		name,
		disabled,
		className: cx(styles.root, classNames.root, className),
		children: [
			label && /* @__PURE__ */ jsxs(Slider.Label, {
				className: cx(styles.label, classNames.label),
				children: [label, showValue && /* @__PURE__ */ jsx(Slider.ValueText, { className: cx(styles.valueText, classNames.valueText) })]
			}),
			/* @__PURE__ */ jsxs(Slider.Control, {
				className: cx(styles.control, classNames.control),
				children: [/* @__PURE__ */ jsx(Slider.Track, {
					className: cx(styles.track, classNames.track),
					children: /* @__PURE__ */ jsx(Slider.Range, { className: cx(styles.range, classNames.range) })
				}), (value ?? [0]).map((_, i) => /* @__PURE__ */ jsx(Slider.Thumb, {
					index: i,
					className: cx(styles.thumb, classNames.thumb)
				}, i))]
			}),
			(description || errorMessage) && /* @__PURE__ */ jsxs("div", {
				className: textColumnStyle,
				children: [description && /* @__PURE__ */ jsx("span", {
					className: cx(styles.description, classNames.description),
					children: description
				}), errorMessage && /* @__PURE__ */ jsx("span", {
					className: cx(styles.errorText, classNames.errorText),
					role: "alert",
					children: errorMessage
				})]
			}),
			/* @__PURE__ */ jsx(Slider.HiddenInput, {})
		]
	});
});
SliderDS.displayName = "SliderDS";
//#endregion
export { Slider$1 as Slider, SliderDS };

//# sourceMappingURL=slider.js.map