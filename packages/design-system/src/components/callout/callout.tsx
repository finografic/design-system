import { cx } from '@styled-system/css';
import { forwardRef, type HTMLAttributes } from 'react';

import type { CalloutVariants } from './callout.recipe';
import { calloutRecipe } from './callout.recipe';

export type CalloutProps = CalloutVariants & HTMLAttributes<HTMLDivElement>;

/**
 * **Callout** — inline status message with coloured border and background.
 *
 * @example
 * ```tsx
 * import { Callout } from '@finografic/design-system/components';
 *
 * <Callout status="warning">
 *   Please review your settings before continuing.
 * </Callout>
 * ```
 */
export const Callout = forwardRef<HTMLDivElement, CalloutProps>(
  ({ status, className, children, ...props }, ref) => {
    const styles = calloutRecipe({ status });
    return (
      <div ref={ref} role="alert" className={cx(styles, className)} {...props}>
        {children}
      </div>
    );
  },
);

Callout.displayName = 'Callout';
