/** Default pixel size of the HTML root element, used for rem/em conversions. */
const BASE_PX = 16;

/** Converts a pixel value to rem, rounded to 2 decimal places. */
export const convertPxToRem = (px: number): number => Number(((1 / BASE_PX) * px).toFixed(2));

/** Converts a rem value back to pixels. */
export const convertRemToPx = (rem: number): number => Number(rem / (1 / BASE_PX));

/** Formats a pixel value as a `px` string — e.g. `768` → `'768px'`. */
export const toPixelString = (value: number): string => `${value}px`;

/** Converts a pixel value to a numeric rem value. Used as a `mapBreakpoints` callback. */
export const toRemNumeric = (px: number): number => convertPxToRem(px);

/**
 * Converts a pixel value to a numeric em value. In this context em === rem (assumes no inherited font-size
 * scaling). Used as a `mapBreakpoints` callback.
 */
export const toEmNumeric = (px: number): number => convertPxToRem(px);

/**
 * Returns a CSS `min-width` media query condition string (no `@media` wrapper).
 *
 * PX is used here for simplicity and Carbon/Radix compatibility. See:
 * https://betterprogramming.pub/px-em-or-rem-examining-media-query-units-in-2021-e00cf37b91a9
 *
 * @example
 *   toMediaMinWidth(768) → '(min-width: 768px)'
 */
export const toMediaMinWidth = (value: number): string => `(min-width: ${value}px)`;

/**
 * Returns a CSS `max-width` media query condition string (no `@media` wrapper).
 *
 * @example
 *   toMediaMaxWidth(1024) → '(max-width: 1024px)'
 */
export const toMediaMaxWidth = (value: number): string => `(max-width: ${value}px)`;
