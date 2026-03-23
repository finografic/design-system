/**
 * Spinner Recipe
 *
 * Base: continuous spin animation via the `spin` Panda keyframe.
 */
import { cva } from '@styled-system/css';

import type { RecipeProps } from '../../types/recipes.types';

export const spinnerRecipe = cva({
  base: {
    animation: 'spin 1s linear infinite',
    flexShrink: 0,
  },
});

export type SpinnerVariants = RecipeProps<typeof spinnerRecipe>;
