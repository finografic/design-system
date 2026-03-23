/**
 * Button
 *
 * Single-element interactive control styled via `buttonRecipe`. Variant props
 * (`size`, `variant`, `palette`) are applied by the component — consumers pass
 * them as regular props; no manual recipe call needed.
 *
 * When `loading` is `true` a spinner replaces (or precedes) the icon slot and
 * interaction is disabled.
 *
 * @example
 * ```tsx
 * import { Button } from '@finografic/design-system/components';
 *
 * <Button variant="solid" palette="primary">Save</Button>
 * <Button variant="ghost" palette="danger" icon={<TrashIcon aria-hidden />}>Delete</Button>
 * <Button variant="outline" size="sm" loading>Saving…</Button>
 * <Button variant="solid" palette="primary" icon={<PlusIcon aria-hidden />} iconPosition="right">
 *   Add item
 * </Button>
 * ```
 */
import { ark } from '@ark-ui/react';
import { cx } from '@styled-system/css';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { forwardRef } from 'react';

import { Spinner } from '../spinner';
import type { ButtonVariants } from './button.recipe';
import { buttonRecipe } from './button.recipe';

export type ButtonProps =
  & ComponentPropsWithoutRef<'button'>
  & Omit<ButtonVariants, 'iconOnly'>
  & {
    /** Shows a spinner and disables interaction. Also sets `aria-busy`. */
    loading?: boolean;
    /** Icon element rendered before or after children. Hidden while `loading`. */
    icon?: ReactNode;
    /** Side the icon appears on. Default: `left` */
    iconPosition?: 'left' | 'right';
    /** Stretches the button to fill its container width. */
    fullWidth?: boolean;
  };

/** Size of the spinner in px — matches button size scale. */
const spinnerSizeMap: Record<NonNullable<ButtonVariants['size']>, number> = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = 'md',
      variant = 'outline',
      palette = 'default',
      loading = false,
      fullWidth,
      icon,
      iconPosition = 'left',
      disabled,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const styles = buttonRecipe({
      size,
      variant,
      palette,
      fullWidth,
      iconOnly: Boolean((icon || loading) && !children),
    });

    const spinnerNode = loading
      ? <Spinner size={spinnerSizeMap[size ?? 'md']} aria-hidden />
      : null;

    return (
      <ark.button
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        data-size={size}
        data-variant={variant}
        data-loading={loading || undefined}
        className={cx(styles, className)}
        {...props}
      >
        {iconPosition === 'left' && (spinnerNode ?? icon)}
        {children}
        {iconPosition === 'right' && (spinnerNode ?? icon)}
      </ark.button>
    );
  },
);

Button.displayName = 'Button';
