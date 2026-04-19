import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../recipes/recipes.types.js";

//#region src/forms/slider/slider.recipe.d.ts
declare const sliderRecipe: SlotRecipeRuntimeFn<"marker" | "root" | "description" | "thumb" | "label" | "control" | "errorText" | "valueText" | "track" | "range" | "markerGroup", {
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
      description: {
        fontSize: "xs";
      };
      errorText: {
        fontSize: "xs";
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
      description: {
        fontSize: "sm";
      };
      errorText: {
        fontSize: "sm";
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
      description: {
        fontSize: "md";
      };
      errorText: {
        fontSize: "md";
      };
    };
  };
}>;
type SliderVariants = RecipeProps<typeof sliderRecipe>;
//#endregion
export { SliderVariants, sliderRecipe };
//# sourceMappingURL=slider.recipe.d.ts.map