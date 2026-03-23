/**
 * Switch slot recipe (`sva`)
 *
 * Port of Ark UI docs Switch example CSS (`.Root`, `.Label`, `.Control`, `.Thumb`).
 * Use with `createStyleContext(switchRecipe)` for `Switch.*` parts, or call
 * `switchRecipe({ size, palette })` in `SwitchDS` (like `CheckboxField` uses its recipe).
 *
 * Slots:    root · label · control · thumb · description · errorText
 * Variants: size (sm | md | lg) · palette (sets `colorPalette` on root)
 *
 * **Color mechanism:** `palette` sets `colorPalette` on the **root** slot.
 * Child slots reference `colorPalette.*` tokens that resolve via CSS custom property
 * inheritance. **Control** checked fill uses an explicit `:is(:checked, …)` selector
 * (covers native + Ark/Zag attributes) with `colorPalette.light`; **thumb** uses
 * `colorPalette.base`.
 *
 * Palette note: **`default`** maps to **`neutral`**. Omitting `palette` on `SwitchDS` uses
 * `defaultVariants` → **`primary`**.
 */
import { sva } from '@styled-system/css';

import type { RecipeProps } from '../../types/recipes.types';

export const switchRecipe = sva({
  className: 'switch',

  slots: ['root', 'label', 'control', 'thumb', 'description', 'errorText'],

  base: {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
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
      bg: 'bg.subtle',
      transitionProperty: 'background-color, box-shadow',
      transitionDuration: '0.15s',
      transitionTimingFunction: 'ease',
      _checked: {
        bg: 'colorPalette.xlight',
      },
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
      bg: 'colorPalette.light',
      boxShadow: 'sm',
      transitionProperty: 'transform',
      transitionDuration: '0.15s',
      transitionTimingFunction: 'ease',
      _checked: {
        bg: 'colorPalette.base',
      },
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
      default: {
        root: { colorPalette: 'neutral' },
        control: { colorPalette: 'neutral' },
        thumb: { colorPalette: 'neutral' },
      },
      primary: {
        root: { colorPalette: 'primary' },
        control: { colorPalette: 'primary' },
        thumb: { colorPalette: 'primary' },
      },
      secondary: {
        root: { colorPalette: 'secondary' },
        control: { colorPalette: 'secondary' },
        thumb: { colorPalette: 'secondary' },
      },
      success: {
        root: { colorPalette: 'success' },
        control: { colorPalette: 'success' },
        thumb: { colorPalette: 'success' },
      },
      warning: {
        root: { colorPalette: 'warning' },
        control: { colorPalette: 'warning' },
        thumb: { colorPalette: 'warning' },
      },
      danger: {
        root: { colorPalette: 'danger' },
        control: { colorPalette: 'danger' },
        thumb: { colorPalette: 'danger' },
      },
      info: {
        root: { colorPalette: 'info' },
        control: { colorPalette: 'info' },
        thumb: { colorPalette: 'info' },
      },
      grey: {
        root: { colorPalette: 'grey' },
        control: { colorPalette: 'grey' },
        thumb: { colorPalette: 'grey' },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    palette: 'primary',
  },
});

export type SwitchVariants = RecipeProps<typeof switchRecipe>;
