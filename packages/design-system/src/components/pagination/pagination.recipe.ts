/**
 * Pagination Slot Recipe
 *
 * Port of Ark UI Pagination example styles → Panda `sva` + semantic tokens.
 *
 * Slots: root · item · trigger · ellipsis Variants: size (sm | md | lg)
 *
 * - **item** — numbered page buttons; `_selected` applies accent colour.
 * - **trigger** — prev/next nav buttons.
 * - **ellipsis** — `…` spacer between page clusters.
 */
import { sva } from '@styled-system/css';
import type { RecipeProps } from '../../recipes/recipes.types';

export const paginationRecipe = sva({
  className: 'pagination',

  slots: ['root', 'item', 'trigger', 'ellipsis'],

  base: {
    root: {
      display: 'flex',
      alignItems: 'center',
      gap: '1',
      flexWrap: 'wrap',
    },

    item: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'inherit',
      fontWeight: 'medium',
      cursor: 'pointer',
      border: 'none',
      bg: 'transparent',
      color: 'fg',
      borderRadius: 'md',
      userSelect: 'none',
      transitionProperty: 'color, background-color',
      transitionDuration: 'fast',
      _hover: {
        bg: 'bg.subtle',
        color: 'fg',
      },
      _selected: {
        bg: 'accent.subtle',
        color: 'accent.fg',
        fontWeight: 'semibold',
      },
      _disabled: {
        opacity: 0.5,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
      _focusVisible: {
        outline: '2px solid',
        outlineColor: 'accent.focusRing',
        outlineOffset: '2px',
      },
    },

    trigger: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'inherit',
      fontWeight: 'medium',
      cursor: 'pointer',
      border: 'none',
      bg: 'transparent',
      color: 'fg.muted',
      borderRadius: 'md',
      userSelect: 'none',
      transitionProperty: 'color, background-color',
      transitionDuration: 'fast',
      _hover: {
        bg: 'bg.subtle',
        color: 'fg',
      },
      _disabled: {
        opacity: 0.5,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
      _focusVisible: {
        outline: '2px solid',
        outlineColor: 'accent.focusRing',
        outlineOffset: '2px',
      },
    },

    ellipsis: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'fg.muted',
      userSelect: 'none',
      pointerEvents: 'none',
    },
  },

  variants: {
    size: {
      sm: {
        item: { w: '7', h: '7', fontSize: 'xs' },
        trigger: { w: '7', h: '7' },
        ellipsis: { w: '7', h: '7', fontSize: 'xs' },
      },
      md: {
        item: { w: '8', h: '8', fontSize: 'sm' },
        trigger: { w: '8', h: '8' },
        ellipsis: { w: '8', h: '8', fontSize: 'sm' },
      },
      lg: {
        item: { w: '9', h: '9', fontSize: 'md' },
        trigger: { w: '9', h: '9' },
        ellipsis: { w: '9', h: '9', fontSize: 'md' },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

/** Props accepted by `paginationRecipe`. */
export type PaginationRecipeProps = RecipeProps<typeof paginationRecipe>;

/** Button density. */
export type PaginationSize = 'sm' | 'md' | 'lg';
