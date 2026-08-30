import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import "../../packages/design-system/styled-system/types/index.js";
import { SliderVariants } from "./slider.recipe.js";
import { ReactNode } from "react";
import { Slider, SliderRootProps, SliderValueChangeDetails } from "@ark-ui/react";
import { FieldError } from "react-hook-form";
//#region src/forms/slider/slider.d.ts
/**
 * Styled Ark **Slider** compound — each part is wired to `sliderRecipe` via context.
 *
 * Ark handles all a11y: `slider` role, keyboard navigation (arrows, Home/End, Page Up/Down), and ARIA
 * attributes for value, min, max. Variant props go on **`Root`**.
 *
 * **Orientation:** pass `orientation="vertical"` to `Slider.Root` — all parts respond via
 * `data-orientation="vertical"` attribute styles in the recipe.
 *
 * **Touch:** the thumb enlarges automatically at raspberry-pi breakpoints (`max-width: 1024px / max-height:
 * 600px` and `800 / 480`) when `pointer: coarse`.
 *
 * @example
 *   ```tsx
 *   import { Slider } from '@finografic/design-system/forms';
 *
 *   <Slider.Root size="md" value={[volume]} onValueChange={({ value }) => setVolume(value[0])}>
 *     <Slider.Label>
 *       Volume
 *       <Slider.ValueText />
 *     </Slider.Label>
 *     <Slider.Control>
 *       <Slider.Track>
 *         <Slider.Range />
 *       </Slider.Track>
 *       <Slider.Thumb index={0} />
 *     </Slider.Control>
 *     <Slider.HiddenInput />
 *   </Slider.Root>;
 *   ```;
 */
declare const Slider$1: {
  /** Root — value state, event handlers, orientation, and recipe variants (`size`). */
  Root: import("@styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<Slider.RootProps & import("react").RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"control" | "description" | "errorText" | "label" | "marker" | "markerGroup" | "range" | "root" | "thumb" | "track" | "valueText", {
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
        description: {
          fontSize: "xs";
        };
        errorText: {
          fontSize: "xs";
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
        description: {
          fontSize: "sm";
        };
        errorText: {
          fontSize: "sm";
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
        description: {
          fontSize: "md";
        };
        errorText: {
          fontSize: "md";
        };
      };
    };
  }>>;
  /** Text label for the slider; also wraps `ValueText` for inline display. */
  Label: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Slider.LabelProps & import("react").RefAttributes<HTMLLabelElement>>>;
  /** Displays the current numeric value; renders as a `<span>`. */
  ValueText: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Slider.ValueTextProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Flex row that contains the track and thumb(s). */
  Control: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Slider.ControlProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** The background rail — contains `Range`. */
  Track: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Slider.TrackProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Filled portion of the track representing the selected value. */
  Range: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Slider.RangeProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Draggable handle; pass `index={n}` for multi-thumb sliders. */
  Thumb: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Slider.ThumbProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Container for tick marks below the track. */
  MarkerGroup: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Slider.MarkerGroupProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Individual tick mark; renders a dot via `::before` and a label. */
  Marker: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Slider.MarkerProps & import("react").RefAttributes<HTMLSpanElement>>>;
  /** Hidden native `<input>` for form integration — no recipe slot. */
  HiddenInput: import("react").ForwardRefExoticComponent<Slider.HiddenInputProps & import("react").RefAttributes<HTMLInputElement>>;
};
/** Slot class overrides for {@link SliderDS}. */
interface SliderDSClassNames {
  root?: string;
  label?: string;
  valueText?: string;
  control?: string;
  track?: string;
  range?: string;
  thumb?: string;
  description?: string;
  errorText?: string;
}
type SliderDSProps = SliderVariants & {
  /** Current value(s) — pass a single-element array for single-thumb, two elements for range. */
  value?: number[];
  /** Called continuously as the thumb(s) move — receives the full values array. */
  onChange?: (value: number[]) => void;
  /** Called when dragging ends (pointer up / key release) — receives the final values array. */
  onChangeEnd?: (value: number[]) => void;
  /** Called when the slider focus state changes. */
  onFocusChange?: (isFocused: boolean) => void;
  min?: number;
  max?: number;
  step?: number;
  /** Label rendered above the track. */
  label?: ReactNode;
  /** Show the current value next to the label. Default: `true` */
  showValue?: boolean;
  /** Helper text below the track. */
  description?: ReactNode;
  /** RHF FieldError or plain string. */
  error?: FieldError | string;
  name?: string;
  disabled?: boolean;
  /** Merged onto the root slot after recipe classes. */
  className?: string;
  /** Per-slot class overrides. */
  classNames?: SliderDSClassNames;
};
/**
 * Design-system convenience slider — label, value display, description, and error included. **`Slider`**
 * stays the styled compound for full composition; **`SliderDS`** = packaged DS API (`onChange(value:
 * number)`; bare **`Slider.Root`** still uses Ark's `onValueChange`).
 */
declare const SliderDS: import("react").ForwardRefExoticComponent<{
  size?: "lg" | "md" | "sm" | undefined;
} & {
  /** Current value(s) — pass a single-element array for single-thumb, two elements for range. */
  value?: number[];
  /** Called continuously as the thumb(s) move — receives the full values array. */
  onChange?: (value: number[]) => void;
  /** Called when dragging ends (pointer up / key release) — receives the final values array. */
  onChangeEnd?: (value: number[]) => void;
  /** Called when the slider focus state changes. */
  onFocusChange?: (isFocused: boolean) => void;
  min?: number;
  max?: number;
  step?: number;
  /** Label rendered above the track. */
  label?: ReactNode;
  /** Show the current value next to the label. Default: `true` */
  showValue?: boolean;
  /** Helper text below the track. */
  description?: ReactNode;
  /** RHF FieldError or plain string. */
  error?: FieldError | string;
  name?: string;
  disabled?: boolean;
  /** Merged onto the root slot after recipe classes. */
  className?: string;
  /** Per-slot class overrides. */
  classNames?: SliderDSClassNames;
} & import("react").RefAttributes<HTMLDivElement>>;
//#endregion
export { Slider$1 as Slider, SliderDS, SliderDSClassNames, SliderDSProps, type SliderRootProps, type SliderValueChangeDetails };
//# sourceMappingURL=slider.d.ts.map