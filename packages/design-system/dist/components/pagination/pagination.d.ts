import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import "../../packages/design-system/styled-system/types/index.js";
import { PaginationRecipeProps } from "./pagination.recipe.js";
import { Pagination, PaginationPageChangeDetails } from "@ark-ui/react";
//#region src/components/pagination/pagination.d.ts
/**
 * Styled Ark **Pagination** compound — each part is wired to `paginationRecipe` via context.
 *
 * Ark handles all a11y: `navigation` landmark, `aria-label`, `aria-current` on active page. Variant props
 * (`size`) go on **`Pagination.Root`**.
 *
 * @example
 *   ```tsx
 *   import { Pagination } from '@finografic/design-system/components';
 *
 *   <Pagination.Root count={100} pageSize={10} defaultPage={1} size="md">
 *     <Pagination.Context>
 *       {({ pages }) => (
 *         <>
 *           <Pagination.PrevTrigger>Prev</Pagination.PrevTrigger>
 *           {pages.map((page, i) =>
 *             page.type === 'page' ? (
 *               <Pagination.Item key={i} {...page}>
 *                 {page.value}
 *               </Pagination.Item>
 *             ) : (
 *               <Pagination.Ellipsis key={i} index={i}>
 *                 &#8230;
 *               </Pagination.Ellipsis>
 *             ),
 *           )}
 *           <Pagination.NextTrigger>Next</Pagination.NextTrigger>
 *         </>
 *       )}
 *     </Pagination.Context>
 *   </Pagination.Root>;
 *   ```;
 */
declare const Pagination$1: {
  /** Root — `count`, `pageSize`, `page`, event handlers, plus `size`. */
  Root: import("@styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<Pagination.RootProps & import("react").RefAttributes<HTMLElement>>, SlotRecipeRuntimeFn<"ellipsis" | "item" | "root" | "trigger", {
    size: {
      sm: {
        item: {
          w: "7";
          h: "7";
          fontSize: "xs";
        };
        trigger: {
          w: "7";
          h: "7";
        };
        ellipsis: {
          w: "7";
          h: "7";
          fontSize: "xs";
        };
      };
      md: {
        item: {
          w: "8";
          h: "8";
          fontSize: "sm";
        };
        trigger: {
          w: "8";
          h: "8";
        };
        ellipsis: {
          w: "8";
          h: "8";
          fontSize: "sm";
        };
      };
      lg: {
        item: {
          w: "9";
          h: "9";
          fontSize: "md";
        };
        trigger: {
          w: "9";
          h: "9";
        };
        ellipsis: {
          w: "9";
          h: "9";
          fontSize: "md";
        };
      };
    };
  }>>;
  /** Root with external machine state from `usePagination`. */
  RootProvider: import("@styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<Pagination.RootProviderProps & import("react").RefAttributes<HTMLElement>>, SlotRecipeRuntimeFn<"ellipsis" | "item" | "root" | "trigger", {
    size: {
      sm: {
        item: {
          w: "7";
          h: "7";
          fontSize: "xs";
        };
        trigger: {
          w: "7";
          h: "7";
        };
        ellipsis: {
          w: "7";
          h: "7";
          fontSize: "xs";
        };
      };
      md: {
        item: {
          w: "8";
          h: "8";
          fontSize: "sm";
        };
        trigger: {
          w: "8";
          h: "8";
        };
        ellipsis: {
          w: "8";
          h: "8";
          fontSize: "sm";
        };
      };
      lg: {
        item: {
          w: "9";
          h: "9";
          fontSize: "md";
        };
        trigger: {
          w: "9";
          h: "9";
        };
        ellipsis: {
          w: "9";
          h: "9";
          fontSize: "md";
        };
      };
    };
  }>>;
  /** Numbered page button. */
  Item: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Pagination.ItemProps & import("react").RefAttributes<HTMLButtonElement>>>;
  /** Previous-page navigation button — uses `trigger` slot. */
  PrevTrigger: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Pagination.PrevTriggerProps & import("react").RefAttributes<HTMLButtonElement>>>;
  /** Next-page navigation button — uses `trigger` slot. */
  NextTrigger: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Pagination.NextTriggerProps & import("react").RefAttributes<HTMLButtonElement>>>;
  /** Ellipsis spacer between page clusters. */
  Ellipsis: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Pagination.EllipsisProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Render prop — exposes machine context including `pages` array to children. */
  Context: (props: Pagination.ContextProps) => import("react").ReactNode;
};
type PaginationDSProps = PaginationRecipeProps & {
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
 * **`Pagination`** stays the styled compound for full composition; **`PaginationDS`** = packaged DS API
 * (`onPageChange(page, pageSize)` instead of Ark's `onPageChange` detail object).
 *
 * @example
 *   ```tsx
 *   import { PaginationDS } from '@finografic/design-system/components';
 *
 *   <PaginationDS
 *     count={200}
 *     pageSize={10}
 *     defaultPage={1}
 *     onPageChange={(page, pageSize) => fetchData({ page, pageSize })}
 *   />;
 *   ```;
 */
declare const PaginationDS: import("react").ForwardRefExoticComponent<{
  size?: "lg" | "md" | "sm" | undefined;
} & {
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
} & import("react").RefAttributes<HTMLElement>>;
//#endregion
export { Pagination$1 as Pagination, PaginationDS, PaginationDSProps, type PaginationPageChangeDetails };
//# sourceMappingURL=pagination.d.ts.map