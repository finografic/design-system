/**
 * Splitter slot recipe
 *
 * Port of Ark UI Splitter demo styles → Panda `sva` + semantic tokens.
 * Slots: root · panel · resizeTrigger · resizeTriggerIndicator
 *
 * Orientation comes from Ark (`data-orientation` on parts) — do not add a Panda variant for it.
 */
import { sva } from '@styled-system/css';
import type { RecipeProps } from '../../recipes/recipes.types';

export const splitterRecipe = sva({
  className: 'splitter',

  slots: ['root', 'panel', 'resizeTrigger', 'resizeTriggerIndicator'],

  base: {
    root: {
      '--splitter-thumb-size': '0.5rem',
      '--splitter-thumb-inset': 'calc(var(--splitter-thumb-size) * -0.5)',
      '--splitter-border-size': '1px',
      '--splitter-handle-size': '1.5rem',

      'display': 'flex',
      'width': 'full',
      'minHeight': '20rem',
      'borderWidth': '1px',
      'borderStyle': 'solid',
      'borderColor': 'border.subtle',
    },

    panel: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'medium',
      color: 'fg',
    },

    resizeTrigger: {
      'outline': '0',
      'display': 'grid',
      'placeItems': 'center',
      'position': 'relative',
      'background': 'transparent',
      'border': 'none',
      'padding': '0',
      'cursor': 'col-resize',

      '&[data-orientation="horizontal"]': {
        minWidth: 'var(--splitter-thumb-size)',
        marginInline: 'var(--splitter-thumb-inset)',
        cursor: 'col-resize',
      },

      '&[data-orientation="vertical"]': {
        minHeight: 'var(--splitter-thumb-size)',
        marginBlock: 'var(--splitter-thumb-inset)',
        cursor: 'row-resize',
      },

      '&:focus': {
        '&::before': {
          background: 'accent.emphasized',
        },
      },

      '&[data-dragging]': {
        '&::before': {
          background: 'accent.emphasized',
        },
      },

      '&[data-disabled]': {
        cursor: 'default',
      },

      '&::before': {
        content: '""',
        position: 'absolute',
        background: 'border.emphasized',
      },

      '&[data-orientation="horizontal"]::before': {
        insetInlineEnd: 'calc(var(--splitter-thumb-size) * 0.5)',
        insetBlock: '0',
        insetInlineStart: 'auto',
        width: 'var(--splitter-border-size)',
      },

      '&[data-orientation="vertical"]::before': {
        insetBlockEnd: 'calc(var(--splitter-thumb-size) * 0.5)',
        insetInline: '0',
        insetBlockStart: 'auto',
        height: 'var(--splitter-border-size)',
      },
    },

    resizeTriggerIndicator: {
      'position': 'relative',
      'borderRadius': 'full',
      'background': 'bg.panel',
      'boxShadow': 'sm',
      'borderWidth': '1px',
      'borderStyle': 'solid',
      'borderColor': 'border.subtle',
      'zIndex': '1',

      '&[data-orientation="horizontal"]': {
        width: 'full',
        height: 'var(--splitter-handle-size)',
      },

      '&[data-orientation="vertical"]': {
        width: 'var(--splitter-handle-size)',
        height: 'full',
      },

      '&[data-focus]:focus-visible': {
        outlineWidth: '2px',
        outlineStyle: 'solid',
        outlineColor: 'accent.focusRing',
        outlineOffset: '2px',
      },

      '&[data-disabled]': {
        visibility: 'hidden',
      },
    },
  },
});

export type SplitterRecipeProps = RecipeProps<typeof splitterRecipe>;
