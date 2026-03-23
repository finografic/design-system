import { Field } from '@ark-ui/react';
import { cx } from '@styled-system/css';
import {
  Children,
  forwardRef,
  type HTMLAttributes,
  type InputHTMLAttributes,
  isValidElement,
  type ReactNode,
} from 'react';

import type { InputFieldVariants } from './input-field.recipe';
import { inputFieldRecipe } from './input-field.recipe';

// ── InputField.Slot ───────────────────────────────────────────────────────────

export interface InputFieldSlotProps extends HTMLAttributes<HTMLDivElement> {
  side?: 'left' | 'right';
  /** Makes the slot interactive (pointer-events: auto, cursor: pointer) */
  interactive?: boolean;
}

export function InputFieldSlot({
  side = 'left',
  interactive,
  className,
  children,
  ...props
}: InputFieldSlotProps) {
  return (
    <div
      data-side={side}
      data-interactive={interactive ? 'true' : undefined}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
}

InputFieldSlot.displayName = 'InputField.Slot';

// ── InputField.Root ───────────────────────────────────────────────────────────

export type InputFieldRootProps =
  & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>
  & InputFieldVariants
  & {
    /** Decoration slots — InputField.Slot with side="left" | "right" */
    children?: ReactNode;
    invalid?: boolean;
  };

export const InputFieldRoot = forwardRef<HTMLInputElement, InputFieldRootProps>(
  ({ children, className, size = 'md', invalid, disabled, ...inputProps }, ref) => {
    const leadingSlots: ReactNode[] = [];
    const trailingSlots: ReactNode[] = [];

    Children.forEach(children, (child) => {
      if (isValidElement(child) && child.type === InputFieldSlot) {
        const side = (child.props as InputFieldSlotProps).side ?? 'left';
        if (side === 'right') trailingSlots.push(child);
        else leadingSlots.push(child);
      }
    });

    const styles = inputFieldRecipe({
      size,
      hasLeadingSlot: leadingSlots.length > 0,
      hasTrailingSlot: trailingSlots.length > 0,
    });

    return (
      <div
        className={cx(styles.root, className)}
        data-invalid={invalid ? 'true' : undefined}
        data-disabled={disabled ? 'true' : undefined}
      >
        {leadingSlots.map((slot, i) =>
          isValidElement(slot)
            ? (slot as any).type === InputFieldSlot
              // clone to inject recipe class
              ? {
                ...(slot as any),
                props: {
                  ...(slot as any).props,
                  className: cx(styles.slot, (slot as any).props.className),
                },
                key: i,
              }
              : slot
            : slot
        )}
        <Field.Input
          ref={ref}
          className={styles.input}
          disabled={disabled}
          aria-invalid={invalid}
          {...inputProps}
        />
        {trailingSlots.map((slot, i) =>
          isValidElement(slot)
            ? {
              ...(slot as any),
              props: {
                ...(slot as any).props,
                className: cx(styles.slot, (slot as any).props.className),
              },
              key: i,
            }
            : slot
        )}
      </div>
    );
  },
);

InputFieldRoot.displayName = 'InputField.Root';

// ── Compound export ───────────────────────────────────────────────────────────

/**
 * Styled text input compound with optional leading/trailing decoration slots.
 *
 * Pass **`size`** and `invalid` on **`Root`**; place **`Slot`** children with
 * `side="left"` or `side="right"` — the recipe adjusts input padding automatically.
 *
 * @example
 * ```tsx
 * <InputField.Root size="md" invalid={!!error}>
 *   <InputField.Slot side="left"><SearchIcon aria-hidden /></InputField.Slot>
 *   <InputField.Slot side="right" interactive><XIcon aria-hidden /></InputField.Slot>
 * </InputField.Root>
 * ```
 */
export const InputField = {
  /** Root — controlled state, size, invalid flag, and native input props. */
  Root: InputFieldRoot,
  /** Decoration slot — place icons or buttons; `side="left" | "right"` positions it. */
  Slot: InputFieldSlot,
};
