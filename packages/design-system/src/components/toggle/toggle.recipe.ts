/**
 * Toggle Slot Recipe
 *
 * Port of Ark UI Toggle example styles → Panda `sva` + semantic tokens.
 *
 * Slots: root · indicator Variants: size (sm | md | lg)
 *
 * - **root** — single button; `data-state="on"` = pressed state, uses `accent.subtle` bg.
 * - **indicator** — optional icon indicator rendered inside the root button.
 */
import { sva } from '@styled-system/css';

import type { RecipeProps } from '../../recipes/recipes.types';

export const toggleRecipe = sva({
  className: 'toggle',

  slots: ['root', 'indicator'],

  base: {
    root: {
      'display': 'inline-flex',
      'alignItems': 'center',
      'justifyContent': 'center',
      'gap': '2',
      'fontFamily': 'inherit',
      'fontWeight': 'medium',
      'cursor': 'pointer',
      'border': 'none',
      'bg': 'bg.subtle',
      'color': 'fg.muted',
      'borderRadius': 'md',
      'userSelect': 'none',
      'transitionProperty': 'color, background-color',
      'transitionDuration': 'fast',
      '_hover': {
        bg: 'bg.muted',
        color: 'fg',
      },
      '[data-state="on"]&': {
        bg: 'accent.subtle',
        color: 'accent.fg',
      },
      '_disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
      '_focusVisible': {
        outline: '2px solid',
        outlineColor: 'accent.focusRing',
        outlineOffset: '2px',
      },
    },

    indicator: {
      'display': 'flex',
      'alignItems': 'center',
      'justifyContent': 'center',
      'flexShrink': 0,
      '& svg': { w: '4', h: '4' },
    },
  },

  variants: {
    size: {
      sm: {
        root: {
          h: '7',
          px: '2',
          fontSize: 'xs',
          gap: '1.5',
        },
      },
      md: {
        root: {
          h: '8',
          px: '3',
          fontSize: 'sm',
          gap: '2',
        },
      },
      lg: {
        root: {
          h: '9',
          px: '4',
          fontSize: 'md',
          gap: '2',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

/** Props accepted by `toggleRecipe`. */
export type ToggleRecipeProps = RecipeProps<typeof toggleRecipe>;

/** Button density. */
export type ToggleSize = 'sm' | 'md' | 'lg';
