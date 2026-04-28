// @ts-nocheck
/* eslint-disable */

// ======================================================================== //
// NOTE: EXAMPLE - Root Provider
// https://ark-ui.com/docs/components/tree-view

import { Splitter, useSplitter } from '@ark-ui/react/splitter';

import styles from './splitter.module.css';

export const SplitterRootProvider = () => {
  const splitter = useSplitter({
    defaultSize: [50, 50],
    panels: [{ id: 'a' }, { id: 'b' }],
  });

  return (
    <div className="stack">
      <output>current size: {JSON.stringify(splitter.getSizes())}</output>

      <Splitter.RootProvider className={styles.Root} value={splitter}>
        <Splitter.Panel className={styles.Panel} id="a">
          A
        </Splitter.Panel>
        <Splitter.ResizeTrigger className={styles.ResizeTrigger} id="a:b" aria-label="Resize">
          <Splitter.ResizeTriggerIndicator className={styles.ResizeTriggerIndicator} />
        </Splitter.ResizeTrigger>
        <Splitter.Panel className={styles.Panel} id="b">
          B
        </Splitter.Panel>
      </Splitter.RootProvider>
    </div>
  );
};

import button from './button.module.css';

export const SlitterContext = () => (
  <Splitter.Root className={styles.Root} panels={[{ id: 'a' }, { id: 'b' }]}>
    <Splitter.Context>
      {(splitter) => (
        <>
          <Splitter.Panel className={styles.Panel} id="a">
            <button className={button.Root} type="button" onClick={() => splitter.resizePanel('a', 10)}>
              Set to 10%
            </button>
          </Splitter.Panel>
          <Splitter.ResizeTrigger className={styles.ResizeTrigger} id="a:b" aria-label="Resize">
            <Splitter.ResizeTriggerIndicator className={styles.ResizeTriggerIndicator} />
          </Splitter.ResizeTrigger>
          <Splitter.Panel className={styles.Panel} id="b">
            <button className={button.Root} type="button" onClick={() => splitter.resizePanel('b', 10)}>
              Set to 10%
            </button>
          </Splitter.Panel>
        </>
      )}
    </Splitter.Context>
  </Splitter.Root>
);

export const SlitterCollapsible = () => (
  <Splitter.Root
    className={styles.Root}
    defaultSize={[15, 20]}
    panels={[
      { id: 'a', collapsible: true, collapsedSize: 5, minSize: 10, maxSize: 20 },
      { id: 'b', minSize: 50 },
    ]}
  >
    <Splitter.Panel className={styles.Panel} id="a">
      A
    </Splitter.Panel>
    <Splitter.ResizeTrigger className={styles.ResizeTrigger} id="a:b" aria-label="Resize">
      <Splitter.ResizeTriggerIndicator className={styles.ResizeTriggerIndicator} />
    </Splitter.ResizeTrigger>
    <Splitter.Panel className={styles.Panel} id="b">
      B
    </Splitter.Panel>
  </Splitter.Root>
);

const registry = Splitter.createRegistry();

export const SplitterNested = () => (
  <Splitter.Root
    className={styles.Root}
    orientation="horizontal"
    panels={[{ id: 'left' }, { id: 'center' }, { id: 'right' }]}
    registry={registry}
  >
    <Splitter.Panel className={styles.Panel} id="left">
      Left
    </Splitter.Panel>
    <Splitter.ResizeTrigger className={styles.ResizeTrigger} id="left:center" aria-label="Resize">
      <Splitter.ResizeTriggerIndicator className={styles.ResizeTriggerIndicator} />
    </Splitter.ResizeTrigger>
    <Splitter.Panel className={styles.Panel} id="center">
      <Splitter.Root orientation="vertical" panels={[{ id: 'top' }, { id: 'bottom' }]} registry={registry}>
        <Splitter.Panel className={styles.Panel} id="top">
          Top
        </Splitter.Panel>
        <Splitter.ResizeTrigger className={styles.ResizeTrigger} id="top:bottom" aria-label="Resize">
          <Splitter.ResizeTriggerIndicator className={styles.ResizeTriggerIndicator} />
        </Splitter.ResizeTrigger>
        <Splitter.Panel className={styles.Panel} id="bottom">
          Bottom
        </Splitter.Panel>
      </Splitter.Root>
    </Splitter.Panel>
    <Splitter.ResizeTrigger className={styles.ResizeTrigger} id="center:right" aria-label="Resize">
      <Splitter.ResizeTriggerIndicator className={styles.ResizeTriggerIndicator} />
    </Splitter.ResizeTrigger>
    <Splitter.Panel className={styles.Panel} id="right">
      Right
    </Splitter.Panel>
  </Splitter.Root>
);
