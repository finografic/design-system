import { RecipeRule } from "./static-css.js";
import { DistributiveOmit, Pretty, SystemStyleObject } from "./system-types.js";
//#region styled-system/types/recipe.d.ts
type StringToBoolean<T> = T extends 'true' | 'false' ? boolean : T;
type RecipeVariantRecord = Record<any, Record<any, SystemStyleObject>>;
type RecipeSelection<T extends RecipeVariantRecord> = keyof any extends keyof T ? {} : { [K in keyof T]?: StringToBoolean<keyof T[K]> | undefined; };
type RecipeVariantFn<T extends RecipeVariantRecord> = (props?: RecipeSelection<T>) => string;
type RecipeVariantMap<T extends RecipeVariantRecord> = { [K in keyof T]: Array<keyof T[K]>; };
/* -----------------------------------------------------------------------------
 * Recipe / Standard
 * -----------------------------------------------------------------------------*/
interface RecipeRuntimeFn<T extends RecipeVariantRecord> extends RecipeVariantFn<T> {
  __type: RecipeSelection<T>;
  variantKeys: (keyof T)[];
  variantMap: RecipeVariantMap<T>;
  raw: (props?: RecipeSelection<T>) => SystemStyleObject;
  config: RecipeConfig<T>;
  splitVariantProps<Props extends RecipeSelection<T>>(props: Props): [RecipeSelection<T>, Pretty<DistributiveOmit<Props, keyof T>>];
  getVariantProps: (props?: RecipeSelection<T>) => RecipeSelection<T>;
}
type OneOrMore<T> = T | Array<T>;
type RecipeCompoundSelection<T> = { [K in keyof T]?: OneOrMore<StringToBoolean<keyof T[K]>> | undefined; };
type RecipeCompoundVariant<T> = T & {
  css: SystemStyleObject;
};
interface RecipeDefinition<T extends RecipeVariantRecord = RecipeVariantRecord> {
  /**
   * The base styles of the recipe.
   */
  base?: SystemStyleObject;
  /**
   * Whether the recipe is deprecated.
   */
  deprecated?: boolean | string;
  /**
   * The multi-variant styles of the recipe.
   */
  variants?: T;
  /**
   * The default variants of the recipe.
   */
  defaultVariants?: RecipeSelection<T>;
  /**
   * The styles to apply when a combination of variants is selected.
   */
  compoundVariants?: Pretty<RecipeCompoundVariant<RecipeCompoundSelection<T>>>[];
}
interface RecipeConfigMeta {
  /**
   * The class name of the recipe.
   */
  className: string;
  /**
   * The description of the recipe. This will be used in the JSDoc comment.
   */
  description?: string;
  /**
   * The jsx elements to track for this recipe. Can be string or Regexp.
   *
   * @default capitalize(recipe.name)
   * @example ['Button', 'Link', /Button$/]
   */
  jsx?: Array<string | RegExp>;
  /**
   * Variants to pre-generate, will be include in the final `config.staticCss`
   */
  staticCss?: RecipeRule[];
}
interface RecipeConfig<T extends RecipeVariantRecord = RecipeVariantRecord> extends RecipeDefinition<T>, RecipeConfigMeta {}
/* -----------------------------------------------------------------------------
 * Recipe / Slot
 * -----------------------------------------------------------------------------*/
type SlotRecord<S extends string, T> = Partial<Record<S, T>>;
type SlotRecipeVariantRecord<S extends string> = Record<any, Record<any, SlotRecord<S, SystemStyleObject>>>;
type SlotRecipeVariantFn<S extends string, T extends RecipeVariantRecord> = (props?: RecipeSelection<T>) => SlotRecord<S, string>;
interface SlotRecipeRuntimeFn<S extends string, T extends SlotRecipeVariantRecord<S>> extends SlotRecipeVariantFn<S, T> {
  raw: (props?: RecipeSelection<T>) => Record<S, SystemStyleObject>;
  variantKeys: (keyof T)[];
  variantMap: RecipeVariantMap<T>;
  splitVariantProps<Props extends RecipeSelection<T>>(props: Props): [RecipeSelection<T>, Pretty<DistributiveOmit<Props, keyof T>>];
  getVariantProps: (props?: RecipeSelection<T>) => RecipeSelection<T>;
}
type SlotRecipeCompoundVariant<S extends string, T> = T & {
  css: SlotRecord<S, SystemStyleObject>;
};
interface SlotRecipeDefinition<S extends string = string, T extends SlotRecipeVariantRecord<S> = SlotRecipeVariantRecord<S>> {
  /**
   * An optional class name that can be used to target slots in the DOM.
   */
  className?: string;
  /**
   * Whether the recipe is deprecated.
   */
  deprecated?: boolean | string;
  /**
   * The parts/slots of the recipe.
   */
  slots: S[] | Readonly<S[]>;
  /**
   * The base styles of the recipe.
   */
  base?: SlotRecord<S, SystemStyleObject>;
  /**
   * The multi-variant styles of the recipe.
   */
  variants?: T;
  /**
   * The default variants of the recipe.
   */
  defaultVariants?: RecipeSelection<T>;
  /**
   * The styles to apply when a combination of variants is selected.
   */
  compoundVariants?: Pretty<SlotRecipeCompoundVariant<S, RecipeCompoundSelection<T>>>[];
}
type SlotRecipeConfig<S extends string = string, T extends SlotRecipeVariantRecord<S> = SlotRecipeVariantRecord<S>> = SlotRecipeDefinition<S, T> & RecipeConfigMeta;
//#endregion
export { RecipeCompoundSelection, RecipeCompoundVariant, RecipeConfig, RecipeDefinition, RecipeRuntimeFn, RecipeSelection, RecipeVariantFn, RecipeVariantRecord, SlotRecipeCompoundVariant, SlotRecipeConfig, SlotRecipeDefinition, SlotRecipeRuntimeFn, SlotRecipeVariantFn, SlotRecipeVariantRecord };
//# sourceMappingURL=recipe.d.ts.map