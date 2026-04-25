/**
 * Button Recipe
 *
 * Variants: size (xs|sm|md|lg|xl) · variant (solid|subtle|outline|ghost|link) palette
 * (default|primary|secondary|success|warning|danger|info|grey) iconOnly (boolean)
 *
 * Architecture: `palette` sets `colorPalette` — all variant styles reference `colorPalette.*` tokens, so they
 * work across all color schemes with no compound variants (except warning+solid which needs dark fg).
 */
import { cva } from '@styled-system/css';
import type { RecipeProps } from '../../recipes/recipes.types';

export const buttonRecipe = cva({
  base: {
    'display': 'inline-flex',
    'appearance': 'none',
    'alignItems': 'center',
    'justifyContent': 'center',
    'userSelect': 'none',
    'position': 'relative',
    'whiteSpace': 'nowrap',
    'verticalAlign': 'middle',
    'borderWidth': 'default',
    'borderStyle': 'solid',
    'borderColor': 'transparent',
    'borderRadius': 'md',
    'cursor': 'pointer',
    'flexShrink': 0,
    'outline': 0,
    'fontFamily': 'inherit',
    'lineHeight': '1.2',
    'isolation': 'isolate',
    'fontWeight': 'semibold',
    'transitionProperty': 'background-color, border-color, color, box-shadow, transform',
    'transitionDuration': 'normal',
    'transitionTimingFunction': 'default',

    '_disabled': {
      opacity: 0.55,
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },

    '_loading': {
      cursor: 'wait',
      opacity: 0.7,
      pointerEvents: 'none',
    },

    '_focusVisible': {
      outline: '2px solid',
      outlineColor: 'accent.focusRing',
      outlineOffset: '2px',
    },

    '& svg': {
      flexShrink: 0,
    },

    '@media (pointer: coarse)': {
      touchAction: 'manipulation',
    },
  },

  variants: {
    size: {
      xs: {
        'h': '7',
        'minW': '7',
        'px': '2',
        'gap': '1',
        'fontSize': 'xs',
        '& svg': { w: '3', h: '3' },
        '@media (pointer: coarse)': { h: '11', minW: '11' },
      },
      sm: {
        'h': '8',
        'minW': '8',
        'px': '3',
        'gap': '1.5',
        'fontSize': 'sm',
        '& svg': { w: '4', h: '4' },
        '@media (pointer: coarse)': { h: '11', minW: '11' },
      },
      md: {
        'h': '10',
        'minW': '10',
        'px': '4',
        'gap': '2',
        'fontSize': 'sm',
        '& svg': { w: '4', h: '4' },
      },
      lg: {
        'h': '11',
        'minW': '11',
        'px': '5',
        'gap': '2',
        'fontSize': 'md',
        '& svg': { w: '5', h: '5' },
      },
      xl: {
        'h': '12',
        'minW': '12',
        'px': '6',
        'gap': '2.5',
        'fontSize': 'md',
        '& svg': { w: '5', h: '5' },
      },
    },

    variant: {
      solid: {
        bg: 'colorPalette',
        color: 'white',
        borderColor: 'colorPalette',
        _hover: {
          bg: 'colorPalette.darker',
          borderColor: 'colorPalette.darker',
        },
        _active: {
          bg: 'colorPalette.xdark',
          borderColor: 'colorPalette.xdark',
        },
      },

      subtle: {
        bg: 'colorPalette.xlight',
        color: 'colorPalette.darker',
        borderColor: 'colorPalette.lighter',
        _hover: {
          bg: 'colorPalette.lighter',
          color: 'colorPalette.xxdark',
          borderColor: 'colorPalette.dark',
        },
        _active: {
          bg: 'colorPalette.light',
          borderColor: 'colorPalette.darker',
        },
      },

      outline: {
        bg: 'transparent',
        color: 'colorPalette',
        borderColor: 'colorPalette',
        _hover: {
          bg: 'colorPalette.xlight',
          color: 'colorPalette.dark',
          borderColor: 'colorPalette.xlight',
        },
        _active: {
          bg: 'colorPalette.lighter',
        },
      },

      ghost: {
        bg: 'transparent',
        color: 'colorPalette',
        borderColor: 'transparent',
        _hover: {
          bg: 'colorPalette.xlight',
          color: 'colorPalette.dark',
        },
        _active: {
          bg: 'colorPalette.lighter',
        },
      },

      link: {
        bg: 'transparent',
        color: 'colorPalette',
        borderColor: 'transparent',
        paddingInline: '0',
        height: 'auto',
        minWidth: '0',
        textDecoration: 'underline',
        textUnderlineOffset: '2px',
        _hover: {
          color: 'colorPalette.dark',
          textDecorationThickness: '2px',
        },
        _active: {
          color: 'colorPalette.darker',
        },
      },
    },

    palette: {
      default: { colorPalette: 'neutral' },
      primary: { colorPalette: 'primary' },
      secondary: { colorPalette: 'secondary' },
      success: { colorPalette: 'success' },
      warning: { colorPalette: 'warning' },
      danger: { colorPalette: 'danger' },
      info: { colorPalette: 'info' },
      grey: { colorPalette: 'grey' },
    },

    iconOnly: {
      true: {
        paddingInline: '0',
      },
    },

    fullWidth: {
      true: { width: 'full' },
    },
  },

  compoundVariants: [
    {
      variant: 'solid',
      palette: 'warning',
      css: { color: 'fg' },
    },
  ],

  defaultVariants: {
    size: 'md',
    variant: 'outline',
    palette: 'default',
  },
});

export type ButtonVariants = RecipeProps<typeof buttonRecipe>;

/** Button variant — solid · subtle · outline · ghost · link */
export type ButtonVariant = 'solid' | 'subtle' | 'outline' | 'ghost' | 'link';

/** Button color scheme */
export type ButtonPalette =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'grey';
