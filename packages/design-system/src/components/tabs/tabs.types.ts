import type { RecipeProps } from '../../types/recipes.types';
import type { tabsRecipe } from './tabs.recipe';

/** Props accepted by `tabsRecipe` (spread on `Tabs.Root` / `Tabs.RootProvider`). */
export type TabsRecipeProps = RecipeProps<typeof tabsRecipe>;

/** Visual style — underline tabs vs pill + sliding indicator. */
export type TabsVariant = 'line' | 'enclosed';

/** Trigger and list density. */
export type TabsSize = 'sm' | 'md' | 'lg';
