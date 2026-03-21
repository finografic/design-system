import { forwardRef } from "react";
import { cx } from "@styled-system/css";
import { jsx } from "react/jsx-runtime";
import { Slider } from "@ark-ui/react";
//#region src/forms/slider/slider.tsx
const Root = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(Slider.Root, {
	ref,
	className: cx("ds-slider", className),
	...props
}));
Root.displayName = "Slider.Root";
const Label = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(Slider.Label, {
	ref,
	className: cx("ds-slider__label", className),
	...props
}));
Label.displayName = "Slider.Label";
const ValueText = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(Slider.ValueText, {
	ref,
	className: cx("ds-slider__value-text", className),
	...props
}));
ValueText.displayName = "Slider.ValueText";
const Control = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(Slider.Control, {
	ref,
	className: cx("ds-slider__control", className),
	...props
}));
Control.displayName = "Slider.Control";
const Track = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(Slider.Track, {
	ref,
	className: cx("ds-slider__track", className),
	...props
}));
Track.displayName = "Slider.Track";
const Range = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(Slider.Range, {
	ref,
	className: cx("ds-slider__range", className),
	...props
}));
Range.displayName = "Slider.Range";
const Thumb = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(Slider.Thumb, {
	ref,
	className: cx("ds-slider__thumb", className),
	...props
}));
Thumb.displayName = "Slider.Thumb";
const MarkerGroup = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(Slider.MarkerGroup, {
	ref,
	className: cx("ds-slider__marker-group", className),
	...props
}));
MarkerGroup.displayName = "Slider.MarkerGroup";
const Marker = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(Slider.Marker, {
	ref,
	className: cx("ds-slider__marker", className),
	...props
}));
Marker.displayName = "Slider.Marker";
const Slider$1 = {
	Root,
	Label,
	ValueText,
	Control,
	Track,
	Range,
	Thumb,
	MarkerGroup,
	Marker,
	HiddenInput: Slider.HiddenInput
};
//#endregion
export { Slider$1 as Slider };

//# sourceMappingURL=slider.js.map