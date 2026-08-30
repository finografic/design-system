import { SlotRecipeRuntimeFn, SlotRecipeVariantRecord } from "../../packages/design-system/styled-system/types/recipe.js";
import "../../packages/design-system/styled-system/types/index.js";
import { RecipeProps } from "../../recipes/recipes.types.js";
//#region src/components/scroll-area/scroll-area.recipe.d.ts
declare const scrollAreaRecipe: SlotRecipeRuntimeFn<"content" | "corner" | "root" | "scrollbar" | "thumb" | "viewport", SlotRecipeVariantRecord<"content" | "corner" | "root" | "scrollbar" | "thumb" | "viewport">>;
type ScrollAreaRecipeProps = RecipeProps<typeof scrollAreaRecipe>;
//#endregion
export { ScrollAreaRecipeProps, scrollAreaRecipe };
//# sourceMappingURL=scroll-area.recipe.d.ts.map