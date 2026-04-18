import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import * as _$react from "react";
import { HTMLAttributes } from "react";
import { Combobox } from "@ark-ui/react";
import * as _$_styled_system_jsx0 from "@styled-system/jsx";

//#region src/forms/select-combobox/select-combobox.d.ts
/**
 * Styled Ark **Combobox** compound — low-level primitive for building searchable selects. Each part is wired
 * to `selectComboboxRecipe` via context.
 *
 * Use `createListCollection` from `@ark-ui/react` to create the collection for `Root`. Ark handles all a11y:
 * `combobox` role, `listbox` popup, keyboard navigation (arrows, Enter, Escape), and ARIA attributes.
 *
 * **This is the low-level primitive** — for the high-level searchable select with filtering use
 * `SelectSearchable` from `@finografic/design-system/forms`.
 *
 * @example
 *   ```tsx
 *   import { Combobox as ArkCombobox, createListCollection } from '@ark-ui/react';
 *   import { SelectCombobox } from '@finografic/design-system/forms';
 *
 *   const collection = createListCollection({
 *     items: [
 *       { value: 'en', label: 'English' },
 *       { value: 'es', label: 'Spanish' },
 *     ],
 *   });
 *
 *   <SelectCombobox.Root collection={collection} size="md">
 *     <SelectCombobox.Label>Language</SelectCombobox.Label>
 *     <SelectCombobox.Control>
 *       <SelectCombobox.Input placeholder="Search…" />
 *       <SelectCombobox.Indicators>
 *         <SelectCombobox.ClearTrigger>✕</SelectCombobox.ClearTrigger>
 *         <SelectCombobox.Trigger>▾</SelectCombobox.Trigger>
 *       </SelectCombobox.Indicators>
 *     </SelectCombobox.Control>
 *     <SelectCombobox.Positioner>
 *       <SelectCombobox.Content>
 *         <SelectCombobox.ItemGroup>
 *           <ArkCombobox.Items>
 *             {(item) => (
 *               <SelectCombobox.Item key={item.value} item={item}>
 *                 <SelectCombobox.ItemText>{item.label}</SelectCombobox.ItemText>
 *                 <SelectCombobox.ItemIndicator>✓</SelectCombobox.ItemIndicator>
 *               </SelectCombobox.Item>
 *             )}
 *           </ArkCombobox.Items>
 *         </SelectCombobox.ItemGroup>
 *       </SelectCombobox.Content>
 *     </SelectCombobox.Positioner>
 *   </SelectCombobox.Root>;
 *   ```;
 */
declare const SelectCombobox: {
  /** Root — `collection`, `value`, `onValueChange`, `onInputValueChange`, plus `size`. */Root: _$_styled_system_jsx0.StyleContextProvider<Combobox.RootComponent<{}>, SlotRecipeRuntimeFn<"content" | "root" | "item" | "itemIndicator" | "trigger" | "positioner" | "itemText" | "itemGroup" | "itemGroupLabel" | "label" | "control" | "input" | "clearTrigger" | "indicators", {
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
  RootProvider: _$_styled_system_jsx0.StyleContextProvider<Combobox.RootProviderComponent<{}>, SlotRecipeRuntimeFn<"content" | "root" | "item" | "itemIndicator" | "trigger" | "positioner" | "itemText" | "itemGroup" | "itemGroupLabel" | "label" | "control" | "input" | "clearTrigger" | "indicators", {
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
  Label: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Combobox.LabelProps & _$react.RefAttributes<HTMLLabelElement>>>; /** Input + indicator wrapper — contains `Input`, `ClearTrigger`, `Trigger`. */
  Control: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Combobox.ControlProps & _$react.RefAttributes<HTMLDivElement>>>; /** Text input for filtering options. */
  Input: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Combobox.InputProps & _$react.RefAttributes<HTMLInputElement>>>; /** Plain div wrapper for grouping `ClearTrigger` and `Trigger`. */
  Indicators: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & _$react.RefAttributes<HTMLDivElement>>>; /** Dropdown chevron button. */
  Trigger: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Combobox.TriggerProps & _$react.RefAttributes<HTMLButtonElement>>>; /** Clear (×) button — visible when a value is selected. */
  ClearTrigger: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Combobox.ClearTriggerProps & _$react.RefAttributes<HTMLButtonElement>>>;
  /** Floating positioner that anchors the content below the control. */
  /** Floating positioner — portalled into document.body to escape ancestor stacking contexts. */
  Positioner: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Omit<Combobox.PositionerProps & _$react.RefAttributes<HTMLDivElement>, "ref"> & _$react.RefAttributes<HTMLDivElement>>>; /** Dropdown list panel. */
  Content: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Combobox.ContentProps & _$react.RefAttributes<HTMLDivElement>>>; /** Groups related items with optional label. */
  ItemGroup: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Combobox.ItemGroupProps & _$react.RefAttributes<HTMLDivElement>>>; /** Section heading for an item group. */
  ItemGroupLabel: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Combobox.ItemGroupLabelProps & _$react.RefAttributes<HTMLDivElement>>>; /** A single option row — pass `item` from the collection. */
  Item: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Combobox.ItemProps & _$react.RefAttributes<HTMLDivElement>>>; /** Text label inside an item. */
  ItemText: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Combobox.ItemTextProps & _$react.RefAttributes<HTMLDivElement>>>; /** Check indicator shown when the item is selected. */
  ItemIndicator: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Combobox.ItemIndicatorProps & _$react.RefAttributes<HTMLDivElement>>>; /** Render prop — exposes machine context to children; no DOM, no recipe slot. */
  Context: <T extends unknown>(props: Combobox.ContextProps<T>) => _$react.ReactNode;
};
//#endregion
export { SelectCombobox };
//# sourceMappingURL=select-combobox.d.ts.map