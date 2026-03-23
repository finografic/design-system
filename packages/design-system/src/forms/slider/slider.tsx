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
import { Slider as ArkSlider } from '@ark-ui/react';
import { createStyleContext } from '@styled-system/jsx';

import { sliderRecipe } from './slider.recipe';

const { withProvider, withContext } = createStyleContext(sliderRecipe);

/**
 * Styled Ark **Slider** compound — each part is wired to `sliderRecipe` via context.
 *
 * Place `value`, `onValueChange`, `min`, `max`, `step`, `orientation`, and `size`
 * on **`Root`**.
 */
export const Slider = {
  /** Root — value state, event handlers, orientation, and recipe variants. */
  Root: withProvider(ArkSlider.Root, 'root'),
  /** Text label for the slider; also wraps `ValueText` for inline display. */
  Label: withContext(ArkSlider.Label, 'label'),
  /** Displays the current numeric value; renders as a `<span>`. */
  ValueText: withContext(ArkSlider.ValueText, 'valueText'),
  /** Flex row that contains the track and thumb(s). */
  Control: withContext(ArkSlider.Control, 'control'),
  /** The background rail — contains `Range`. */
  Track: withContext(ArkSlider.Track, 'track'),
  /** Filled portion of the track representing the selected value. */
  Range: withContext(ArkSlider.Range, 'range'),
  /** Draggable handle; pass `index={n}` for multi-thumb sliders. */
  Thumb: withContext(ArkSlider.Thumb, 'thumb'),
  /** Container for tick marks below the track. */
  MarkerGroup: withContext(ArkSlider.MarkerGroup, 'markerGroup'),
  /** Individual tick mark; renders a dot via `::before` and a label. */
  Marker: withContext(ArkSlider.Marker, 'marker'),
  /** Hidden native `<input>` for form integration — no recipe slot. */
  HiddenInput: ArkSlider.HiddenInput,
};

export type { SliderRootProps, SliderValueChangeDetails } from '@ark-ui/react';
