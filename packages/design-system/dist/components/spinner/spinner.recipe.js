import { cva } from "@styled-system/css";
//#region src/components/spinner/spinner.recipe.ts
/**
* Spinner Recipe
*
* Base: continuous spin animation via the `spin` Panda keyframe.
*/
const spinnerRecipe = cva({ base: {
	animation: "spin 1s linear infinite",
	flexShrink: 0
} });
//#endregion
export { spinnerRecipe };

//# sourceMappingURL=spinner.recipe.js.map