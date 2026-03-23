import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../types/recipes.types.js";

//#region src/forms/slider/slider.recipe.d.ts
declare const sliderRecipe: SlotRecipeRuntimeFn<"label" | "track" | "marker" | "root" | "control" | "thumb" | "valueText" | "range" | "markerGroup", {
  size: {
    sm: {
      label: {
        fontSize: "xs";
      };
      valueText: {
        fontSize: "xs";
      };
      track: {
        height: "1";
      };
      range: {
        height: "100%";
      };
      thumb: {
        width: "4";
        height: "4";
        marginTop: "-1.5";
        '@media (max-width: 1024px) and (max-height: 600px) and (pointer: coarse)': {
          width: "6";
          height: "6";
        };
        '@media (max-width: 800px) and (max-height: 480px) and (pointer: coarse)': {
          width: "8";
          height: "8";
        };
      };
    };
    md: {
      label: {
        fontSize: "sm";
      };
      valueText: {
        fontSize: "sm";
      };
      track: {
        height: "1.5";
      };
      range: {
        height: "100%";
      };
      thumb: {
        width: "5";
        height: "5";
        marginTop: "-1.75";
        '@media (max-width: 1024px) and (max-height: 600px) and (pointer: coarse)': {
          width: "7";
          height: "7";
        };
        '@media (max-width: 800px) and (max-height: 480px) and (pointer: coarse)': {
          width: "9";
          height: "9";
        };
      };
    };
    lg: {
      label: {
        fontSize: "md";
      };
      valueText: {
        fontSize: "md";
      };
      track: {
        height: "2";
      };
      range: {
        height: "100%";
      };
      thumb: {
        width: "6";
        height: "6";
        marginTop: "-2";
        '@media (max-width: 1024px) and (max-height: 600px) and (pointer: coarse)': {
          width: "8";
          height: "8";
        };
        '@media (max-width: 800px) and (max-height: 480px) and (pointer: coarse)': {
          width: "10";
          height: "10";
        };
      };
    };
  };
}>;
type SliderVariants = RecipeProps<typeof sliderRecipe>;
//#endregion
export { SliderVariants, sliderRecipe };
//# sourceMappingURL=slider.recipe.d.ts.map