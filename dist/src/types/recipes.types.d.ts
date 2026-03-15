import { RecipeVariantProps } from "../../styled-system/types/recipe.js";
//#region src/types/recipes.types.d.ts
type RecipeProps<T extends (...args: any) => any> = NonNullable<RecipeVariantProps<T>>;
//#endregion
export { RecipeProps };
//# sourceMappingURL=recipes.types.d.ts.map