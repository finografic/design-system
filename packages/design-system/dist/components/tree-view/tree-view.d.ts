import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import "../../packages/design-system/styled-system/types/index.js";
import { TreeViewRecipeProps } from "./tree-view.recipe.js";
import { ReactNode } from "react";
import { TreeView, TreeViewExpandedChangeDetails, TreeViewSelectionChangeDetails, createTreeCollection } from "@ark-ui/react/tree-view";
//#region src/components/tree-view/tree-view.d.ts
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
declare const TreeView$1: {
  /** Root — `collection`, `selectedValue`, `onSelectionChange`, `selectionMode`, plus `size`. */
  Root: import("@styled-system/jsx").StyleContextProvider<TreeView.RootComponent<{}>, SlotRecipeRuntimeFn<"branch" | "branchContent" | "branchControl" | "branchIndentGuide" | "branchIndicator" | "branchText" | "item" | "itemIndicator" | "itemText" | "label" | "root" | "tree", {
    size: {
      sm: {
        root: {
          '--tree-item-gap': "0.375rem";
          '--tree-indentation': "0.875rem";
          '--tree-padding-inline': "0.5rem";
          '--tree-padding-block': "0.25rem";
          '--tree-icon-size': "0.875rem";
        };
        tree: {
          fontSize: "xs";
        };
        branchControl: {
          fontSize: "xs";
        };
        branchIndicator: {
          '& svg': {
            w: "3";
            h: "3";
          };
        };
        item: {
          fontSize: "xs";
        };
      };
      md: {
        root: {
          '--tree-item-gap': "0.5rem";
          '--tree-indentation': "1rem";
          '--tree-padding-inline': "0.75rem";
          '--tree-padding-block': "0.375rem";
          '--tree-icon-size': "1rem";
        };
        tree: {
          fontSize: "sm";
        };
        branchControl: {
          fontSize: "sm";
        };
        item: {
          fontSize: "sm";
        };
      };
      lg: {
        root: {
          '--tree-item-gap': "0.625rem";
          '--tree-indentation': "1.25rem";
          '--tree-padding-inline': "1rem";
          '--tree-padding-block': "0.5rem";
          '--tree-icon-size': "1.125rem";
        };
        tree: {
          fontSize: "md";
        };
        branchControl: {
          fontSize: "md";
        };
        branchIndicator: {
          '& svg': {
            w: "4";
            h: "4";
          };
        };
        item: {
          fontSize: "md";
        };
      };
    };
  }>>;
  /** Root with external machine state from `useTreeView`. */
  RootProvider: import("@styled-system/jsx").StyleContextProvider<TreeView.RootProviderComponent<{}>, SlotRecipeRuntimeFn<"branch" | "branchContent" | "branchControl" | "branchIndentGuide" | "branchIndicator" | "branchText" | "item" | "itemIndicator" | "itemText" | "label" | "root" | "tree", {
    size: {
      sm: {
        root: {
          '--tree-item-gap': "0.375rem";
          '--tree-indentation': "0.875rem";
          '--tree-padding-inline': "0.5rem";
          '--tree-padding-block': "0.25rem";
          '--tree-icon-size': "0.875rem";
        };
        tree: {
          fontSize: "xs";
        };
        branchControl: {
          fontSize: "xs";
        };
        branchIndicator: {
          '& svg': {
            w: "3";
            h: "3";
          };
        };
        item: {
          fontSize: "xs";
        };
      };
      md: {
        root: {
          '--tree-item-gap': "0.5rem";
          '--tree-indentation': "1rem";
          '--tree-padding-inline': "0.75rem";
          '--tree-padding-block': "0.375rem";
          '--tree-icon-size': "1rem";
        };
        tree: {
          fontSize: "sm";
        };
        branchControl: {
          fontSize: "sm";
        };
        item: {
          fontSize: "sm";
        };
      };
      lg: {
        root: {
          '--tree-item-gap': "0.625rem";
          '--tree-indentation': "1.25rem";
          '--tree-padding-inline': "1rem";
          '--tree-padding-block': "0.5rem";
          '--tree-icon-size': "1.125rem";
        };
        tree: {
          fontSize: "md";
        };
        branchControl: {
          fontSize: "md";
        };
        branchIndicator: {
          '& svg': {
            w: "4";
            h: "4";
          };
        };
        item: {
          fontSize: "md";
        };
      };
    };
  }>>;
  /** Text label above the tree. */
  Label: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<TreeView.LabelProps & import("react").RefAttributes<HTMLHeadingElement>>>;
  /** The scrollable tree container — renders as `<ul>`. */
  Tree: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<TreeView.TreeProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** A branch node that has children — wraps BranchControl + BranchContent. */
  Branch: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<TreeView.BranchProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Clickable header row of a branch — place BranchIndicator + BranchText inside. */
  BranchControl: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<TreeView.BranchControlProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Rotating chevron that signals expand/collapse state. */
  BranchIndicator: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<TreeView.BranchIndicatorProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Text + optional icon content inside BranchControl. */
  BranchText: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<TreeView.BranchTextProps & import("react").RefAttributes<HTMLSpanElement>>>;
  /** Collapsible content area containing child nodes. */
  BranchContent: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<TreeView.BranchContentProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Vertical line guide that visually connects children to their parent. */
  BranchIndentGuide: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<TreeView.BranchIndentGuideProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** A leaf node — renders as `<li>`. */
  Item: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<TreeView.ItemProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Text + optional icon content inside Item. */
  ItemText: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<TreeView.ItemTextProps & import("react").RefAttributes<HTMLSpanElement>>>;
  /** Optional selection indicator inside Item. */
  ItemIndicator: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<TreeView.ItemIndicatorProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Context provider for a node — required wrapper for Branch and Item. */
  NodeProvider: typeof TreeView.NodeProvider;
  /** Render prop that exposes node state (expanded, selected, loading) to children. */
  NodeContext: (props: TreeView.NodeContextProps) => ReactNode;
};
/** A node descriptor for {@link TreeViewDS}. */
interface TreeViewNode {
  /** Unique identifier — used as both tree value and accessibility label. */
  id: string;
  /** Display label. */
  label: ReactNode;
  /** String form of the label for accessibility (defaults to `id` if omitted). */
  accessibleLabel?: string;
  /** Child nodes — presence of this field marks the node as a branch. */
  children?: TreeViewNode[];
}
/** Slot class overrides for {@link TreeViewDS}. */
interface TreeViewDSClassNames {
  root?: string;
  label?: string;
  tree?: string;
  branchControl?: string;
  branchText?: string;
  item?: string;
  itemText?: string;
}
type TreeViewDSProps = TreeViewRecipeProps & {
  /** Tree nodes to render. Nested `children` create branch nodes. */
  nodes: TreeViewNode[];
  /** Controlled selected node IDs. */
  selectedValue?: string[];
  /** Default selected node IDs (uncontrolled). */
  defaultSelectedValue?: string[];
  /** Allow selecting multiple nodes simultaneously. */
  multiple?: boolean;
  /** Called when the selection changes. */
  onSelectionChange?: (details: {
    selectedValue: string[];
  }) => void;
  /** Called when a branch is expanded or collapsed. */
  onExpandedChange?: (details: {
    expandedValue: string[];
  }) => void;
  /** Optional label above the tree. */
  label?: ReactNode;
  /** Per-slot class overrides. */
  classNames?: TreeViewDSClassNames;
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
declare const TreeViewDS: import("react").ForwardRefExoticComponent<{
  size?: "lg" | "md" | "sm" | undefined;
} & {
  /** Tree nodes to render. Nested `children` create branch nodes. */
  nodes: TreeViewNode[];
  /** Controlled selected node IDs. */
  selectedValue?: string[];
  /** Default selected node IDs (uncontrolled). */
  defaultSelectedValue?: string[];
  /** Allow selecting multiple nodes simultaneously. */
  multiple?: boolean;
  /** Called when the selection changes. */
  onSelectionChange?: (details: {
    selectedValue: string[];
  }) => void;
  /** Called when a branch is expanded or collapsed. */
  onExpandedChange?: (details: {
    expandedValue: string[];
  }) => void;
  /** Optional label above the tree. */
  label?: ReactNode;
  /** Per-slot class overrides. */
  classNames?: TreeViewDSClassNames;
} & import("react").RefAttributes<HTMLDivElement>>;
//#endregion
export { TreeView$1 as TreeView, TreeViewDS, TreeViewDSClassNames, TreeViewDSProps, type TreeViewExpandedChangeDetails, TreeViewNode, type TreeViewSelectionChangeDetails, createTreeCollection };
//# sourceMappingURL=tree-view.d.ts.map