import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import * as react from "react";
import { HTMLAttributes } from "react";
import { Combobox } from "@ark-ui/react";
import * as _styled_system_jsx0 from "@styled-system/jsx";

//#region src/forms/select-combobox/select-combobox.d.ts
/**
 * Styled Ark **Combobox** compound — low-level primitive for building searchable selects.
 * Each part is wired to `selectComboboxRecipe` via context.
 *
 * Use `createListCollection` from `@ark-ui/react` to create the collection for `Root`.
 * Ark handles all a11y: `combobox` role, `listbox` popup, keyboard navigation (arrows,
 * Enter, Escape), and ARIA attributes.
 *
 * **This is the low-level primitive** — for the high-level searchable select with filtering
 * use `SelectSearchable` from `@finografic/design-system/forms`.
 *
 * @example
 * ```tsx
 * import { Combobox as ArkCombobox, createListCollection } from '@ark-ui/react';
 * import { SelectCombobox } from '@finografic/design-system/forms';
 *
 * const collection = createListCollection({ items: [
 *   { value: 'en', label: 'English' },
 *   { value: 'es', label: 'Spanish' },
 * ]});
 *
 * <SelectCombobox.Root collection={collection} size="md">
 *   <SelectCombobox.Label>Language</SelectCombobox.Label>
 *   <SelectCombobox.Control>
 *     <SelectCombobox.Input placeholder="Search…" />
 *     <SelectCombobox.Indicators>
 *       <SelectCombobox.ClearTrigger>✕</SelectCombobox.ClearTrigger>
 *       <SelectCombobox.Trigger>▾</SelectCombobox.Trigger>
 *     </SelectCombobox.Indicators>
 *   </SelectCombobox.Control>
 *   <SelectCombobox.Positioner>
 *     <SelectCombobox.Content>
 *       <SelectCombobox.ItemGroup>
 *         <ArkCombobox.Items>
 *           {(item) => (
 *             <SelectCombobox.Item key={item.value} item={item}>
 *               <SelectCombobox.ItemText>{item.label}</SelectCombobox.ItemText>
 *               <SelectCombobox.ItemIndicator>✓</SelectCombobox.ItemIndicator>
 *             </SelectCombobox.Item>
 *           )}
 *         </ArkCombobox.Items>
 *       </SelectCombobox.ItemGroup>
 *     </SelectCombobox.Content>
 *   </SelectCombobox.Positioner>
 * </SelectCombobox.Root>
 * ```
 */
declare const SelectCombobox: {
  /** Root — `collection`, `value`, `onValueChange`, `onInputValueChange`, plus `size`. */Root: _styled_system_jsx0.StyleContextProvider<Combobox.RootComponent<{}>, SlotRecipeRuntimeFn<"content" | "root" | "item" | "itemIndicator" | "positioner" | "trigger" | "label" | "itemText" | "itemGroup" | "itemGroupLabel" | "control" | "input" | "clearTrigger" | "indicators", {
    size: {
      sm: {
        control: {
          h: "9";
        };
        input: {
          fontSize: "sm";
          pl: "3";
          pr: "1";
        };
        clearTrigger: {
          w: "7";
          h: "7";
        };
        trigger: {
          w: "7";
          h: "7";
        };
        item: {
          px: "2";
          py: "1";
          fontSize: "sm";
        };
        itemText: {
          fontSize: "sm";
        };
        itemGroupLabel: {
          fontSize: "xs";
        };
      };
      md: {
        control: {
          h: "10";
        };
        input: {
          fontSize: "sm";
          pl: "3";
          pr: "1";
        };
        clearTrigger: {
          w: "8";
          h: "8";
        };
        trigger: {
          w: "8";
          h: "8";
        };
        item: {
          px: "3";
          py: "1.5";
          fontSize: "sm";
        };
        itemText: {
          fontSize: "sm";
        };
        itemGroupLabel: {
          fontSize: "xs";
        };
      };
      lg: {
        control: {
          h: "12";
        };
        input: {
          fontSize: "md";
          pl: "4";
          pr: "1";
        };
        clearTrigger: {
          w: "10";
          h: "10";
        };
        trigger: {
          w: "10";
          h: "10";
        };
        item: {
          px: "3";
          py: "2";
          fontSize: "md";
        };
        itemText: {
          fontSize: "md";
        };
        itemGroupLabel: {
          fontSize: "sm";
        };
      };
    };
  }>>; /** Root with external machine state from `useCombobox`. */
  RootProvider: _styled_system_jsx0.StyleContextProvider<Combobox.RootProviderComponent<{}>, SlotRecipeRuntimeFn<"content" | "root" | "item" | "itemIndicator" | "positioner" | "trigger" | "label" | "itemText" | "itemGroup" | "itemGroupLabel" | "control" | "input" | "clearTrigger" | "indicators", {
    size: {
      sm: {
        control: {
          h: "9";
        };
        input: {
          fontSize: "sm";
          pl: "3";
          pr: "1";
        };
        clearTrigger: {
          w: "7";
          h: "7";
        };
        trigger: {
          w: "7";
          h: "7";
        };
        item: {
          px: "2";
          py: "1";
          fontSize: "sm";
        };
        itemText: {
          fontSize: "sm";
        };
        itemGroupLabel: {
          fontSize: "xs";
        };
      };
      md: {
        control: {
          h: "10";
        };
        input: {
          fontSize: "sm";
          pl: "3";
          pr: "1";
        };
        clearTrigger: {
          w: "8";
          h: "8";
        };
        trigger: {
          w: "8";
          h: "8";
        };
        item: {
          px: "3";
          py: "1.5";
          fontSize: "sm";
        };
        itemText: {
          fontSize: "sm";
        };
        itemGroupLabel: {
          fontSize: "xs";
        };
      };
      lg: {
        control: {
          h: "12";
        };
        input: {
          fontSize: "md";
          pl: "4";
          pr: "1";
        };
        clearTrigger: {
          w: "10";
          h: "10";
        };
        trigger: {
          w: "10";
          h: "10";
        };
        item: {
          px: "3";
          py: "2";
          fontSize: "md";
        };
        itemText: {
          fontSize: "md";
        };
        itemGroupLabel: {
          fontSize: "sm";
        };
      };
    };
  }>>; /** Text label above the control. */
  Label: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Combobox.LabelProps & react.RefAttributes<HTMLLabelElement>>>; /** Input + indicator wrapper — contains `Input`, `ClearTrigger`, `Trigger`. */
  Control: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Combobox.ControlProps & react.RefAttributes<HTMLDivElement>>>; /** Text input for filtering options. */
  Input: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Combobox.InputProps & react.RefAttributes<HTMLInputElement>>>; /** Plain div wrapper for grouping `ClearTrigger` and `Trigger`. */
  Indicators: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>>; /** Dropdown chevron button. */
  Trigger: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Combobox.TriggerProps & react.RefAttributes<HTMLButtonElement>>>; /** Clear (×) button — visible when a value is selected. */
  ClearTrigger: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Combobox.ClearTriggerProps & react.RefAttributes<HTMLButtonElement>>>; /** Floating positioner that anchors the content below the control. */
  Positioner: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Combobox.PositionerProps & react.RefAttributes<HTMLDivElement>>>; /** Dropdown list panel. */
  Content: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Combobox.ContentProps & react.RefAttributes<HTMLDivElement>>>; /** Groups related items with optional label. */
  ItemGroup: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Combobox.ItemGroupProps & react.RefAttributes<HTMLDivElement>>>; /** Section heading for an item group. */
  ItemGroupLabel: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Combobox.ItemGroupLabelProps & react.RefAttributes<HTMLDivElement>>>; /** A single option row — pass `item` from the collection. */
  Item: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Combobox.ItemProps & react.RefAttributes<HTMLDivElement>>>; /** Text label inside an item. */
  ItemText: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Combobox.ItemTextProps & react.RefAttributes<HTMLDivElement>>>; /** Check indicator shown when the item is selected. */
  ItemIndicator: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Combobox.ItemIndicatorProps & react.RefAttributes<HTMLDivElement>>>; /** Render prop — exposes machine context to children; no DOM, no recipe slot. */
  Context: <T extends unknown>(props: Combobox.ContextProps<T>) => react.ReactNode;
};
//#endregion
export { SelectCombobox };
//# sourceMappingURL=select-combobox.d.ts.map