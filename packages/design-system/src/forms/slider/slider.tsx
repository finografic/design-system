import { Slider as ArkSlider } from '@ark-ui/react';
import { css, cx } from '@styled-system/css';
import { createStyleContext } from '@styled-system/jsx';
import { forwardRef, type ReactNode } from 'react';
import type { FieldError } from 'react-hook-form';

import type { SliderVariants } from './slider.recipe';
import { sliderRecipe } from './slider.recipe';

// ── Compound (createStyleContext) ─────────────────────────────────────────────

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
export const Slider = {
  /** Root — value state, event handlers, orientation, and recipe variants (`size`). */
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

// ── SliderDS — convenience wrapper ────────────────────────────────────────────

const textColumnStyle = css({ display: 'flex', flexDirection: 'column', gap: '1' });

/** Slot class overrides for {@link SliderDS}. */
export interface SliderDSClassNames {
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

export type SliderDSProps = SliderVariants & {
  /** Current value for a single-thumb slider. */
  value?: number;
  /** Called when the value changes — receives the scalar value. */
  onChange?: (value: number) => void;
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
 * Design-system convenience slider — label, value display, description, and error included.
 * **`Slider`** stays the styled compound for full composition; **`SliderDS`** = packaged DS
 * API (`onChange(value: number)`; bare **`Slider.Root`** still uses Ark's `onValueChange`).
 */
export const SliderDS = forwardRef<HTMLDivElement, SliderDSProps>(
  (
    {
      value,
      onChange,
      min,
      max,
      step,
      label,
      showValue = true,
      description,
      error,
      name,
      disabled,
      size = 'md',
      className,
      classNames = {},
    },
    ref,
  ) => {
    const styles = sliderRecipe({ size });
    const errorMessage = typeof error === 'string' ? error : error?.message;

    return (
      <ArkSlider.Root
        ref={ref}
        value={value !== undefined ? [value] : undefined}
        onValueChange={({ value: vals }) => onChange?.(vals[0] ?? 0)}
        min={min}
        max={max}
        step={step}
        name={name}
        disabled={disabled}
        className={cx(styles.root, classNames.root, className)}
      >
        {label && (
          <ArkSlider.Label className={cx(styles.label, classNames.label)}>
            {label}
            {showValue && (
              <ArkSlider.ValueText className={cx(styles.valueText, classNames.valueText)} />
            )}
          </ArkSlider.Label>
        )}

        <ArkSlider.Control className={cx(styles.control, classNames.control)}>
          <ArkSlider.Track className={cx(styles.track, classNames.track)}>
            <ArkSlider.Range className={cx(styles.range, classNames.range)} />
          </ArkSlider.Track>
          <ArkSlider.Thumb index={0} className={cx(styles.thumb, classNames.thumb)} />
        </ArkSlider.Control>

        {(description || errorMessage) && (
          <div className={textColumnStyle}>
            {description && (
              <span className={cx(styles.description, classNames.description)}>{description}</span>
            )}
            {errorMessage && (
              <span className={cx(styles.errorText, classNames.errorText)} role="alert">
                {errorMessage}
              </span>
            )}
          </div>
        )}

        <ArkSlider.HiddenInput />
      </ArkSlider.Root>
    );
  },
);

SliderDS.displayName = 'SliderDS';

export type { SliderRootProps, SliderValueChangeDetails } from '@ark-ui/react';
