import { SlotRecipeRuntimeFn, SlotRecipeVariantRecord } from "../../packages/design-system/styled-system/types/recipe.js";
import * as _$react from "react";
import * as _$_styled_system_jsx0 from "@styled-system/jsx";
import { Splitter, SplitterContextProps, SplitterExpandCollapseDetails, SplitterPanelData, SplitterResizeDetails, SplitterResizeEndDetails, UseSplitterProps, UseSplitterReturn, createSplitterRegistry, getSplitterLayout, useSplitter, useSplitterContext } from "@ark-ui/react/splitter";

//#region src/components/splitter/splitter.d.ts
/**
 * Styled Ark **Splitter** compound — each part is wired to `splitterRecipe` via context.
 *
 * Keyboard-accessible resize splits between panels; Ark handles sizing state and `aria` on triggers.
 * **`Splitter.Root`** holds panel definitions (`panels`) and sizes; **`Splitter.RootProvider`** takes an
 * external **`useSplitter`** machine (`value={splitter}`) when you read sizes outside the pane (e.g. an
 * `<output>`).
 *
 * **`Splitter.Context`** is Ark’s render-prop — forwards machine API; no DOM / recipe slot. Import
 * **`createSplitterRegistry`** and **`getSplitterLayout`** from this package for nested layouts (same as
 * Ark).
 *
 * @example
 *   ```tsx
 *   import { Splitter, useSplitter } from '@finografic/design-system/components';
 *
 *   const splitter = useSplitter({
 *     defaultSize: [50, 50],
 *     panels: [{ id: 'a' }, { id: 'b' }],
 *   });
 *
 *   return (
 *     <div>
 *       <output>{JSON.stringify(splitter.getSizes())}</output>
 *       <Splitter.RootProvider value={splitter}>
 *         <Splitter.Panel id="a">A</Splitter.Panel>
 *         <Splitter.ResizeTrigger id="a:b" aria-label="Resize">
 *           <Splitter.ResizeTriggerIndicator />
 *         </Splitter.ResizeTrigger>
 *         <Splitter.Panel id="b">B</Splitter.Panel>
 *       </Splitter.RootProvider>
 *     </div>
 *   );
 *   ```;
 *
 * @example
 *   ```tsx
 *   import { Splitter } from '@finografic/design-system/components';
 *
 *   <Splitter.Root panels={[{ id: 'a' }, { id: 'b' }]} defaultSize={[50, 50]}>
 *     <Splitter.Panel id="a">A</Splitter.Panel>
 *     <Splitter.ResizeTrigger id="a:b" aria-label="Resize">
 *       <Splitter.ResizeTriggerIndicator />
 *     </Splitter.ResizeTrigger>
 *     <Splitter.Panel id="b">B</Splitter.Panel>
 *   </Splitter.Root>;
 *   ```;
 */
declare const Splitter$1: {
  /** Root — `panels`, `defaultSize`, `orientation`, collapsible options. */Root: _$_styled_system_jsx0.StyleContextProvider<_$react.ForwardRefExoticComponent<Splitter.RootProps & _$react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"root" | "panel" | "resizeTrigger" | "resizeTriggerIndicator", SlotRecipeVariantRecord<"root" | "panel" | "resizeTrigger" | "resizeTriggerIndicator">>>; /** Same outer styles as Root when using **`useSplitter`** + `value` from outside. */
  RootProvider: _$_styled_system_jsx0.StyleContextProvider<_$react.ForwardRefExoticComponent<Splitter.RootProviderProps & _$react.RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"root" | "panel" | "resizeTrigger" | "resizeTriggerIndicator", SlotRecipeVariantRecord<"root" | "panel" | "resizeTrigger" | "resizeTriggerIndicator">>>; /** One pane — requires stable **`id`** matching `panels` config. */
  Panel: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Splitter.PanelProps & _$react.RefAttributes<HTMLDivElement>>>; /** Drag handle between two adjacent panels (`id` = `"leftId:rightId"`). */
  ResizeTrigger: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Splitter.ResizeTriggerProps & _$react.RefAttributes<HTMLButtonElement>>>; /** Visible thumb inside `ResizeTrigger`. */
  ResizeTriggerIndicator: _$_styled_system_jsx0.StyleContextConsumer<_$react.ForwardRefExoticComponent<Splitter.ResizeTriggerIndicatorProps & _$react.RefAttributes<HTMLDivElement>>>; /** Render prop — exposes splitter machine API; no DOM, no recipe slot. */
  Context: (props: Splitter.ContextProps) => _$react.ReactNode;
};
//#endregion
export { Splitter$1 as Splitter, type SplitterContextProps, type SplitterExpandCollapseDetails, type SplitterPanelData, type SplitterResizeDetails, type SplitterResizeEndDetails, type UseSplitterProps, type UseSplitterReturn, createSplitterRegistry, getSplitterLayout, useSplitter, useSplitterContext };
//# sourceMappingURL=splitter.d.ts.map