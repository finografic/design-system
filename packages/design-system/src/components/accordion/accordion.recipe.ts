/**
 * Accordion Slot Recipe
 *
 * Port of Ark UI Accordion example styles → Panda `sva` + semantic tokens.
 *
 * Slots:    root · item · itemTrigger · itemContent · itemIndicator · itemBody
 * Variants: size (sm | md | lg)
 */
import { sva } from '@styled-system/css';

import type { RecipeProps } from '../../types/recipes.types';

export const accordionRecipe = sva({
  className: 'accordion',

  slots: ['root', 'item', 'itemTrigger', 'itemContent', 'itemIndicator', 'itemBody'],

  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: 'full',
      color: 'fg',
    },

    item: {
      borderBottomWidth: 'default',
      borderBottomStyle: 'solid',
      borderBottomColor: 'border',
      _last: {
        borderBottomWidth: '0',
      },
    },

    itemTrigger: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 'full',
      gap: '3',
      fontFamily: 'inherit',
      fontWeight: 'medium',
      color: 'fg',
      cursor: 'pointer',
      bg: 'transparent',
      border: 'none',
      textAlign: 'left',
      userSelect: 'none',
      transitionProperty: 'color',
      transitionDuration: 'fast',
      _hover: { color: 'accent.fg' },
      _focusVisible: {
        outline: '2px solid',
        outlineColor: 'accent.focusRing',
        outlineOffset: '2px',
        borderRadius: 'sm',
      },
      _disabled: {
        opacity: 0.5,
        cursor: 'not-allowed',
        pointerEvents: 'none',
      },
    },

    itemContent: {
      overflow: 'hidden',
      _open: { animation: 'expand-height 150ms ease-out' },
      _closed: { animation: 'collapse-height 100ms ease-in' },
    },

    itemIndicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      color: 'fg.muted',
      transitionProperty: 'transform',
      transitionDuration: 'normal',
      _open: { transform: 'rotate(180deg)' },
      '& svg': { w: '4', h: '4' },
    },

    itemBody: {
      color: 'fg.muted',
      paddingBottom: '4',
    },
  },

  variants: {
    size: {
      sm: {
        itemTrigger: {
          fontSize: 'sm',
          py: '2.5',
          px: '0',
        },
        itemBody: {
          fontSize: 'sm',
        },
      },
      md: {
        itemTrigger: {
          fontSize: 'md',
          py: '3',
          px: '0',
        },
        itemBody: {
          fontSize: 'sm',
        },
      },
      lg: {
        itemTrigger: {
          fontSize: 'lg',
          py: '4',
          px: '0',
        },
        itemBody: {
          fontSize: 'md',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

/** Props accepted by `accordionRecipe`. */
export type AccordionRecipeProps = RecipeProps<typeof accordionRecipe>;

/** Trigger and body density. */
export type AccordionSize = 'sm' | 'md' | 'lg';
