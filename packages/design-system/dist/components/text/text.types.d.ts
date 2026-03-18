import { RecipeProps } from "../../types/recipes.types.js";
import { textRecipe } from "./text.recipe.js";

//#region src/components/text/text.types.d.ts
type TextVariants = RecipeProps<typeof textRecipe>;
type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'label' | 'figcaption';
//#endregion
export { TextElement, TextVariants };
//# sourceMappingURL=text.types.d.ts.map