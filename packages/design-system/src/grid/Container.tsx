import { cx } from '@styled-system/css';
import type { ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  /** When true, removes the max-width constraint — container spans the full viewport width. */
  fluid?: boolean;
}

/**
 * **Container** — centred layout wrapper with a max-width breakpoint.
 *
 * Add `fluid` to disable the max-width and span the full viewport. Pairs with `Row` and `Col` for a 12-column
 * grid layout.
 *
 * @example
 *   ```tsx
 *   import { Container, Row, Col } from '@finografic/design-system/grid';
 *
 *   <Container>
 *     <Row>
 *       <Col md={6}>Left</Col>
 *       <Col md={6}>Right</Col>
 *     </Row>
 *   </Container>;
 *   ```;
 */
const Container = forwardRef<HTMLDivElement, ContainerProps>(({ fluid, className, ...props }, ref) => (
  <div ref={ref} className={cx('ds-container', className)} data-fluid={fluid || undefined} {...props} />
));

Container.displayName = 'Container';

export type { ContainerProps };
export { Container };
