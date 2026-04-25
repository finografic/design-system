import { Toggle as ArkToggle } from '@ark-ui/react';
import { cx } from '@styled-system/css';
import { createStyleContext } from '@styled-system/jsx';
import { forwardRef } from 'react';
import type { ToggleRecipeProps } from './toggle.recipe';
import type { ReactNode } from 'react';

import { toggleRecipe } from './toggle.recipe';

// ── Compound (createStyleContext) ─────────────────────────────────────────────

const { withProvider, withContext } = createStyleContext(toggleRecipe);

/**
 * Styled Ark **Toggle** compound — each part is wired to `toggleRecipe` via context.
 *
 * A single on/off button. `data-state="on"` when pressed; `data-state="off"` when not. Ark handles all a11y:
 * `button` role with `aria-pressed`. Variant props (`size`) go on **`Toggle.Root`**.
 *
 * @example
 *   ```tsx
 *   import { Toggle } from '@finografic/design-system/components';
 *
 *   <Toggle.Root defaultPressed={false} onPressedChange={(pressed) => setMuted(pressed)}>
 *     <Toggle.Indicator>
 *       <BoldIcon />
 *     </Toggle.Indicator>
 *     Bold
 *   </Toggle.Root>;
 *   ```;
 */
export const Toggle = {
  /** Root — `pressed` / `defaultPressed` / `onPressedChange`, `disabled`, plus `size`. */
  Root: withProvider(ArkToggle.Root, 'root'),
  /** Optional icon/indicator slot inside the root button. */
  Indicator: withContext(ArkToggle.Indicator, 'indicator'),
};

// ── ToggleDS — convenience wrapper ────────────────────────────────────────────

export type ToggleDSProps = ToggleRecipeProps & {
  /** Controlled pressed state. */
  pressed?: boolean;
  /** Default pressed state (uncontrolled). */
  defaultPressed?: boolean;
  /** Called when pressed state changes — receives a bare boolean (not a detail object). */
  onChange?: (pressed: boolean) => void;
  /** Disables the toggle. */
  disabled?: boolean;
  /** Content rendered inside the toggle button. */
  children?: ReactNode;
  /** Merged onto the root element after recipe classes. */
  className?: string;
};

/**
 * Design-system convenience toggle — single on/off button with accent pressed state. **`Toggle`** stays the
 * styled compound for full composition; **`ToggleDS`** = packaged DS API (`onChange(pressed: boolean)` —
 * Toggle fires a bare boolean, not a detail object).
 *
 * @example
 *   ```tsx
 *   import { ToggleDS } from '@finografic/design-system/components';
 *
 *   <ToggleDS defaultPressed={false} onChange={(pressed) => setMuted(pressed)}>
 *     Mute
 *   </ToggleDS>;
 *   ```;
 */
export const ToggleDS = forwardRef<HTMLButtonElement, ToggleDSProps>(
  ({ pressed, defaultPressed, onChange, disabled, children, size = 'md', className }, ref) => {
    const styles = toggleRecipe({ size });

    return (
      <ArkToggle.Root
        ref={ref}
        pressed={pressed}
        defaultPressed={defaultPressed}
        onPressedChange={(p) => onChange?.(p)}
        disabled={disabled}
        className={cx(styles.root, className)}
      >
        {children}
      </ArkToggle.Root>
    );
  },
);

ToggleDS.displayName = 'ToggleDS';
