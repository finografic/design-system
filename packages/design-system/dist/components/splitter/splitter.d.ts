import { SlotRecipeRuntimeFn, SlotRecipeVariantRecord } from "../../packages/design-system/styled-system/types/recipe.js";
import "../../packages/design-system/styled-system/types/index.js";
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
  /** Root — `panels`, `defaultSize`, `orientation`, collapsible options. */
  Root: import("@styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<Splitter.RootProps & import("react").RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"panel" | "resizeTrigger" | "resizeTriggerIndicator" | "root", SlotRecipeVariantRecord<"panel" | "resizeTrigger" | "resizeTriggerIndicator" | "root">>>;
  /** Same outer styles as Root when using **`useSplitter`** + `value` from outside. */
  RootProvider: import("@styled-system/jsx").StyleContextProvider<import("react").ForwardRefExoticComponent<Splitter.RootProviderProps & import("react").RefAttributes<HTMLDivElement>>, SlotRecipeRuntimeFn<"panel" | "resizeTrigger" | "resizeTriggerIndicator" | "root", SlotRecipeVariantRecord<"panel" | "resizeTrigger" | "resizeTriggerIndicator" | "root">>>;
  /** One pane — requires stable **`id`** matching `panels` config. */
  Panel: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Splitter.PanelProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Drag handle between two adjacent panels (`id` = `"leftId:rightId"`). */
  ResizeTrigger: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Splitter.ResizeTriggerProps & import("react").RefAttributes<HTMLButtonElement>>>;
  /** Visible thumb inside `ResizeTrigger`. */
  ResizeTriggerIndicator: import("@styled-system/jsx").StyleContextConsumer<import("react").ForwardRefExoticComponent<Splitter.ResizeTriggerIndicatorProps & import("react").RefAttributes<HTMLDivElement>>>;
  /** Render prop — exposes splitter machine API; no DOM, no recipe slot. */
  Context: (props: Splitter.ContextProps) => import("react").ReactNode;
};
//#endregion
export { Splitter$1 as Splitter, type SplitterContextProps, type SplitterExpandCollapseDetails, type SplitterPanelData, type SplitterResizeDetails, type SplitterResizeEndDetails, type UseSplitterProps, type UseSplitterReturn, createSplitterRegistry, getSplitterLayout, useSplitter, useSplitterContext };
//# sourceMappingURL=splitter.d.ts.map