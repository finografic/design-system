import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import "../../packages/design-system/styled-system/types/index.js";
import { CollectionItem, ListCollection, Select, SelectValueChangeDetails, useListCollection } from "@ark-ui/react";
//#region src/forms/select/select.d.ts
/**
 * Styled Ark **Select** compound — each part is wired to `selectRecipe` via context.
 *
 * Ark handles all a11y: `listbox` / `option` roles, keyboard navigation (arrows, Home/End, typeahead), and
 * Escape to close. Variant props go on **`Select.Root`**.
 *
 * **Multi-select:** pass `multiple` to `Select.Root`. Ark manages selection state; `Select.ItemIndicator`
 * (check icon) shows for each selected item. `SelectDefault` also accepts `multiple` for a simpler
 * options-array API.
 *
 * @example
 *   ```tsx
 *   import { Select, createListCollection } from '@finografic/design-system/forms';
 *   import { CheckIcon, ChevronDownIcon } from '@finografic/icons';
 *
 *   const collection = createListCollection({
 *     items: [
 *       { value: 'en', label: 'English' },
 *       { value: 'es', label: 'Spanish' },
 *     ],
 *   });
 *
 *   <Select.Root collection={collection} onValueChange={({ value, items }) => setValue(value)}>
 *     <Select.Label>Language</Select.Label>
 *     <Select.Control>
 *       <Select.Trigger>
 *         <Select.ValueText placeholder="Pick one…" />
 *         <Select.Indicator>
 *           <ChevronDownIcon aria-hidden />
 *         </Select.Indicator>
 *       </Select.Trigger>
 *     </Select.Control>
 *     <Select.Positioner>
 *       <Select.Content>
 *         <Select.List>
 *           {collection.items.map((item) => (
 *             <Select.Item key={item.value} item={item}>
 *               <Select.ItemText>{item.label}</Select.ItemText>
 *               <Select.ItemIndicator>
 *                 <CheckIcon aria-hidden />
 *               </Select.ItemIndicator>
 *             </Select.Item>
 *           ))}
 *         </Select.List>
 *       </Select.Content>
 *     </Select.Positioner>
 *     <Select.HiddenSelect />
 *   </Select.Root>;
 *   ```;
 */
declare const Select$1: {
  /**
   * Root — collection, value state, event handlers, multi-select flag, and recipe variants. Defaults to
   * `positioning={{ strategy: 'fixed', sameWidth: true }}` so the dropdown escapes `overflow: hidden`
   * ancestors. Override via `positioning` prop if needed.
   */
  Root: import("@styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<Omit<Omit<Select.RootProps<unknown>, never> & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"clearTrigger" | "content" | "control" | "indicator" | "item" | "itemGroup" | "itemGroupLabel" | "itemIndicator" | "itemText" | "label" | "list" | "positioner" | "root" | "trigger" | "valueText", {
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
  }>>;
  /** Root with external machine state from `useSelect`. */
  RootProvider: import("@styled-system/jsx").StyleContextProvider<Select.RootProviderComponent<{}>, SlotRecipeRuntimeFn<"clearTrigger" | "content" | "control" | "indicator" | "item" | "itemGroup" | "itemGroupLabel" | "itemIndicator" | "itemText" | "label" | "list" | "positioner" | "root" | "trigger" | "valueText", {
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
  }>>;
  /** Text label above the trigger. */
  Label: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Select.LabelProps & import("react").RefAttributes<HTMLLabelElement>>>;
  /** Flex row wrapping the trigger and optional clear button. */
  Control: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Select.ControlProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** The button that opens the dropdown — shows selected value and chevron. */
  Trigger: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Select.TriggerProps & import("react").RefAttributes<HTMLButtonElement>>>;
  /** Displays selected item label(s); truncates on overflow. */
  ValueText: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Select.ValueTextProps & import("react").RefAttributes<HTMLSpanElement>>>;
  /** Chevron icon wrapper; rotates 180° when open. */
  Indicator: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Select.IndicatorProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Floating positioner — portalled into document.body to escape ancestor stacking contexts. */
  Positioner: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Omit<Select.PositionerProps & import("react").RefAttributes<HTMLDivElement>, "ref"> & import("react").RefAttributes<HTMLDivElement>>>;
  /** Dropdown panel — scrollable list container with scale animation. */
  Content: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Select.ContentProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Flex column wrapping all items and groups. */
  List: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Select.ListProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** A single selectable row; check icon appears via `ItemIndicator` when selected. */
  Item: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Select.ItemProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Primary label inside an item — truncates on overflow. */
  ItemText: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Select.ItemTextProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Check indicator shown when the item is selected. */
  ItemIndicator: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Select.ItemIndicatorProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Wraps a set of related items; adds vertical spacing between groups. */
  ItemGroup: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Select.ItemGroupProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Section heading for an item group. */
  ItemGroupLabel: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Select.ItemGroupLabelProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Button to clear the current selection — renders inside `Control`. */
  ClearTrigger: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Select.ClearTriggerProps & import("react").RefAttributes<HTMLButtonElement>>>;
  /** Hidden native `<select>` for form integration — no recipe slot. */
  HiddenSelect: import("react").ForwardRefExoticComponent<Select.HiddenSelectProps & import("react").RefAttributes<HTMLSelectElement>>;
  /** Render prop — exposes machine context to children. */
  Context: <T extends unknown>(props: Select.ContextProps<T>) => import("react").ReactNode;
};
//#endregion
export { type CollectionItem, type ListCollection, Select$1 as Select, type SelectValueChangeDetails, useListCollection };
//# sourceMappingURL=select.d.ts.map