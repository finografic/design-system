import { Popover as ArkPopover } from '@ark-ui/react';
import { cx } from '@styled-system/css';
import { createStyleContext } from '@styled-system/jsx';
import { forwardRef } from 'react';
import type { ReactNode } from 'react';

import { popoverRecipe } from './popover.recipe';

// ── Compound (createStyleContext) ─────────────────────────────────────────────

const { withRootProvider, withContext } = createStyleContext(popoverRecipe);

/**
 * Styled Ark **Popover** compound — each part is wired to `popoverRecipe` via context.
 *
 * Ark handles all a11y: dialog role, optional focus trap, `aria-expanded`, `aria-controls`, Escape to close,
 * click-outside to dismiss. Recipe variant props are accepted directly on `Popover.Root`.
 *
 * @example
 *   ```tsx
 *   import { Popover } from '@finografic/design-system/components';
 *
 *   <Popover.Root>
 *     <Popover.Trigger asChild>
 *       <button>Open popover</button>
 *     </Popover.Trigger>
 *     <Popover.Positioner>
 *       <Popover.Content>
 *         <Popover.Arrow>
 *           <Popover.ArrowTip />
 *         </Popover.Arrow>
 *         <Popover.Title>Title</Popover.Title>
 *         <Popover.Description>Some descriptive content.</Popover.Description>
 *         <Popover.CloseTrigger asChild>
 *           <button aria-label="Close" />
 *         </Popover.CloseTrigger>
 *       </Popover.Content>
 *     </Popover.Positioner>
 *   </Popover.Root>;
 *   ```;
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

// ── PopoverDS — convenience wrapper ──────────────────────────────────────────

/** Slot class overrides for {@link PopoverDS}. */
export interface PopoverDSClassNames {
  positioner?: string;
  content?: string;
  title?: string;
  description?: string;
  closeTrigger?: string;
  arrow?: string;
  arrowTip?: string;
}

export interface PopoverDSProps {
  /** The trigger element — rendered inside `Popover.Trigger asChild`. */
  trigger: ReactNode;
  /** Title rendered at the top of the popover. */
  title?: ReactNode;
  /** Description text rendered below the title. */
  description?: ReactNode;
  /** Body content of the popover. */
  children?: ReactNode;
  /** Controlled open state. */
  open?: boolean;
  /** Called when the popover opens or closes. */
  onOpenChange?: (open: boolean) => void;
  /** Whether to show the built-in close button. @default false */
  closeButton?: boolean;
  /** Whether to show the arrow. @default false */
  arrow?: boolean;
  /** Per-slot class overrides. */
  classNames?: PopoverDSClassNames;
}

/**
 * Design-system convenience popover — pass a `trigger` and content for the common case. **`Popover`** stays
 * the styled compound; **`PopoverDS`** = packaged DS API with normalized `onOpenChange(open: boolean)`.
 *
 * @example
 *   ```tsx
 *   import { PopoverDS } from '@finografic/design-system/components';
 *
 *   <PopoverDS
 *     trigger={<Button variant="outline">Open</Button>}
 *     title="Settings"
 *     description="Adjust your preferences below."
 *     onOpenChange={(open) => console.log(open)}
 *   >
 *     <input type="text" />
 *   </PopoverDS>;
 *   ```;
 */
export const PopoverDS = forwardRef<HTMLButtonElement, PopoverDSProps>(
  (
    {
      trigger,
      title,
      description,
      children,
      open,
      onOpenChange,
      closeButton = false,
      arrow = false,
      classNames = {},
    },
    ref,
  ) => {
    const styles = popoverRecipe();

    return (
      <ArkPopover.Root open={open} onOpenChange={({ open: o }) => onOpenChange?.(o)}>
        <ArkPopover.Trigger ref={ref} asChild>
          {trigger}
        </ArkPopover.Trigger>
        <ArkPopover.Positioner className={classNames.positioner}>
          <ArkPopover.Content className={cx(styles.content, classNames.content)}>
            {arrow && (
              <ArkPopover.Arrow className={classNames.arrow}>
                <ArkPopover.ArrowTip className={classNames.arrowTip} />
              </ArkPopover.Arrow>
            )}
            {closeButton && (
              <ArkPopover.CloseTrigger className={cx(styles.closeTrigger, classNames.closeTrigger)}>
                ✕
              </ArkPopover.CloseTrigger>
            )}
            {title && (
              <ArkPopover.Title className={cx(styles.title, classNames.title)}>{title}</ArkPopover.Title>
            )}
            {description && (
              <ArkPopover.Description className={cx(styles.description, classNames.description)}>
                {description}
              </ArkPopover.Description>
            )}
            {children}
          </ArkPopover.Content>
        </ArkPopover.Positioner>
      </ArkPopover.Root>
    );
  },
);

PopoverDS.displayName = 'PopoverDS';
