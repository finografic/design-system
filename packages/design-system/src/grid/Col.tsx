import { cx } from '@styled-system/css';
import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';

/** A column span: a number from 1–12, or `'content'` to size to the column's content. */
type ColSpan = number | 'content';

interface ColProps extends ComponentPropsWithoutRef<'div'> {
  /** Span at the `xs` breakpoint and up (≥ 0 px). */
  'xs'?: ColSpan;
  /** Span at the `sm` breakpoint and up. */
  'sm'?: ColSpan;
  /** Span at the `md` breakpoint and up. */
  'md'?: ColSpan;
  /** Span at the `lg` breakpoint and up. */
  'lg'?: ColSpan;
  /** Span at the `xl` breakpoint and up. */
  'xl'?: ColSpan;
  /** Span at the `xxl` breakpoint and up (alias of `2xl`). */
  'xxl'?: ColSpan;
  /** Span at the `2xl` breakpoint and up. */
  '2xl'?: ColSpan;
}

/**
 * **Col** — responsive column inside a `Row`.
 *
 * Pass breakpoint props to control the column span at each viewport width. Omitting a breakpoint inherits the
 * previous breakpoint's span (mobile-first). Use `'content'` to size the column to its natural width.
 *
 * @example
 *   ```tsx
 *   import { Row, Col } from '@finografic/design-system/grid';
 *
 *   <Row>
 *     <Col xs={12} md={8}>
 *       Main
 *     </Col>
 *     <Col xs={12} md={4}>
 *       Aside
 *     </Col>
 *   </Row>;
 *   ```;
 */
const Col = forwardRef<HTMLDivElement, ColProps>(
  ({ xs, sm, md, lg, xl, xxl, '2xl': xxl2, className, ...props }, ref) => {
    const xxlValue = xxl ?? xxl2;

    return (
      <div
        ref={ref}
        className={cx(
          'ds-col',
          xs != null && `ds-col-xs-${xs}`,
          sm != null && `ds-col-sm-${sm}`,
          md != null && `ds-col-md-${md}`,
          lg != null && `ds-col-lg-${lg}`,
          xl != null && `ds-col-xl-${xl}`,
          xxlValue != null && `ds-col-xxl-${xxlValue}`,
          className,
        )}
        {...props}
      />
    );
  },
);

Col.displayName = 'Col';

export type { ColProps };
export { Col };
