/**
 * Label Recipe
 *
 * Variants: size (sm | md | lg)
 */
import { cva } from '@styled-system/css';

import type { RecipeProps } from '../../types/recipes.types';

export const labelRecipe = cva({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '1',
    fontWeight: 'semibold',
    color: 'fg.muted',
    userSelect: 'none',
    _disabled: { opacity: 0.55, cursor: 'not-allowed' },
  },

  variants: {
    size: {
      sm: { fontSize: 'xs', minH: '7' },
      md: { fontSize: 'sm', minH: '8' },
      lg: { fontSize: 'md', minH: '9' },
    },
  },

  defaultVariants: { size: 'md' },
});

export type LabelVariants = RecipeProps<typeof labelRecipe>;
