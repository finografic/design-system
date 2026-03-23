/**
 * InputNumber Recipe
 *
 * Port of Ark UI NumberInput example styles → Panda `sva` + semantic tokens.
 *
 * Slots:    root · label · control · input · incrementTrigger · decrementTrigger · prefix · suffix · errorText
 * Variants: size (sm | md | lg)
 *
 * Stepper architecture: triggers sit inline inside the control (flex row) rather than
 * absolutely positioned, separated by an inline-start border from input/suffix.
 */
import { sva } from '@styled-system/css';

export const inputNumberRecipe = sva({
  className: 'input-number',

  slots: [
    'root',
    'label',
    'control',
    'input',
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

    incrementTrigger: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      borderInlineStartWidth: 'light',
      borderInlineStartStyle: 'solid',
      borderInlineStartColor: 'border',
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
      flexShrink: 0,
      borderInlineStartWidth: 'light',
      borderInlineStartStyle: 'solid',
      borderInlineStartColor: 'border',
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
        input: { fontSize: 'sm', paddingInline: '2.5' },
        incrementTrigger: { width: '7', fontSize: 'xs' },
        decrementTrigger: { width: '7', fontSize: 'xs' },
        prefix: { paddingInline: '2', fontSize: 'xs' },
        suffix: { paddingInline: '2', fontSize: 'xs' },
        errorText: { fontSize: 'xs' },
      },
      md: {
        label: { fontSize: 'sm' },
        control: { height: '10' },
        input: { fontSize: 'sm', paddingInline: '3' },
        incrementTrigger: { width: '8', fontSize: 'sm' },
        decrementTrigger: { width: '8', fontSize: 'sm' },
        prefix: { paddingInline: '2.5', fontSize: 'sm' },
        suffix: { paddingInline: '2.5', fontSize: 'sm' },
        errorText: { fontSize: 'sm' },
      },
      lg: {
        label: { fontSize: 'md' },
        control: { height: '12' },
        input: { fontSize: 'md', paddingInline: '4' },
        incrementTrigger: { width: '10', fontSize: 'md' },
        decrementTrigger: { width: '10', fontSize: 'md' },
        prefix: { paddingInline: '3', fontSize: 'md' },
        suffix: { paddingInline: '3', fontSize: 'md' },
        errorText: { fontSize: 'sm' },
      },
    },
  },

  defaultVariants: { size: 'md' },
});
