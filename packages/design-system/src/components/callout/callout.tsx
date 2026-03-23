import { forwardRef, type HTMLAttributes } from 'react';

import type { CalloutVariants } from './callout.recipe';
import { calloutRecipe } from './callout.recipe';

export type CalloutProps = CalloutVariants & HTMLAttributes<HTMLDivElement>;

export const Callout = forwardRef<HTMLDivElement, CalloutProps>(
  ({ status, className, children, ...props }, ref) => {
    const cls = calloutRecipe({ status });
    return (
      <div ref={ref} role="alert" className={className ? `${cls} ${className}` : cls} {...props}>
        {children}
      </div>
    );
  },
);

Callout.displayName = 'Callout';
