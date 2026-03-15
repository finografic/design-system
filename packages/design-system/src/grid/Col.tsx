import type { ComponentPropsWithoutRef } from 'react';
import { forwardRef } from 'react';

type ColSpan = number | 'content';

interface ColProps extends ComponentPropsWithoutRef<'div'> {
  'xs'?: ColSpan;
  'sm'?: ColSpan;
  'md'?: ColSpan;
  'lg'?: ColSpan;
  'xl'?: ColSpan;
  'xxl'?: ColSpan;
  '2xl'?: ColSpan;
}

const Col = forwardRef<HTMLDivElement, ColProps>(
  ({ xs, sm, md, lg, xl, xxl, '2xl': xxl2, className, ...props }, ref) => {
    const xxlValue = xxl ?? xxl2;
    const classes = [
      'ds-col',
      xs != null && `ds-col-xs-${xs}`,
      sm != null && `ds-col-sm-${sm}`,
      md != null && `ds-col-md-${md}`,
      lg != null && `ds-col-lg-${lg}`,
      xl != null && `ds-col-xl-${xl}`,
      xxlValue != null && `ds-col-xxl-${xxlValue}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return <div ref={ref} className={classes} {...props} />;
  },
);

Col.displayName = 'Col';

export type { ColProps };
export { Col };
