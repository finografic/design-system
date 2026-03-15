import { SlotRecipeRuntimeFn } from "../../../styled-system/types/recipe.js";
import * as react from "react";
import { Tabs, TabsFocusChangeDetails, TabsValueChangeDetails } from "@ark-ui/react";
import * as _styled_system_jsx0 from "@styled-system/jsx";

//#region src/components/tabs/tabs.d.ts
declare const Tabs$1: {
  Root: _styled_system_jsx0.StyleContextProvider<react.ForwardRefExoticComponent<Tabs.RootProps & react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"root" | "content" | "indicator" | "trigger" | "list", {
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
  }>>;
  RootProvider: _styled_system_jsx0.StyleContextProvider<react.ForwardRefExoticComponent<Tabs.RootProviderProps & react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"root" | "content" | "indicator" | "trigger" | "list", {
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
  }>>;
  List: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Tabs.ListProps & react.RefAttributes<HTMLDivElement>>>;
  Trigger: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Tabs.TriggerProps & react.RefAttributes<HTMLButtonElement>>>;
  Content: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Tabs.ContentProps & react.RefAttributes<HTMLDivElement>>>;
  Indicator: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Tabs.IndicatorProps & react.RefAttributes<HTMLDivElement>>>;
  Context: (props: Tabs.ContextProps) => react.ReactNode;
};
//#endregion
export { Tabs$1 as Tabs, type TabsFocusChangeDetails, type TabsValueChangeDetails };
//# sourceMappingURL=tabs.d.ts.map