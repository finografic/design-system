export type RecipeProps<T extends (...args: any) => any> = NonNullable<Parameters<T>[0]>;
