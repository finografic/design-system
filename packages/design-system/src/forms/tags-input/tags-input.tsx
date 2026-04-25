import { XIcon } from '@finografic/icons';

import { TagsInput as ArkTagsInput } from '@ark-ui/react';
import { css, cx } from '@styled-system/css';
import { createStyleContext } from '@styled-system/jsx';
import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import type { FieldError } from 'react-hook-form';

import type { TagsInputVariants } from './tags-input.recipe';
import { tagsInputRecipe } from './tags-input.recipe';

// ── Compound (createStyleContext) ─────────────────────────────────────────────

const { withProvider, withContext } = createStyleContext(tagsInputRecipe);

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
export const TagsInput = {
  /** Root — value state, event handlers, max tags, delimiters, and recipe variants (`size`). */
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

// ── TagsInputDS — convenience wrapper ────────────────────────────────────────

const textColumnStyle = css({ display: 'flex', flexDirection: 'column', gap: '0.5' });

/** Slot class overrides for {@link TagsInputDS}. */
export interface TagsInputDSClassNames {
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

export type TagsInputDSProps = TagsInputVariants & {
  /** Controlled list of tag strings. */
  value?: string[];
  /** Called when the tag list changes — receives the full updated array. */
  onChange?: (value: string[]) => void;
  /** Called as the user types in the input field. */
  onInputValueChange?: (inputValue: string) => void;
  /** Called when keyboard/pointer highlight moves between tags. */
  onHighlightChange?: (value: string | null) => void;
  /**
   * Called when a tag is rejected — e.g. over max count or failed `validate`. `reason` is one of:
   * `'rangeOverflow' | 'invalidTag'`.
   */
  onValueInvalid?: (reason: string) => void;
  onBlur?: () => void;
  /** Label above the input box. */
  label?: ReactNode;
  /** Helper text below the input box. */
  description?: ReactNode;
  /** RHF FieldError or plain string. */
  error?: FieldError | string;
  placeholder?: string;
  /** Maximum number of tags allowed. */
  max?: number;
  /** Custom validation — return `false` to reject the tag. Receives `{ inputValue, value }`. */
  validate?: (details: { inputValue: string; value: string[] }) => boolean;
  name?: string;
  disabled?: boolean;
  /** Merged onto the root slot after recipe classes. */
  className?: string;
  /** Per-slot class overrides. */
  classNames?: TagsInputDSClassNames;
};

/**
 * Design-system convenience tags input — label, description, and error text included. **`TagsInput`** stays
 * the styled compound for full composition; **`TagsInputDS`** = packaged DS API (`onChange(value: string[])`,
 * tags rendered automatically from `value`).
 */
export const TagsInputDS = forwardRef<HTMLDivElement, TagsInputDSProps>(
  (
    {
      value = [],
      onChange,
      onInputValueChange,
      onHighlightChange,
      onValueInvalid,
      onBlur,
      label,
      description,
      error,
      placeholder = 'Add tag…',
      max,
      validate,
      name,
      disabled,
      size = 'md',
      className,
      classNames = {},
    },
    ref,
  ) => {
    const styles = tagsInputRecipe({ size });
    const errorMessage = typeof error === 'string' ? error : error?.message;

    return (
      <ArkTagsInput.Root
        ref={ref}
        value={value}
        onValueChange={({ value: vals }) => onChange?.(vals)}
        onInputValueChange={({ inputValue }) => onInputValueChange?.(inputValue)}
        onHighlightChange={({ highlightedValue }) => onHighlightChange?.(highlightedValue)}
        onValueInvalid={({ reason }) => onValueInvalid?.(reason)}
        onBlur={onBlur}
        max={max}
        validate={validate}
        name={name}
        disabled={disabled}
        data-invalid={errorMessage ? 'true' : undefined}
        className={cx(styles.root, classNames.root, className)}
      >
        {label && (
          <ArkTagsInput.Label className={cx(styles.label, classNames.label)}>{label}</ArkTagsInput.Label>
        )}

        <ArkTagsInput.Control className={cx(styles.control, classNames.control)}>
          {value.map((tag, index) => (
            <ArkTagsInput.Item
              key={index}
              index={index}
              value={tag}
              className={cx(styles.item, classNames.item)}
            >
              <ArkTagsInput.ItemPreview className={cx(styles.itemPreview, classNames.itemPreview)}>
                <ArkTagsInput.ItemText className={cx(styles.itemText, classNames.itemText)}>
                  {tag}
                </ArkTagsInput.ItemText>
                <ArkTagsInput.ItemDeleteTrigger
                  className={cx(styles.itemDeleteTrigger, classNames.itemDeleteTrigger)}
                >
                  <XIcon aria-hidden />
                </ArkTagsInput.ItemDeleteTrigger>
              </ArkTagsInput.ItemPreview>
              <ArkTagsInput.ItemInput className={styles.itemInput} />
            </ArkTagsInput.Item>
          ))}
          <ArkTagsInput.Input className={cx(styles.input, classNames.input)} placeholder={placeholder} />
        </ArkTagsInput.Control>

        {(description || errorMessage) && (
          <div className={textColumnStyle}>
            {description && (
              <span className={cx(styles.description, classNames.description)}>{description}</span>
            )}
            {errorMessage && (
              <span className={cx(styles.errorText, classNames.errorText)} role="alert">
                {errorMessage}
              </span>
            )}
          </div>
        )}

        <ArkTagsInput.HiddenInput />
      </ArkTagsInput.Root>
    );
  },
);

TagsInputDS.displayName = 'TagsInputDS';

export type {
  TagsInputHighlightChangeDetails,
  TagsInputInputValueChangeDetails,
  TagsInputValueChangeDetails,
} from '@ark-ui/react';
