import { sliderRecipe } from "./slider.recipe.js";
import { Slider } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/forms/slider/slider.tsx
/**
* Slider — styled Ark UI **Slider** compound wired to `sliderRecipe` via `createStyleContext`.
*
* Ark handles all a11y: `slider` role, keyboard navigation (arrows, Home/End, Page Up/Down),
* and ARIA attributes for value, min, max. Variant props go on **`Slider.Root`**.
*
* Orientation: pass `orientation="vertical"` to `Slider.Root` — all parts respond via
* `data-orientation="vertical"` attribute styles in the recipe.
*
* Touch: the thumb enlarges automatically at raspberry-pi breakpoints
* (`max-width: 1024px / max-height: 600px` and `800 / 480`) when `pointer: coarse`.
*
* @example
* ```tsx
* import { Slider } from '@finografic/design-system/forms';
*
* <Slider.Root value={[volume]} onValueChange={({ value }) => setVolume(value[0])}>
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
* </Slider.Root>
* ```
*/
const { withProvider, withContext } = createStyleContext(sliderRecipe);
/**
* Styled Ark **Slider** compound — each part is wired to `sliderRecipe` via context.
*
* Place `value`, `onValueChange`, `min`, `max`, `step`, `orientation`, and `size`
* on **`Root`**.
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
//#endregion
export { Slider$1 as Slider };

//# sourceMappingURL=slider.js.map