import { Popover as ArkPopover } from '@ark-ui/react';
import { createStyleContext } from '@styled-system/jsx';

import { popoverRecipe } from './popover.recipe';

// ── Compound (createStyleContext) ─────────────────────────────────────────────

const { withRootProvider, withContext } = createStyleContext(popoverRecipe);

/**
 * Styled Ark **Popover** compound — each part is wired to `popoverRecipe` via context.
 *
 * Ark handles all a11y: dialog role, optional focus trap,
 * `aria-expanded`, `aria-controls`, Escape to close, click-outside to dismiss.
 * Recipe variant props are accepted directly on `Popover.Root`.
 *
 * @example
 * ```tsx
 * import { Popover } from '@finografic/design-system/components';
 *
 * <Popover.Root>
 *   <Popover.Trigger asChild>
 *     <button>Open popover</button>
 *   </Popover.Trigger>
 *   <Popover.Positioner>
 *     <Popover.Content>
 *       <Popover.Arrow><Popover.ArrowTip /></Popover.Arrow>
 *       <Popover.Title>Title</Popover.Title>
 *       <Popover.Description>Some descriptive content.</Popover.Description>
 *       <Popover.CloseTrigger asChild>
 *         <button aria-label="Close" />
 *       </Popover.CloseTrigger>
 *     </Popover.Content>
 *   </Popover.Positioner>
 * </Popover.Root>
 * ```
 */
export const Popover = {
  Root: withRootProvider(ArkPopover.Root),
  RootProvider: withRootProvider(ArkPopover.RootProvider),
  /** Button or element that opens the popover. */
  Trigger: withContext(ArkPopover.Trigger, 'trigger'),
  /** Positioning anchor — no recipe slot, pure layout. */
  Anchor: ArkPopover.Anchor,
  /** Positions the floating content panel. */
  Positioner: withContext(ArkPopover.Positioner, 'positioner'),
  /** The floating panel itself. */
  Content: withContext(ArkPopover.Content, 'content'),
  /** Bold heading at the top of the popover. */
  Title: withContext(ArkPopover.Title, 'title'),
  /** Supporting text below the title. */
  Description: withContext(ArkPopover.Description, 'description'),
  /** Absolutely-positioned close button. */
  CloseTrigger: withContext(ArkPopover.CloseTrigger, 'closeTrigger'),
  /** Arrow wrapper — place inside Content. */
  Arrow: withContext(ArkPopover.Arrow, 'arrow'),
  /** The visible arrow triangle. */
  ArrowTip: withContext(ArkPopover.ArrowTip, 'arrowTip'),
  /** Ark render-prop context. */
  Context: ArkPopover.Context,
};

export type { PopoverOpenChangeDetails } from '@ark-ui/react';
