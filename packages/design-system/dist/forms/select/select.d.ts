import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import * as react from "react";
import { CollectionItem, ListCollection, Select, SelectValueChangeDetails, createListCollection as createListCollection$1, useListCollection } from "@ark-ui/react";
import * as _styled_system_jsx0 from "@styled-system/jsx";

//#region src/forms/select/select.d.ts
declare const Select$1: {
  Root: _styled_system_jsx0.StyleContextProvider<Select.RootComponent<{}>, SlotRecipeRuntimeFn<"root" | "positioner" | "content" | "item" | "itemText" | "itemIndicator" | "itemGroup" | "itemGroupLabel" | "indicator" | "label" | "control" | "trigger" | "valueText" | "list" | "clearTrigger", {
    size: {
      sm: {
        label: {
          fontSize: "xs";
        };
        trigger: {
          h: "9";
          px: "2.5";
          fontSize: "sm";
          gap: "1.5";
        };
        item: {
          px: "2";
          py: "1";
          fontSize: "sm";
        };
        itemGroupLabel: {
          px: "2";
          py: "1";
        };
        itemIndicator: {
          w: "3";
          h: "3";
        };
      };
      md: {
        label: {
          fontSize: "sm";
        };
        trigger: {
          h: "10";
          px: "3";
          fontSize: "sm";
          gap: "2";
        };
        item: {
          px: "3";
          py: "1.5";
          fontSize: "sm";
        };
        itemGroupLabel: {
          px: "3";
          py: "1.5";
        };
        itemIndicator: {
          w: "4";
          h: "4";
        };
      };
      lg: {
        label: {
          fontSize: "md";
        };
        trigger: {
          h: "11";
          px: "4";
          fontSize: "md";
          gap: "2";
        };
        item: {
          px: "3";
          py: "2";
          fontSize: "md";
        };
        itemGroupLabel: {
          px: "3";
          py: "2";
        };
        itemIndicator: {
          w: "4";
          h: "4";
        };
      };
    };
  }>>;
  Label: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.LabelProps & react.RefAttributes<HTMLLabelElement>>>;
  Control: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.ControlProps & react.RefAttributes<HTMLDivElement>>>;
  Trigger: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.TriggerProps & react.RefAttributes<HTMLButtonElement>>>;
  ValueText: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.ValueTextProps & react.RefAttributes<HTMLSpanElement>>>;
  Indicator: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.IndicatorProps & react.RefAttributes<HTMLDivElement>>>;
  Positioner: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.PositionerProps & react.RefAttributes<HTMLDivElement>>>;
  Content: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.ContentProps & react.RefAttributes<HTMLDivElement>>>;
  List: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.ListProps & react.RefAttributes<HTMLDivElement>>>;
  Item: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.ItemProps & react.RefAttributes<HTMLDivElement>>>;
  ItemText: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.ItemTextProps & react.RefAttributes<HTMLDivElement>>>;
  ItemIndicator: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.ItemIndicatorProps & react.RefAttributes<HTMLDivElement>>>;
  ItemGroup: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.ItemGroupProps & react.RefAttributes<HTMLDivElement>>>;
  ItemGroupLabel: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.ItemGroupLabelProps & react.RefAttributes<HTMLDivElement>>>;
  ClearTrigger: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.ClearTriggerProps & react.RefAttributes<HTMLButtonElement>>>;
  HiddenSelect: react.ForwardRefExoticComponent<Select.HiddenSelectProps & react.RefAttributes<HTMLSelectElement>>;
};
//#endregion
export { type CollectionItem, type ListCollection, Select$1 as Select, type SelectValueChangeDetails, createListCollection$1 as createListCollection, useListCollection };
//# sourceMappingURL=select.d.ts.map