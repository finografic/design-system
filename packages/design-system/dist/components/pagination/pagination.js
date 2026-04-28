import { paginationRecipe } from "./pagination.recipe.js";
import { forwardRef } from "react";
import { cx } from "@styled-system/css";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { Pagination } from "@ark-ui/react";
import { createStyleContext } from "@styled-system/jsx";
//#region src/components/pagination/pagination.tsx
const { withProvider, withContext } = createStyleContext(paginationRecipe);
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
const Pagination$1 = {
	/** Root — `count`, `pageSize`, `page`, event handlers, plus `size`. */
	Root: withProvider(Pagination.Root, "root"),
	/** Root with external machine state from `usePagination`. */
	RootProvider: withProvider(Pagination.RootProvider, "root"),
	/** Numbered page button. */
	Item: withContext(Pagination.Item, "item"),
	/** Previous-page navigation button — uses `trigger` slot. */
	PrevTrigger: withContext(Pagination.PrevTrigger, "trigger"),
	/** Next-page navigation button — uses `trigger` slot. */
	NextTrigger: withContext(Pagination.NextTrigger, "trigger"),
	/** Ellipsis spacer between page clusters. */
	Ellipsis: withContext(Pagination.Ellipsis, "ellipsis"),
	/** Render prop — exposes machine context including `pages` array to children. */
	Context: Pagination.Context
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
const PaginationDS = forwardRef(({ count, pageSize = 10, defaultPage, page, siblingCount, onPageChange, onPageSizeChange, size = "md", className }, ref) => {
	const styles = paginationRecipe({ size });
	return /* @__PURE__ */ jsx(Pagination.Root, {
		ref,
		count,
		pageSize,
		defaultPage,
		page,
		siblingCount,
		onPageChange: ({ page: p, pageSize: ps }) => onPageChange?.(p, ps),
		onPageSizeChange: ({ pageSize: ps }) => onPageSizeChange?.(ps),
		className: cx(styles.root, className),
		children: /* @__PURE__ */ jsx(Pagination.Context, { children: ({ pages }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
			/* @__PURE__ */ jsx(Pagination.PrevTrigger, {
				className: styles.trigger,
				children: "‹"
			}),
			pages.map((pageItem, i) => pageItem.type === "page" ? /* @__PURE__ */ jsx(Pagination.Item, {
				...pageItem,
				className: styles.item,
				children: pageItem.value
			}, i) : /* @__PURE__ */ jsx(Pagination.Ellipsis, {
				index: i,
				className: styles.ellipsis,
				children: "…"
			}, i)),
			/* @__PURE__ */ jsx(Pagination.NextTrigger, {
				className: styles.trigger,
				children: "›"
			})
		] }) })
	});
});
PaginationDS.displayName = "PaginationDS";
//#endregion
export { Pagination$1 as Pagination, PaginationDS };

//# sourceMappingURL=pagination.js.map