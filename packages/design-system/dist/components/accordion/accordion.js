import { accordionRecipe } from "./accordion.recipe.js";
import { ChevronDownIcon } from "@finografic/icons";
import { forwardRef } from "react";
import { cx } from "@styled-system/css";
import { jsx, jsxs } from "react/jsx-runtime";
import { Accordion } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/components/accordion/accordion.tsx
const { withProvider, withContext } = createStyleContext(accordionRecipe);
/** Plain div used for the ItemBody slot (not an Ark part). */
const Div = forwardRef((props, ref) => /* @__PURE__ */ jsx("div", {
	...props,
	ref
}));
Div.displayName = "AccordionItemBodyDiv";
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
const Accordion$1 = {
	Root: withProvider(Accordion.Root, "root"),
	RootProvider: withProvider(Accordion.RootProvider, "root"),
	Item: withContext(Accordion.Item, "item"),
	ItemTrigger: withContext(Accordion.ItemTrigger, "itemTrigger"),
	ItemContent: withContext(Accordion.ItemContent, "itemContent"),
	ItemIndicator: withContext(Accordion.ItemIndicator, "itemIndicator"),
	ItemBody: withContext(Div, "itemBody"),
	Context: Accordion.Context,
	ItemContext: Accordion.ItemContext
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
const AccordionDS = forwardRef(({ items, value, defaultValue, multiple, collapsible, onChange, onFocusChange, size = "md", className, classNames = {} }, ref) => {
	const styles = accordionRecipe({ size });
	return /* @__PURE__ */ jsx(Accordion.Root, {
		ref,
		value,
		defaultValue,
		multiple,
		collapsible,
		onValueChange: ({ value: v }) => onChange?.(v),
		onFocusChange: ({ value: v }) => onFocusChange?.(v),
		className: cx(styles.root, classNames.root, className),
		children: items.map((item) => /* @__PURE__ */ jsxs(Accordion.Item, {
			value: item.value,
			disabled: item.disabled,
			className: cx(styles.item, classNames.item),
			children: [/* @__PURE__ */ jsxs(Accordion.ItemTrigger, {
				className: cx(styles.itemTrigger, classNames.itemTrigger),
				children: [item.label, /* @__PURE__ */ jsx(Accordion.ItemIndicator, {
					className: cx(styles.itemIndicator, classNames.itemIndicator),
					children: /* @__PURE__ */ jsx(ChevronDownIcon, { "aria-hidden": true })
				})]
			}), /* @__PURE__ */ jsx(Accordion.ItemContent, {
				className: cx(styles.itemContent, classNames.itemContent),
				children: /* @__PURE__ */ jsx("div", {
					className: cx(styles.itemBody, classNames.itemBody),
					children: item.content
				})
			})]
		}, item.value))
	});
});
AccordionDS.displayName = "AccordionDS";
//#endregion
export { Accordion$1 as Accordion, AccordionDS };

//# sourceMappingURL=accordion.js.map