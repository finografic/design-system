/**
 * InputNumber Recipe
 *
 * Port of Ark UI NumberInput example styles → Panda `sva` + semantic tokens.
 *
 * Slots:    root · label · control · input · triggerGroup · incrementTrigger · decrementTrigger · prefix · suffix · errorText
 * Variants: size (sm | md | lg)
 *
 * Stepper architecture: `triggerGroup` is absolutely positioned on the right edge of the
 * control. It stacks `incrementTrigger` (top) and `decrementTrigger` (bottom) as a flex
 * column. The `input` gets `paddingInlineEnd` sized to match the triggerGroup width so
 * typed text never disappears under the buttons.
 */
import { sva } from '@styled-system/css';

import type { RecipeProps } from '../../types/recipes.types';

export const inputNumberRecipe = sva({
  className: 'input-number',

  slots: [
    'root',
    'label',
    'control',
    'input',
    'triggerGroup',
    'incrementTrigger',
    'decrementTrigger',
    'prefix',
    'suffix',
    'errorText',
  ],

  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5',
      width: '100%',
      _disabled: { opacity: 0.5, filter: 'grayscale(100%)' },
    },

    label: {
      fontWeight: 'semibold',
      color: 'fg.muted',
      userSelect: 'none',
    },

    control: {
      position: 'relative',
      isolation: 'isolate',
      display: 'flex',
      alignItems: 'stretch',
      width: '100%',
      borderWidth: 'default',
      borderStyle: 'solid',
      borderColor: 'border',
      borderRadius: 'md',
      bg: 'bg',
      overflow: 'hidden',
      transitionProperty: 'border-color, box-shadow',
      transitionDuration: 'normal',
      _focusWithin: {
        borderColor: 'accent.solid',
        boxShadow: '0 0 0 1px var(--colors-accent-focus-ring)',
      },
      _invalid: {
        borderColor: 'border.error',
        _focusWithin: { boxShadow: '0 0 0 1px var(--colors-fg-error)' },
      },
      _disabled: { cursor: 'not-allowed' },
    },

    input: {
      flex: '1',
      minWidth: '0',
      border: 'none',
      bg: 'transparent',
      color: 'fg',
      fontFamily: 'inherit',
      fontWeight: 'medium',
      fontVariantNumeric: 'tabular-nums',
      outline: 'none',
      _placeholder: { color: 'fg.subtle' },
      _disabled: { cursor: 'not-allowed' },
      _focusVisible: { zIndex: 1 },
    },

    // Absolute column on the right — stacks increment (top) + decrement (bottom).
    // `overflow: hidden` clips the inner border-radius so the control's own border-radius shows.
    triggerGroup: {
      position: 'absolute',
      top: '1px',
      bottom: '1px',
      right: '1px',
      display: 'flex',
      flexDirection: 'column',
      borderInlineStartWidth: 'light',
      borderInlineStartStyle: 'solid',
      borderInlineStartColor: 'border',
      overflow: 'hidden',
      zIndex: 1,
    },

    incrementTrigger: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      borderBottomWidth: 'light',
      borderBottomStyle: 'solid',
      borderBottomColor: 'border',
      color: 'fg.muted',
      cursor: 'pointer',
      userSelect: 'none',
      _hover: { bg: 'bg.hover', color: 'fg' },
      _active: { bg: 'bg.muted' },
      _disabled: { opacity: 0.55, cursor: 'not-allowed', pointerEvents: 'none' },
      _focusVisible: {
        outline: '2px solid',
        outlineColor: 'accent.focusRing',
        outlineOffset: '-2px',
        zIndex: 1,
      },
    },

    decrementTrigger: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      color: 'fg.muted',
      cursor: 'pointer',
      userSelect: 'none',
      _hover: { bg: 'bg.hover', color: 'fg' },
      _active: { bg: 'bg.muted' },
      _disabled: { opacity: 0.55, cursor: 'not-allowed', pointerEvents: 'none' },
      _focusVisible: {
        outline: '2px solid',
        outlineColor: 'accent.focusRing',
        outlineOffset: '-2px',
        zIndex: 1,
      },
    },

    prefix: {
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0,
      color: 'fg.muted',
      borderInlineEndWidth: 'light',
      borderInlineEndStyle: 'solid',
      borderInlineEndColor: 'border',
      bg: 'bg.muted',
      userSelect: 'none',
    },

    suffix: {
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0,
      color: 'fg.muted',
      borderInlineStartWidth: 'light',
      borderInlineStartStyle: 'solid',
      borderInlineStartColor: 'border',
      bg: 'bg.muted',
      userSelect: 'none',
    },

    errorText: {
      color: 'fg.error',
      fontWeight: 'semibold',
      lineHeight: '1.25rem',
    },
  },

  variants: {
    size: {
      sm: {
        label: { fontSize: 'xs' },
        control: { height: '9' },
        // paddingInlineEnd leaves room for the triggerGroup (w_7 = 1.75rem)
        input: { fontSize: 'sm', paddingInlineStart: '2.5', paddingInlineEnd: '8' },
        triggerGroup: { width: '7' },
        incrementTrigger: { fontSize: 'xs' },
        decrementTrigger: { fontSize: 'xs' },
        prefix: { paddingInline: '2', fontSize: 'xs' },
        suffix: { paddingInline: '2', fontSize: 'xs' },
        errorText: { fontSize: 'xs' },
      },
      md: {
        label: { fontSize: 'sm' },
        control: { height: '10' },
        // paddingInlineEnd leaves room for the triggerGroup (w_8 = 2rem)
        input: { fontSize: 'sm', paddingInlineStart: '3', paddingInlineEnd: '9' },
        triggerGroup: { width: '8' },
        incrementTrigger: { fontSize: 'sm' },
        decrementTrigger: { fontSize: 'sm' },
        prefix: { paddingInline: '2.5', fontSize: 'sm' },
        suffix: { paddingInline: '2.5', fontSize: 'sm' },
        errorText: { fontSize: 'sm' },
      },
      lg: {
        label: { fontSize: 'md' },
        control: { height: '12' },
        // paddingInlineEnd leaves room for the triggerGroup (w_10 = 2.5rem)
        input: { fontSize: 'md', paddingInlineStart: '4', paddingInlineEnd: '11' },
        triggerGroup: { width: '10' },
        incrementTrigger: { fontSize: 'md' },
        decrementTrigger: { fontSize: 'md' },
        prefix: { paddingInline: '3', fontSize: 'md' },
        suffix: { paddingInline: '3', fontSize: 'md' },
        errorText: { fontSize: 'sm' },
      },
    },
  },

  defaultVariants: { size: 'md' },
});

export type InputNumberVariants = RecipeProps<typeof inputNumberRecipe>;
