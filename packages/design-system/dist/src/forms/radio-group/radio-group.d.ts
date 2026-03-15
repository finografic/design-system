import { SlotRecipeRuntimeFn } from "../../../styled-system/types/recipe.js";
import * as react from "react";
import { RadioGroup, RadioGroupRootProps } from "@ark-ui/react";
import * as _styled_system_jsx0 from "@styled-system/jsx";

//#region src/forms/radio-group/radio-group.d.ts
declare const RadioGroup$1: {
  Root: _styled_system_jsx0.StyleContextProvider<react.ForwardRefExoticComponent<RadioGroup.RootProps & react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"label" | "root" | "indicator" | "item" | "itemText" | "itemControl" | "itemDescription", {
    size: {
      sm: {
        label: {
          fontSize: "xs";
        };
        itemControl: {
          width: "4";
          height: "4";
        };
        indicator: {
          width: "1.5";
          height: "1.5";
        };
        itemText: {
          fontSize: "sm";
        };
        itemDescription: {
          fontSize: "xs";
        };
      };
      md: {
        label: {
          fontSize: "sm";
        };
        itemControl: {
          width: "5";
          height: "5";
        };
        indicator: {
          width: "2";
          height: "2";
        };
        itemText: {
          fontSize: "md";
        };
        itemDescription: {
          fontSize: "sm";
        };
      };
      lg: {
        label: {
          fontSize: "md";
        };
        itemControl: {
          width: "6";
          height: "6";
        };
        indicator: {
          width: "2.5";
          height: "2.5";
        };
        itemText: {
          fontSize: "lg";
        };
        itemDescription: {
          fontSize: "md";
        };
      };
    };
    variant: {
      default: {};
      card: {
        item: {
          padding: "3";
          borderWidth: "light";
          borderStyle: "solid";
          borderColor: "border";
          borderRadius: "md";
          bg: "bg.panel";
          _checked: {
            borderColor: "accent.solid";
            bg: "accent.subtle";
          };
          _hover: {
            bg: "bg.hover";
          };
        };
      };
    };
    orientation: {
      vertical: {
        root: {
          flexDirection: "column";
        };
      };
      horizontal: {
        root: {
          flexDirection: "row";
          flexWrap: "wrap";
        };
      };
    };
  }>>;
  Label: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<RadioGroup.LabelProps & react.RefAttributes<HTMLSpanElement>>>;
  Item: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<RadioGroup.ItemProps & react.RefAttributes<HTMLLabelElement>>>;
  ItemControl: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<RadioGroup.ItemControlProps & react.RefAttributes<HTMLDivElement>>>;
  Indicator: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<RadioGroup.IndicatorProps & react.RefAttributes<HTMLDivElement>>>;
  ItemText: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<RadioGroup.ItemTextProps & react.RefAttributes<HTMLSpanElement>>>;
};
//#endregion
export { RadioGroup$1 as RadioGroup, type RadioGroupRootProps };
//# sourceMappingURL=radio-group.d.ts.map