//#region src/viewport/viewport.utils.ts
const BASE_PX = 16;
const convertPxToRem = (px) => Number((1 / BASE_PX * px).toFixed(2));
const convertRemToPx = (rem) => Number(rem / (1 / BASE_PX));
const toPixelString = (value) => `${value}px`;
const toRemNumeric = (px) => convertPxToRem(px);
const toEmNumeric = (px) => convertPxToRem(px);
/**
* NOTE: For media queries, PX and EM are most recommended.
* PX is used here for simplicity and Carbon/Radix compatibility.
* See: https://betterprogramming.pub/px-em-or-rem-examining-media-query-units-in-2021-e00cf37b91a9
*/
const toMediaMinWidth = (value) => `(min-width: ${value}px)`;
const toMediaMaxWidth = (value) => `(max-width: ${value}px)`;
//#endregion
export { convertPxToRem, convertRemToPx, toEmNumeric, toMediaMaxWidth, toMediaMinWidth, toPixelString, toRemNumeric };

//# sourceMappingURL=viewport.utils.js.map