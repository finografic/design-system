import { treeViewRecipe } from "./tree-view.recipe.js";
import { ChevronRightIcon } from "@finografic/icons";
import { forwardRef } from "react";
import { cx } from "@styled-system/css";
import { jsx, jsxs } from "react/jsx-runtime";
import { createStyleContext } from "@styled-system/jsx";
import { TreeView, createTreeCollection } from "@ark-ui/react/tree-view";
//#region src/components/tree-view/tree-view.tsx
const { withProvider, withContext } = createStyleContext(treeViewRecipe);
/**
* Styled Ark **TreeView** compound — each part is wired to `treeViewRecipe` via context.
*
* A keyboard-navigable tree of nested nodes. Ark handles all a11y: `tree` / `treeitem` roles, arrow-key
* navigation, expand/collapse, and single/multi selection. Variant props (`size`) go on **`TreeView.Root`**.
*
* Depth-based indentation is automatic — Ark sets `--depth` on every node; the recipe derives `--tree-offset`
* from it. No inline styles are needed.
*
* @example
*   ```tsx
*   import { ChevronRightIcon, FileIcon, FolderIcon, FolderOpenIcon } from '@finografic/icons';
*   import { createTreeCollection, TreeView } from '@finografic/design-system/components';
*
*   const collection = createTreeCollection({
*     nodeToValue: (node) => node.id,
*     nodeToString: (node) => node.name,
*     rootNode: {
*       id: 'ROOT', name: '',
*       children: [
*         { id: 'src', name: 'src', children: [
*           { id: 'src/index.ts', name: 'index.ts' },
*         ]},
*         { id: 'package.json', name: 'package.json' },
*       ],
*     },
*   });
*
*   function TreeNode({ node, indexPath }) {
*     return (
*       <TreeView.NodeProvider node={node} indexPath={indexPath}>
*         <TreeView.NodeContext>
*           {(state) => node.children ? (
*             <TreeView.Branch>
*               <TreeView.BranchControl>
*                 <TreeView.BranchIndicator><ChevronRightIcon /></TreeView.BranchIndicator>
*                 <TreeView.BranchText>
*                   {state.expanded ? <FolderOpenIcon /> : <FolderIcon />}
*                   {node.name}
*                 </TreeView.BranchText>
*               </TreeView.BranchControl>
*               <TreeView.BranchContent>
*                 <TreeView.BranchIndentGuide />
*                 {node.children.map((child, i) => (
*                   <TreeNode key={child.id} node={child} indexPath={[...indexPath, i]} />
*                 ))}
*               </TreeView.BranchContent>
*             </TreeView.Branch>
*           ) : (
*             <TreeView.Item>
*               <TreeView.ItemText><FileIcon />{node.name}</TreeView.ItemText>
*             </TreeView.Item>
*           )}
*         </TreeView.NodeContext>
*       </TreeView.NodeProvider>
*     );
*   }
*
*   <TreeView.Root collection={collection} size="md">
*     <TreeView.Label>Project Files</TreeView.Label>
*     <TreeView.Tree>
*       {collection.rootNode.children?.map((node, i) => (
*         <TreeNode key={node.id} node={node} indexPath={[i]} />
*       ))}
*     </TreeView.Tree>
*   </TreeView.Root>
*   ```;
*/
const TreeView$1 = {
	/** Root — `collection`, `selectedValue`, `onSelectionChange`, `selectionMode`, plus `size`. */
	Root: withProvider(TreeView.Root, "root"),
	/** Root with external machine state from `useTreeView`. */
	RootProvider: withProvider(TreeView.RootProvider, "root"),
	/** Text label above the tree. */
	Label: withContext(TreeView.Label, "label"),
	/** The scrollable tree container — renders as `<ul>`. */
	Tree: withContext(TreeView.Tree, "tree"),
	/** A branch node that has children — wraps BranchControl + BranchContent. */
	Branch: withContext(TreeView.Branch, "branch"),
	/** Clickable header row of a branch — place BranchIndicator + BranchText inside. */
	BranchControl: withContext(TreeView.BranchControl, "branchControl"),
	/** Rotating chevron that signals expand/collapse state. */
	BranchIndicator: withContext(TreeView.BranchIndicator, "branchIndicator"),
	/** Text + optional icon content inside BranchControl. */
	BranchText: withContext(TreeView.BranchText, "branchText"),
	/** Collapsible content area containing child nodes. */
	BranchContent: withContext(TreeView.BranchContent, "branchContent"),
	/** Vertical line guide that visually connects children to their parent. */
	BranchIndentGuide: withContext(TreeView.BranchIndentGuide, "branchIndentGuide"),
	/** A leaf node — renders as `<li>`. */
	Item: withContext(TreeView.Item, "item"),
	/** Text + optional icon content inside Item. */
	ItemText: withContext(TreeView.ItemText, "itemText"),
	/** Optional selection indicator inside Item. */
	ItemIndicator: withContext(TreeView.ItemIndicator, "itemIndicator"),
	/** Context provider for a node — required wrapper for Branch and Item. */
	NodeProvider: TreeView.NodeProvider,
	/** Render prop that exposes node state (expanded, selected, loading) to children. */
	NodeContext: TreeView.NodeContext
};
/**
* Design-system convenience tree view — pass a `nodes` array and get a fully keyboard-navigable tree.
* **`TreeView`** stays the styled compound for full composition (custom icons, async loading, checkboxes);
* **`TreeViewDS`** = packaged DS API with `ChevronRightIcon` branch indicators and normalized
* `onSelectionChange` handler.
*
* @example
*   ```tsx
*   import { TreeViewDS } from '@finografic/design-system/components';
*
*   <TreeViewDS
*     label="Project Files"
*     onSelectionChange={({ selectedValue }) => console.log(selectedValue)}
*     nodes={[
*       { id: 'src', label: 'src', children: [
*         { id: 'src/index.ts', label: 'index.ts' },
*       ]},
*       { id: 'package.json', label: 'package.json' },
*     ]}
*   />
*   ```;
*/
const TreeViewDS = forwardRef(({ nodes, selectedValue, defaultSelectedValue, multiple, onSelectionChange, onExpandedChange, label, size = "md", classNames = {} }, ref) => {
	const styles = treeViewRecipe({ size });
	const collection = createTreeCollection({
		nodeToValue: (node) => node.id,
		nodeToString: (node) => node.label,
		rootNode: {
			id: "__ROOT__",
			label: "",
			displayLabel: null,
			children: buildCollectionNodes(nodes)
		}
	});
	return /* @__PURE__ */ jsxs(TreeView.Root, {
		ref,
		collection,
		selectedValue,
		defaultSelectedValue,
		selectionMode: multiple ? "multiple" : "single",
		onSelectionChange,
		onExpandedChange,
		className: cx(styles.root, classNames.root),
		children: [label && /* @__PURE__ */ jsx(TreeView.Label, {
			className: cx(styles.label, classNames.label),
			children: label
		}), /* @__PURE__ */ jsx(TreeView.Tree, {
			className: cx(styles.tree, classNames.tree),
			children: collection.rootNode.children?.map((node, index) => /* @__PURE__ */ jsx(TreeViewDSNode, {
				node,
				indexPath: [index],
				styles,
				classNames
			}, node.id))
		})]
	});
});
TreeViewDS.displayName = "TreeViewDS";
function TreeViewDSNode({ node, indexPath, styles, classNames }) {
	return /* @__PURE__ */ jsx(TreeView.NodeProvider, {
		node,
		indexPath,
		children: node.children ? /* @__PURE__ */ jsxs(TreeView.Branch, {
			className: styles.branch,
			children: [/* @__PURE__ */ jsxs(TreeView.BranchControl, {
				className: cx(styles.branchControl, classNames.branchControl),
				children: [/* @__PURE__ */ jsx(TreeView.BranchIndicator, {
					className: styles.branchIndicator,
					children: /* @__PURE__ */ jsx(ChevronRightIcon, { "aria-hidden": true })
				}), /* @__PURE__ */ jsx(TreeView.BranchText, {
					className: cx(styles.branchText, classNames.branchText),
					children: node.displayLabel
				})]
			}), /* @__PURE__ */ jsxs(TreeView.BranchContent, {
				className: styles.branchContent,
				children: [/* @__PURE__ */ jsx(TreeView.BranchIndentGuide, { className: styles.branchIndentGuide }), node.children.map((child, index) => /* @__PURE__ */ jsx(TreeViewDSNode, {
					node: child,
					indexPath: [...indexPath, index],
					styles,
					classNames
				}, child.id))]
			})]
		}) : /* @__PURE__ */ jsx(TreeView.Item, {
			className: cx(styles.item, classNames.item),
			children: /* @__PURE__ */ jsx(TreeView.ItemText, {
				className: cx(styles.itemText, classNames.itemText),
				children: node.displayLabel
			})
		})
	});
}
function buildCollectionNodes(nodes) {
	return nodes.map((node) => ({
		id: node.id,
		label: node.accessibleLabel ?? (typeof node.label === "string" ? node.label : node.id),
		displayLabel: node.label,
		children: node.children ? buildCollectionNodes(node.children) : void 0
	}));
}
//#endregion
export { TreeView$1 as TreeView, TreeViewDS, createTreeCollection };

//# sourceMappingURL=tree-view.js.map