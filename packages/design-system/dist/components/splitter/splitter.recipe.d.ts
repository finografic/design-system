import { SlotRecipeRuntimeFn, SlotRecipeVariantRecord } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../recipes/recipes.types.js";

//#region src/components/splitter/splitter.recipe.d.ts
declare const splitterRecipe: SlotRecipeRuntimeFn<"root" | "panel" | "resizeTrigger" | "resizeTriggerIndicator", SlotRecipeVariantRecord<"root" | "panel" | "resizeTrigger" | "resizeTriggerIndicator">>;
type SplitterRecipeProps = RecipeProps<typeof splitterRecipe>;
//#endregion
export { SplitterRecipeProps, splitterRecipe };
//# sourceMappingURL=splitter.recipe.d.ts.map