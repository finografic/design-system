import { SlotRecipeRuntimeFn, SlotRecipeVariantRecord } from "../../packages/design-system/styled-system/types/recipe.js";
import { ScrollAreaRecipeProps } from "./scroll-area.recipe.js";
import React, { ReactNode } from "react";
import { ScrollArea, ScrollAreaScrollToDetails } from "@ark-ui/react";
import * as _$_styled_system_jsx0 from "@styled-system/jsx";

//#region src/components/scroll-area/scroll-area.d.ts
/**
 * Styled Ark **ScrollArea** compound — each part is wired to `scrollAreaRecipe` via context.
 *
 * Provides custom scrollbars that match the design system theme. Scrollbars appear on hover and use
 * `data-orientation` to distinguish vertical vs horizontal.
 *
 * @example
 *   ```tsx
 *   import { ScrollArea } from '@finografic/design-system/components';
 *
 *   <ScrollArea.Root style={{ height: '300px' }}>
 *     <ScrollArea.Viewport>
 *       <ScrollArea.Content>{longContent}</ScrollArea.Content>
 *     </ScrollArea.Viewport>
 *     <ScrollArea.Scrollbar orientation="vertical">
 *       <ScrollArea.Thumb />
 *     </ScrollArea.Scrollbar>
 *     <ScrollArea.Corner />
 *   </ScrollArea.Root>;
 *   ```;
 */
declare const ScrollArea$1: {
  /** Root — `onScrollPositionChange`, `dir`, `scrollbarSize`. */Root: _$_styled_system_jsx0.StyleContextProvider<React.ForwardRefExoticComponent<ScrollArea.RootProps & React.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"root" | "content" | "scrollbar" | "viewport" | "thumb" | "corner", SlotRecipeVariantRecord<"root" | "content" | "scrollbar" | "viewport" | "thumb" | "corner">>>; /** Clips the content while preserving the ability to scroll. */
  Viewport: _$_styled_system_jsx0.StyleContextConsumer<React.ForwardRefExoticComponent<ScrollArea.ViewportProps & React.RefAttributes<HTMLDivElement>>>; /** Inner content wrapper — minimum width ensures horizontal scroll works correctly. */
  Content: _$_styled_system_jsx0.StyleContextConsumer<React.ForwardRefExoticComponent<ScrollArea.ContentProps & React.RefAttributes<HTMLDivElement>>>; /** Custom scrollbar track — pass `orientation="vertical" | "horizontal"`. */
  Scrollbar: _$_styled_system_jsx0.StyleContextConsumer<React.ForwardRefExoticComponent<ScrollArea.ScrollbarProps & React.RefAttributes<HTMLDivElement>>>; /** The draggable scrollbar thumb inside `Scrollbar`. */
  Thumb: _$_styled_system_jsx0.StyleContextConsumer<React.ForwardRefExoticComponent<ScrollArea.ThumbProps & React.RefAttributes<HTMLDivElement>>>; /** Corner piece shown when both scrollbars are present. */
  Corner: _$_styled_system_jsx0.StyleContextConsumer<React.ForwardRefExoticComponent<ScrollArea.CornerProps & React.RefAttributes<HTMLDivElement>>>;
};
type ScrollAreaDSProps = ScrollAreaRecipeProps & {
  /** Content to scroll. */children: ReactNode; /** Text direction. */
  dir?: 'ltr' | 'rtl'; /** Merged onto the root element after recipe classes. */
  className?: string; /** Inline style applied to the root element (e.g. `{ height: '300px' }`). */
  style?: React.CSSProperties;
};
/**
 * Design-system convenience scroll area — wraps content in a styled custom scrollbar container.
 * **`ScrollArea`** stays the styled compound for full composition; **`ScrollAreaDS`** = simple passthrough
 * with both vertical and horizontal scrollbars included.
 *
 * @example
 *   ```tsx
 *   import { ScrollAreaDS } from '@finografic/design-system/components';
 *
 *   <ScrollAreaDS style={{ height: '300px' }}>
 *     <div style={{ height: '1000px' }}>Tall content here</div>
 *   </ScrollAreaDS>;
 *   ```;
 */
declare const ScrollAreaDS: React.ForwardRefExoticComponent<{
  /** Content to scroll. */children: ReactNode; /** Text direction. */
  dir?: "ltr" | "rtl"; /** Merged onto the root element after recipe classes. */
  className?: string; /** Inline style applied to the root element (e.g. `{ height: '300px' }`). */
  style?: React.CSSProperties;
} & React.RefAttributes<HTMLDivElement>>;
//#endregion
export { ScrollArea$1 as ScrollArea, ScrollAreaDS, ScrollAreaDSProps, type ScrollAreaScrollToDetails };
//# sourceMappingURL=scroll-area.d.ts.map