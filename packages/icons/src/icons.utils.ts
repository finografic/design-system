import React, { forwardRef } from 'react';
import type { LucideProps } from 'lucide-react';

/** Lucide-compatible icon props plus DS `data-*` attributes. */
export type IconProps = LucideProps & {
  /** Stroke color shorthand — same as [lucide-react `color`](https://lucide.dev/guide/react/basics/color). */
  color?: string;
  [key: `data-${string}`]: string | undefined;
};

/**
 * Convert PascalCase export name to kebab-case icon identifier.
 * e.g. 'ChevronDownIcon' → 'chevron-down'
 */
function toIconName(exportName: string): string {
  return exportName
    .replace(/Icon$/, '')
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

/** Inline overrides so explicit Lucide props win over global `.icon` CSS (width/height/stroke). */
function mergeLucideStyle(
  size: LucideProps['size'],
  color: IconProps['color'],
  style: React.CSSProperties | undefined,
): React.CSSProperties | undefined {
  if (size == null && color == null && style == null) return undefined;

  const merged: React.CSSProperties = { ...style };

  if (size != null) {
    const dimension = typeof size === 'number' ? `${size}px` : size;
    merged.width = dimension;
    merged.height = dimension;
  }

  if (color != null) {
    merged.color = color;
    merged.stroke = color;
  }

  return merged;
}

/**
 * Wraps a Lucide (or any SVG) component with:
 * - `.icon` class  (picks up global icon sizing from global.css)
 * - `.icon-name--{kebab}` class  (useful for CSS targeting / debugging)
 * - `data-icon-name` attribute
 * - Lucide `size`, `color`, and `strokeWidth` props (typed + forwarded)
 * - forwarded ref + displayName
 *
 * No external deps — className merge is done inline.
 */
export const createIconWrapper = (IconComponent: React.ComponentType<IconProps>, exportName?: string) => {
  const iconName = exportName ? toIconName(exportName) : 'unknown';

  const WrappedIcon = forwardRef<SVGSVGElement, IconProps>(
    ({ className, size, color, strokeWidth, absoluteStrokeWidth, style, ...props }, ref) => {
      const cls = ['icon', `icon-name--${iconName}`, className].filter(Boolean).join(' ');
      return React.createElement(IconComponent, {
        ref,
        'className': cls,
        'data-icon-name': iconName,
        size,
        color,
        strokeWidth,
        absoluteStrokeWidth,
        'style': mergeLucideStyle(size, color, style),
        ...props,
      });
    },
  );

  WrappedIcon.displayName = `Icon(${
    exportName ?? (IconComponent as any).displayName ?? (IconComponent as any).name ?? 'Unknown'
  })`;

  return WrappedIcon;
};
