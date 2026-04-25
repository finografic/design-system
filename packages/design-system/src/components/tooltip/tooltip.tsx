import { Tooltip as ArkTooltip } from '@ark-ui/react';
import { cx } from '@styled-system/css';
import { createStyleContext } from '@styled-system/jsx';
import { forwardRef } from 'react';
import type { ReactNode } from 'react';

import { tooltipRecipe } from './tooltip.recipe';

// ── Compound (createStyleContext) ─────────────────────────────────────────────

const { withRootProvider, withContext } = createStyleContext(tooltipRecipe);

/**
 * Styled Ark **Tooltip** compound — each part is wired to `tooltipRecipe` via context.
 *
 * Ark handles all a11y: tooltip role, `aria-describedby`, hover/focus show/hide, configurable open/close
 * delay. Recipe variant props are accepted directly on `Tooltip.Root`.
 *
 * @example
 *   ```tsx
 *   import { Tooltip } from '@finografic/design-system/components';
 *
 *   <Tooltip.Root openDelay={300} closeDelay={100}>
 *     <Tooltip.Trigger asChild>
 *       <button aria-label="Help">
 *         <InfoIcon />
 *       </button>
 *     </Tooltip.Trigger>
 *     <Tooltip.Positioner>
 *       <Tooltip.Content>
 *         <Tooltip.Arrow>
 *           <Tooltip.ArrowTip />
 *         </Tooltip.Arrow>
 *         Helpful hint text
 *       </Tooltip.Content>
 *     </Tooltip.Positioner>
 *   </Tooltip.Root>;
 *   ```;
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

// ── TooltipDS — convenience wrapper ──────────────────────────────────────────

/** Slot class overrides for {@link TooltipDS}. */
export interface TooltipDSClassNames {
  positioner?: string;
  content?: string;
  arrow?: string;
  arrowTip?: string;
}

export interface TooltipDSProps {
  /** The trigger element — rendered inside `Tooltip.Trigger asChild`. */
  trigger: ReactNode;
  /** The tooltip content. */
  content: ReactNode;
  /** Delay in ms before the tooltip opens. @default 1000 */
  openDelay?: number;
  /** Delay in ms before the tooltip closes. @default 500 */
  closeDelay?: number;
  /** Controlled open state. */
  open?: boolean;
  /** Called when the tooltip opens or closes. */
  onOpenChange?: (open: boolean) => void;
  /** Whether to show the arrow. @default false */
  arrow?: boolean;
  /** Per-slot class overrides. */
  classNames?: TooltipDSClassNames;
}

/**
 * Design-system convenience tooltip — pass a `trigger` element and `content` for the common case.
 * **`Tooltip`** stays the styled compound; **`TooltipDS`** = packaged DS API with normalized
 * `onOpenChange(open: boolean)`.
 *
 * @example
 *   ```tsx
 *   import { TooltipDS } from '@finografic/design-system/components';
 *
 *   <TooltipDS
 *     trigger={
 *       <button aria-label="Help">
 *         <InfoIcon />
 *       </button>
 *     }
 *     content="This is a helpful tooltip"
 *     openDelay={300}
 *   />;
 *   ```;
 */
export const TooltipDS = forwardRef<HTMLButtonElement, TooltipDSProps>(
  ({ trigger, content, openDelay, closeDelay, open, onOpenChange, arrow = false, classNames = {} }, ref) => {
    const styles = tooltipRecipe();

    return (
      <ArkTooltip.Root
        open={open}
        openDelay={openDelay}
        closeDelay={closeDelay}
        onOpenChange={({ open: o }) => onOpenChange?.(o)}
      >
        <ArkTooltip.Trigger ref={ref} asChild>
          {trigger}
        </ArkTooltip.Trigger>
        <ArkTooltip.Positioner className={classNames.positioner}>
          <ArkTooltip.Content className={cx(styles.content, classNames.content)}>
            {arrow && (
              <ArkTooltip.Arrow className={classNames.arrow}>
                <ArkTooltip.ArrowTip className={classNames.arrowTip} />
              </ArkTooltip.Arrow>
            )}
            {content}
          </ArkTooltip.Content>
        </ArkTooltip.Positioner>
      </ArkTooltip.Root>
    );
  },
);

TooltipDS.displayName = 'TooltipDS';
