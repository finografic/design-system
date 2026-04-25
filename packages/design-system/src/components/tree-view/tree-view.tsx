import { ChevronRightIcon } from '@finografic/icons';

import { createTreeCollection, TreeView as ArkTreeView } from '@ark-ui/react/tree-view';
import { cx } from '@styled-system/css';
import { createStyleContext } from '@styled-system/jsx';
import { forwardRef } from 'react';
import type { ReactNode } from 'react';

import type { TreeViewRecipeProps } from './tree-view.recipe';
import { treeViewRecipe } from './tree-view.recipe';

// ── Compound (createStyleContext) ─────────────────────────────────────────────

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
export const TreeView = {
  /** Root — `collection`, `selectedValue`, `onSelectionChange`, `selectionMode`, plus `size`. */
  Root: withProvider(ArkTreeView.Root, 'root'),
  /** Root with external machine state from `useTreeView`. */
  RootProvider: withProvider(ArkTreeView.RootProvider, 'root'),
  /** Text label above the tree. */
  Label: withContext(ArkTreeView.Label, 'label'),
  /** The scrollable tree container — renders as `<ul>`. */
  Tree: withContext(ArkTreeView.Tree, 'tree'),
  /** A branch node that has children — wraps BranchControl + BranchContent. */
  Branch: withContext(ArkTreeView.Branch, 'branch'),
  /** Clickable header row of a branch — place BranchIndicator + BranchText inside. */
  BranchControl: withContext(ArkTreeView.BranchControl, 'branchControl'),
  /** Rotating chevron that signals expand/collapse state. */
  BranchIndicator: withContext(ArkTreeView.BranchIndicator, 'branchIndicator'),
  /** Text + optional icon content inside BranchControl. */
  BranchText: withContext(ArkTreeView.BranchText, 'branchText'),
  /** Collapsible content area containing child nodes. */
  BranchContent: withContext(ArkTreeView.BranchContent, 'branchContent'),
  /** Vertical line guide that visually connects children to their parent. */
  BranchIndentGuide: withContext(ArkTreeView.BranchIndentGuide, 'branchIndentGuide'),
  /** A leaf node — renders as `<li>`. */
  Item: withContext(ArkTreeView.Item, 'item'),
  /** Text + optional icon content inside Item. */
  ItemText: withContext(ArkTreeView.ItemText, 'itemText'),
  /** Optional selection indicator inside Item. */
  ItemIndicator: withContext(ArkTreeView.ItemIndicator, 'itemIndicator'),
  /** Context provider for a node — required wrapper for Branch and Item. */
  NodeProvider: ArkTreeView.NodeProvider,
  /** Render prop that exposes node state (expanded, selected, loading) to children. */
  NodeContext: ArkTreeView.NodeContext,
};

// ── TreeViewDS — convenience wrapper ─────────────────────────────────────────

/** A node descriptor for {@link TreeViewDS}. */
export interface TreeViewNode {
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
export interface TreeViewDSClassNames {
  root?: string;
  label?: string;
  tree?: string;
  branchControl?: string;
  branchText?: string;
  item?: string;
  itemText?: string;
}

export type TreeViewDSProps = TreeViewRecipeProps & {
  /** Tree nodes to render. Nested `children` create branch nodes. */
  nodes: TreeViewNode[];
  /** Controlled selected node IDs. */
  selectedValue?: string[];
  /** Default selected node IDs (uncontrolled). */
  defaultSelectedValue?: string[];
  /** Allow selecting multiple nodes simultaneously. */
  multiple?: boolean;
  /** Called when the selection changes. */
  onSelectionChange?: (details: { selectedValue: string[] }) => void;
  /** Called when a branch is expanded or collapsed. */
  onExpandedChange?: (details: { expandedValue: string[] }) => void;
  /** Optional label above the tree. */
  label?: ReactNode;
  /** Per-slot class overrides. */
  classNames?: TreeViewDSClassNames;
};

/** Internal type for collection nodes. */
interface CollectionNode {
  id: string;
  label: string;
  displayLabel: ReactNode;
  children?: CollectionNode[];
}

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
export const TreeViewDS = forwardRef<HTMLDivElement, TreeViewDSProps>(
  (
    {
      nodes,
      selectedValue,
      defaultSelectedValue,
      multiple,
      onSelectionChange,
      onExpandedChange,
      label,
      size = 'md',
      classNames = {},
    },
    ref,
  ) => {
    const styles = treeViewRecipe({ size });

    // Build a collection-compatible structure from DS nodes
    const collectionNodes: CollectionNode[] = buildCollectionNodes(nodes);

    const collection = createTreeCollection<CollectionNode>({
      nodeToValue: (node) => node.id,
      nodeToString: (node) => node.label,
      rootNode: {
        id: '__ROOT__',
        label: '',
        displayLabel: null,
        children: collectionNodes,
      },
    });

    return (
      <ArkTreeView.Root
        ref={ref}
        collection={collection}
        selectedValue={selectedValue}
        defaultSelectedValue={defaultSelectedValue}
        selectionMode={multiple ? 'multiple' : 'single'}
        onSelectionChange={onSelectionChange}
        onExpandedChange={onExpandedChange}
        className={cx(styles.root, classNames.root)}
      >
        {label && (
          <ArkTreeView.Label className={cx(styles.label, classNames.label)}>{label}</ArkTreeView.Label>
        )}
        <ArkTreeView.Tree className={cx(styles.tree, classNames.tree)}>
          {collection.rootNode.children?.map((node, index) => (
            <TreeViewDSNode
              key={node.id}
              node={node}
              indexPath={[index]}
              styles={styles}
              classNames={classNames}
            />
          ))}
        </ArkTreeView.Tree>
      </ArkTreeView.Root>
    );
  },
);

TreeViewDS.displayName = 'TreeViewDS';

// ── Internal recursive node renderer ─────────────────────────────────────────

interface TreeViewNodeProps {
  node: CollectionNode;
  indexPath: number[];
  styles: ReturnType<typeof treeViewRecipe>;
  classNames: TreeViewDSClassNames;
}

function TreeViewDSNode({ node, indexPath, styles, classNames }: TreeViewNodeProps) {
  return (
    <ArkTreeView.NodeProvider node={node} indexPath={indexPath}>
      {node.children ? (
        <ArkTreeView.Branch className={styles.branch}>
          <ArkTreeView.BranchControl className={cx(styles.branchControl, classNames.branchControl)}>
            <ArkTreeView.BranchIndicator className={styles.branchIndicator}>
              <ChevronRightIcon aria-hidden />
            </ArkTreeView.BranchIndicator>
            <ArkTreeView.BranchText className={cx(styles.branchText, classNames.branchText)}>
              {node.displayLabel}
            </ArkTreeView.BranchText>
          </ArkTreeView.BranchControl>
          <ArkTreeView.BranchContent className={styles.branchContent}>
            <ArkTreeView.BranchIndentGuide className={styles.branchIndentGuide} />
            {node.children.map((child, index) => (
              <TreeViewDSNode
                key={child.id}
                node={child}
                indexPath={[...indexPath, index]}
                styles={styles}
                classNames={classNames}
              />
            ))}
          </ArkTreeView.BranchContent>
        </ArkTreeView.Branch>
      ) : (
        <ArkTreeView.Item className={cx(styles.item, classNames.item)}>
          <ArkTreeView.ItemText className={cx(styles.itemText, classNames.itemText)}>
            {node.displayLabel}
          </ArkTreeView.ItemText>
        </ArkTreeView.Item>
      )}
    </ArkTreeView.NodeProvider>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function buildCollectionNodes(nodes: TreeViewNode[]): CollectionNode[] {
  return nodes.map((node) => ({
    id: node.id,
    label: node.accessibleLabel ?? (typeof node.label === 'string' ? node.label : node.id),
    displayLabel: node.label,
    children: node.children ? buildCollectionNodes(node.children) : undefined,
  }));
}

// ── Re-exports ─────────────────────────────────────────────────────────────────

export { createTreeCollection };
export type { TreeViewExpandedChangeDetails, TreeViewSelectionChangeDetails } from '@ark-ui/react/tree-view';
