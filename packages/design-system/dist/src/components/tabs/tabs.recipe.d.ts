import { SlotRecipeRuntimeFn } from "../../../styled-system/types/recipe.js";
//#region src/components/tabs/tabs.recipe.d.ts
declare const tabsRecipe: SlotRecipeRuntimeFn<"content" | "root" | "trigger" | "list" | "indicator", {
  variant: {
    line: {
      list: {
        borderBottomWidth: "light";
        borderBottomStyle: "solid";
        borderBottomColor: "border";
        gap: "0";
      };
      trigger: {
        borderBottomWidth: "2px";
        borderBottomStyle: "solid";
        borderBottomColor: "transparent";
        marginBottom: "-1px";
        _selected: {
          borderBottomColor: "accent.solid";
        };
      };
      indicator: {
        height: "2px";
        bottom: "0";
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
        borderRadius: "sm";
        _selected: {
          bg: "bg.panel";
          color: "fg";
          boxShadow: "sm";
        };
      };
    };
  };
  size: {
    sm: {
      trigger: {
        px: "3";
        py: "1.5";
        fontSize: "xs";
      };
      content: {
        pt: "3";
      };
      list: {
        p: "0.5";
      };
    };
    md: {
      trigger: {
        px: "4";
        py: "2";
        fontSize: "sm";
      };
      content: {
        pt: "4";
      };
      list: {
        p: "1";
      };
    };
    lg: {
      trigger: {
        px: "5";
        py: "3";
        fontSize: "md";
      };
      content: {
        pt: "5";
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