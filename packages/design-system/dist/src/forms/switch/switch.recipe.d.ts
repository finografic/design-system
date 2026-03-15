import { RecipeRuntimeFn } from "../../../styled-system/types/recipe.js";
//#region src/forms/switch/switch.recipe.d.ts
declare const switchRecipe: RecipeRuntimeFn<{
  size: {
    sm: {
      width: "7";
      height: "4";
      '& .switch-thumb': {
        width: "3";
        height: "3";
        _checked: {
          transform: "translateX(0.75rem)";
        };
      };
    };
    md: {
      width: "9";
      height: "5";
      '& .switch-thumb': {
        width: "4";
        height: "4";
        _checked: {
          transform: "translateX(1rem)";
        };
      };
    };
    lg: {
      width: "12";
      height: "7";
      '& .switch-thumb': {
        width: "5";
        height: "5";
        _checked: {
          transform: "translateX(1.25rem)";
        };
      };
    };
  };
}>;
//#endregion
export { switchRecipe };
//# sourceMappingURL=switch.recipe.d.ts.map