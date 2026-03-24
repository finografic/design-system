/**
 * Listbox Slot Recipe
 *
 * Port of Ark UI Listbox example styles → Panda `sva` + semantic tokens.
 *
 * Slots:    root · label · content · item · itemText · itemIndicator · itemGroup · itemGroupLabel
 * Variants: size (sm | md | lg)
 *
 * Unlike Select/Combobox, Listbox.Content is the always-visible scrollable list container.
 * Items have `_highlighted` (keyboard focus) and `_checked` (selected) states.
 */
import { sva } from '@styled-system/css';

import type { RecipeProps } from '../../types/recipes.types';

export const listboxRecipe = sva({
  className: 'listbox',

  slots: [
    'root',
    'label',
    'content',
    'item',
    'itemText',
    'itemIndicator',
    'itemGroup',
    'itemGroupLabel',
  ],

  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
      width: 'full',
    },

    label: {
      fontSize: 'sm',
      fontWeight: 'medium',
      color: 'fg',
    },

    content: {
      display: 'flex',
      flexDirection: 'column',
      bg: 'bg',
      borderWidth: 'default',
      borderStyle: 'solid',
      borderColor: 'border',
      borderRadius: 'md',
      overflowY: 'auto',
      outline: 'none',
      padding: '1',
      maxH: '64',
    },

    item: {
      display: 'flex',
      alignItems: 'center',
      gap: '2',
      borderRadius: 'sm',
      cursor: 'pointer',
      color: 'fg',
      lineHeight: '1.25rem',
      userSelect: 'none',
      outline: 'none',
      _highlighted: { bg: 'accent.subtle', color: 'accent.fg' },
      _checked: { fontWeight: 'semibold', color: 'accent.fg' },
      _disabled: { opacity: 0.55, cursor: 'not-allowed', pointerEvents: 'none' },
    },

    itemText: {
      flex: '1',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },

    itemIndicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      color: 'accent.solid',
    },

    itemGroup: {
      'display': 'flex',
      'flexDirection': 'column',
      '& + &': { marginTop: '1' },
    },

    itemGroupLabel: {
      fontSize: 'xs',
      fontWeight: 'semibold',
      color: 'fg.subtle',
      textTransform: 'uppercase',
      letterSpacing: 'wider',
      px: '3',
      py: '1',
    },
  },

  variants: {
    size: {
      sm: {
        item: { px: '2', py: '1', fontSize: 'sm' },
        itemText: { fontSize: 'sm' },
        itemIndicator: { 'w': '4', 'h': '4', '& svg': { w: '3', h: '3' } },
      },
      md: {
        item: { px: '3', py: '1.5', fontSize: 'sm' },
        itemText: { fontSize: 'sm' },
        itemIndicator: { 'w': '5', 'h': '5', '& svg': { w: '3.5', h: '3.5' } },
      },
      lg: {
        item: { px: '3', py: '2', fontSize: 'md' },
        itemText: { fontSize: 'md' },
        itemIndicator: { 'w': '5', 'h': '5', '& svg': { w: '4', h: '4' } },
      },
    },
  },

  defaultVariants: { size: 'md' },
});

/** Props accepted by `listboxRecipe`. */
export type ListboxRecipeProps = RecipeProps<typeof listboxRecipe>;

/** List density. */
export type ListboxSize = 'sm' | 'md' | 'lg';
