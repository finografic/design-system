/**
 * SelectCombobox Recipe (Ark Combobox low-level primitive)
 *
 * Port of Ark UI Combobox example styles → Panda `sva` + semantic tokens.
 *
 * Slots:    root · label · control · input · indicators · trigger · clearTrigger ·
 *           positioner · content · itemGroup · itemGroupLabel · item · itemText · itemIndicator
 * Variants: size (sm | md | lg)
 */
import { sva } from '@styled-system/css';

import type { RecipeProps } from '../../types/recipes.types';

export const selectComboboxRecipe = sva({
  className: 'select-combobox',

  slots: [
    'root',
    'label',
    'control',
    'input',
    'indicators',
    'trigger',
    'clearTrigger',
    'positioner',
    'content',
    'itemGroup',
    'itemGroupLabel',
    'item',
    'itemText',
    'itemIndicator',
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

    control: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      width: 'full',
      borderWidth: 'default',
      borderStyle: 'solid',
      borderColor: 'border',
      borderRadius: 'md',
      bg: 'bg',
      transitionProperty: 'border-color, box-shadow',
      transitionDuration: 'fast',
      _focusWithin: {
        borderColor: 'accent.solid',
        outline: '2px solid',
        outlineColor: 'accent.focusRing',
        outlineOffset: '2px',
      },
      _disabled: { opacity: 0.55, cursor: 'not-allowed' },
    },

    input: {
      flex: '1',
      border: 'none',
      bg: 'transparent',
      color: 'fg',
      outline: 'none',
      _placeholder: { color: 'fg.subtle' },
      _disabled: { cursor: 'not-allowed' },
    },

    indicators: {
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0,
    },

    clearTrigger: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      color: 'fg.muted',
      cursor: 'pointer',
      borderRadius: 'sm',
      _hover: { color: 'fg' },
    },

    trigger: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      color: 'fg.muted',
      cursor: 'pointer',
      '& svg': { transition: 'transform 150ms ease' },
      _open: { '& svg': { transform: 'rotate(180deg)' } },
    },

    positioner: {
      zIndex: 'dropdown',
      width: 'var(--reference-width)',
    },

    content: {
      display: 'flex',
      flexDirection: 'column',
      bg: 'bg.panel',
      borderWidth: 'light',
      borderStyle: 'solid',
      borderColor: 'border',
      borderRadius: 'md',
      boxShadow: 'md',
      overflowY: 'auto',
      outline: 'none',
      maxH: 'min(var(--available-height, 300px), 300px)',
      transformOrigin: 'var(--transform-origin)',
      _open: { animation: 'scale-in 150ms ease' },
      _closed: { animation: 'scale-out 100ms ease' },
    },

    itemGroup: {
      display: 'flex',
      flexDirection: 'column',
      padding: '1',
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

    item: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '2',
      borderRadius: 'sm',
      cursor: 'pointer',
      color: 'fg',
      lineHeight: '1.25rem',
      userSelect: 'none',
      _highlighted: { bg: 'accent.subtle', color: 'accent.fg' },
      _selected: { fontWeight: 'semibold', color: 'accent.fg' },
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
  },

  variants: {
    size: {
      sm: {
        control: { h: '9' },
        input: { fontSize: 'sm', pl: '3', pr: '1' },
        clearTrigger: { w: '7', h: '7' },
        trigger: { w: '7', h: '7' },
        item: { px: '2', py: '1', fontSize: 'sm' },
        itemText: { fontSize: 'sm' },
        itemGroupLabel: { fontSize: 'xs' },
      },
      md: {
        control: { h: '10' },
        input: { fontSize: 'sm', pl: '3', pr: '1' },
        clearTrigger: { w: '8', h: '8' },
        trigger: { w: '8', h: '8' },
        item: { px: '3', py: '1.5', fontSize: 'sm' },
        itemText: { fontSize: 'sm' },
        itemGroupLabel: { fontSize: 'xs' },
      },
      lg: {
        control: { h: '12' },
        input: { fontSize: 'md', pl: '4', pr: '1' },
        clearTrigger: { w: '10', h: '10' },
        trigger: { w: '10', h: '10' },
        item: { px: '3', py: '2', fontSize: 'md' },
        itemText: { fontSize: 'md' },
        itemGroupLabel: { fontSize: 'sm' },
      },
    },
  },

  defaultVariants: { size: 'md' },
});

export type SelectComboboxRecipeProps = RecipeProps<typeof selectComboboxRecipe>;
