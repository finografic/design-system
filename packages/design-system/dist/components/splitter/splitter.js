import { splitterRecipe } from "./splitter.recipe.js";
import { createStyleContext } from "@styled-system/jsx";
import { Splitter, createSplitterRegistry, getSplitterLayout, useSplitter, useSplitterContext } from "@ark-ui/react/splitter";
//#region src/components/splitter/splitter.tsx
const { withProvider, withContext } = createStyleContext(splitterRecipe);
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
const Splitter$1 = {
	/** Root — `panels`, `defaultSize`, `orientation`, collapsible options. */
	Root: withProvider(Splitter.Root, "root"),
	/** Same outer styles as Root when using **`useSplitter`** + `value` from outside. */
	RootProvider: withProvider(Splitter.RootProvider, "root"),
	/** One pane — requires stable **`id`** matching `panels` config. */
	Panel: withContext(Splitter.Panel, "panel"),
	/** Drag handle between two adjacent panels (`id` = `"leftId:rightId"`). */
	ResizeTrigger: withContext(Splitter.ResizeTrigger, "resizeTrigger"),
	/** Visible thumb inside `ResizeTrigger`. */
	ResizeTriggerIndicator: withContext(Splitter.ResizeTriggerIndicator, "resizeTriggerIndicator"),
	/** Render prop — exposes splitter machine API; no DOM, no recipe slot. */
	Context: Splitter.Context
};
//#endregion
export { Splitter$1 as Splitter, createSplitterRegistry, getSplitterLayout, useSplitter, useSplitterContext };

//# sourceMappingURL=splitter.js.map