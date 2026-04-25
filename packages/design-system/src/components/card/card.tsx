import { cx } from '@styled-system/css';
import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';

import type { CardVariants } from './card.recipe';
import { cardRecipe } from './card.recipe';

export type CardProps = CardVariants & HTMLAttributes<HTMLDivElement>;

/**
 * **Card** — surface container with border, background, and optional elevation.
 *
 * @example
 *   ```tsx
 *   import { Card } from '@finografic/design-system/components';
 *
 *   <Card size="md" variant="elevated">
 *     <h3>Card title</h3>
 *     <p>Card content goes here.</p>
 *   </Card>;
 *   ```;
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ size, variant, className, children, ...props }, ref) => {
    const styles = cardRecipe({ size, variant });
    return (
      <div ref={ref} className={cx(styles, className)} {...props}>
        {children}
      </div>
    );
  },
);

Card.displayName = 'Card';
