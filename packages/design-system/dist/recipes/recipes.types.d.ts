//#region src/recipes/recipes.types.d.ts
/**
 * Extracts the props object accepted by a Panda CSS recipe function.
 *
 * @example
 *   ```ts
 *   import { buttonRecipe } from './button.recipe';
 *   import type { RecipeProps } from '@finografic/design-system';
 *
 *   type ButtonVariants = RecipeProps<typeof buttonRecipe>;
 *   // → { variant?: 'solid' | 'outline' | ...; size?: 'sm' | 'md' | ... }
 *   ```;
 */
type RecipeProps<T extends (...args: any) => any> = NonNullable<Parameters<T>[0]>;
//#endregion
export { RecipeProps };
//# sourceMappingURL=recipes.types.d.ts.map