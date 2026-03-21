import { Slider as ArkSlider } from '@ark-ui/react';
import { cx } from '@styled-system/css';
import type { ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';

const Root = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<typeof ArkSlider.Root>>(
  ({ className, ...props }, ref) => (
    <ArkSlider.Root ref={ref} className={cx('ds-slider', className)} {...props} />
  ),
);
Root.displayName = 'Slider.Root';

const Label = forwardRef<HTMLLabelElement, ComponentPropsWithoutRef<typeof ArkSlider.Label>>(
  ({ className, ...props }, ref) => (
    <ArkSlider.Label ref={ref} className={cx('ds-slider__label', className)} {...props} />
  ),
);
Label.displayName = 'Slider.Label';

const ValueText = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<typeof ArkSlider.ValueText>>(
  ({ className, ...props }, ref) => (
    <ArkSlider.ValueText ref={ref} className={cx('ds-slider__value-text', className)} {...props} />
  ),
);
ValueText.displayName = 'Slider.ValueText';

const Control = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<typeof ArkSlider.Control>>(
  ({ className, ...props }, ref) => (
    <ArkSlider.Control ref={ref} className={cx('ds-slider__control', className)} {...props} />
  ),
);
Control.displayName = 'Slider.Control';

const Track = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<typeof ArkSlider.Track>>(
  ({ className, ...props }, ref) => (
    <ArkSlider.Track ref={ref} className={cx('ds-slider__track', className)} {...props} />
  ),
);
Track.displayName = 'Slider.Track';

const Range = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<typeof ArkSlider.Range>>(
  ({ className, ...props }, ref) => (
    <ArkSlider.Range ref={ref} className={cx('ds-slider__range', className)} {...props} />
  ),
);
Range.displayName = 'Slider.Range';

const Thumb = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<typeof ArkSlider.Thumb>>(
  ({ className, ...props }, ref) => (
    <ArkSlider.Thumb ref={ref} className={cx('ds-slider__thumb', className)} {...props} />
  ),
);
Thumb.displayName = 'Slider.Thumb';

const MarkerGroup = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof ArkSlider.MarkerGroup>
>(
  ({ className, ...props }, ref) => (
    <ArkSlider.MarkerGroup
      ref={ref}
      className={cx('ds-slider__marker-group', className)}
      {...props}
    />
  ),
);
MarkerGroup.displayName = 'Slider.MarkerGroup';

const Marker = forwardRef<HTMLSpanElement, ComponentPropsWithoutRef<typeof ArkSlider.Marker>>(
  ({ className, ...props }, ref) => (
    <ArkSlider.Marker ref={ref} className={cx('ds-slider__marker', className)} {...props} />
  ),
);
Marker.displayName = 'Slider.Marker';

export const Slider = {
  Root,
  Label,
  ValueText,
  Control,
  Track,
  Range,
  Thumb,
  MarkerGroup,
  Marker,
  HiddenInput: ArkSlider.HiddenInput,
};

export type { SliderRootProps, SliderValueChangeDetails } from '@ark-ui/react';
