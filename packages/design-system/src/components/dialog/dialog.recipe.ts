/**
 * Dialog Slot Recipe
 *
 * Slots:    root | backdrop | positioner | content | header | title | description | body | footer | closeTrigger
 * Variants: size (xs | sm | md | lg | xl | cover | full)
 */
import { sva } from '@styled-system/css';

import type { RecipeProps } from '../../types/recipes.types';

export const dialogRecipe = sva({
  className: 'dialog',
  slots: [
    'root',
    'backdrop',
    'positioner',
    'content',
    'header',
    'title',
    'description',
    'body',
    'footer',
    'closeTrigger',
  ],

  base: {
    backdrop: {
      position: 'fixed',
      inset: '0',
      bg: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(2px)',
      zIndex: 'overlay',
      _open: { animation: 'fade-in 150ms ease' },
      _closed: { animation: 'fade-out 150ms ease' },
    },

    positioner: {
      position: 'fixed',
      inset: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4',
      zIndex: 'modal',
    },

    content: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      bg: 'bg.panel',
      borderRadius: 'lg',
      boxShadow: 'lg',
      width: 'full',
      maxH: '90vh',
      overflow: 'hidden',
      outline: 'none',
      _open: { animation: 'scale-in 150ms ease' },
      _closed: { animation: 'scale-out 150ms ease' },
    },

    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: '4',
      paddingInline: '6',
      paddingBlock: '4',
      flexShrink: 0,
      width: '100%',
      minH: '8',
    },

    title: {
      flex: '1',
      minWidth: '0',
      fontSize: 'xl',
      fontWeight: 'semibold',
      color: 'fg',
      lineHeight: 'tight',
    },

    description: {
      fontSize: 'sm',
      color: 'fg.muted',
      lineHeight: 'normal',
    },

    body: {
      flex: '1',
      overflowY: 'auto',
      padding: '6',
    },

    footer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: '3',
      paddingInline: '6',
      paddingBlock: '4',
      flexShrink: 0,
    },

    closeTrigger: {
      flexShrink: '0',
      marginLeft: 'auto',
      cursor: 'pointer',
      color: 'fg.muted',
      borderRadius: 'sm',
      _hover: { color: 'fg', bg: 'bg.subtle' },
      _focusVisible: {
        outline: '2px solid',
        outlineColor: 'accent.focusRing',
        outlineOffset: '2px',
      },
    },
  },

  variants: {
    size: {
      xs: { content: { maxW: '20rem' } },
      sm: { content: { maxW: '24rem' } },
      md: { content: { maxW: '32rem' } },
      lg: { content: { maxW: '48rem' } },
      xl: { content: { maxW: '64rem' } },
      cover: {
        positioner: { padding: '0' },
        content: { maxW: '95vw', maxH: '95vh', h: '95vh' },
      },
      full: {
        positioner: { padding: '0' },
        content: { maxW: 'full', maxH: 'full', h: 'full', borderRadius: 'none' },
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

export type DialogVariants = RecipeProps<typeof dialogRecipe>;
