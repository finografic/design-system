/**
 * Switch slot recipe (`sva`)
 *
 * Port of Ark UI docs Switch example CSS (`.Root`, `.Label`, `.Control`, `.Thumb`).
 * Use with `createStyleContext(switchRecipe)` for `Switch.*` parts, or call
 * `switchRecipe({ size, palette })` in `LabeledSwitch` like `CheckboxField`.
 *
 * Slots:    root · label · control · thumb · description · errorText
 * Variants: size (sm | md | lg) · palette (semantic color for “on” track)
 */
import { sva } from '@styled-system/css';

export const switchRecipe = sva({
  className: 'switch',

  slots: ['root', 'label', 'control', 'thumb', 'description', 'errorText'],

  base: {
    root: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: '2',
      position: 'relative',
      color: 'fg',
      cursor: 'pointer',
      userSelect: 'none',
      _disabled: {
        opacity: 0.5,
        filter: 'grayscale(100%)',
        cursor: 'not-allowed',
      },
    },

    label: {
      fontSize: 'sm',
      lineHeight: '1.25rem',
      fontWeight: 'medium',
      color: 'fg',
      userSelect: 'none',
    },

    control: {
      display: 'inline-flex',
      alignItems: 'center',
      flexShrink: 0,
      borderRadius: 'full',
      bg: 'bg.muted',
      transitionProperty: 'background-color, box-shadow',
      transitionDuration: '0.15s',
      transitionTimingFunction: 'ease',
      _checked: { bg: 'accent.solid' },
      _focusVisible: {
        outline: '2px solid',
        outlineColor: 'accent.focusRing',
        outlineOffset: '2px',
      },
    },

    thumb: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'full',
      bg: 'bg.inverted',
      boxShadow: 'sm',
      transitionProperty: 'transform',
      transitionDuration: '0.15s',
      transitionTimingFunction: 'ease',
    },

    description: {
      fontSize: 'sm',
      color: 'fg.muted',
      lineHeight: 'normal',
    },

    errorText: {
      fontSize: 'sm',
      color: 'fg.error',
      fontWeight: 'semibold',
      lineHeight: 'normal',
    },
  },

  variants: {
    size: {
      sm: {
        control: { width: '8', height: '4', padding: '0.5' },
        thumb: {
          width: '3',
          height: '3',
          _checked: { transform: 'translateX(0.75rem)' },
        },
        label: { fontSize: 'xs' },
        description: { fontSize: 'xs' },
        errorText: { fontSize: 'xs' },
      },
      md: {
        control: { width: '10', height: '6', padding: '0.5' },
        thumb: {
          width: '5',
          height: '5',
          _checked: { transform: 'translateX(1rem)' },
        },
        label: { fontSize: 'sm' },
        description: { fontSize: 'sm' },
        errorText: { fontSize: 'sm' },
      },
      lg: {
        control: { width: '12', height: '7', padding: '1' },
        thumb: {
          width: '6',
          height: '6',
          _checked: { transform: 'translateX(1.25rem)' },
        },
        label: { fontSize: 'md' },
        description: { fontSize: 'md' },
        errorText: { fontSize: 'md' },
      },
    },

    palette: {
      default: { root: { colorPalette: 'neutral' } },
      primary: { root: { colorPalette: 'primary' } },
      secondary: { root: { colorPalette: 'secondary' } },
      success: { root: { colorPalette: 'success' } },
      warning: { root: { colorPalette: 'warning' } },
      danger: { root: { colorPalette: 'danger' } },
      info: { root: { colorPalette: 'info' } },
      grey: { root: { colorPalette: 'grey' } },
    },
  },

  defaultVariants: {
    size: 'md',
    palette: 'primary',
  },
});
