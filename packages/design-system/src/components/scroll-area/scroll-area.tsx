import { ScrollArea as ArkScrollArea } from '@ark-ui/react';
import { cx } from '@styled-system/css';
import { createStyleContext } from '@styled-system/jsx';
import type React from 'react';
import { forwardRef, type ReactNode } from 'react';

import type { ScrollAreaRecipeProps } from './scroll-area.recipe';
import { scrollAreaRecipe } from './scroll-area.recipe';

// ── Compound (createStyleContext) ─────────────────────────────────────────────

const { withProvider, withContext } = createStyleContext(scrollAreaRecipe);

/**
 * Styled Ark **ScrollArea** compound — each part is wired to `scrollAreaRecipe` via context.
 *
 * Provides custom scrollbars that match the design system theme. Scrollbars appear on hover
 * and use `data-orientation` to distinguish vertical vs horizontal.
 *
 * @example
 * ```tsx
 * import { ScrollArea } from '@finografic/design-system/components';
 *
 * <ScrollArea.Root style={{ height: '300px' }}>
 *   <ScrollArea.Viewport>
 *     <ScrollArea.Content>
 *       {longContent}
 *     </ScrollArea.Content>
 *   </ScrollArea.Viewport>
 *   <ScrollArea.Scrollbar orientation="vertical">
 *     <ScrollArea.Thumb />
 *   </ScrollArea.Scrollbar>
 *   <ScrollArea.Corner />
 * </ScrollArea.Root>
 * ```
 */
export const ScrollArea = {
  /** Root — `onScrollPositionChange`, `dir`, `scrollbarSize`. */
  Root: withProvider(ArkScrollArea.Root, 'root'),
  /** Clips the content while preserving the ability to scroll. */
  Viewport: withContext(ArkScrollArea.Viewport, 'viewport'),
  /** Inner content wrapper — minimum width ensures horizontal scroll works correctly. */
  Content: withContext(ArkScrollArea.Content, 'content'),
  /** Custom scrollbar track — pass `orientation="vertical" | "horizontal"`. */
  Scrollbar: withContext(ArkScrollArea.Scrollbar, 'scrollbar'),
  /** The draggable scrollbar thumb inside `Scrollbar`. */
  Thumb: withContext(ArkScrollArea.Thumb, 'thumb'),
  /** Corner piece shown when both scrollbars are present. */
  Corner: withContext(ArkScrollArea.Corner, 'corner'),
};

// ── ScrollAreaDS — convenience wrapper ────────────────────────────────────────

export type ScrollAreaDSProps = ScrollAreaRecipeProps & {
  /** Content to scroll. */
  children: ReactNode;
  /** Text direction. */
  dir?: 'ltr' | 'rtl';
  /** Merged onto the root element after recipe classes. */
  className?: string;
  /** Inline style applied to the root element (e.g. `{ height: '300px' }`). */
  style?: React.CSSProperties;
};

/**
 * Design-system convenience scroll area — wraps content in a styled custom scrollbar container.
 * **`ScrollArea`** stays the styled compound for full composition; **`ScrollAreaDS`** = simple
 * passthrough with both vertical and horizontal scrollbars included.
 *
 * @example
 * ```tsx
 * import { ScrollAreaDS } from '@finografic/design-system/components';
 *
 * <ScrollAreaDS style={{ height: '300px' }}>
 *   <div style={{ height: '1000px' }}>Tall content here</div>
 * </ScrollAreaDS>
 * ```
 */
export const ScrollAreaDS = forwardRef<HTMLDivElement, ScrollAreaDSProps>(
  ({ children, dir, className, style }, ref) => {
    const styles = scrollAreaRecipe();

    return (
      <ArkScrollArea.Root ref={ref} dir={dir} className={cx(styles.root, className)} style={style}>
        <ArkScrollArea.Viewport className={styles.viewport}>
          <ArkScrollArea.Content className={styles.content}>{children}</ArkScrollArea.Content>
        </ArkScrollArea.Viewport>
        <ArkScrollArea.Scrollbar orientation="vertical" className={styles.scrollbar}>
          <ArkScrollArea.Thumb className={styles.thumb} />
        </ArkScrollArea.Scrollbar>
        <ArkScrollArea.Scrollbar orientation="horizontal" className={styles.scrollbar}>
          <ArkScrollArea.Thumb className={styles.thumb} />
        </ArkScrollArea.Scrollbar>
        <ArkScrollArea.Corner className={styles.corner} />
      </ArkScrollArea.Root>
    );
  },
);

ScrollAreaDS.displayName = 'ScrollAreaDS';

export type { ScrollAreaScrollToDetails } from '@ark-ui/react';
