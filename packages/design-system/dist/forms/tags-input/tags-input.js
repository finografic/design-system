import { tagsInputRecipe } from "./tags-input.recipe.js";
import { TagsInput } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/forms/tags-input/tags-input.tsx
/**
* TagsInput — styled Ark UI **TagsInput** compound wired to `tagsInputRecipe`
* via `createStyleContext`.
*
* Ark handles all a11y: keyboard navigation (arrows between tags, Backspace to
* delete, Enter to confirm), edit mode per tag, and ARIA for the tag list.
*
* Each tag goes through three states:
* - **Preview** (`ItemPreview`) — the visible chip with a delete button.
* - **Edit** (`ItemInput`) — an inline text field when double-clicking a tag.
* - **Input** (`Input`) — the new-tag text field at the end of the list.
*
* Use `TagsInput.Context` / `TagsInput.ItemContext` inside the render for
* access to machine state without lifting it up.
*
* @example
* ```tsx
* import { TagsInput } from '@finografic/design-system/forms';
* import { XIcon } from '@finografic/icons';
*
* <TagsInput.Root value={tags} onValueChange={({ value }) => setTags(value)}>
*   <TagsInput.Label>Topics</TagsInput.Label>
*   <TagsInput.Control>
*     <TagsInput.Context>
*       {({ value }) =>
*         value.map((tag, index) => (
*           <TagsInput.Item key={index} index={index} value={tag}>
*             <TagsInput.ItemPreview>
*               <TagsInput.ItemText>{tag}</TagsInput.ItemText>
*               <TagsInput.ItemDeleteTrigger>
*                 <XIcon aria-hidden />
*               </TagsInput.ItemDeleteTrigger>
*             </TagsInput.ItemPreview>
*             <TagsInput.ItemInput />
*           </TagsInput.Item>
*         ))
*       }
*     </TagsInput.Context>
*     <TagsInput.Input placeholder="Add tag…" />
*   </TagsInput.Control>
*   <TagsInput.HiddenInput />
* </TagsInput.Root>
* ```
*/
const { withProvider, withContext } = createStyleContext(tagsInputRecipe);
/**
* Styled Ark **TagsInput** compound — each part wired to `tagsInputRecipe` via context.
*
* Place `value`, `onValueChange`, `max`, `delimiter`, `size`, and other root
* props on **`Root`**.
*/
const TagsInput$1 = {
	Root: withProvider(TagsInput.Root, "root"),
	RootProvider: withProvider(TagsInput.RootProvider, "root"),
	Label: withContext(TagsInput.Label, "label"),
	Control: withContext(TagsInput.Control, "control"),
	Item: withContext(TagsInput.Item, "item"),
	ItemPreview: withContext(TagsInput.ItemPreview, "itemPreview"),
	ItemText: withContext(TagsInput.ItemText, "itemText"),
	ItemInput: withContext(TagsInput.ItemInput, "itemInput"),
	ItemDeleteTrigger: withContext(TagsInput.ItemDeleteTrigger, "itemDeleteTrigger"),
	Input: withContext(TagsInput.Input, "input"),
	ClearTrigger: withContext(TagsInput.ClearTrigger, "clearTrigger"),
	HiddenInput: TagsInput.HiddenInput,
	Context: TagsInput.Context,
	ItemContext: TagsInput.ItemContext
};
//#endregion
export { TagsInput$1 as TagsInput };

//# sourceMappingURL=tags-input.js.map