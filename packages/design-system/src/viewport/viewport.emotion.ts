import type { ScreenClass } from './viewport.types';

import { BREAKPOINTS } from './viewport.breakpoints';

/** All breakpoint keys in definition order — useful for iteration. */
export const sizes = Object.keys(BREAKPOINTS) as ScreenClass[];

/**
 * `@media` min-width wrappers keyed by breakpoint name.
 *
 * Intended for CSS-in-JS libraries (Emotion, styled-components, etc.).
 *
 * @example
 *   min.md → '@media (min-width: 768px)'
 */
export const min = Object.fromEntries(
  Object.entries(BREAKPOINTS).map(([k, v]) => [k, `@media (min-width: ${v}px)`]),
) as Record<ScreenClass, string>;

/**
 * `@media` max-width wrappers keyed by breakpoint name.
 *
 * @example
 *   max.lg → '@media (max-width: 1024px)'
 */
export const max = Object.fromEntries(
  Object.entries(BREAKPOINTS).map(([k, v]) => [k, `@media (max-width: ${v}px)`]),
) as Record<ScreenClass, string>;
