//#region src/types/recipes.types.d.ts
type RecipeProps<T extends (...args: any) => any> = NonNullable<Parameters<T>[0]>;
//#endregion
export { RecipeProps };
//# sourceMappingURL=recipes.types.d.ts.map