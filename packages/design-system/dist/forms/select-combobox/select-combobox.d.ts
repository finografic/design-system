import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import "../../packages/design-system/styled-system/types/index.js";
import { HTMLAttributes } from "react";
import { Combobox } from "@ark-ui/react";
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
  /** Root — `collection`, `value`, `onValueChange`, `onInputValueChange`, plus `size`. */
  Root: import("@styled-system/jsx").StyleContextProvider<Combobox.RootComponent<{}>, SlotRecipeRuntimeFn<"clearTrigger" | "content" | "control" | "indicators" | "input" | "item" | "itemGroup" | "itemGroupLabel" | "itemIndicator" | "itemText" | "label" | "positioner" | "root" | "trigger", {
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
  }>>;
  /** Root with external machine state from `useCombobox`. */
  RootProvider: import("@styled-system/jsx").StyleContextProvider<Combobox.RootProviderComponent<{}>, SlotRecipeRuntimeFn<"clearTrigger" | "content" | "control" | "indicators" | "input" | "item" | "itemGroup" | "itemGroupLabel" | "itemIndicator" | "itemText" | "label" | "positioner" | "root" | "trigger", {
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
  }>>;
  /** Text label above the control. */
  Label: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Combobox.LabelProps & import("react").RefAttributes<HTMLLabelElement>>>;
  /** Input + indicator wrapper — contains `Input`, `ClearTrigger`, `Trigger`. */
  Control: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Combobox.ControlProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Text input for filtering options. */
  Input: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Combobox.InputProps & import("react").RefAttributes<HTMLInputElement>>>;
  /** Plain div wrapper for grouping `ClearTrigger` and `Trigger`. */
  Indicators: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>>;
  /** Dropdown chevron button. */
  Trigger: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Combobox.TriggerProps & import("react").RefAttributes<HTMLButtonElement>>>;
  /** Clear (×) button — visible when a value is selected. */
  ClearTrigger: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Combobox.ClearTriggerProps & import("react").RefAttributes<HTMLButtonElement>>>;
  /** Floating positioner that anchors the content below the control. */
  /** Floating positioner — portalled into document.body to escape ancestor stacking contexts. */
  Positioner: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Omit<Combobox.PositionerProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>>;
  /** Dropdown list panel. */
  Content: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Combobox.ContentProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Groups related items with optional label. */
  ItemGroup: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Combobox.ItemGroupProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Section heading for an item group. */
  ItemGroupLabel: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Combobox.ItemGroupLabelProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** A single option row — pass `item` from the collection. */
  Item: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Combobox.ItemProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Text label inside an item. */
  ItemText: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Combobox.ItemTextProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Check indicator shown when the item is selected. */
  ItemIndicator: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Combobox.ItemIndicatorProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Render prop — exposes machine context to children; no DOM, no recipe slot. */
  Context: <T extends unknown>(props: Combobox.ContextProps<T>) => import("react").ReactNode;
};
//#endregion
export { SelectCombobox };
//# sourceMappingURL=select-combobox.d.ts.map