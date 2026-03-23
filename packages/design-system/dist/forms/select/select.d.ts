import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import * as react from "react";
import { CollectionItem, ListCollection, Select, SelectValueChangeDetails, createListCollection as createListCollection$1, useListCollection } from "@ark-ui/react";
import * as _styled_system_jsx0 from "@styled-system/jsx";

//#region src/forms/select/select.d.ts
/**
 * Styled Ark **Select** compound — each part is wired to `selectRecipe` via context.
 *
 * Place `collection`, `value`, `onValueChange`, `multiple`, and `size` on **`Root`**.
 */
declare const Select$1: {
  /** Root — collection, value state, event handlers, multi-select flag, and recipe variants. */Root: _styled_system_jsx0.StyleContextProvider<Select.RootComponent<{}>, SlotRecipeRuntimeFn<"content" | "root" | "positioner" | "item" | "itemText" | "itemIndicator" | "itemGroup" | "itemGroupLabel" | "indicator" | "trigger" | "list" | "control" | "label" | "valueText" | "clearTrigger", {
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
        clearTrigger: {
          '& svg': {
            w: "3";
            h: "3";
          };
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
        clearTrigger: {
          '& svg': {
            w: "4";
            h: "4";
          };
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
        clearTrigger: {
          '& svg': {
            w: "4";
            h: "4";
          };
        };
      };
    };
  }>>; /** Text label above the trigger. */
  Label: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.LabelProps & react.RefAttributes<HTMLLabelElement>>>; /** Flex row wrapping the trigger and optional clear button. */
  Control: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.ControlProps & react.RefAttributes<HTMLDivElement>>>; /** The button that opens the dropdown — shows selected value and chevron. */
  Trigger: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.TriggerProps & react.RefAttributes<HTMLButtonElement>>>; /** Displays selected item label(s); truncates on overflow. */
  ValueText: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.ValueTextProps & react.RefAttributes<HTMLSpanElement>>>; /** Chevron icon wrapper; rotates 180° when open. */
  Indicator: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.IndicatorProps & react.RefAttributes<HTMLDivElement>>>; /** Floating positioner — sets z-index and anchors to the trigger width. */
  Positioner: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.PositionerProps & react.RefAttributes<HTMLDivElement>>>; /** Dropdown panel — scrollable list container with scale animation. */
  Content: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.ContentProps & react.RefAttributes<HTMLDivElement>>>; /** Flex column wrapping all items and groups. */
  List: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.ListProps & react.RefAttributes<HTMLDivElement>>>; /** A single selectable row; check icon appears via `ItemIndicator` when selected. */
  Item: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.ItemProps & react.RefAttributes<HTMLDivElement>>>; /** Primary label inside an item — truncates on overflow. */
  ItemText: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.ItemTextProps & react.RefAttributes<HTMLDivElement>>>; /** Check indicator shown when the item is selected. */
  ItemIndicator: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.ItemIndicatorProps & react.RefAttributes<HTMLDivElement>>>; /** Wraps a set of related items; adds vertical spacing between groups. */
  ItemGroup: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.ItemGroupProps & react.RefAttributes<HTMLDivElement>>>; /** Section heading for an item group. */
  ItemGroupLabel: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.ItemGroupLabelProps & react.RefAttributes<HTMLDivElement>>>; /** Button to clear the current selection — renders inside `Control`. */
  ClearTrigger: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.ClearTriggerProps & react.RefAttributes<HTMLButtonElement>>>; /** Hidden native `<select>` for form integration — no recipe slot. */
  HiddenSelect: react.ForwardRefExoticComponent<Select.HiddenSelectProps & react.RefAttributes<HTMLSelectElement>>; /** Render prop — exposes machine context to children. */
  Context: <T extends unknown>(props: Select.ContextProps<T>) => react.ReactNode;
};
//#endregion
export { type CollectionItem, type ListCollection, Select$1 as Select, type SelectValueChangeDetails, createListCollection$1 as createListCollection, useListCollection };
//# sourceMappingURL=select.d.ts.map