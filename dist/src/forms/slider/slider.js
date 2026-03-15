import { sliderRecipe } from "./slider.recipe.js";
import { Slider } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/forms/slider/slider.tsx
const { withProvider, withContext } = createStyleContext(sliderRecipe);
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
//#endregion
export { Slider$1 as Slider };

//# sourceMappingURL=slider.js.map