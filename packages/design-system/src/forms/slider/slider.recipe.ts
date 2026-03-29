/**
 * Slider Slot Recipe
 *
 * Port of Ark UI Slider example styles → Panda `sva` + semantic tokens.
 *
 * Slots:    root · label · valueText · control · track · range · thumb ·
 *           markerGroup · marker · description · errorText
 * Variants: size (sm | md | lg)
 *
 * Orientation: all slots respond to `data-orientation="vertical"` on the root.
 *
 * Touch: `thumb` is enlarged at raspberry-pi breakpoints
 * (`max-width: 1024px / max-height: 600px` and `800 / 480`) when `pointer: coarse`.
 */
import { sva } from '@styled-system/css';

import type { RecipeProps } from '../../types/recipes.types';

export const sliderRecipe = sva({
  className: 'slider',

  slots: [
    'root',
    'label',
    'valueText',
    'control',
    'track',
    'range',
    'thumb',
    'markerGroup',
    'marker',
    'description',
    'errorText',
  ],

  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3',
      width: '100%',
      '&[data-orientation="vertical"]': {
        height: '48',
        maxWidth: 'max-content',
        flexDirection: 'row',
      },
    },

    label: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontWeight: 'medium',
      lineHeight: '1.25rem',
      color: 'fg.muted',
      userSelect: 'none',
    },

    valueText: {
      color: 'fg',
      fontWeight: 'semibold',
      fontVariantNumeric: 'tabular-nums',
      lineHeight: '1.25rem',
    },

    control: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: '5',
      '&[data-orientation="vertical"]': {
        flexDirection: 'column',
        height: '100%',
        width: '5',
      },
    },

    track: {
      position: 'relative',
      flex: '1',
      borderRadius: 'full',
      bg: 'bg.emphasized',
      overflow: 'hidden',
      '&[data-orientation="vertical"]': {
        height: '100%',
        width: '1.5',
      },
    },

    range: {
      position: 'absolute',
      bg: 'accent.solid',
      borderRadius: 'full',
      '&[data-orientation="vertical"]': {
        width: '100%',
      },
    },

    thumb: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'full',
      bg: 'white',
      borderWidth: 'default',
      borderStyle: 'solid',
      borderColor: 'accent.solid',
      boxShadow: 'sm',
      outline: 'none',
      cursor: 'grab',
      transitionProperty: 'box-shadow, transform',
      transitionDuration: 'fast',
      _focusVisible: {
        outline: '2px solid',
        outlineColor: 'accent.focusRing',
        outlineOffset: '2px',
        boxShadow: 'md',
      },
      _active: { cursor: 'grabbing' },
      _disabled: { opacity: 0.55, filter: 'grayscale(100%)', cursor: 'not-allowed' },
    },

    markerGroup: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '2',
      '&[data-orientation="vertical"]': {
        flexDirection: 'column',
        height: '100%',
        marginTop: '0',
        marginInlineStart: '2',
      },
    },

    marker: {
      position: 'relative',
      fontSize: 'xs',
      lineHeight: '1rem',
      color: 'fg.subtle',
      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        width: '1',
        height: '1',
        bg: 'border',
        borderRadius: 'full',
        top: '-2.5',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      '&[data-state="under-value"]': {
        '&::before': { bg: 'accent.solid' },
      },
      '&[data-state="at-value"]': {
        '&::before': { bg: 'accent.solid' },
      },
    },

    description: {
      color: 'fg.muted',
      lineHeight: 'normal',
    },

    errorText: {
      display: 'flex',
      alignItems: 'center',
      gap: '1',
      color: 'fg.error',
      fontWeight: 'semibold',
      lineHeight: 'normal',
    },
  },

  variants: {
    size: {
      sm: {
        label: { fontSize: 'xs' },
        valueText: { fontSize: 'xs' },
        track: { height: '1' },
        range: { height: '100%' },
        thumb: {
          width: '4',
          height: '4',
          marginTop: '-1.5',
          '@media (max-width: 1024px) and (max-height: 600px) and (pointer: coarse)': {
            width: '6',
            height: '6',
          },
          '@media (max-width: 800px) and (max-height: 480px) and (pointer: coarse)': {
            width: '8',
            height: '8',
          },
        },
        description: { fontSize: 'xs' },
        errorText: { fontSize: 'xs' },
      },
      md: {
        label: { fontSize: 'sm' },
        valueText: { fontSize: 'sm' },
        track: { height: '1.5' },
        range: { height: '100%' },
        thumb: {
          width: '5',
          height: '5',
          marginTop: '-1.75',
          '@media (max-width: 1024px) and (max-height: 600px) and (pointer: coarse)': {
            width: '7',
            height: '7',
          },
          '@media (max-width: 800px) and (max-height: 480px) and (pointer: coarse)': {
            width: '9',
            height: '9',
          },
        },
        description: { fontSize: 'sm' },
        errorText: { fontSize: 'sm' },
      },
      lg: {
        label: { fontSize: 'md' },
        valueText: { fontSize: 'md' },
        track: { height: '2' },
        range: { height: '100%' },
        thumb: {
          width: '6',
          height: '6',
          marginTop: '-2',
          '@media (max-width: 1024px) and (max-height: 600px) and (pointer: coarse)': {
            width: '8',
            height: '8',
          },
          '@media (max-width: 800px) and (max-height: 480px) and (pointer: coarse)': {
            width: '10',
            height: '10',
          },
        },
        description: { fontSize: 'md' },
        errorText: { fontSize: 'md' },
      },
    },
  },

  defaultVariants: { size: 'md' },
});

export type SliderVariants = RecipeProps<typeof sliderRecipe>;
