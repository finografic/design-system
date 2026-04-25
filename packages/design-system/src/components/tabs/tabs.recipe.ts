/**
 * Tabs Slot Recipe
 *
 * Port of Ark UI Tabs example styles → Panda `sva` + semantic tokens (no demo CSS variables). Orientation
 * follows Ark’s `data-orientation` on each part — do **not** add `orientation` as a recipe variant, or
 * `createStyleContext` would strip it from `Tabs.Root` and break Zag.
 *
 * Slots: root · list · trigger · content · indicator Variants: variant (line | enclosed) · size (sm | md |
 * lg)
 *
 * - **line** — Underline selection: indicator uses Zag’s `--top` / `--height` / `--left` / `--width` so the bar
 *   sits on the **bottom edge of the active trigger** (Zag measures trigger `offset*`). The list uses
 *   **`box-shadow: inset`** for the grey rule (same thickness as the indicator), not `border-bottom`, so the
 *   active bar sits **on** the rule instead of floating above it. List omits bottom padding (`pb: 0`) so size
 *   presets must not use `p` shorthand on `list` or it overrides `pb`.
 * - **enclosed** — Pill list + sliding indicator behind labels (`z-index: -1`, `accent.subtle`).
 */
import { sva } from '@styled-system/css';
import type { RecipeProps } from '../../recipes/recipes.types';

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
      transitionProperty: 'width, height, left, top',
      transitionDuration: 'normal',
      transitionTimingFunction: 'ease-out',
    },
  },

  variants: {
    variant: {
      line: {
        list: {
          'gap': '0',
          'pb': '0',
          'boxShadow': 'inset 0 -3.4px 0 0 token(colors.border)',
          '&[data-orientation="horizontal"]': {
            // Avoid vertically centering triggers when list is taller than the tab row (padding).
            alignItems: 'flex-start',
          },
        },
        trigger: {
          position: 'relative',
          zIndex: 1,
          borderRadius: '0',
          _selected: {
            color: 'accent.solid',
          },
        },
        indicator: {
          'zIndex': 0,
          'bg': 'accent.solid',
          'borderRadius': '0',
          '&[data-orientation="horizontal"]': {
            // Zag sets `left: var(--left)` inline; `top` must track the measured trigger rect so the
            // bar stays on the trigger’s bottom edge (not the list’s — avoids vertical drift).
            left: 'var(--left, 0)',
            width: 'var(--width)',
            height: '3.4px',
            top: 'calc(var(--top) + var(--height) - 3.4px)',
            bottom: 'auto',
          },
          '&[data-orientation="vertical"]': {
            top: 'var(--top, 0)',
            left: '0',
            width: '3.4px',
            height: 'var(--height)',
            bottom: 'auto',
          },
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
          'zIndex': -1,
          'borderRadius': 'sm',
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
          pt: '0.5',
          pb: '0.5',
          px: '0.5',
        },
      },
      md: {
        trigger: {
          // Was ~`sm`-sized; `md` is the default — extra padding vs previous md: +0.25rem block,
          // +0.5rem inline; larger type for a true medium tab row.
          'px': '5',
          'pt': '0.625rem',
          'pb': '0.625rem',
          'fontSize': 'md',
          'gap': '2',
          '&[data-orientation="horizontal"]': {
            minHeight: '10',
            height: 'auto',
          },
        },
        content: {
          py: '4',
        },
        list: {
          pt: '1',
          pb: '1',
          px: '1',
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
          pt: '1',
          pb: '1',
          px: '1',
        },
      },
    },
  },

  compoundVariants: [
    // Size presets set `list.pb`; `p` shorthand used to wipe `pb: 0` on line. Splitting `pt`/`pb`/`px`
    // on size helps, but compoundVariants still guarantees line tabs keep a flush bottom inset rule.
    {
      variant: 'line',
      css: {
        list: {
          pb: '0',
        },
      },
    },
  ],

  defaultVariants: {
    variant: 'enclosed',
    size: 'md',
  },
});

/** Props accepted by `tabsRecipe` (spread on `Tabs.Root` / `Tabs.RootProvider`). */
export type TabsRecipeProps = RecipeProps<typeof tabsRecipe>;

/** Visual style — underline tabs vs pill + sliding indicator. */
export type TabsVariant = 'line' | 'enclosed';

/** Trigger and list density. */
export type TabsSize = 'sm' | 'md' | 'lg';
