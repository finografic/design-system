import { RecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
//#region src/components/text/text.recipe.d.ts
declare const textRecipe: RecipeRuntimeFn<{
  variant: {
    h1: {
      fontSize: "3xl";
      fontWeight: "bold";
      lineHeight: "tight";
    };
    h2: {
      fontSize: "2xl";
      fontWeight: "bold";
      lineHeight: "tight";
    };
    h3: {
      fontSize: "xl";
      fontWeight: "semibold";
      lineHeight: "snug";
    };
    h4: {
      fontSize: "lg";
      fontWeight: "semibold";
      lineHeight: "snug";
    };
    h5: {
      fontSize: "md";
      fontWeight: "semibold";
      lineHeight: "snug";
    };
    h6: {
      fontSize: "sm";
      fontWeight: "semibold";
      lineHeight: "snug";
    };
    'body-lg': {
      fontSize: "lg";
      fontWeight: "normal";
      lineHeight: "normal";
    };
    body: {
      fontSize: "md";
      fontWeight: "normal";
      lineHeight: "normal";
    };
    'body-sm': {
      fontSize: "sm";
      fontWeight: "normal";
      lineHeight: "normal";
    };
    caption: {
      fontSize: "xs";
      fontWeight: "normal";
      lineHeight: "normal";
    };
    overline: {
      fontSize: "xs";
      fontWeight: "semibold";
      lineHeight: "normal";
      letterSpacing: "0.08em";
      textTransform: "uppercase";
    };
  };
  color: {
    default: {
      color: "fg";
    };
    muted: {
      color: "fg.muted";
    };
    subtle: {
      color: "fg.subtle";
    };
    inverted: {
      color: "fg.inverted";
    };
    error: {
      color: "fg.error";
    };
    success: {
      color: "fg.success";
    };
    warning: {
      color: "fg.warning";
    };
    info: {
      color: "fg.info";
    };
  };
  truncate: {
    true: {
      overflow: "hidden";
      textOverflow: "ellipsis";
      whiteSpace: "nowrap";
    };
  };
}>;
//#endregion
export { textRecipe };
//# sourceMappingURL=text.recipe.d.ts.map