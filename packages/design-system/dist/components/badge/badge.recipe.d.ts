import { RecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
//#region src/components/badge/badge.recipe.d.ts
declare const badgeRecipe: RecipeRuntimeFn<{
  size: {
    sm: {
      fontSize: "xs";
      paddingInline: "2";
      paddingBlock: "0.5";
      gap: "1";
    };
    md: {
      fontSize: "sm";
      paddingInline: "3";
      paddingBlock: "1";
      gap: "1.5";
    };
    lg: {
      fontSize: "md";
      paddingInline: "4";
      paddingBlock: "1.5";
      gap: "2";
    };
  };
  variant: {
    solid: {
      color: "fg.inverted";
    };
    soft: {};
    outline: {
      bg: "transparent";
      borderWidth: "light";
      borderStyle: "solid";
    };
  };
  palette: {
    primary: {};
    success: {};
    warning: {};
    danger: {};
    info: {};
    neutral: {};
  };
}>;
//#endregion
export { badgeRecipe };
//# sourceMappingURL=badge.recipe.d.ts.map