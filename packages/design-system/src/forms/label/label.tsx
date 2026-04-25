/**
 * Label — styled `<label>` element sized to align with form control heights.
 *
 * Commonly composed inside `FieldBox`, `InputField`, `Checkbox`, etc. Can also be used standalone with an
 * `htmlFor` attribute.
 *
 * @example
 *   ```tsx
 *   import { Label } from '@finografic/design-system/forms';
 *
 *   <Label htmlFor="email">Email address</Label>
 *   <Label size="sm">Small label</Label>
 *   ```;
 */
import { cx } from '@styled-system/css';
import { forwardRef } from 'react';
import type { LabelHTMLAttributes } from 'react';

import type { LabelVariants } from './label.recipe';
import { labelRecipe } from './label.recipe';

export type LabelProps = LabelVariants & LabelHTMLAttributes<HTMLLabelElement>;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ size, className, children, ...props }, ref) => {
    const styles = labelRecipe({ size });
    return (
      <label ref={ref} className={cx(styles, className)} {...props}>
        {children}
      </label>
    );
  },
);

Label.displayName = 'Label';
