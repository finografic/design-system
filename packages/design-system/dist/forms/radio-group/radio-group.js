import { radioGroupRecipe } from "./radio-group.recipe.js";
import { RadioGroup } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/forms/radio-group/radio-group.tsx
const { withProvider, withContext } = createStyleContext(radioGroupRecipe);
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