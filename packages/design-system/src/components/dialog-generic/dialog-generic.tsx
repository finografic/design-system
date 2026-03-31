import { CloseIcon } from '@finografic/icons';

import { css, cx } from '@styled-system/css';
import type { CSSProperties, FC } from 'react';
import { useCallback, useMemo, useState } from 'react';

import { Button } from '../button/button';
import { Dialog } from '../dialog/dialog';
import { Tabs } from '../tabs/tabs';
import type { DialogGenericConfig } from './dialog-generic.types';

// ── Structural styles (translated from generic-dialog.css) ────────────────────

const contentStyle = css({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '60', // 240px
  overflow: 'hidden',
  pb: '0',
});

const bodyStyle = css({
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  height: 'full',
  minHeight: '0',
  overflow: 'hidden',
  px: '0',
  pb: '6',
});

const scrollableStyle = css({
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  height: 'full',
  minHeight: '0',
  position: 'relative',
  overflowY: 'auto',
  overflowX: 'hidden',
  scrollbarWidth: 'thin',
  scrollbarColor: 'fg.muted transparent',
});

const singleContentStyle = cx(scrollableStyle, css({ mt: '6' }));

const footerStyle = css({
  flexShrink: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  py: '6',
  px: '0',
});

// ── Component ─────────────────────────────────────────────────────────────────

interface DialogGenericProps {
  isOpen: boolean;
  onClose: () => void;
  config: DialogGenericConfig;
  className?: string;
  defaultTab?: string;
  onTabChange?: (tab: string) => void;
}

/**
 * **DialogGeneric** — pre-composed dialog supporting tabs, title/subtitle, and
 * optional footer buttons. Built on `Dialog.*` parts.
 *
 * Mirrors the consumer's `GenericDialog` API. For full composition control,
 * use `Dialog.*` parts directly.
 *
 * @example
 * ```tsx
 * import { DialogGeneric } from '@finografic/design-system/components';
 * import type { DialogGenericConfig } from '@finografic/design-system/components';
 *
 * const config: DialogGenericConfig = {
 *   title: 'Settings',
 *   size: 'lg',
 *   tabs: [{ id: 'general', label: 'General', content: <GeneralTab /> }],
 *   footer: {
 *     buttons: [
 *       { children: 'Cancel', variant: 'outline', onClick: handleClose },
 *       { children: 'Save', variant: 'solid', palette: 'primary', onClick: handleSave },
 *     ],
 *   },
 * };
 *
 * <DialogGeneric isOpen={open} onClose={() => setOpen(false)} config={config} />
 * ```
 */
export const DialogGeneric: FC<DialogGenericProps> = ({
  isOpen,
  onClose,
  config,
  className,
  defaultTab,
  onTabChange,
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || config.tabs[0]?.id || '');

  const footer = useMemo(() => {
    if (!config.footer) return null;
    return {
      isRTL: config.footer.isRTL ?? true,
      isFilled: config.footer.isFilled ?? false,
      buttons: config.footer.buttons ?? [],
    };
  }, [config.footer]);

  const hasTabs = config.tabs.length > 1;
  const currentTab = config.tabs.find((tab) => tab.id === activeTab) ?? config.tabs[0];
  const hasTitle = Boolean(config.title);

  const dynamicStyle: CSSProperties = {
    ...(config.maxWidth && { maxWidth: config.maxWidth }),
    ...(config.maxHeight && { maxHeight: config.maxHeight }),
    ...(config.minWidth && { minWidth: config.minWidth }),
    ...(config.minHeight && { minHeight: config.minHeight }),
  };

  const handleTabChange = useCallback(
    (value: string) => {
      setActiveTab(value);
      onTabChange?.(value);
    },
    [onTabChange],
  );

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()} size={config.size ?? 'md'}>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content className={cx(contentStyle, className)} style={dynamicStyle}>
          {/* HEADER */}
          <Dialog.Header>
            {hasTitle && (
              <Dialog.Title>
                {config.title}
                {config.subtitle && (
                  <span className={css({ fontWeight: 'normal', opacity: 0.7 })}>{config.subtitle}</span>
                )}
              </Dialog.Title>
            )}
            <Dialog.CloseTrigger asChild>
              <Button variant="ghost" size="sm" aria-label="Close dialog">
                <CloseIcon />
              </Button>
            </Dialog.CloseTrigger>
          </Dialog.Header>

          {/* Accessible description for screen readers */}
          {config.description && (
            <Dialog.Description>
              {config.title} —{' '}
              {hasTabs ? 'Navigate between tabs to access different sections' : config.description}
            </Dialog.Description>
          )}

          {/* BODY */}
          <Dialog.Body className={bodyStyle}>
            {hasTabs ? (
              <Tabs.Root value={activeTab} onValueChange={({ value }) => handleTabChange(value)}>
                <Tabs.List>
                  {config.tabs.map((tab) => (
                    <Tabs.Trigger key={tab.id} value={tab.id} disabled={tab.disabled}>
                      {tab.icon ?? null} {tab.label}
                    </Tabs.Trigger>
                  ))}
                  <Tabs.Indicator />
                </Tabs.List>
                <div className={scrollableStyle}>
                  {config.tabs.map((tab) => (
                    <Tabs.Content key={tab.id} value={tab.id}>
                      {tab.content}
                    </Tabs.Content>
                  ))}
                </div>
              </Tabs.Root>
            ) : (
              <div className={singleContentStyle}>{currentTab?.content}</div>
            )}
          </Dialog.Body>

          {/* FOOTER */}
          {footer && (
            <Dialog.Footer className={footerStyle}>
              <div
                className={css({
                  display: 'flex',
                  flexDirection: footer.isRTL ? 'row-reverse' : 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  gap: '3',
                  ...(footer.isFilled && { width: 'full' }),
                })}
              >
                {(footer.isRTL ? footer.buttons : [...footer.buttons].reverse()).map((props, i) => (
                  <Button key={i} size="md" palette="default" variant="solid" {...props} />
                ))}
              </div>
            </Dialog.Footer>
          )}
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};
