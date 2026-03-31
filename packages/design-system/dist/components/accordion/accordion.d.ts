import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { AccordionRecipeProps } from "./accordion.recipe.js";
import * as react from "react";
import { HTMLAttributes, ReactNode } from "react";
import { Accordion, AccordionFocusChangeDetails, AccordionValueChangeDetails } from "@ark-ui/react";
import * as _styled_system_jsx0 from "@styled-system/jsx";

//#region src/components/accordion/accordion.d.ts
/**
 * Styled Ark **Accordion** compound — each part is wired to `accordionRecipe` via context.
 *
 * Ark handles all a11y: `disclosure` pattern, keyboard navigation (arrows, Home/End),
 * and ARIA attributes. Variant props (`size`) go on **`Accordion.Root`**.
 *
 * @example
 * ```tsx
 * import { Accordion } from '@finografic/design-system/components';
 *
 * <Accordion.Root defaultValue={['item-1']} collapsible>
 *   <Accordion.Item value="item-1">
 *     <Accordion.ItemTrigger>
 *       Section 1
 *       <Accordion.ItemIndicator><ChevronDownIcon /></Accordion.ItemIndicator>
 *     </Accordion.ItemTrigger>
 *     <Accordion.ItemContent>
 *       <Accordion.ItemBody>Content goes here.</Accordion.ItemBody>
 *     </Accordion.ItemContent>
 *   </Accordion.Item>
 * </Accordion.Root>
 * ```
 */
declare const Accordion$1: {
  /** Root — `defaultValue` / `value` / `onValueChange`, `multiple`, `collapsible`, plus `size`. */Root: _styled_system_jsx0.StyleContextProvider<react.ForwardRefExoticComponent<Accordion.RootProps & react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"root" | "item" | "itemTrigger" | "itemContent" | "itemIndicator" | "itemBody", {
    size: {
      sm: {
        itemTrigger: {
          fontSize: "sm";
          py: "2.5";
          px: "0";
        };
        itemBody: {
          fontSize: "sm";
        };
      };
      md: {
        itemTrigger: {
          fontSize: "md";
          py: "3";
          px: "0";
        };
        itemBody: {
          fontSize: "sm";
        };
      };
      lg: {
        itemTrigger: {
          fontSize: "lg";
          py: "4";
          px: "0";
        };
        itemBody: {
          fontSize: "md";
        };
      };
    };
  }>>; /** Root with external machine state from `useAccordion`. */
  RootProvider: _styled_system_jsx0.StyleContextProvider<react.ForwardRefExoticComponent<Accordion.RootProviderProps & react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"root" | "item" | "itemTrigger" | "itemContent" | "itemIndicator" | "itemBody", {
    size: {
      sm: {
        itemTrigger: {
          fontSize: "sm";
          py: "2.5";
          px: "0";
        };
        itemBody: {
          fontSize: "sm";
        };
      };
      md: {
        itemTrigger: {
          fontSize: "md";
          py: "3";
          px: "0";
        };
        itemBody: {
          fontSize: "sm";
        };
      };
      lg: {
        itemTrigger: {
          fontSize: "lg";
          py: "4";
          px: "0";
        };
        itemBody: {
          fontSize: "md";
        };
      };
    };
  }>>; /** A single accordion entry — pass a unique `value`. */
  Item: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Accordion.ItemProps & react.RefAttributes<HTMLDivElement>>>; /** The clickable header button that expands/collapses the item. */
  ItemTrigger: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Accordion.ItemTriggerProps & react.RefAttributes<HTMLButtonElement>>>; /** Collapsible region that shows/hides the body. */
  ItemContent: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Accordion.ItemContentProps & react.RefAttributes<HTMLDivElement>>>; /** Rotating chevron (or any icon) placed inside `ItemTrigger`. */
  ItemIndicator: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<Accordion.ItemIndicatorProps & react.RefAttributes<HTMLDivElement>>>; /** Plain div wrapper for the body content inside `ItemContent`. */
  ItemBody: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<HTMLAttributes<HTMLDivElement> & react.RefAttributes<HTMLDivElement>>>; /** Render prop — exposes machine context to children; no DOM, no recipe slot. */
  Context: (props: Accordion.ContextProps) => ReactNode; /** Render prop — exposes per-item context inside `Item`. */
  ItemContext: (props: Accordion.ItemContextProps) => ReactNode;
};
/** A single accordion item descriptor for {@link AccordionDS}. */
interface AccordionDSItem {
  /** Unique identifier for this accordion item. */
  value: string;
  /** Label rendered inside the trigger button. */
  label: ReactNode;
  /** Content rendered inside the expanded panel. */
  content: ReactNode;
  /** Disables the trigger for this item. */
  disabled?: boolean;
}
/** Slot class overrides for {@link AccordionDS}. */
interface AccordionDSClassNames {
  root?: string;
  item?: string;
  itemTrigger?: string;
  itemContent?: string;
  itemIndicator?: string;
  itemBody?: string;
}
type AccordionDSProps = AccordionRecipeProps & {
  /** Item descriptors — each renders a trigger and a collapsible body. */items: AccordionDSItem[]; /** Controlled expanded values. */
  value?: string[]; /** Default expanded values (uncontrolled). */
  defaultValue?: string[]; /** Allow multiple items open simultaneously. */
  multiple?: boolean; /** Allow the open item to be collapsed again. */
  collapsible?: boolean; /** Called when the expanded values change. */
  onChange?: (value: string[]) => void; /** Called when keyboard focus moves between triggers. */
  onFocusChange?: (value: string | null) => void; /** Merged onto the root slot after recipe classes. */
  className?: string; /** Per-slot class overrides. */
  classNames?: AccordionDSClassNames;
};
/**
 * Design-system convenience accordion — pass an `items` array and get triggers + panels automatically.
 * **`Accordion`** stays the styled compound for full composition; **`AccordionDS`** = packaged DS API
 * (`onChange(value: string[])` instead of Ark's `onValueChange` detail object).
 *
 * @example
 * ```tsx
 * import { AccordionDS } from '@finografic/design-system/components';
 *
 * <AccordionDS
 *   collapsible
 *   defaultValue={['faq-1']}
 *   onChange={(value) => console.log(value)}
 *   items={[
 *     { value: 'faq-1', label: 'What is this?', content: <p>This is the answer.</p> },
 *     { value: 'faq-2', label: 'How does it work?', content: <p>Like this.</p> },
 *   ]}
 * />
 * ```
 */
declare const AccordionDS: react.ForwardRefExoticComponent<{
  size?: "sm" | "md" | "lg" | undefined;
} & {
  /** Item descriptors — each renders a trigger and a collapsible body. */items: AccordionDSItem[]; /** Controlled expanded values. */
  value?: string[]; /** Default expanded values (uncontrolled). */
  defaultValue?: string[]; /** Allow multiple items open simultaneously. */
  multiple?: boolean; /** Allow the open item to be collapsed again. */
  collapsible?: boolean; /** Called when the expanded values change. */
  onChange?: (value: string[]) => void; /** Called when keyboard focus moves between triggers. */
  onFocusChange?: (value: string | null) => void; /** Merged onto the root slot after recipe classes. */
  className?: string; /** Per-slot class overrides. */
  classNames?: AccordionDSClassNames;
} & react.RefAttributes<HTMLDivElement>>;
//#endregion
export { Accordion$1 as Accordion, AccordionDS, AccordionDSClassNames, AccordionDSItem, AccordionDSProps, type AccordionFocusChangeDetails, type AccordionValueChangeDetails };
//# sourceMappingURL=accordion.d.ts.map