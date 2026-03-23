import { forwardRef, type HTMLAttributes } from 'react';

import type { BadgeVariants } from './badge.recipe';
import { badgeRecipe } from './badge.recipe';

export type BadgeProps = BadgeVariants & HTMLAttributes<HTMLSpanElement>;

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant, palette, size, className, children, ...props }, ref) => {
    const cls = badgeRecipe({ variant, palette, size });
    return (
      <span ref={ref} className={className ? `${cls} ${className}` : cls} {...props}>
        {children}
      </span>
    );
  },
);

Badge.displayName = 'Badge';
