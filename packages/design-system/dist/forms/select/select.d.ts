import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import * as react from "react";
import { CollectionItem, ListCollection, Select, SelectValueChangeDetails, useListCollection } from "@ark-ui/react";
import * as _styled_system_jsx0 from "@styled-system/jsx";

//#region src/forms/select/select.d.ts
/**
 * Styled Ark **Select** compound — each part is wired to `selectRecipe` via context.
 *
 * Ark handles all a11y: `listbox` / `option` roles, keyboard navigation (arrows,
 * Home/End, typeahead), and Escape to close. Variant props go on **`Select.Root`**.
 *
 * **Multi-select:** pass `multiple` to `Select.Root`. Ark manages selection state;
 * `Select.ItemIndicator` (check icon) shows for each selected item. `SelectDefault`
 * also accepts `multiple` for a simpler options-array API.
 *
 * @example
 * ```tsx
 * import { Select, createListCollection } from '@finografic/design-system/forms';
 * import { CheckIcon, ChevronDownIcon } from '@finografic/icons';
 *
 * const collection = createListCollection({
 *   items: [
 *     { value: 'en', label: 'English' },
 *     { value: 'es', label: 'Spanish' },
 *   ],
 * });
 *
 * <Select.Root collection={collection} onValueChange={({ value, items }) => setValue(value)}>
 *   <Select.Label>Language</Select.Label>
 *   <Select.Control>
 *     <Select.Trigger>
 *       <Select.ValueText placeholder="Pick one…" />
 *       <Select.Indicator><ChevronDownIcon aria-hidden /></Select.Indicator>
 *     </Select.Trigger>
 *   </Select.Control>
 *   <Select.Positioner>
 *     <Select.Content>
 *       <Select.List>
 *         {collection.items.map((item) => (
 *           <Select.Item key={item.value} item={item}>
 *             <Select.ItemText>{item.label}</Select.ItemText>
 *             <Select.ItemIndicator><CheckIcon aria-hidden /></Select.ItemIndicator>
 *           </Select.Item>
 *         ))}
 *       </Select.List>
 *     </Select.Content>
 *   </Select.Positioner>
 *   <Select.HiddenSelect />
 * </Select.Root>
 * ```
 */
declare const Select$1: {
  /** Root — collection, value state, event handlers, multi-select flag, and recipe variants.
   *  Defaults to `positioning={{ strategy: 'fixed', sameWidth: true }}` so the dropdown
   *  escapes `overflow: hidden` ancestors. Override via `positioning` prop if needed. */
  Root: _styled_system_jsx0.StyleContextProvider<react.ForwardRefExoticComponent<Omit<Omit<Omit<Select.RootProps<unknown>, never> & react.RefAttributes<HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void | react.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof react.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | react.RefObject<HTMLDivElement> | null | undefined;
  }, "ref"> & react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"content" | "root" | "item" | "itemIndicator" | "trigger" | "positioner" | "itemText" | "itemGroup" | "itemGroupLabel" | "indicator" | "label" | "list" | "control" | "clearTrigger" | "valueText", {
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
  }>>; /** Root with external machine state from `useSelect`. */
  RootProvider: _styled_system_jsx0.StyleContextProvider<Select.RootProviderComponent<{}>, SlotRecipeRuntimeFn<"content" | "root" | "item" | "itemIndicator" | "trigger" | "positioner" | "itemText" | "itemGroup" | "itemGroupLabel" | "indicator" | "label" | "list" | "control" | "clearTrigger" | "valueText", {
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
  Indicator: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Select.IndicatorProps & react.RefAttributes<HTMLDivElement>>>; /** Floating positioner — portalled into document.body to escape ancestor stacking contexts. */
  Positioner: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Omit<Omit<Select.PositionerProps & react.RefAttributes<HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void | react.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof react.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | react.RefObject<HTMLDivElement> | null | undefined;
  }, "ref"> & react.RefAttributes<HTMLDivElement>>>; /** Dropdown panel — scrollable list container with scale animation. */
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
export { type CollectionItem, type ListCollection, Select$1 as Select, type SelectValueChangeDetails, useListCollection };
//# sourceMappingURL=select.d.ts.map