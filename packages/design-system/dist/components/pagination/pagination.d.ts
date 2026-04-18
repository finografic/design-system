import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { PaginationRecipeProps } from "./pagination.recipe.js";
import * as _$react from "react";
import { Pagination, PaginationPageChangeDetails } from "@ark-ui/react";
import * as _$_styled_system_jsx0 from "@styled-system/jsx";

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
  /** Root — `count`, `pageSize`, `page`, event handlers, plus `size`. */Root: _$_styled_system_jsx0.StyleContextProvider<_$react.ForwardRefExoticComponent<Pagination.RootProps & _$react.RefAttributes<HTMLElement>>, SlotRecipeRuntimeFn<"root" | "item" | "ellipsis" | "trigger", {
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
  }>>; /** Root with external machine state from `usePagination`. */
  RootProvider: _$_styled_system_jsx0.StyleContextProvider<_$react.ForwardRefExoticComponent<Pagination.RootProviderProps & _$react.RefAttributes<HTMLElement>>, SlotRecipeRuntimeFn<"root" | "item" | "ellipsis" | "trigger", {
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
  }>>; /** Numbered page button. */
  Item: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Pagination.ItemProps & _$react.RefAttributes<HTMLButtonElement>>>; /** Previous-page navigation button — uses `trigger` slot. */
  PrevTrigger: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Pagination.PrevTriggerProps & _$react.RefAttributes<HTMLButtonElement>>>; /** Next-page navigation button — uses `trigger` slot. */
  NextTrigger: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Pagination.NextTriggerProps & _$react.RefAttributes<HTMLButtonElement>>>; /** Ellipsis spacer between page clusters. */
  Ellipsis: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Pagination.EllipsisProps & _$react.RefAttributes<HTMLDivElement>>>; /** Render prop — exposes machine context including `pages` array to children. */
  Context: (props: Pagination.ContextProps) => _$react.ReactNode;
};
type PaginationDSProps = PaginationRecipeProps & {
  /** Total number of items to paginate over. */count: number; /** Number of items per page. Default: `10`. */
  pageSize?: number; /** Uncontrolled starting page. */
  defaultPage?: number; /** Controlled current page. */
  page?: number; /** Number of sibling pages shown around the active page. Default: `1`. */
  siblingCount?: number; /** Called when the page changes. */
  onPageChange?: (page: number, pageSize: number) => void; /** Called when the page size changes. */
  onPageSizeChange?: (pageSize: number) => void; /** Merged onto the root slot after recipe classes. */
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
declare const PaginationDS: _$react.ForwardRefExoticComponent<{
  size?: "sm" | "md" | "lg" | undefined;
} & {
  /** Total number of items to paginate over. */count: number; /** Number of items per page. Default: `10`. */
  pageSize?: number; /** Uncontrolled starting page. */
  defaultPage?: number; /** Controlled current page. */
  page?: number; /** Number of sibling pages shown around the active page. Default: `1`. */
  siblingCount?: number; /** Called when the page changes. */
  onPageChange?: (page: number, pageSize: number) => void; /** Called when the page size changes. */
  onPageSizeChange?: (pageSize: number) => void; /** Merged onto the root slot after recipe classes. */
  className?: string;
} & _$react.RefAttributes<HTMLElement>>;
//#endregion
export { Pagination$1 as Pagination, PaginationDS, PaginationDSProps, type PaginationPageChangeDetails };
//# sourceMappingURL=pagination.d.ts.map