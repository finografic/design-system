/**
 * TagsInput Slot Recipe
 *
 * Port of Ark UI TagsInput example styles → Panda `sva` + semantic tokens.
 *
 * Slots: root · label · control · item · itemPreview · itemText · itemInput · itemDeleteTrigger · input ·
 * clearTrigger · description · errorText Variants: size (sm | md | lg)
 *
 * **Usage pattern:**
 *
 * - `control` is the full input box — flex-wrap, border, focus-within ring.
 * - Each tag is an `item` containing an `itemPreview` (chip) + `itemInput` (edit mode).
 * - `input` at the end of `control` accepts new tag text.
 * - `clearTrigger` clears all tags; place it after `control` or inside it.
 */
import { sva } from '@styled-system/css';

import type { RecipeProps } from '../../recipes/recipes.types';

export const tagsInputRecipe = sva({
  className: 'tags-input',

  slots: [
    'root',
    'label',
    'control',
    'item',
    'itemPreview',
    'itemText',
    'itemInput',
    'itemDeleteTrigger',
    'input',
    'clearTrigger',
    'description',
    'errorText',
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
      lineHeight: '1.25rem',
      fontWeight: 'semibold',
      color: 'fg.muted',
      userSelect: 'none',
      _disabled: { opacity: 0.5, filter: 'grayscale(100%)' },
    },

    control: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '1',
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
      _disabled: { opacity: 0.5, filter: 'grayscale(100%)' },
      _invalid: {
        borderColor: 'border.error',
        _focusWithin: {
          borderColor: 'border.error',
          outlineColor: 'border.error',
        },
      },
    },

    item: {
      display: 'inline-flex',
      alignItems: 'center',
      outline: 'none',
      cursor: 'default',
    },

    itemPreview: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '1',
      fontSize: 'sm',
      lineHeight: '1.25rem',
      borderRadius: 'sm',
      bg: 'bg.subtle',
      color: 'fg',
      outline: 'none',
      transitionProperty: 'background-color, color',
      transitionDuration: 'fast',
      _highlighted: {
        bg: 'accent.subtle',
        color: 'accent.fg',
      },
    },

    itemText: {
      fontWeight: 'medium',
    },

    itemInput: {
      minW: '16',
      width: 'auto',
      fontSize: 'sm',
      lineHeight: '1.25rem',
      fontFamily: 'inherit',
      bg: 'bg.subtle',
      borderWidth: 'light',
      borderStyle: 'solid',
      borderColor: 'border',
      borderRadius: 'sm',
      color: 'fg',
      outline: 'none',
    },

    itemDeleteTrigger: {
      'display': 'flex',
      'alignItems': 'center',
      'justifyContent': 'center',
      'bg': 'transparent',
      'border': 'none',
      'borderRadius': 'xs',
      'color': 'inherit',
      'cursor': 'pointer',
      '& svg': { w: '3.5', h: '3.5' },
    },

    input: {
      flex: '1',
      minW: '16',
      bg: 'transparent',
      border: 'none',
      color: 'fg',
      fontFamily: 'inherit',
      outline: 'none',
      _placeholder: { color: 'fg.subtle' },
    },

    clearTrigger: {
      'display': 'flex',
      'alignItems': 'center',
      'justifyContent': 'center',
      'bg': 'transparent',
      'border': 'none',
      'borderRadius': 'sm',
      'color': 'fg.muted',
      'cursor': 'pointer',
      'transitionProperty': 'background-color, color',
      'transitionDuration': 'fast',
      '_hover': { bg: 'bg.subtle', color: 'fg' },
      '& svg': { w: '4', h: '4' },
    },

    description: {
      color: 'fg.muted',
      lineHeight: 'normal',
    },

    errorText: {
      display: 'flex',
      alignItems: 'center',
      gap: '1',
      color: 'fg.error',
      fontWeight: 'semibold',
      lineHeight: 'normal',
    },
  },

  variants: {
    size: {
      sm: {
        label: { fontSize: 'xs' },
        control: { minH: '9', px: '2', py: '0.5' },
        itemPreview: { px: '1.5', py: '0.5', fontSize: 'xs' },
        itemInput: { px: '1.5', py: '0.5', fontSize: 'xs' },
        itemDeleteTrigger: { 'p': '0.5', '& svg': { w: '3', h: '3' } },
        input: { h: '6', px: '1', fontSize: 'xs' },
        clearTrigger: { '& svg': { w: '3', h: '3' } },
        description: { fontSize: 'xs' },
        errorText: { fontSize: 'xs' },
      },
      md: {
        label: { fontSize: 'sm' },
        control: { minH: '10', px: '2', py: '1' },
        itemPreview: { px: '2', py: '0.5', fontSize: 'sm' },
        itemInput: { px: '2', py: '0.5', fontSize: 'sm' },
        itemDeleteTrigger: { 'p': '0.5', '& svg': { w: '3.5', h: '3.5' } },
        input: { h: '7', px: '1', fontSize: 'sm' },
        clearTrigger: { '& svg': { w: '4', h: '4' } },
        description: { fontSize: 'sm' },
        errorText: { fontSize: 'sm' },
      },
      lg: {
        label: { fontSize: 'md' },
        control: { minH: '11', px: '3', py: '1.5' },
        itemPreview: { px: '2', py: '1', fontSize: 'sm' },
        itemInput: { px: '2', py: '1', fontSize: 'sm' },
        itemDeleteTrigger: { 'p': '1', '& svg': { w: '3.5', h: '3.5' } },
        input: { h: '7', px: '1', fontSize: 'md' },
        clearTrigger: { '& svg': { w: '4', h: '4' } },
        description: { fontSize: 'md' },
        errorText: { fontSize: 'md' },
      },
    },
  },

  defaultVariants: { size: 'md' },
});

export type TagsInputVariants = RecipeProps<typeof tagsInputRecipe>;
