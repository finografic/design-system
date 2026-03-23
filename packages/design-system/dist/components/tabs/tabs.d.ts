import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import * as react from "react";
import { Tabs, TabsFocusChangeDetails, TabsValueChangeDetails } from "@ark-ui/react";
import * as _styled_system_jsx0 from "@styled-system/jsx";

//#region src/components/tabs/tabs.d.ts
declare const Tabs$1: {
  Root: _styled_system_jsx0.StyleContextProvider<react.ForwardRefExoticComponent<Tabs.RootProps & react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"root" | "content" | "trigger" | "indicator" | "list", {
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
  }>>;
  RootProvider: _styled_system_jsx0.StyleContextProvider<react.ForwardRefExoticComponent<Tabs.RootProviderProps & react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"root" | "content" | "trigger" | "indicator" | "list", {
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
  }>>;
  List: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Tabs.ListProps & react.RefAttributes<HTMLDivElement>>>;
  Trigger: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Tabs.TriggerProps & react.RefAttributes<HTMLButtonElement>>>;
  Content: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Tabs.ContentProps & react.RefAttributes<HTMLDivElement>>>;
  Indicator: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Tabs.IndicatorProps & react.RefAttributes<HTMLDivElement>>>; /** Render prop — forwards machine context; no DOM, no recipe slot. */
  Context: (props: Tabs.ContextProps) => react.ReactNode;
};
//#endregion
export { Tabs$1 as Tabs, type TabsFocusChangeDetails, type TabsValueChangeDetails };
//# sourceMappingURL=tabs.d.ts.map