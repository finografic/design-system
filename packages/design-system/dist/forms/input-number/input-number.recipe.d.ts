import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../recipes/recipes.types.js";

//#region src/forms/input-number/input-number.recipe.d.ts
declare const inputNumberRecipe: SlotRecipeRuntimeFn<"root" | "control" | "label" | "errorText" | "input" | "triggerGroup" | "incrementTrigger" | "decrementTrigger" | "prefix" | "suffix", {
  size: {
    sm: {
      label: {
        fontSize: "xs";
      };
      control: {
        height: "9";
      };
      input: {
        fontSize: "sm";
        paddingInlineStart: "2.5";
        paddingInlineEnd: "8";
      };
      triggerGroup: {
        width: "7";
      };
      incrementTrigger: {
        fontSize: "xs";
      };
      decrementTrigger: {
        fontSize: "xs";
      };
      prefix: {
        paddingInline: "2";
        fontSize: "xs";
      };
      suffix: {
        paddingInline: "2";
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
      control: {
        height: "10";
      };
      input: {
        fontSize: "sm";
        paddingInlineStart: "3";
        paddingInlineEnd: "9";
      };
      triggerGroup: {
        width: "8";
      };
      incrementTrigger: {
        fontSize: "sm";
      };
      decrementTrigger: {
        fontSize: "sm";
      };
      prefix: {
        paddingInline: "2.5";
        fontSize: "sm";
      };
      suffix: {
        paddingInline: "2.5";
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
      control: {
        height: "12";
      };
      input: {
        fontSize: "md";
        paddingInlineStart: "4";
        paddingInlineEnd: "11";
      };
      triggerGroup: {
        width: "10";
      };
      incrementTrigger: {
        fontSize: "md";
      };
      decrementTrigger: {
        fontSize: "md";
      };
      prefix: {
        paddingInline: "3";
        fontSize: "md";
      };
      suffix: {
        paddingInline: "3";
        fontSize: "md";
      };
      errorText: {
        fontSize: "sm";
      };
    };
  };
  /**
   * Colorizes the prefix/suffix adornment slots. `default` = neutral muted (no colorPalette — base styles
   * apply). All other values set colorPalette on both slots so bg/color/border respond.
   */
  palette: {
    default: {};
    primary: {
      prefix: {
        colorPalette: "primary";
        bg: "colorPalette.xlight";
        color: "colorPalette.dark";
        borderInlineEndColor: "colorPalette.light";
      };
      suffix: {
        colorPalette: "primary";
        bg: "colorPalette.xlight";
        color: "colorPalette.dark";
        borderInlineStartColor: "colorPalette.light";
      };
    };
    success: {
      prefix: {
        colorPalette: "success";
        bg: "colorPalette.xlight";
        color: "colorPalette.dark";
        borderInlineEndColor: "colorPalette.light";
      };
      suffix: {
        colorPalette: "success";
        bg: "colorPalette.xlight";
        color: "colorPalette.dark";
        borderInlineStartColor: "colorPalette.light";
      };
    };
    danger: {
      prefix: {
        colorPalette: "danger";
        bg: "colorPalette.xlight";
        color: "colorPalette.dark";
        borderInlineEndColor: "colorPalette.light";
      };
      suffix: {
        colorPalette: "danger";
        bg: "colorPalette.xlight";
        color: "colorPalette.dark";
        borderInlineStartColor: "colorPalette.light";
      };
    };
    warning: {
      prefix: {
        colorPalette: "warning";
        bg: "colorPalette.xlight";
        color: "colorPalette.dark";
        borderInlineEndColor: "colorPalette.light";
      };
      suffix: {
        colorPalette: "warning";
        bg: "colorPalette.xlight";
        color: "colorPalette.dark";
        borderInlineStartColor: "colorPalette.light";
      };
    };
    info: {
      prefix: {
        colorPalette: "info";
        bg: "colorPalette.xlight";
        color: "colorPalette.dark";
        borderInlineEndColor: "colorPalette.light";
      };
      suffix: {
        colorPalette: "info";
        bg: "colorPalette.xlight";
        color: "colorPalette.dark";
        borderInlineStartColor: "colorPalette.light";
      };
    };
  };
}>;
type InputNumberVariants = RecipeProps<typeof inputNumberRecipe>;
//#endregion
export { InputNumberVariants, inputNumberRecipe };
//# sourceMappingURL=input-number.recipe.d.ts.map