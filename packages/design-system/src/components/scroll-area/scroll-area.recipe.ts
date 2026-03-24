/**
 * ScrollArea Slot Recipe
 *
 * Port of Ark UI ScrollArea example styles → Panda `sva` + semantic tokens.
 *
 * Slots:    root · viewport · content · scrollbar · thumb · corner
 */
import { sva } from '@styled-system/css';

import type { RecipeProps } from '../../types/recipes.types';

export const scrollAreaRecipe = sva({
  className: 'scroll-area',

  slots: ['root', 'viewport', 'content', 'scrollbar', 'thumb', 'corner'],

  base: {
    root: {
      position: 'relative',
      overflow: 'hidden',
    },

    viewport: {
      width: 'full',
      height: 'full',
      overscrollBehavior: 'contain',
    },

    content: {
      minWidth: '100%',
      display: 'table',
    },

    scrollbar: {
      'display': 'flex',
      'userSelect': 'none',
      'touchAction': 'none',
      'background': 'transparent',
      'transition': 'background 160ms ease-out',
      '&[data-orientation="vertical"]': {
        width: '2.5',
        flexDirection: 'column',
        padding: '0.5',
      },
      '&[data-orientation="horizontal"]': {
        flexDirection: 'row',
        height: '2.5',
        padding: '0.5',
      },
      '_hover': {
        background: 'bg.muted',
      },
    },

    thumb: {
      'position': 'relative',
      'flex': 1,
      'borderRadius': 'full',
      'bg': 'border.emphasized',
      'transitionProperty': 'background',
      'transitionDuration': 'fast',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: '44px',
        minHeight: '44px',
      },
      '_hover': {
        bg: 'fg.subtle',
      },
    },

    corner: {
      background: 'bg.subtle',
    },
  },
});

/** Props accepted by `scrollAreaRecipe`. */
export type ScrollAreaVariants = RecipeProps<typeof scrollAreaRecipe>;
