import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { TagsInputVariants } from "./tags-input.recipe.js";
import * as _$react from "react";
import { ReactNode } from "react";
import { TagsInput, TagsInputHighlightChangeDetails, TagsInputInputValueChangeDetails, TagsInputValueChangeDetails } from "@ark-ui/react";
import * as _$_styled_system_jsx0 from "@styled-system/jsx";
import { FieldError } from "react-hook-form";

//#region src/forms/tags-input/tags-input.d.ts
/**
 * Styled Ark **TagsInput** compound — each part is wired to `tagsInputRecipe` via context.
 *
 * Ark handles all a11y: keyboard navigation (arrows between tags, Backspace to delete, Enter to confirm),
 * edit mode per tag, and ARIA for the tag list.
 *
 * Each tag goes through three states:
 *
 * - **Preview** (`ItemPreview`) — the visible chip with a delete button.
 * - **Edit** (`ItemInput`) — an inline text field when double-clicking a tag.
 * - **Input** (`Input`) — the new-tag text field at the end of the list.
 *
 * Use `TagsInput.Context` / `TagsInput.ItemContext` inside the render for access to machine state without
 * lifting it up.
 *
 * @example
 *   ```tsx
 *   import { TagsInput } from '@finografic/design-system/forms';
 *   import { XIcon } from '@finografic/icons';
 *
 *   <TagsInput.Root size="md" value={tags} onValueChange={({ value }) => setTags(value)}>
 *     <TagsInput.Label>Topics</TagsInput.Label>
 *     <TagsInput.Control>
 *       <TagsInput.Context>
 *         {({ value }) =>
 *           value.map((tag, index) => (
 *             <TagsInput.Item key={index} index={index} value={tag}>
 *               <TagsInput.ItemPreview>
 *                 <TagsInput.ItemText>{tag}</TagsInput.ItemText>
 *                 <TagsInput.ItemDeleteTrigger>
 *                   <XIcon aria-hidden />
 *                 </TagsInput.ItemDeleteTrigger>
 *               </TagsInput.ItemPreview>
 *               <TagsInput.ItemInput />
 *             </TagsInput.Item>
 *           ))
 *         }
 *       </TagsInput.Context>
 *       <TagsInput.Input placeholder="Add tag…" />
 *     </TagsInput.Control>
 *     <TagsInput.HiddenInput />
 *   </TagsInput.Root>;
 *   ```;
 */
declare const TagsInput$1: {
  /** Root — value state, event handlers, max tags, delimiters, and recipe variants (`size`). */Root: _$_styled_system_jsx0.StyleContextProvider<_$react.ForwardRefExoticComponent<TagsInput.RootProps & _$react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"root" | "item" | "description" | "itemText" | "label" | "control" | "input" | "clearTrigger" | "errorText" | "itemPreview" | "itemInput" | "itemDeleteTrigger", {
    size: {
      sm: {
        label: {
          fontSize: "xs";
        };
        control: {
          minH: "9";
          px: "2";
          py: "0.5";
        };
        itemPreview: {
          px: "1.5";
          py: "0.5";
          fontSize: "xs";
        };
        itemInput: {
          px: "1.5";
          py: "0.5";
          fontSize: "xs";
        };
        itemDeleteTrigger: {
          p: "0.5";
          '& svg': {
            w: "3";
            h: "3";
          };
        };
        input: {
          h: "6";
          px: "1";
          fontSize: "xs";
        };
        clearTrigger: {
          '& svg': {
            w: "3";
            h: "3";
          };
        };
        description: {
          fontSize: "xs";
        };
        errorText: {
          fontSize: "xs";
        };
      };
      md: {
        label: {
          fontSize: "sm";
        };
        control: {
          minH: "10";
          px: "2";
          py: "1";
        };
        itemPreview: {
          px: "2";
          py: "0.5";
          fontSize: "sm";
        };
        itemInput: {
          px: "2";
          py: "0.5";
          fontSize: "sm";
        };
        itemDeleteTrigger: {
          p: "0.5";
          '& svg': {
            w: "3.5";
            h: "3.5";
          };
        };
        input: {
          h: "7";
          px: "1";
          fontSize: "sm";
        };
        clearTrigger: {
          '& svg': {
            w: "4";
            h: "4";
          };
        };
        description: {
          fontSize: "sm";
        };
        errorText: {
          fontSize: "sm";
        };
      };
      lg: {
        label: {
          fontSize: "md";
        };
        control: {
          minH: "11";
          px: "3";
          py: "1.5";
        };
        itemPreview: {
          px: "2";
          py: "1";
          fontSize: "sm";
        };
        itemInput: {
          px: "2";
          py: "1";
          fontSize: "sm";
        };
        itemDeleteTrigger: {
          p: "1";
          '& svg': {
            w: "3.5";
            h: "3.5";
          };
        };
        input: {
          h: "7";
          px: "1";
          fontSize: "md";
        };
        clearTrigger: {
          '& svg': {
            w: "4";
            h: "4";
          };
        };
        description: {
          fontSize: "md";
        };
        errorText: {
          fontSize: "md";
        };
      };
    };
  }>>; /** Root with external machine state from `useTagsInput`. */
  RootProvider: _$_styled_system_jsx0.StyleContextProvider<_$react.ForwardRefExoticComponent<TagsInput.RootProviderProps & _$react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"root" | "item" | "description" | "itemText" | "label" | "control" | "input" | "clearTrigger" | "errorText" | "itemPreview" | "itemInput" | "itemDeleteTrigger", {
    size: {
      sm: {
        label: {
          fontSize: "xs";
        };
        control: {
          minH: "9";
          px: "2";
          py: "0.5";
        };
        itemPreview: {
          px: "1.5";
          py: "0.5";
          fontSize: "xs";
        };
        itemInput: {
          px: "1.5";
          py: "0.5";
          fontSize: "xs";
        };
        itemDeleteTrigger: {
          p: "0.5";
          '& svg': {
            w: "3";
            h: "3";
          };
        };
        input: {
          h: "6";
          px: "1";
          fontSize: "xs";
        };
        clearTrigger: {
          '& svg': {
            w: "3";
            h: "3";
          };
        };
        description: {
          fontSize: "xs";
        };
        errorText: {
          fontSize: "xs";
        };
      };
      md: {
        label: {
          fontSize: "sm";
        };
        control: {
          minH: "10";
          px: "2";
          py: "1";
        };
        itemPreview: {
          px: "2";
          py: "0.5";
          fontSize: "sm";
        };
        itemInput: {
          px: "2";
          py: "0.5";
          fontSize: "sm";
        };
        itemDeleteTrigger: {
          p: "0.5";
          '& svg': {
            w: "3.5";
            h: "3.5";
          };
        };
        input: {
          h: "7";
          px: "1";
          fontSize: "sm";
        };
        clearTrigger: {
          '& svg': {
            w: "4";
            h: "4";
          };
        };
        description: {
          fontSize: "sm";
        };
        errorText: {
          fontSize: "sm";
        };
      };
      lg: {
        label: {
          fontSize: "md";
        };
        control: {
          minH: "11";
          px: "3";
          py: "1.5";
        };
        itemPreview: {
          px: "2";
          py: "1";
          fontSize: "sm";
        };
        itemInput: {
          px: "2";
          py: "1";
          fontSize: "sm";
        };
        itemDeleteTrigger: {
          p: "1";
          '& svg': {
            w: "3.5";
            h: "3.5";
          };
        };
        input: {
          h: "7";
          px: "1";
          fontSize: "md";
        };
        clearTrigger: {
          '& svg': {
            w: "4";
            h: "4";
          };
        };
        description: {
          fontSize: "md";
        };
        errorText: {
          fontSize: "md";
        };
      };
    };
  }>>; /** Text label above the control. */
  Label: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<TagsInput.LabelProps & _$react.RefAttributes<HTMLLabelElement>>>; /** Flex-wrap container that holds tag chips and the text input. */
  Control: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<TagsInput.ControlProps & _$react.RefAttributes<HTMLDivElement>>>; /** Wrapper for a single tag — contains `ItemPreview` and `ItemInput`. */
  Item: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<TagsInput.ItemProps & _$react.RefAttributes<HTMLDivElement>>>; /** Visible chip — shown in default (non-edit) state. */
  ItemPreview: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<TagsInput.ItemPreviewProps & _$react.RefAttributes<HTMLDivElement>>>; /** Tag label text inside the chip. */
  ItemText: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<TagsInput.ItemTextProps & _$react.RefAttributes<HTMLSpanElement>>>; /** Inline text field shown when the user double-clicks a tag to edit it. */
  ItemInput: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<TagsInput.ItemInputProps & _$react.RefAttributes<HTMLInputElement>>>; /** Button to remove a single tag — place inside `ItemPreview`. */
  ItemDeleteTrigger: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<TagsInput.ItemDeleteTriggerProps & _$react.RefAttributes<HTMLButtonElement>>>; /** Text input at the end of the tag list for adding new tags. */
  Input: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<TagsInput.InputProps & _$react.RefAttributes<HTMLInputElement>>>; /** Button to remove all tags at once — place after `Control`. */
  ClearTrigger: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<TagsInput.ClearTriggerProps & _$react.RefAttributes<HTMLButtonElement>>>; /** Hidden native `<input>` for form integration — no recipe slot. */
  HiddenInput: _$react.ForwardRefExoticComponent<TagsInput.HiddenInputProps & _$react.RefAttributes<HTMLInputElement>>; /** Render prop — exposes machine context (value, etc.) to children. */
  Context: (props: TagsInput.ContextProps) => ReactNode; /** Render prop — exposes per-item context inside `Item`. */
  ItemContext: (props: TagsInput.ItemContextProps) => ReactNode;
};
/** Slot class overrides for {@link TagsInputDS}. */
interface TagsInputDSClassNames {
  root?: string;
  label?: string;
  control?: string;
  item?: string;
  itemPreview?: string;
  itemText?: string;
  itemDeleteTrigger?: string;
  input?: string;
  description?: string;
  errorText?: string;
}
type TagsInputDSProps = TagsInputVariants & {
  /** Controlled list of tag strings. */value?: string[]; /** Called when the tag list changes — receives the full updated array. */
  onChange?: (value: string[]) => void; /** Called as the user types in the input field. */
  onInputValueChange?: (inputValue: string) => void; /** Called when keyboard/pointer highlight moves between tags. */
  onHighlightChange?: (value: string | null) => void;
  /**
   * Called when a tag is rejected — e.g. over max count or failed `validate`. `reason` is one of:
   * `'rangeOverflow' | 'invalidTag'`.
   */
  onValueInvalid?: (reason: string) => void;
  onBlur?: () => void; /** Label above the input box. */
  label?: ReactNode; /** Helper text below the input box. */
  description?: ReactNode; /** RHF FieldError or plain string. */
  error?: FieldError | string;
  placeholder?: string; /** Maximum number of tags allowed. */
  max?: number; /** Custom validation — return `false` to reject the tag. Receives `{ inputValue, value }`. */
  validate?: (details: {
    inputValue: string;
    value: string[];
  }) => boolean;
  name?: string;
  disabled?: boolean; /** Merged onto the root slot after recipe classes. */
  className?: string; /** Per-slot class overrides. */
  classNames?: TagsInputDSClassNames;
};
/**
 * Design-system convenience tags input — label, description, and error text included. **`TagsInput`** stays
 * the styled compound for full composition; **`TagsInputDS`** = packaged DS API (`onChange(value: string[])`,
 * tags rendered automatically from `value`).
 */
declare const TagsInputDS: _$react.ForwardRefExoticComponent<{
  size?: "sm" | "md" | "lg" | undefined;
} & {
  /** Controlled list of tag strings. */value?: string[]; /** Called when the tag list changes — receives the full updated array. */
  onChange?: (value: string[]) => void; /** Called as the user types in the input field. */
  onInputValueChange?: (inputValue: string) => void; /** Called when keyboard/pointer highlight moves between tags. */
  onHighlightChange?: (value: string | null) => void;
  /**
   * Called when a tag is rejected — e.g. over max count or failed `validate`. `reason` is one of:
   * `'rangeOverflow' | 'invalidTag'`.
   */
  onValueInvalid?: (reason: string) => void;
  onBlur?: () => void; /** Label above the input box. */
  label?: ReactNode; /** Helper text below the input box. */
  description?: ReactNode; /** RHF FieldError or plain string. */
  error?: FieldError | string;
  placeholder?: string; /** Maximum number of tags allowed. */
  max?: number; /** Custom validation — return `false` to reject the tag. Receives `{ inputValue, value }`. */
  validate?: (details: {
    inputValue: string;
    value: string[];
  }) => boolean;
  name?: string;
  disabled?: boolean; /** Merged onto the root slot after recipe classes. */
  className?: string; /** Per-slot class overrides. */
  classNames?: TagsInputDSClassNames;
} & _$react.RefAttributes<HTMLDivElement>>;
//#endregion
export { TagsInput$1 as TagsInput, TagsInputDS, TagsInputDSClassNames, TagsInputDSProps, type TagsInputHighlightChangeDetails, type TagsInputInputValueChangeDetails, type TagsInputValueChangeDetails };
//# sourceMappingURL=tags-input.d.ts.map