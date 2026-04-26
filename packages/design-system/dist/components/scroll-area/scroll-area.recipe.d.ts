import { SlotRecipeRuntimeFn, SlotRecipeVariantRecord } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../recipes/recipes.types.js";

//#region src/components/scroll-area/scroll-area.recipe.d.ts
declare const scrollAreaRecipe: SlotRecipeRuntimeFn<"root" | "content" | "scrollbar" | "viewport" | "thumb" | "corner", SlotRecipeVariantRecord<"root" | "content" | "scrollbar" | "viewport" | "thumb" | "corner">>;
type ScrollAreaRecipeProps = RecipeProps<typeof scrollAreaRecipe>;
//#endregion
export { ScrollAreaRecipeProps, scrollAreaRecipe };
//# sourceMappingURL=scroll-area.recipe.d.ts.map