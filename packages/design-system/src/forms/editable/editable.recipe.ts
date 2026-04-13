/**
 * Editable Slot Recipe
 *
 * Port of Ark UI Editable example styles → Panda `sva` + semantic tokens.
 *
 * Slots: root · label · area · input · preview · control · editTrigger · submitTrigger · cancelTrigger
 * Variants: size (sm | md | lg)
 */
import { sva } from '@styled-system/css';

import type { RecipeProps } from '../../types/recipes.types';

export const editableRecipe = sva({
  className: 'editable',

  slots: [
    'root',
    'label',
    'area',
    'input',
    'textarea',
    'preview',
    'control',
    'editTrigger',
    'submitTrigger',
    'cancelTrigger',
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

    area: {
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-start',
      width: 'full',
    },

    input: {
      flex: '1',
      borderWidth: 'default',
      borderStyle: 'solid',
      borderColor: 'border',
      borderRadius: 'md',
      bg: 'bg',
      color: 'fg',
      outline: 'none',
      fontFamily: 'inherit',
      transitionProperty: 'border-color, box-shadow',
      transitionDuration: 'fast',
      _focusVisible: {
        borderColor: 'accent.solid',
        outline: '2px solid',
        outlineColor: 'accent.focusRing',
        outlineOffset: '2px',
      },
      _disabled: { opacity: 0.55, cursor: 'not-allowed', bg: 'bg.subtle' },
      _readOnly: { bg: 'bg.subtle', cursor: 'default' },
    },

    textarea: {
      flex: '1',
      borderWidth: 'default',
      borderStyle: 'solid',
      borderColor: 'border',
      borderRadius: 'md',
      bg: 'bg',
      color: 'fg',
      outline: 'none',
      fontFamily: 'inherit',
      resize: 'vertical',
      lineHeight: '1.5',
      whiteSpace: 'pre-wrap',
      transitionProperty: 'border-color, box-shadow',
      transitionDuration: 'fast',
      _focusVisible: {
        borderColor: 'accent.solid',
        outline: '2px solid',
        outlineColor: 'accent.focusRing',
        outlineOffset: '2px',
      },
      _disabled: { opacity: 0.55, cursor: 'not-allowed', bg: 'bg.subtle' },
      _readOnly: { bg: 'bg.subtle', cursor: 'default' },
    },

    preview: {
      flex: '1',
      color: 'fg',
      fontFamily: 'inherit',
      borderRadius: 'md',
      borderWidth: 'default',
      borderStyle: 'solid',
      borderColor: 'transparent',
      cursor: 'text',
      _hover: {
        borderColor: 'border',
      },
      _empty: {
        color: 'fg.subtle',
      },
    },

    control: {
      display: 'flex',
      alignItems: 'center',
      gap: '1',
      marginLeft: '1',
    },

    editTrigger: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      color: 'fg.muted',
      cursor: 'pointer',
      bg: 'transparent',
      border: 'none',
      borderRadius: 'sm',
      _hover: { color: 'fg', bg: 'bg.subtle' },
      _focusVisible: {
        outline: '2px solid',
        outlineColor: 'accent.focusRing',
        outlineOffset: '2px',
      },
    },

    submitTrigger: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      color: 'accent.contrast',
      cursor: 'pointer',
      bg: 'accent.solid',
      border: 'none',
      borderRadius: 'sm',
      _hover: { bg: 'accent.emphasized' },
      _focusVisible: {
        outline: '2px solid',
        outlineColor: 'accent.focusRing',
        outlineOffset: '2px',
      },
    },

    cancelTrigger: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      color: 'fg.muted',
      cursor: 'pointer',
      bg: 'transparent',
      border: 'none',
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
      sm: {
        input: { h: '8', px: '2.5', fontSize: 'sm' },
        textarea: { minH: '16', px: '2.5', py: '1.5', fontSize: 'sm' },
        preview: { h: '8', px: '2.5', fontSize: 'sm' },
        editTrigger: { w: '7', h: '7' },
        submitTrigger: { w: '7', h: '7' },
        cancelTrigger: { w: '7', h: '7' },
      },
      md: {
        input: { h: '9', px: '3', fontSize: 'sm' },
        textarea: { minH: '20', px: '3', py: '2', fontSize: 'sm' },
        preview: { h: '9', px: '3', fontSize: 'sm' },
        editTrigger: { w: '8', h: '8' },
        submitTrigger: { w: '8', h: '8' },
        cancelTrigger: { w: '8', h: '8' },
      },
      lg: {
        input: { h: '11', px: '4', fontSize: 'md' },
        textarea: { minH: '24', px: '4', py: '2.5', fontSize: 'md' },
        preview: { h: '11', px: '4', fontSize: 'md' },
        editTrigger: { w: '9', h: '9' },
        submitTrigger: { w: '9', h: '9' },
        cancelTrigger: { w: '9', h: '9' },
      },
    },
  },

  defaultVariants: { size: 'md' },
});

/** Props accepted by `editableRecipe`. */
export type EditableRecipeProps = RecipeProps<typeof editableRecipe>;

/** Field density. */
export type EditableSize = 'sm' | 'md' | 'lg';
