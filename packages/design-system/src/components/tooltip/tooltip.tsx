import { Tooltip as ArkTooltip } from '@ark-ui/react';
import { createStyleContext } from '@styled-system/jsx';

import { tooltipRecipe } from './tooltip.recipe';

// ── Compound (createStyleContext) ─────────────────────────────────────────────

const { withRootProvider, withContext } = createStyleContext(tooltipRecipe);

/**
 * Styled Ark **Tooltip** compound — each part is wired to `tooltipRecipe` via context.
 *
 * Ark handles all a11y: tooltip role, `aria-describedby`,
 * hover/focus show/hide, configurable open/close delay.
 * Recipe variant props are accepted directly on `Tooltip.Root`.
 *
 * @example
 * ```tsx
 * import { Tooltip } from '@finografic/design-system/components';
 *
 * <Tooltip.Root openDelay={300} closeDelay={100}>
 *   <Tooltip.Trigger asChild>
 *     <button aria-label="Help"><InfoIcon /></button>
 *   </Tooltip.Trigger>
 *   <Tooltip.Positioner>
 *     <Tooltip.Content>
 *       <Tooltip.Arrow><Tooltip.ArrowTip /></Tooltip.Arrow>
 *       Helpful hint text
 *     </Tooltip.Content>
 *   </Tooltip.Positioner>
 * </Tooltip.Root>
 * ```
 */
export const Tooltip = {
  Root: withRootProvider(ArkTooltip.Root),
  RootProvider: withRootProvider(ArkTooltip.RootProvider),
  /** Element that triggers the tooltip on hover/focus. */
  Trigger: withContext(ArkTooltip.Trigger, 'trigger'),
  /** Positions the floating content. */
  Positioner: withContext(ArkTooltip.Positioner, 'positioner'),
  /** The tooltip bubble. */
  Content: withContext(ArkTooltip.Content, 'content'),
  /** Arrow wrapper — place inside Content. */
  Arrow: withContext(ArkTooltip.Arrow, 'arrow'),
  /** The visible arrow triangle. */
  ArrowTip: withContext(ArkTooltip.ArrowTip, 'arrowTip'),
  /** Ark render-prop context. */
  Context: ArkTooltip.Context,
};

export type { TooltipOpenChangeDetails } from '@ark-ui/react';
