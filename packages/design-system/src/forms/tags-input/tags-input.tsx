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
import { TagsInput as ArkTagsInput } from '@ark-ui/react';
import { createStyleContext } from '@styled-system/jsx';

import { tagsInputRecipe } from './tags-input.recipe';

const { withProvider, withContext } = createStyleContext(tagsInputRecipe);

/**
 * Styled Ark **TagsInput** compound — each part wired to `tagsInputRecipe` via context.
 *
 * Place `value`, `onValueChange`, `max`, `delimiter`, `size`, and other root
 * props on **`Root`**.
 */
export const TagsInput = {
  /** Root — value state, event handlers, max tags, delimiters, and recipe variants. */
  Root: withProvider(ArkTagsInput.Root, 'root'),
  /** Root with external machine state from `useTagsInput`. */
  RootProvider: withProvider(ArkTagsInput.RootProvider, 'root'),
  /** Text label above the control. */
  Label: withContext(ArkTagsInput.Label, 'label'),
  /** Flex-wrap container that holds tag chips and the text input. */
  Control: withContext(ArkTagsInput.Control, 'control'),
  /** Wrapper for a single tag — contains `ItemPreview` and `ItemInput`. */
  Item: withContext(ArkTagsInput.Item, 'item'),
  /** Visible chip — shown in default (non-edit) state. */
  ItemPreview: withContext(ArkTagsInput.ItemPreview, 'itemPreview'),
  /** Tag label text inside the chip. */
  ItemText: withContext(ArkTagsInput.ItemText, 'itemText'),
  /** Inline text field shown when the user double-clicks a tag to edit it. */
  ItemInput: withContext(ArkTagsInput.ItemInput, 'itemInput'),
  /** Button to remove a single tag — place inside `ItemPreview`. */
  ItemDeleteTrigger: withContext(ArkTagsInput.ItemDeleteTrigger, 'itemDeleteTrigger'),
  /** Text input at the end of the tag list for adding new tags. */
  Input: withContext(ArkTagsInput.Input, 'input'),
  /** Button to remove all tags at once — place after `Control`. */
  ClearTrigger: withContext(ArkTagsInput.ClearTrigger, 'clearTrigger'),
  /** Hidden native `<input>` for form integration — no recipe slot. */
  HiddenInput: ArkTagsInput.HiddenInput,
  /** Render prop — exposes machine context (value, etc.) to children. */
  Context: ArkTagsInput.Context,
  /** Render prop — exposes per-item context inside `Item`. */
  ItemContext: ArkTagsInput.ItemContext,
};

export type {
  TagsInputHighlightChangeDetails,
  TagsInputInputValueChangeDetails,
  TagsInputValueChangeDetails,
} from '@ark-ui/react';
