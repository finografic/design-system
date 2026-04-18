import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../types/recipes.types.js";

//#region src/components/tabs/tabs.recipe.d.ts
declare const tabsRecipe: SlotRecipeRuntimeFn<"content" | "root" | "trigger" | "indicator" | "list", {
  variant: {
    line: {
      list: {
        gap: "0";
        pb: "0";
        boxShadow: "inset 0 -3.4px 0 0 token(colors.border)";
        '&[data-orientation="horizontal"]': {
          alignItems: "flex-start";
        };
      };
      trigger: {
        position: "relative";
        zIndex: number;
        borderRadius: "0";
        _selected: {
          color: "accent.solid";
        };
      };
      indicator: {
        zIndex: number;
        bg: "accent.solid";
        borderRadius: "0";
        '&[data-orientation="horizontal"]': {
          left: "var(--left, 0)";
          width: "var(--width)";
          height: "3.4px";
          top: "calc(var(--top) + var(--height) - 3.4px)";
          bottom: "auto";
        };
        '&[data-orientation="vertical"]': {
          top: "var(--top, 0)";
          left: "0";
          width: "3.4px";
          height: "var(--height)";
          bottom: "auto";
        };
      };
    };
    enclosed: {
      list: {
        gap: "1";
        bg: "bg.subtle";
        borderRadius: "md";
        borderWidth: "light";
        borderStyle: "solid";
        borderColor: "border";
      };
      trigger: {
        _selected: {
          color: "accent.fg";
          bg: "transparent";
          boxShadow: "none";
        };
      };
      indicator: {
        zIndex: number;
        borderRadius: "sm";
        bg: "accent.subtle";
        '&[data-orientation="horizontal"]': {
          height: "var(--height, 2rem)";
          width: "var(--width)";
        };
        '&[data-orientation="vertical"]': {
          width: "calc(100% - 0.5rem)";
          height: "var(--height)";
        };
      };
    };
  };
  size: {
    sm: {
      trigger: {
        px: "2.5";
        py: "1";
        fontSize: "xs";
        gap: "1.5";
        '&[data-orientation="horizontal"]': {
          height: "7";
        };
      };
      content: {
        py: "3";
      };
      list: {
        pt: "0.5";
        pb: "0.5";
        px: "0.5";
      };
    };
    md: {
      trigger: {
        px: "5";
        pt: "0.625rem";
        pb: "0.625rem";
        fontSize: "md";
        gap: "2";
        '&[data-orientation="horizontal"]': {
          minHeight: "10";
          height: "auto";
        };
      };
      content: {
        py: "4";
      };
      list: {
        pt: "1";
        pb: "1";
        px: "1";
      };
    };
    lg: {
      trigger: {
        px: "4";
        py: "2";
        fontSize: "md";
        gap: "2";
        '&[data-orientation="horizontal"]': {
          height: "9";
        };
      };
      content: {
        py: "5";
      };
      list: {
        pt: "1";
        pb: "1";
        px: "1";
      };
    };
  };
}>;
/** Props accepted by `tabsRecipe` (spread on `Tabs.Root` / `Tabs.RootProvider`). */
type TabsRecipeProps = RecipeProps<typeof tabsRecipe>;
//#endregion
export { TabsRecipeProps, tabsRecipe };
//# sourceMappingURL=tabs.recipe.d.ts.map