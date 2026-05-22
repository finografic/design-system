/**
 * Avatar slot recipe
 *
 * Port of Ark UI Avatar demo styles → Panda `sva` + semantic tokens.
 *
 * Slots: root · fallback · image
 * Variants: size (sm | md | lg) · variant (elevated | outlined)
 */
import { sva } from '@styled-system/css';
import type { RecipeProps } from '../../recipes/recipes.types';

export const avatarRecipe = sva({
  className: 'avatar',

  slots: ['root', 'fallback', 'image'],

  base: {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'medium',
      position: 'relative',
      verticalAlign: 'top',
      flexShrink: 0,
      userSelect: 'none',
      borderRadius: 'full',
      bg: 'bg.subtle',
      color: 'fg',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border.subtle',
      overflow: 'hidden',
    },

    image: {
      objectFit: 'cover',
      width: 'full',
      height: 'full',
      borderRadius: 'inherit',
    },

    fallback: {
      borderRadius: 'inherit',
      lineHeight: '1',
      textTransform: 'uppercase',
      fontWeight: 'medium',
      fontSize: 'inherit',
    },
  },

  variants: {
    size: {
      sm: {
        root: { width: '8', height: '8', fontSize: 'xs' },
      },
      md: {
        root: { width: '12', height: '12', fontSize: 'md' },
      },
      lg: {
        root: { width: '16', height: '16', fontSize: 'lg' },
      },
    },

    variant: {
      elevated: {
        root: { boxShadow: 'sm' },
      },
      outlined: {
        root: {},
      },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'outlined',
  },
});

export type AvatarRecipeProps = RecipeProps<typeof avatarRecipe>;
