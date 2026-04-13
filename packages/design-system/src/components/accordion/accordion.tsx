import { ChevronDownIcon } from '@finografic/icons';

import { Accordion as ArkAccordion } from '@ark-ui/react';
import { cx } from '@styled-system/css';
import { createStyleContext } from '@styled-system/jsx';
import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';

import type { AccordionRecipeProps } from './accordion.recipe';
import { accordionRecipe } from './accordion.recipe';

// ── Compound (createStyleContext) ─────────────────────────────────────────────

const { withProvider, withContext } = createStyleContext(accordionRecipe);

/** Plain div used for the ItemBody slot (not an Ark part). */
const Div = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => (
  <div {...props} ref={ref} />
));
Div.displayName = 'AccordionItemBodyDiv';

/**
 * Styled Ark **Accordion** compound — each part is wired to `accordionRecipe` via context.
 *
 * Ark handles all a11y: `disclosure` pattern, keyboard navigation (arrows, Home/End), and ARIA attributes.
 * Variant props (`size`) go on **`Accordion.Root`**.
 *
 * @example
 *   ```tsx
 *   import { Accordion } from '@finografic/design-system/components';
 *
 *   <Accordion.Root defaultValue={['item-1']} collapsible>
 *     <Accordion.Item value="item-1">
 *       <Accordion.ItemTrigger>
 *         Section 1
 *         <Accordion.ItemIndicator>
 *           <ChevronDownIcon />
 *         </Accordion.ItemIndicator>
 *       </Accordion.ItemTrigger>
 *       <Accordion.ItemContent>
 *         <Accordion.ItemBody>Content goes here.</Accordion.ItemBody>
 *       </Accordion.ItemContent>
 *     </Accordion.Item>
 *   </Accordion.Root>;
 *   ```;
 */
export const Accordion = {
  /** Root — `defaultValue` / `value` / `onValueChange`, `multiple`, `collapsible`, plus `size`. */
  Root: withProvider(ArkAccordion.Root, 'root'),
  /** Root with external machine state from `useAccordion`. */
  RootProvider: withProvider(ArkAccordion.RootProvider, 'root'),
  /** A single accordion entry — pass a unique `value`. */
  Item: withContext(ArkAccordion.Item, 'item'),
  /** The clickable header button that expands/collapses the item. */
  ItemTrigger: withContext(ArkAccordion.ItemTrigger, 'itemTrigger'),
  /** Collapsible region that shows/hides the body. */
  ItemContent: withContext(ArkAccordion.ItemContent, 'itemContent'),
  /** Rotating chevron (or any icon) placed inside `ItemTrigger`. */
  ItemIndicator: withContext(ArkAccordion.ItemIndicator, 'itemIndicator'),
  /** Plain div wrapper for the body content inside `ItemContent`. */
  ItemBody: withContext(Div, 'itemBody'),
  /** Render prop — exposes machine context to children; no DOM, no recipe slot. */
  Context: ArkAccordion.Context,
  /** Render prop — exposes per-item context inside `Item`. */
  ItemContext: ArkAccordion.ItemContext,
};

// ── AccordionDS — convenience wrapper ─────────────────────────────────────────

/** A single accordion item descriptor for {@link AccordionDS}. */
export interface AccordionDSItem {
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
export interface AccordionDSClassNames {
  root?: string;
  item?: string;
  itemTrigger?: string;
  itemContent?: string;
  itemIndicator?: string;
  itemBody?: string;
}

export type AccordionDSProps = AccordionRecipeProps & {
  /** Item descriptors — each renders a trigger and a collapsible body. */
  items: AccordionDSItem[];
  /** Controlled expanded values. */
  value?: string[];
  /** Default expanded values (uncontrolled). */
  defaultValue?: string[];
  /** Allow multiple items open simultaneously. */
  multiple?: boolean;
  /** Allow the open item to be collapsed again. */
  collapsible?: boolean;
  /** Called when the expanded values change. */
  onChange?: (value: string[]) => void;
  /** Called when keyboard focus moves between triggers. */
  onFocusChange?: (value: string | null) => void;
  /** Merged onto the root slot after recipe classes. */
  className?: string;
  /** Per-slot class overrides. */
  classNames?: AccordionDSClassNames;
};

/**
 * Design-system convenience accordion — pass an `items` array and get triggers + panels automatically.
 * **`Accordion`** stays the styled compound for full composition; **`AccordionDS`** = packaged DS API
 * (`onChange(value: string[])` instead of Ark's `onValueChange` detail object).
 *
 * @example
 *   ```tsx
 *   import { AccordionDS } from '@finografic/design-system/components';
 *
 *   <AccordionDS
 *     collapsible
 *     defaultValue={['faq-1']}
 *     onChange={(value) => console.log(value)}
 *     items={[
 *       { value: 'faq-1', label: 'What is this?', content: <p>This is the answer.</p> },
 *       { value: 'faq-2', label: 'How does it work?', content: <p>Like this.</p> },
 *     ]}
 *   />;
 *   ```;
 */
export const AccordionDS = forwardRef<HTMLDivElement, AccordionDSProps>(
  (
    {
      items,
      value,
      defaultValue,
      multiple,
      collapsible,
      onChange,
      onFocusChange,
      size = 'md',
      className,
      classNames = {},
    },
    ref,
  ) => {
    const styles = accordionRecipe({ size });

    return (
      <ArkAccordion.Root
        ref={ref}
        value={value}
        defaultValue={defaultValue}
        multiple={multiple}
        collapsible={collapsible}
        onValueChange={({ value: v }) => onChange?.(v)}
        onFocusChange={({ value: v }) => onFocusChange?.(v)}
        className={cx(styles.root, classNames.root, className)}
      >
        {items.map((item) => (
          <ArkAccordion.Item
            key={item.value}
            value={item.value}
            disabled={item.disabled}
            className={cx(styles.item, classNames.item)}
          >
            <ArkAccordion.ItemTrigger className={cx(styles.itemTrigger, classNames.itemTrigger)}>
              {item.label}
              <ArkAccordion.ItemIndicator className={cx(styles.itemIndicator, classNames.itemIndicator)}>
                <ChevronDownIcon aria-hidden />
              </ArkAccordion.ItemIndicator>
            </ArkAccordion.ItemTrigger>
            <ArkAccordion.ItemContent className={cx(styles.itemContent, classNames.itemContent)}>
              <div className={cx(styles.itemBody, classNames.itemBody)}>{item.content}</div>
            </ArkAccordion.ItemContent>
          </ArkAccordion.Item>
        ))}
      </ArkAccordion.Root>
    );
  },
);

AccordionDS.displayName = 'AccordionDS';

export type { AccordionFocusChangeDetails, AccordionValueChangeDetails } from '@ark-ui/react';
