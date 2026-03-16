import type { RecipeProps } from '../../types/recipes.types';
import type { buttonRecipe } from './button.recipe';

export type ButtonVariants = RecipeProps<typeof buttonRecipe>;

/** Button variant — solid · subtle · outline · ghost · link */
export type ButtonVariant = 'solid' | 'subtle' | 'outline' | 'ghost' | 'link';

/** Button color scheme */
export type ButtonColorScheme =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'grey';
