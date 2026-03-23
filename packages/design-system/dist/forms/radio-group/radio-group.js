import { radioGroupRecipe } from "./radio-group.recipe.js";
import { RadioGroup } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/forms/radio-group/radio-group.tsx
const { withProvider, withContext } = createStyleContext(radioGroupRecipe);
/**
* Styled Ark **RadioGroup** compound — each part is wired to `radioGroupRecipe` via context.
*
* Supports `size` (sm | md | lg), `variant` (default | card), and
* `orientation` (vertical | horizontal) via `RadioGroup.Root`.
* Ark manages keyboard navigation, focus management, and ARIA.
*
* @example
* ```tsx
* import { RadioGroup } from '@finografic/design-system/forms';
*
* <RadioGroup.Root name="plan" size="md" value={plan} onValueChange={({ value }) => setPlan(value)}>
*   <RadioGroup.Label>Billing plan</RadioGroup.Label>
*   {options.map((opt) => (
*     <RadioGroup.Item key={opt.value} value={opt.value}>
*       <RadioGroup.ItemControl>
*         <RadioGroup.Indicator />
*       </RadioGroup.ItemControl>
*       <RadioGroup.ItemText>{opt.label}</RadioGroup.ItemText>
*       <RadioGroup.ItemHiddenInput />
*     </RadioGroup.Item>
*   ))}
* </RadioGroup.Root>
* ```
*/
const RadioGroup$1 = {
	Root: withProvider(RadioGroup.Root, "root"),
	Label: withContext(RadioGroup.Label, "label"),
	Item: withContext(RadioGroup.Item, "item"),
	ItemControl: withContext(RadioGroup.ItemControl, "itemControl"),
	ItemHiddenInput: RadioGroup.ItemHiddenInput,
	Indicator: withContext(RadioGroup.Indicator, "indicator"),
	ItemText: withContext(RadioGroup.ItemText, "itemText")
};
//#endregion
export { RadioGroup$1 as RadioGroup };

//# sourceMappingURL=radio-group.js.map