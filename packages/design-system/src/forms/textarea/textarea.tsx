import { cx } from '@styled-system/css';
import { forwardRef, type TextareaHTMLAttributes } from 'react';

import type { TextareaVariants } from './textarea.recipe';
import { textareaRecipe } from './textarea.recipe';

export type TextareaProps =
  & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>
  & TextareaVariants
  & {
    /** Marks the field invalid (adds `aria-invalid` + error border). */
    invalid?: boolean;
  };

/**
 * Styled multi-line text input — same border, bg, and focus tokens as `InputField`.
 *
 * Pass **`size`** and **`resize`** for layout control. Use `invalid` for error state.
 *
 * @example
 * ```tsx
 * import { Textarea } from '@finografic/design-system/forms';
 *
 * <Textarea
 *   size="md"
 *   resize="vertical"
 *   placeholder="Enter a description…"
 *   onChange={(e) => setValue(e.target.value)}
 * />
 * ```
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, size = 'md', resize = 'vertical', invalid, ...props }, ref) => (
    <textarea
      ref={ref}
      aria-invalid={invalid || undefined}
      className={cx(textareaRecipe({ size, resize }), className)}
      {...props}
    />
  ),
);

Textarea.displayName = 'Textarea';
