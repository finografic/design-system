import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
//#region src/components/tabs/tabs.recipe.d.ts
declare const tabsRecipe: SlotRecipeRuntimeFn<"content" | "root" | "trigger" | "indicator" | "list", {
  variant: {
    line: {
      list: {
        borderBottomWidth: "light";
        borderBottomStyle: "solid";
        borderBottomColor: "border";
        gap: "0";
      };
      trigger: {
        borderRadius: "sm";
        marginBottom: "-1px";
        borderBottomWidth: "2px";
        borderBottomStyle: "solid";
        borderBottomColor: "transparent";
        _selected: {
          borderBottomColor: "accent.solid";
          color: "accent.solid";
        };
      };
      indicator: {
        bottom: "0";
        left: "var(--left, 0)";
        width: "var(--width)";
        height: "2px";
        bg: "accent.solid";
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
        p: "0.5";
      };
    };
    md: {
      trigger: {
        px: "3";
        py: "1.5";
        fontSize: "sm";
        gap: "2";
        '&[data-orientation="horizontal"]': {
          height: "8";
        };
      };
      content: {
        py: "4";
      };
      list: {
        p: "1";
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
        p: "1";
      };
    };
  };
}>;
//#endregion
export { tabsRecipe };
//# sourceMappingURL=tabs.recipe.d.ts.map