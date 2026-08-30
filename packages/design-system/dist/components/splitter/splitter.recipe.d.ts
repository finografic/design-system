import { SlotRecipeRuntimeFn, SlotRecipeVariantRecord } from "../../packages/design-system/styled-system/types/recipe.js";
import "../../packages/design-system/styled-system/types/index.js";
import { RecipeProps } from "../../recipes/recipes.types.js";
//#region src/components/splitter/splitter.recipe.d.ts
declare const splitterRecipe: SlotRecipeRuntimeFn<"panel" | "resizeTrigger" | "resizeTriggerIndicator" | "root", SlotRecipeVariantRecord<"panel" | "resizeTrigger" | "resizeTriggerIndicator" | "root">>;
type SplitterRecipeProps = RecipeProps<typeof splitterRecipe>;
//#endregion
export { SplitterRecipeProps, splitterRecipe };
//# sourceMappingURL=splitter.recipe.d.ts.map