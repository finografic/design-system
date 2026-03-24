import { SlotRecipeRuntimeFn, SlotRecipeVariantRecord } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../types/recipes.types.js";

//#region src/components/scroll-area/scroll-area.recipe.d.ts
declare const scrollAreaRecipe: SlotRecipeRuntimeFn<"root" | "content" | "scrollbar" | "viewport" | "thumb" | "corner", SlotRecipeVariantRecord<"root" | "content" | "scrollbar" | "viewport" | "thumb" | "corner">>;
/** Props accepted by `scrollAreaRecipe`. */
type ScrollAreaVariants = RecipeProps<typeof scrollAreaRecipe>;
//#endregion
export { ScrollAreaVariants, scrollAreaRecipe };
//# sourceMappingURL=scroll-area.recipe.d.ts.map