import { GlobalStyleObject } from "../../../../node_modules/.pnpm/@pandacss_types@1.12.0/node_modules/@pandacss/types/dist/system-types.js";
import { AnimationStyles, LayerStyles, TextStyles } from "../../../../node_modules/.pnpm/@pandacss_types@1.12.0/node_modules/@pandacss/types/dist/composition.js";
import { RecipeConfig, SlotRecipeConfig } from "../../../../node_modules/.pnpm/@pandacss_types@1.12.0/node_modules/@pandacss/types/dist/recipe.js";
import { PatternConfig } from "../../../../node_modules/.pnpm/@pandacss_types@1.12.0/node_modules/@pandacss/types/dist/pattern.js";
import { GlobalStyleObject as GlobalStyleObject$1, SystemStyleObject } from "./system-types.js";
import { RecipeConfig as RecipeConfig$1, RecipeVariantRecord, SlotRecipeConfig as SlotRecipeConfig$1, SlotRecipeVariantRecord } from "./recipe.js";
import { Parts } from "./parts.js";
import { PatternConfig as PatternConfig$1, PatternProperties } from "./pattern.js";
import { CompositionStyles } from "./composition.js";
//#region styled-system/types/global.d.ts
declare module '@pandacss/dev' {
  export function defineRecipe<V extends RecipeVariantRecord>(config: RecipeConfig$1<V>): RecipeConfig;
  export function defineSlotRecipe<S extends string, V extends SlotRecipeVariantRecord<S>>(config: SlotRecipeConfig$1<S, V>): SlotRecipeConfig;
  export function defineStyles(definition: SystemStyleObject): SystemStyleObject;
  export function defineGlobalStyles(definition: GlobalStyleObject$1): GlobalStyleObject;
  export function defineTextStyles(definition: CompositionStyles['textStyles']): TextStyles;
  export function defineAnimationStyles(definition: CompositionStyles['animationStyles']): AnimationStyles;
  export function defineLayerStyles(definition: CompositionStyles['layerStyles']): LayerStyles;
  export function definePattern<T extends PatternProperties>(config: PatternConfig$1<T>): PatternConfig;
  export function defineParts<T extends Parts>(parts: T): (config: Partial<Record<keyof T, SystemStyleObject>>) => Partial<Record<keyof T, SystemStyleObject>>;
}
//# sourceMappingURL=global.d.ts.map