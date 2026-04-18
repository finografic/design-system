import { SlotRecipeRuntimeFn, SlotRecipeVariantRecord } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../types/recipes.types.js";

//#region src/components/scroll-area/scroll-area.recipe.d.ts
declare const scrollAreaRecipe: SlotRecipeRuntimeFn<"content" | "scrollbar" | "root" | "thumb" | "viewport" | "corner", SlotRecipeVariantRecord<"content" | "scrollbar" | "root" | "thumb" | "viewport" | "corner">>;
type ScrollAreaRecipeProps = RecipeProps<typeof scrollAreaRecipe>;
//#endregion
export { ScrollAreaRecipeProps, scrollAreaRecipe };
//# sourceMappingURL=scroll-area.recipe.d.ts.map