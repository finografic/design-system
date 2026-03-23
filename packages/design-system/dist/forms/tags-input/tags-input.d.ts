import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import * as react from "react";
import { TagsInput, TagsInputHighlightChangeDetails, TagsInputInputValueChangeDetails, TagsInputValueChangeDetails } from "@ark-ui/react";
import * as _styled_system_jsx0 from "@styled-system/jsx";

//#region src/forms/tags-input/tags-input.d.ts
/**
 * Styled Ark **TagsInput** compound — each part wired to `tagsInputRecipe` via context.
 *
 * Place `value`, `onValueChange`, `max`, `delimiter`, `size`, and other root
 * props on **`Root`**.
 */
declare const TagsInput$1: {
  /** Root — value state, event handlers, max tags, delimiters, and recipe variants. */Root: _styled_system_jsx0.StyleContextProvider<react.ForwardRefExoticComponent<TagsInput.RootProps & react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"input" | "label" | "root" | "item" | "itemText" | "control" | "clearTrigger" | "itemPreview" | "itemInput" | "itemDeleteTrigger", {
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
      };
    };
  }>>; /** Root with external machine state from `useTagsInput`. */
  RootProvider: _styled_system_jsx0.StyleContextProvider<react.ForwardRefExoticComponent<TagsInput.RootProviderProps & react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"input" | "label" | "root" | "item" | "itemText" | "control" | "clearTrigger" | "itemPreview" | "itemInput" | "itemDeleteTrigger", {
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
      };
    };
  }>>; /** Text label above the control. */
  Label: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<TagsInput.LabelProps & react.RefAttributes<HTMLLabelElement>>>; /** Flex-wrap container that holds tag chips and the text input. */
  Control: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<TagsInput.ControlProps & react.RefAttributes<HTMLDivElement>>>; /** Wrapper for a single tag — contains `ItemPreview` and `ItemInput`. */
  Item: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<TagsInput.ItemProps & react.RefAttributes<HTMLDivElement>>>; /** Visible chip — shown in default (non-edit) state. */
  ItemPreview: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<TagsInput.ItemPreviewProps & react.RefAttributes<HTMLDivElement>>>; /** Tag label text inside the chip. */
  ItemText: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<TagsInput.ItemTextProps & react.RefAttributes<HTMLSpanElement>>>; /** Inline text field shown when the user double-clicks a tag to edit it. */
  ItemInput: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<TagsInput.ItemInputProps & react.RefAttributes<HTMLInputElement>>>; /** Button to remove a single tag — place inside `ItemPreview`. */
  ItemDeleteTrigger: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<TagsInput.ItemDeleteTriggerProps & react.RefAttributes<HTMLButtonElement>>>; /** Text input at the end of the tag list for adding new tags. */
  Input: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<TagsInput.InputProps & react.RefAttributes<HTMLInputElement>>>; /** Button to remove all tags at once — place after `Control`. */
  ClearTrigger: _styled_system_jsx0.StyleContextConsumer<react.ForwardRefExoticComponent<TagsInput.ClearTriggerProps & react.RefAttributes<HTMLButtonElement>>>; /** Hidden native `<input>` for form integration — no recipe slot. */
  HiddenInput: react.ForwardRefExoticComponent<TagsInput.HiddenInputProps & react.RefAttributes<HTMLInputElement>>; /** Render prop — exposes machine context (value, etc.) to children. */
  Context: (props: TagsInput.ContextProps) => react.ReactNode; /** Render prop — exposes per-item context inside `Item`. */
  ItemContext: (props: TagsInput.ItemContextProps) => react.ReactNode;
};
//#endregion
export { TagsInput$1 as TagsInput, type TagsInputHighlightChangeDetails, type TagsInputInputValueChangeDetails, type TagsInputValueChangeDetails };
//# sourceMappingURL=tags-input.d.ts.map