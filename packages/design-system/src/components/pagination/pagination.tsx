import { Pagination as ArkPagination } from '@ark-ui/react';
import { cx } from '@styled-system/css';
import { createStyleContext } from '@styled-system/jsx';
import { forwardRef } from 'react';

import type { PaginationRecipeProps } from './pagination.recipe';
import { paginationRecipe } from './pagination.recipe';

// ── Compound (createStyleContext) ─────────────────────────────────────────────

const { withProvider, withContext } = createStyleContext(paginationRecipe);

/**
 * Styled Ark **Pagination** compound — each part is wired to `paginationRecipe` via context.
 *
 * Ark handles all a11y: `navigation` landmark, `aria-label`, `aria-current` on active page.
 * Variant props (`size`) go on **`Pagination.Root`**.
 *
 * @example
 * ```tsx
 * import { Pagination } from '@finografic/design-system/components';
 *
 * <Pagination.Root count={100} pageSize={10} defaultPage={1} size="md">
 *   <Pagination.Context>
 *     {({ pages }) => (
 *       <>
 *         <Pagination.PrevTrigger>Prev</Pagination.PrevTrigger>
 *         {pages.map((page, i) =>
 *           page.type === 'page' ? (
 *             <Pagination.Item key={i} {...page}>{page.value}</Pagination.Item>
 *           ) : (
 *             <Pagination.Ellipsis key={i} index={i}>&#8230;</Pagination.Ellipsis>
 *           )
 *         )}
 *         <Pagination.NextTrigger>Next</Pagination.NextTrigger>
 *       </>
 *     )}
 *   </Pagination.Context>
 * </Pagination.Root>
 * ```
 */
export const Pagination = {
  /** Root — `count`, `pageSize`, `page`, event handlers, plus `size`. */
  Root: withProvider(ArkPagination.Root, 'root'),
  /** Root with external machine state from `usePagination`. */
  RootProvider: withProvider(ArkPagination.RootProvider, 'root'),
  /** Numbered page button. */
  Item: withContext(ArkPagination.Item, 'item'),
  /** Previous-page navigation button — uses `trigger` slot. */
  PrevTrigger: withContext(ArkPagination.PrevTrigger, 'trigger'),
  /** Next-page navigation button — uses `trigger` slot. */
  NextTrigger: withContext(ArkPagination.NextTrigger, 'trigger'),
  /** Ellipsis spacer between page clusters. */
  Ellipsis: withContext(ArkPagination.Ellipsis, 'ellipsis'),
  /** Render prop — exposes machine context including `pages` array to children. */
  Context: ArkPagination.Context,
};

// ── PaginationDS — convenience wrapper ────────────────────────────────────────

export type PaginationDSProps = PaginationRecipeProps & {
  /** Total number of items to paginate over. */
  count: number;
  /** Number of items per page. Default: `10`. */
  pageSize?: number;
  /** Uncontrolled starting page. */
  defaultPage?: number;
  /** Controlled current page. */
  page?: number;
  /** Number of sibling pages shown around the active page. Default: `1`. */
  siblingCount?: number;
  /** Called when the page changes. */
  onPageChange?: (page: number, pageSize: number) => void;
  /** Called when the page size changes. */
  onPageSizeChange?: (pageSize: number) => void;
  /** Merged onto the root slot after recipe classes. */
  className?: string;
};

/**
 * Design-system convenience pagination — renders prev, numbered pages, ellipsis, and next buttons.
 * **`Pagination`** stays the styled compound for full composition; **`PaginationDS`** = packaged DS
 * API (`onPageChange(page, pageSize)` instead of Ark's `onPageChange` detail object).
 *
 * @example
 * ```tsx
 * import { PaginationDS } from '@finografic/design-system/components';
 *
 * <PaginationDS
 *   count={200}
 *   pageSize={10}
 *   defaultPage={1}
 *   onPageChange={(page, pageSize) => fetchData({ page, pageSize })}
 * />
 * ```
 */
export const PaginationDS = forwardRef<HTMLElement, PaginationDSProps>(
  (
    {
      count,
      pageSize = 10,
      defaultPage,
      page,
      siblingCount,
      onPageChange,
      onPageSizeChange,
      size = 'md',
      className,
    },
    ref,
  ) => {
    const styles = paginationRecipe({ size });

    return (
      <ArkPagination.Root
        ref={ref}
        count={count}
        pageSize={pageSize}
        defaultPage={defaultPage}
        page={page}
        siblingCount={siblingCount}
        onPageChange={({ page: p, pageSize: ps }) => onPageChange?.(p, ps)}
        onPageSizeChange={({ pageSize: ps }) => onPageSizeChange?.(ps)}
        className={cx(styles.root, className)}
      >
        <ArkPagination.Context>
          {({ pages }) => (
            <>
              <ArkPagination.PrevTrigger className={styles.trigger}>‹</ArkPagination.PrevTrigger>
              {pages.map((pageItem, i) =>
                pageItem.type === 'page' ? (
                  <ArkPagination.Item key={i} {...pageItem} className={styles.item}>
                    {pageItem.value}
                  </ArkPagination.Item>
                ) : (
                  <ArkPagination.Ellipsis key={i} index={i} className={styles.ellipsis}>
                    &#8230;
                  </ArkPagination.Ellipsis>
                ),
              )}
              <ArkPagination.NextTrigger className={styles.trigger}>›</ArkPagination.NextTrigger>
            </>
          )}
        </ArkPagination.Context>
      </ArkPagination.Root>
    );
  },
);

PaginationDS.displayName = 'PaginationDS';

export type { PaginationPageChangeDetails } from '@ark-ui/react';
