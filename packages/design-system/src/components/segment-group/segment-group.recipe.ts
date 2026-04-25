/**
 * SegmentGroup Slot Recipe
 *
 * Port of Ark UI SegmentGroup example styles → Panda `sva` + semantic tokens.
 *
 * Slots: root · label · item · itemText · itemControl · indicator Variants: size (sm | md | lg)
 *
 * - **indicator** — sliding background pill; position driven by CSS vars `--width`, `--height`, `--top`,
 *   `--left` from Zag.
 * - **itemControl** — hidden native radio input (Ark uses internally).
 */
import { sva } from '@styled-system/css';
import type { RecipeProps } from '../../recipes/recipes.types';

export const segmentGroupRecipe = sva({
  className: 'segment-group',

  slots: ['root', 'label', 'item', 'itemText', 'itemControl', 'indicator'],

  base: {
    root: {
      display: 'inline-flex',
      position: 'relative',
      isolation: 'isolate',
      bg: 'bg.subtle',
      borderRadius: 'lg',
      p: '1',
      boxShadow: 'inset 0 0 0 1px token(colors.border)',
    },

    label: {
      display: 'block',
      fontSize: 'sm',
      fontWeight: 'medium',
      color: 'fg.muted',
      marginBottom: '1.5',
    },

    item: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 1,
      cursor: 'pointer',
      userSelect: 'none',
      color: 'fg.muted',
      borderRadius: 'md',
      fontWeight: 'medium',
      transitionProperty: 'color',
      transitionDuration: 'fast',
      _checked: {
        color: 'fg',
      },
      _hover: {
        color: 'fg',
      },
      _disabled: {
        opacity: 0.5,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
      _focusWithin: {
        outline: '2px solid',
        outlineColor: 'accent.focusRing',
        outlineOffset: '2px',
        borderRadius: 'md',
      },
    },

    itemText: {},

    itemControl: {
      display: 'none',
    },

    indicator: {
      position: 'absolute',
      top: 'var(--top, 0.25rem)',
      left: 'var(--left, 0.25rem)',
      width: 'var(--width)',
      height: 'var(--height)',
      zIndex: 0,
      bg: 'bg',
      borderRadius: 'md',
      boxShadow: 'sm',
      transitionProperty: 'width, height, left, top',
      transitionDuration: 'normal',
      transitionTimingFunction: 'ease-out',
    },
  },

  variants: {
    size: {
      sm: {
        item: {
          px: '2',
          py: '1',
          fontSize: 'xs',
          h: '6',
        },
      },
      md: {
        item: {
          px: '3',
          py: '1.5',
          fontSize: 'sm',
          h: '7',
        },
      },
      lg: {
        item: {
          px: '4',
          py: '2',
          fontSize: 'md',
          h: '8',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

/** Props accepted by `segmentGroupRecipe`. */
export type SegmentGroupRecipeProps = RecipeProps<typeof segmentGroupRecipe>;

/** Segment density. */
export type SegmentGroupSize = 'sm' | 'md' | 'lg';
