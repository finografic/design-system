import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import * as react from "react";
import { Slider, SliderRootProps, SliderValueChangeDetails } from "@ark-ui/react";
import * as _styled_system_jsx0 from "@styled-system/jsx";

//#region src/forms/slider/slider.d.ts
/**
 * Styled Ark **Slider** compound — each part is wired to `sliderRecipe` via context.
 *
 * Place `value`, `onValueChange`, `min`, `max`, `step`, `orientation`, and `size`
 * on **`Root`**.
 */
declare const Slider$1: {
  /** Root — value state, event handlers, orientation, and recipe variants. */Root: _styled_system_jsx0.StyleContextProvider<react.ForwardRefExoticComponent<Slider.RootProps & react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"marker" | "root" | "label" | "control" | "valueText" | "thumb" | "track" | "range" | "markerGroup", {
    size: {
      sm: {
        label: {
          fontSize: "xs";
        };
        valueText: {
          fontSize: "xs";
        };
        track: {
          height: "1";
        };
        range: {
          height: "100%";
        };
        thumb: {
          width: "4";
          height: "4";
          marginTop: "-1.5";
          '@media (max-width: 1024px) and (max-height: 600px) and (pointer: coarse)': {
            width: "6";
            height: "6";
          };
          '@media (max-width: 800px) and (max-height: 480px) and (pointer: coarse)': {
            width: "8";
            height: "8";
          };
        };
      };
      md: {
        label: {
          fontSize: "sm";
        };
        valueText: {
          fontSize: "sm";
        };
        track: {
          height: "1.5";
        };
        range: {
          height: "100%";
        };
        thumb: {
          width: "5";
          height: "5";
          marginTop: "-1.75";
          '@media (max-width: 1024px) and (max-height: 600px) and (pointer: coarse)': {
            width: "7";
            height: "7";
          };
          '@media (max-width: 800px) and (max-height: 480px) and (pointer: coarse)': {
            width: "9";
            height: "9";
          };
        };
      };
      lg: {
        label: {
          fontSize: "md";
        };
        valueText: {
          fontSize: "md";
        };
        track: {
          height: "2";
        };
        range: {
          height: "100%";
        };
        thumb: {
          width: "6";
          height: "6";
          marginTop: "-2";
          '@media (max-width: 1024px) and (max-height: 600px) and (pointer: coarse)': {
            width: "8";
            height: "8";
          };
          '@media (max-width: 800px) and (max-height: 480px) and (pointer: coarse)': {
            width: "10";
            height: "10";
          };
        };
      };
    };
  }>>; /** Text label for the slider; also wraps `ValueText` for inline display. */
  Label: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Slider.LabelProps & react.RefAttributes<HTMLLabelElement>>>; /** Displays the current numeric value; renders as a `<span>`. */
  ValueText: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Slider.ValueTextProps & react.RefAttributes<HTMLDivElement>>>; /** Flex row that contains the track and thumb(s). */
  Control: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Slider.ControlProps & react.RefAttributes<HTMLDivElement>>>; /** The background rail — contains `Range`. */
  Track: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Slider.TrackProps & react.RefAttributes<HTMLDivElement>>>; /** Filled portion of the track representing the selected value. */
  Range: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Slider.RangeProps & react.RefAttributes<HTMLDivElement>>>; /** Draggable handle; pass `index={n}` for multi-thumb sliders. */
  Thumb: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Slider.ThumbProps & react.RefAttributes<HTMLDivElement>>>; /** Container for tick marks below the track. */
  MarkerGroup: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Slider.MarkerGroupProps & react.RefAttributes<HTMLDivElement>>>; /** Individual tick mark; renders a dot via `::before` and a label. */
  Marker: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Slider.MarkerProps & react.RefAttributes<HTMLSpanElement>>>; /** Hidden native `<input>` for form integration — no recipe slot. */
  HiddenInput: react.ForwardRefExoticComponent<Slider.HiddenInputProps & react.RefAttributes<HTMLInputElement>>;
};
//#endregion
export { Slider$1 as Slider, type SliderRootProps, type SliderValueChangeDetails };
//# sourceMappingURL=slider.d.ts.map