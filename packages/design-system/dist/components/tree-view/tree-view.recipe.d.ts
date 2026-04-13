import { SlotRecipeRuntimeFn } from "../../packages/design-system/styled-system/types/recipe.js";
import { RecipeProps } from "../../types/recipes.types.js";

//#region src/components/tree-view/tree-view.recipe.d.ts
declare const treeViewRecipe: SlotRecipeRuntimeFn<"root" | "item" | "itemIndicator" | "itemText" | "label" | "tree" | "branch" | "branchControl" | "branchIndicator" | "branchText" | "branchContent" | "branchIndentGuide", {
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
}>;
/** Props accepted by `treeViewRecipe`. */
type TreeViewRecipeProps = RecipeProps<typeof treeViewRecipe>;
/** Tree density. */
type TreeViewSize = 'sm' | 'md' | 'lg';
//#endregion
export { TreeViewRecipeProps, TreeViewSize, treeViewRecipe };
//# sourceMappingURL=tree-view.recipe.d.ts.map