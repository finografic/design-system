import { forwardRef, type HTMLAttributes } from 'react';

import type { CardVariants } from './card.recipe';
import { cardRecipe } from './card.recipe';

export type CardProps = CardVariants & HTMLAttributes<HTMLDivElement>;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ size, variant, className, children, ...props }, ref) => {
    const cls = cardRecipe({ size, variant });
    return (
      <div ref={ref} className={className ? `${cls} ${className}` : cls} {...props}>
        {children}
      </div>
    );
  },
);

Card.displayName = 'Card';
