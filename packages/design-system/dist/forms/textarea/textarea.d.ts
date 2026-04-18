import { TextareaVariants } from "./textarea.recipe.js";
import * as _$react from "react";
import { TextareaHTMLAttributes } from "react";

//#region src/forms/textarea/textarea.d.ts
type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> & TextareaVariants & {
  /** Marks the field invalid (adds `aria-invalid` + error border). */invalid?: boolean;
};
/**
 * Styled multi-line text input — same border, bg, and focus tokens as `InputField`.
 *
 * Pass **`size`** and **`resize`** for layout control. Use `invalid` for error state.
 *
 * @example
 *   ```tsx
 *   import { Textarea } from '@finografic/design-system/forms';
 *
 *   <Textarea
 *     size="md"
 *     resize="vertical"
 *     placeholder="Enter a description…"
 *     onChange={(e) => setValue(e.target.value)}
 *   />;
 *   ```;
 */
declare const Textarea: _$react.ForwardRefExoticComponent<Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> & {
  size?: "sm" | "md" | "lg" | undefined;
  resize?: "none" | "both" | "horizontal" | "vertical" | undefined;
} & {
  /** Marks the field invalid (adds `aria-invalid` + error border). */invalid?: boolean;
} & _$react.RefAttributes<HTMLTextAreaElement>>;
//#endregion
export { Textarea, TextareaProps };
//# sourceMappingURL=textarea.d.ts.map