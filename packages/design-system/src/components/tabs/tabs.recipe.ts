/**
 * Tabs Slot Recipe
 *
 * Port of Ark UI Tabs example styles → Panda `sva` + semantic tokens (no demo CSS variables).
 * Orientation follows Ark’s `data-orientation` on each part — do **not** add `orientation` as a
 * recipe variant, or `createStyleContext` would strip it from `Tabs.Root` and break Zag.
 *
 * Slots:    root · list · trigger · content · indicator
 * Variants: variant (line | enclosed) · size (sm | md | lg)
 *
 * - **line** — Underline selection; indicator is a 2px accent bar (width/position from Zag vars).
 * - **enclosed** — Pill list + sliding indicator (`z-index: -1`, `accent.subtle`), like the Ark docs demo.
 */
import { sva } from '@styled-system/css';

import type { RecipeProps } from '../../types/recipes.types';

const focusRing = {
  outline: '2px solid',
  outlineColor: 'accent.focusRing',
  outlineOffset: '2px',
  borderRadius: 'sm',
} as const;

export const tabsRecipe = sva({
  className: 'tabs',

  slots: ['root', 'list', 'trigger', 'content', 'indicator'],

  base: {
    root: {
      'display': 'flex',
      'flexDirection': 'column',
      'width': 'full',
      'color': 'fg',
      '&[data-orientation="horizontal"]': {
        flexDirection: 'column',
      },
      '&[data-orientation="vertical"]': {
        flexDirection: 'row',
      },
    },

    list: {
      'display': 'inline-flex',
      'position': 'relative',
      'isolation': 'isolate',
      'alignItems': 'center',
      'gap': '1',
      '&[data-orientation="horizontal"]': {
        flexDirection: 'row',
      },
      '&[data-orientation="vertical"]': {
        flexDirection: 'column',
        alignItems: 'stretch',
      },
    },

    trigger: {
      'display': 'inline-flex',
      'alignItems': 'center',
      'justifyContent': 'center',
      'gap': '2',
      'px': '3',
      'fontFamily': 'inherit',
      'fontSize': 'sm',
      'fontWeight': 'medium',
      'lineHeight': 'normal',
      'color': 'fg.muted',
      'cursor': 'pointer',
      'whiteSpace': 'nowrap',
      'flexShrink': 0,
      'userSelect': 'none',
      'border': 'none',
      'bg': 'transparent',
      'borderRadius': 'sm',
      'transitionProperty': 'color, border-color, background-color, box-shadow',
      'transitionDuration': 'fast',
      '_selected': {
        color: 'accent.solid',
      },
      '_hover': {
        color: 'fg',
      },
      '_disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
        filter: 'grayscale(100%)',
        pointerEvents: 'none',
      },
      '_focusVisible': focusRing,
      '&:is(a)': {
        color: 'inherit',
      },
      '&[data-orientation="vertical"]': {
        justifyContent: 'flex-start',
        width: '100%',
        height: 'auto',
        py: '2',
      },
    },

    content: {
      'outline': 'none',
      'fontSize': 'sm',
      'lineHeight': 'normal',
      'color': 'fg',
      '_open': {
        animation: 'fade-in 150ms ease',
      },
      '_focusVisible': {
        outline: '2px solid',
        outlineColor: 'accent.focusRing',
        outlineOffset: '-2px',
        borderRadius: 'sm',
      },
      '&[data-orientation="vertical"]': {
        pl: '4',
        py: '0',
      },
    },

    indicator: {
      position: 'absolute',
      zIndex: -1,
      borderRadius: 'sm',
      transitionProperty: 'width, height, left, top',
      transitionDuration: 'normal',
      transitionTimingFunction: 'ease-out',
    },
  },

  variants: {
    variant: {
      line: {
        list: {
          borderBottomWidth: 'light',
          borderBottomStyle: 'solid',
          borderBottomColor: 'border',
          gap: '0',
        },
        trigger: {
          borderRadius: 'sm',
          marginBottom: '-1px',
          borderBottomWidth: '2px',
          borderBottomStyle: 'solid',
          borderBottomColor: 'transparent',
          _selected: {
            borderBottomColor: 'accent.solid',
            color: 'accent.solid',
          },
        },
        indicator: {
          bottom: '0',
          left: 'var(--left, 0)',
          width: 'var(--width)',
          height: '2px',
          bg: 'accent.solid',
        },
      },

      enclosed: {
        list: {
          gap: '1',
          bg: 'bg.subtle',
          borderRadius: 'md',
          borderWidth: 'light',
          borderStyle: 'solid',
          borderColor: 'border',
        },
        trigger: {
          _selected: {
            color: 'accent.fg',
            bg: 'transparent',
            boxShadow: 'none',
          },
        },
        indicator: {
          'bg': 'accent.subtle',
          '&[data-orientation="horizontal"]': {
            height: 'var(--height, 2rem)',
            width: 'var(--width)',
          },
          '&[data-orientation="vertical"]': {
            width: 'calc(100% - 0.5rem)',
            height: 'var(--height)',
          },
        },
      },
    },

    size: {
      sm: {
        trigger: {
          'px': '2.5',
          'py': '1',
          'fontSize': 'xs',
          'gap': '1.5',
          '&[data-orientation="horizontal"]': {
            height: '7',
          },
        },
        content: {
          py: '3',
        },
        list: {
          p: '0.5',
        },
      },
      md: {
        trigger: {
          'px': '3',
          'py': '1.5',
          'fontSize': 'sm',
          'gap': '2',
          '&[data-orientation="horizontal"]': {
            height: '8',
          },
        },
        content: {
          py: '4',
        },
        list: {
          p: '1',
        },
      },
      lg: {
        trigger: {
          'px': '4',
          'py': '2',
          'fontSize': 'md',
          'gap': '2',
          '&[data-orientation="horizontal"]': {
            height: '9',
          },
        },
        content: {
          py: '5',
        },
        list: {
          p: '1',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'line',
    size: 'md',
  },
});

/** Props accepted by `tabsRecipe` (spread on `Tabs.Root` / `Tabs.RootProvider`). */
export type TabsRecipeProps = RecipeProps<typeof tabsRecipe>;

/** Visual style — underline tabs vs pill + sliding indicator. */
export type TabsVariant = 'line' | 'enclosed';

/** Trigger and list density. */
export type TabsSize = 'sm' | 'md' | 'lg';
