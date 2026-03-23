import { CloseIcon } from '@finografic/icons';

import { css, cx } from '@styled-system/css';
import type { FC } from 'react';
import React from 'react';
import { useCallback, useState } from 'react';

import { Button } from '../button/button';
import { Dialog } from '../dialog/dialog';
import { Tabs } from '../tabs/tabs';
import type { DialogConfig } from './generic-dialog.types';

const footerActionsStyle = css({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '3',
  width: 'full',
});

/**
 * **GenericDialog** — pre-composed dialog supporting tabs, a title/subtitle, and
 * optional footer buttons. Built on `Dialog.*` parts.
 *
 * For full composition control use `Dialog.*` parts directly.
 *
 * @example
 * ```tsx
 * import { GenericDialog } from '@finografic/design-system/components';
 * import type { DialogConfig } from '@finografic/design-system/components';
 *
 * const config: DialogConfig = {
 *   title: 'Settings',
 *   size: 'lg',
 *   tabs: [{ id: 'general', label: 'General', content: <GeneralTab /> }],
 *   footer: {
 *     primaryButton: { label: 'Save', onClick: handleSave },
 *     secondaryButton: { label: 'Cancel', onClick: handleClose },
 *   },
 * };
 *
 * <GenericDialog isOpen={open} onClose={() => setOpen(false)} config={config} />
 * ```
 */
interface GenericDialogProps {
  isOpen: boolean;
  onClose: () => void;
  config: DialogConfig;
  className?: string;
  defaultTab?: string;
  onTabChange?: (tab: string) => void;
}

export const GenericDialog: FC<GenericDialogProps> = ({
  isOpen,
  onClose,
  config,
  className,
  defaultTab,
  onTabChange,
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab || config.tabs[0]?.id || '');

  const hasTabs = config.tabs.length > 1;
  const currentTab = config.tabs.find((tab) => tab.id === activeTab) || config.tabs[0];
  const hasTitle = Boolean(config.title);

  const dynamicStyles: React.CSSProperties = {
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
    <Dialog.Root
      open={isOpen}
      onOpenChange={(open) => !open && onClose()}
      size={config.size || 'md'}
    >
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content
          className={cx('ds-generic-dialog', className)}
          style={dynamicStyles}
        >
          {/* HEADER */}
          <Dialog.Header className={cx('ds-generic-dialog__header', hasTitle && 'has-title')}>
            <Dialog.Title className={hasTitle ? undefined : 'sr-only'}>
              {config.title || 'Dialog'}
              {config.subtitle && (
                <span className="ds-generic-dialog__subtitle">{config.subtitle}</span>
              )}
            </Dialog.Title>
            <Dialog.CloseTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="ds-generic-dialog__close"
                aria-label="Close dialog"
              >
                <CloseIcon />
              </Button>
            </Dialog.CloseTrigger>
          </Dialog.Header>

          {/* Accessible description for screen readers */}
          <Dialog.Description>
            {config.title} — {hasTabs
              ? 'Navigate between tabs to access different sections'
              : config.description || 'Dialog content'}
          </Dialog.Description>

          {/* BODY */}
          <Dialog.Body className="ds-generic-dialog__body">
            {hasTabs
              ? (
                <Tabs.Root value={activeTab} onValueChange={({ value }) => handleTabChange(value)}>
                  <Tabs.List>
                    {config.tabs.map((tab) => (
                      <Tabs.Trigger key={tab.id} value={tab.id} disabled={tab.disabled}>
                        {tab.icon ? tab.icon : null} {tab.label}
                      </Tabs.Trigger>
                    ))}
                  </Tabs.List>
                  <div className="ds-generic-dialog__tab-content">
                    {config.tabs.map((tab) => (
                      <Tabs.Content key={tab.id} value={tab.id}>
                        {tab.content}
                      </Tabs.Content>
                    ))}
                  </div>
                </Tabs.Root>
              )
              : (
                <div className="ds-generic-dialog__single-content">
                  {currentTab?.content}
                </div>
              )}
          </Dialog.Body>

          {/* FOOTER */}
          {config.footer && (
            <Dialog.Footer className="ds-generic-dialog__footer">
              <div className={footerActionsStyle}>
                {config.footer.secondaryButton && (
                  <Button
                    variant={config.footer.secondaryButton.variant ?? 'outline'}
                    palette={config.footer.secondaryButton.palette ?? 'default'}
                    size="lg"
                    onClick={config.footer.secondaryButton.onClick}
                  >
                    {config.footer.secondaryButton.label}
                  </Button>
                )}
                {config.footer.primaryButton && (
                  <Button
                    variant={config.footer.primaryButton.variant ?? 'solid'}
                    palette={config.footer.primaryButton.palette ?? 'primary'}
                    size="lg"
                    onClick={config.footer.primaryButton.onClick}
                  >
                    {config.footer.primaryButton.label}
                  </Button>
                )}
              </div>
            </Dialog.Footer>
          )}
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};
