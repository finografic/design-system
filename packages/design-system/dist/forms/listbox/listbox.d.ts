import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { ListboxRecipeProps } from "./listbox.recipe.js";
import * as _$react from "react";
import { ReactNode } from "react";
import { Listbox, ListboxHighlightChangeDetails, ListboxValueChangeDetails } from "@ark-ui/react";
import * as _$_styled_system_jsx0 from "@styled-system/jsx";

//#region src/forms/listbox/listbox.d.ts
/**
 * Styled Ark **Listbox** compound — each part is wired to `listboxRecipe` via context.
 *
 * An always-visible, keyboard-navigable list of selectable options. Ark handles all a11y: `listbox` role,
 * roving focus (`_highlighted`), `aria-selected` on chosen items. Unlike Select/Combobox, the list is never
 * hidden in a dropdown.
 *
 * @example
 *   ```tsx
 *   import { Listbox as ArkListbox, createListCollection } from '@ark-ui/react';
 *   import { Listbox } from '@finografic/design-system/forms';
 *
 *   const collection = createListCollection({
 *     items: [
 *       { value: 'en', label: 'English' },
 *       { value: 'es', label: 'Spanish' },
 *     ],
 *   });
 *
 *   <Listbox.Root collection={collection} size="md">
 *     <Listbox.Label>Language</Listbox.Label>
 *     <Listbox.Content>
 *       <Listbox.ItemGroup>
 *         <ArkListbox.Items>
 *           {(item) => (
 *             <Listbox.Item key={item.value} item={item}>
 *               <Listbox.ItemText>{item.label}</Listbox.ItemText>
 *               <Listbox.ItemIndicator>✓</Listbox.ItemIndicator>
 *             </Listbox.Item>
 *           )}
 *         </ArkListbox.Items>
 *       </Listbox.ItemGroup>
 *     </Listbox.Content>
 *   </Listbox.Root>;
 *   ```;
 */
declare const Listbox$1: {
  /** Root — `collection`, `value`, `onValueChange`, `selectionMode`, plus `size`. */Root: _$_styled_system_jsx0.StyleContextProvider<Listbox.RootComponent<{}>, SlotRecipeRuntimeFn<"content" | "root" | "item" | "itemIndicator" | "label" | "itemGroup" | "itemGroupLabel" | "itemText", {
    size: {
      sm: {
        item: {
          px: "2";
          py: "1";
          fontSize: "sm";
        };
        itemText: {
          fontSize: "sm";
        };
        itemIndicator: {
          w: "4";
          h: "4";
          '& svg': {
            w: "3";
            h: "3";
          };
        };
      };
      md: {
        item: {
          px: "3";
          py: "1.5";
          fontSize: "sm";
        };
        itemText: {
          fontSize: "sm";
        };
        itemIndicator: {
          w: "5";
          h: "5";
          '& svg': {
            w: "3.5";
            h: "3.5";
          };
        };
      };
      lg: {
        item: {
          px: "3";
          py: "2";
          fontSize: "md";
        };
        itemText: {
          fontSize: "md";
        };
        itemIndicator: {
          w: "5";
          h: "5";
          '& svg': {
            w: "4";
            h: "4";
          };
        };
      };
    };
  }>>; /** Root with external machine state from `useListbox`. */
  RootProvider: _$_styled_system_jsx0.StyleContextProvider<Listbox.RootProviderComponent<{}>, SlotRecipeRuntimeFn<"content" | "root" | "item" | "itemIndicator" | "label" | "itemGroup" | "itemGroupLabel" | "itemText", {
    size: {
      sm: {
        item: {
          px: "2";
          py: "1";
          fontSize: "sm";
        };
        itemText: {
          fontSize: "sm";
        };
        itemIndicator: {
          w: "4";
          h: "4";
          '& svg': {
            w: "3";
            h: "3";
          };
        };
      };
      md: {
        item: {
          px: "3";
          py: "1.5";
          fontSize: "sm";
        };
        itemText: {
          fontSize: "sm";
        };
        itemIndicator: {
          w: "5";
          h: "5";
          '& svg': {
            w: "3.5";
            h: "3.5";
          };
        };
      };
      lg: {
        item: {
          px: "3";
          py: "2";
          fontSize: "md";
        };
        itemText: {
          fontSize: "md";
        };
        itemIndicator: {
          w: "5";
          h: "5";
          '& svg': {
            w: "4";
            h: "4";
          };
        };
      };
    };
  }>>; /** Text label above the list. */
  Label: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Listbox.LabelProps & _$react.RefAttributes<HTMLSpanElement>>>; /** Scrollable list container. */
  Content: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Listbox.ContentProps & _$react.RefAttributes<HTMLDivElement>>>; /** A single option row — pass `item` from the collection. */
  Item: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Listbox.ItemProps & _$react.RefAttributes<HTMLDivElement>>>; /** Text label inside an item. */
  ItemText: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Listbox.ItemTextProps & _$react.RefAttributes<HTMLDivElement>>>; /** Check indicator shown when the item is selected. */
  ItemIndicator: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Listbox.ItemIndicatorProps & _$react.RefAttributes<HTMLDivElement>>>; /** Groups related items — provides visual separation. */
  ItemGroup: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Listbox.ItemGroupProps & _$react.RefAttributes<HTMLDivElement>>>; /** Section heading for an item group. */
  ItemGroupLabel: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Listbox.ItemGroupLabelProps & _$react.RefAttributes<HTMLDivElement>>>; /** Render prop — exposes machine context to children; no DOM, no recipe slot. */
  Context: <T extends unknown>(props: Listbox.ContextProps<T>) => ReactNode; /** Render prop — exposes per-item state inside `Item`. */
  ItemContext: (props: Listbox.ItemContextProps) => ReactNode;
};
/** A single item descriptor for {@link ListboxDS}. */
interface ListboxDSItem {
  /** Unique value. */
  value: string;
  /** Display label. */
  label: string;
  /** Disables this item. */
  disabled?: boolean;
}
/** Slot class overrides for {@link ListboxDS}. */
interface ListboxDSClassNames {
  root?: string;
  label?: string;
  content?: string;
  item?: string;
  itemText?: string;
  itemIndicator?: string;
}
type ListboxDSProps = ListboxRecipeProps & {
  /** Item descriptors. */items: ListboxDSItem[]; /** Controlled selected values. */
  value?: string[]; /** Default selected values (uncontrolled). */
  defaultValue?: string[]; /** Allow multiple selections. */
  multiple?: boolean; /** Called when the selected values change. */
  onChange?: (value: string[], items: ListboxDSItem[]) => void; /** Called when the highlighted (keyboard-focused) item changes. */
  onHighlightChange?: (value: string | null, item: ListboxDSItem | null) => void; /** Called when an item is selected. */
  onSelect?: (value: string, item: ListboxDSItem) => void; /** Optional label above the list. */
  label?: ReactNode; /** Per-slot class overrides. */
  classNames?: ListboxDSClassNames;
};
/**
 * Design-system convenience listbox — renders a flat list of selectable items. **`Listbox`** stays the styled
 * compound for full composition; **`ListboxDS`** = packaged DS API with normalized handlers.
 *
 * @example
 *   ```tsx
 *   import { ListboxDS } from '@finografic/design-system/forms';
 *
 *   <ListboxDS
 *     label="Language"
 *     items={[
 *       { value: 'en', label: 'English' },
 *       { value: 'es', label: 'Spanish' },
 *     ]}
 *     onChange={(value, items) => setLanguages(value)}
 *   />;
 *   ```;
 */
declare const ListboxDS: _$react.ForwardRefExoticComponent<{
  size?: "sm" | "md" | "lg" | undefined;
} & {
  /** Item descriptors. */items: ListboxDSItem[]; /** Controlled selected values. */
  value?: string[]; /** Default selected values (uncontrolled). */
  defaultValue?: string[]; /** Allow multiple selections. */
  multiple?: boolean; /** Called when the selected values change. */
  onChange?: (value: string[], items: ListboxDSItem[]) => void; /** Called when the highlighted (keyboard-focused) item changes. */
  onHighlightChange?: (value: string | null, item: ListboxDSItem | null) => void; /** Called when an item is selected. */
  onSelect?: (value: string, item: ListboxDSItem) => void; /** Optional label above the list. */
  label?: ReactNode; /** Per-slot class overrides. */
  classNames?: ListboxDSClassNames;
} & _$react.RefAttributes<HTMLDivElement>>;
//#endregion
export { Listbox$1 as Listbox, ListboxDS, ListboxDSClassNames, ListboxDSItem, ListboxDSProps, type ListboxHighlightChangeDetails, type ListboxValueChangeDetails };
//# sourceMappingURL=listbox.d.ts.map