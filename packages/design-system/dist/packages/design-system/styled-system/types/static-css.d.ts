//#region styled-system/types/static-css.d.ts
/* eslint-disable */
interface ConditionOptions {
  /**
   * The conditions to generate for the rule.
   * @example ['hover', 'focus']
   */
  conditions?: string[];
  /**
   * Whether to generate responsive styles for the rule.
   */
  responsive?: boolean;
}
interface RecipeRuleVariants {
  [variant: string]: boolean | string[];
}
type RecipeRuleObject = RecipeRuleVariants & ConditionOptions;
type RecipeRule = '*' | RecipeRuleObject;
//#endregion
export { RecipeRule, RecipeRuleObject };
//# sourceMappingURL=static-css.d.ts.map