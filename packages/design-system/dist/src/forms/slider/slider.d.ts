import { SlotRecipeRuntimeFn } from "../../../styled-system/types/recipe.js";
import * as react from "react";
import { Slider, SliderRootProps, SliderValueChangeDetails } from "@ark-ui/react";
import * as _styled_system_jsx0 from "@styled-system/jsx";

//#region src/forms/slider/slider.d.ts
declare const Slider$1: {
  Root: _styled_system_jsx0.StyleContextProvider<react.ForwardRefExoticComponent<Slider.RootProps & react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"label" | "track" | "marker" | "root" | "control" | "valueText" | "range" | "thumb" | "markerGroup", {
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
        };
      };
    };
  }>>;
  Label: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Slider.LabelProps & react.RefAttributes<HTMLLabelElement>>>;
  ValueText: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Slider.ValueTextProps & react.RefAttributes<HTMLDivElement>>>;
  Control: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Slider.ControlProps & react.RefAttributes<HTMLDivElement>>>;
  Track: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Slider.TrackProps & react.RefAttributes<HTMLDivElement>>>;
  Range: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Slider.RangeProps & react.RefAttributes<HTMLDivElement>>>;
  Thumb: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Slider.ThumbProps & react.RefAttributes<HTMLDivElement>>>;
  MarkerGroup: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Slider.MarkerGroupProps & react.RefAttributes<HTMLDivElement>>>;
  Marker: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Slider.MarkerProps & react.RefAttributes<HTMLSpanElement>>>;
  HiddenInput: react.ForwardRefExoticComponent<Slider.HiddenInputProps & react.RefAttributes<HTMLInputElement>>;
};
//#endregion
export { Slider$1 as Slider, type SliderRootProps, type SliderValueChangeDetails };
//# sourceMappingURL=slider.d.ts.map