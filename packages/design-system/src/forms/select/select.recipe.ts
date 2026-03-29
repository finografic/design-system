/**
 * Select Slot Recipe
 *
 * Port of Ark UI Select example styles → Panda `sva` + semantic tokens.
 *
 * Slots:    root · label · control · trigger · valueText · indicator ·
 *           positioner · content · list · item · itemText · itemIndicator ·
 *           itemGroup · itemGroupLabel · clearTrigger
 * Variants: size (sm | md | lg)
 *
 * Multi-select: pass `multiple` to `Select.Root` — Ark manages selection state;
 * `_checked` / `_selected` on `item` both style selected rows.
 */
import { sva } from '@styled-system/css';

import type { RecipeProps } from '../../types/recipes.types';

export const selectRecipe = sva({
  className: 'select',

  slots: [
    'root',
    'label',
    'control',
    'trigger',
    'valueText',
    'indicator',
    'positioner',
    'content',
    'list',
    'item',
    'itemText',
    'itemIndicator',
    'itemGroup',
    'itemGroupLabel',
    'clearTrigger',
  ],

  base: {
    root: { display: 'flex', flexDirection: 'column', gap: '1.5', width: 'full' },

    label: {
      fontSize: 'sm',
      lineHeight: '1.25rem',
      fontWeight: 'semibold',
      color: 'fg.muted',
      userSelect: 'none',
    },

    control: {
      display: 'flex',
      alignItems: 'center',
      gap: '1',
      width: 'full',
      position: 'relative',
    },

    trigger: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 'full',
      borderWidth: 'default',
      borderStyle: 'solid',
      borderColor: 'border',
      borderRadius: 'md',
      bg: 'bg',
      color: 'fg',
      cursor: 'pointer',
      gap: '2',
      fontFamily: 'inherit',
      lineHeight: '1.25rem',
      userSelect: 'none',
      outline: 'none',
      transitionProperty: 'border-color, box-shadow',
      transitionDuration: 'fast',
      _placeholderShown: { color: 'fg.subtle' },
      _hover: { borderColor: 'accent.emphasized' },
      _open: {
        borderColor: 'accent.solid',
        outline: '2px solid',
        outlineColor: 'accent.focusRing',
        outlineOffset: '2px',
      },
      _disabled: { opacity: 0.55, filter: 'grayscale(100%)', cursor: 'not-allowed' },
      _focusVisible: {
        outline: '2px solid',
        outlineColor: 'accent.focusRing',
        outlineOffset: '2px',
      },
      _invalid: { borderColor: 'border.error' },
      '& svg': { flexShrink: 0 },
    },

    valueText: {
      flex: '1',
      textAlign: 'start',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },

    indicator: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      color: 'fg.muted',
      transition: 'transform 150ms ease',
      _open: { transform: 'rotate(180deg)' },
    },

    positioner: { zIndex: 'dropdown', width: 'var(--reference-width)' },

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

    list: { display: 'flex', flexDirection: 'column', padding: '1' },

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
      display: 'flex',
      flexDirection: 'column',
      '& + &': { marginTop: '2' },
    },

    itemGroupLabel: {
      fontSize: 'xs',
      fontWeight: 'semibold',
      color: 'fg.subtle',
      textTransform: 'uppercase',
      letterSpacing: 'wider',
    },

    clearTrigger: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      border: '0',
      bg: 'transparent',
      borderRadius: 'sm',
      color: 'fg.muted',
      cursor: 'pointer',
      transitionProperty: 'color',
      transitionDuration: 'fast',
      _hover: { color: 'fg' },
      '& svg': { flexShrink: 0 },
    },
  },

  variants: {
    size: {
      sm: {
        label: { fontSize: 'xs' },
        trigger: { h: '9', px: '2.5', fontSize: 'sm', gap: '1.5' },
        item: { px: '2', py: '1', fontSize: 'sm' },
        itemGroupLabel: { px: '2', py: '1' },
        itemIndicator: { w: '3', h: '3' },
        clearTrigger: { '& svg': { w: '3', h: '3' } },
      },
      md: {
        label: { fontSize: 'sm' },
        trigger: { h: '10', px: '3', fontSize: 'sm', gap: '2' },
        item: { px: '3', py: '1.5', fontSize: 'sm' },
        itemGroupLabel: { px: '3', py: '1.5' },
        itemIndicator: { w: '4', h: '4' },
        clearTrigger: { '& svg': { w: '4', h: '4' } },
      },
      lg: {
        label: { fontSize: 'md' },
        trigger: { h: '11', px: '4', fontSize: 'md', gap: '2' },
        item: { px: '3', py: '2', fontSize: 'md' },
        itemGroupLabel: { px: '3', py: '2' },
        itemIndicator: { w: '4', h: '4' },
        clearTrigger: { '& svg': { w: '4', h: '4' } },
      },
    },
  },

  defaultVariants: { size: 'md' },
});

export type SelectVariants = RecipeProps<typeof selectRecipe>;
