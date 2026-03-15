import { SlotRecipeRuntimeFn } from "../../../styled-system/types/recipe.js";
//#region src/forms/slider/slider.recipe.d.ts
declare const sliderRecipe: SlotRecipeRuntimeFn<"label" | "track" | "marker" | "root" | "valueText" | "control" | "range" | "thumb" | "markerGroup", {
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
      };
    };
  };
}>;
//#endregion
export { sliderRecipe };
//# sourceMappingURL=slider.recipe.d.ts.map