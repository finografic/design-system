import { selectRecipe } from "./select.recipe.js";
import { Select, createListCollection as createListCollection$1, useListCollection } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/forms/select/select.tsx
const { withProvider, withContext } = createStyleContext(selectRecipe);
const Select$1 = {
	Root: withProvider(Select.Root, "root"),
	Label: withContext(Select.Label, "label"),
	Control: withContext(Select.Control, "control"),
	Trigger: withContext(Select.Trigger, "trigger"),
	ValueText: withContext(Select.ValueText, "valueText"),
	Indicator: withContext(Select.Indicator, "indicator"),
	Positioner: withContext(Select.Positioner, "positioner"),
	Content: withContext(Select.Content, "content"),
	List: withContext(Select.List, "list"),
	Item: withContext(Select.Item, "item"),
	ItemText: withContext(Select.ItemText, "itemText"),
	ItemIndicator: withContext(Select.ItemIndicator, "itemIndicator"),
	ItemGroup: withContext(Select.ItemGroup, "itemGroup"),
	ItemGroupLabel: withContext(Select.ItemGroupLabel, "itemGroupLabel"),
	ClearTrigger: withContext(Select.ClearTrigger, "clearTrigger"),
	HiddenSelect: Select.HiddenSelect
};
//#endregion
export { Select$1 as Select, createListCollection$1 as createListCollection, useListCollection };

//# sourceMappingURL=select.js.map