// @ts-nocheck
/* eslint-disable */

// ======================================================================== //
// NOTE: EXAMPLE - File Upload
// https://ark-ui.com/docs/components/file-upload

import { FileUpload } from '@ark-ui/react/file-upload';
import { PaperclipIcon, XIcon } from 'lucide-react';

import styles from './file-upload.module.css';

export const Basic = () => (
  <FileUpload.Root maxFiles={5} className={styles.Root}>
    <FileUpload.Label className={styles.Label}>File Upload</FileUpload.Label>
    <FileUpload.Trigger className={styles.Trigger}>
      <PaperclipIcon /> Choose file(s)
    </FileUpload.Trigger>
    <FileUpload.ItemGroup className={styles.ItemGroup}>
      <FileUpload.Context>
        {({ acceptedFiles }) =>
          acceptedFiles.map((file) => (
            <FileUpload.Item key={file.name} file={file} className={styles.ItemCompact}>
              <FileUpload.ItemName className={styles.ItemName} />
              <FileUpload.ItemDeleteTrigger className={styles.ItemDeleteTrigger}>
                <XIcon />
              </FileUpload.ItemDeleteTrigger>
            </FileUpload.Item>
          ))
        }
      </FileUpload.Context>
    </FileUpload.ItemGroup>
    <FileUpload.HiddenInput />
  </FileUpload.Root>
);

// ======================================================================== //
// NOTE: EXAMPLE - Dropzone
// https://ark-ui.com/docs/components/file-upload

import { FileUpload } from '@ark-ui/react/file-upload';
import { FileIcon, UploadIcon, XIcon } from 'lucide-react';
import styles from './file-upload.module.css';

export const Dropzone = () => (
  <FileUpload.Root maxFiles={5} className={styles.Root}>
    <FileUpload.Label className={styles.Label}>File Upload</FileUpload.Label>
    <FileUpload.Dropzone className={styles.Dropzone}>
      <UploadIcon className={styles.DropzoneIcon} />
      <div className={styles.DropzoneContent}>
        <span className={styles.DropzoneTitle}>Drag and drop files here</span>
        <span className={styles.DropzoneDescription}>or click to browse</span>
      </div>
    </FileUpload.Dropzone>
    <FileUpload.ItemGroup className={styles.ItemGroup}>
      <FileUpload.Context>
        {({ acceptedFiles }) =>
          acceptedFiles.map((file) => (
            <FileUpload.Item key={file.name} file={file} className={styles.Item}>
              <FileUpload.ItemPreview type="image/*" className={styles.ItemPreview}>
                <FileUpload.ItemPreviewImage className={styles.ItemPreviewImage} />
              </FileUpload.ItemPreview>
              <FileUpload.ItemPreview type=".*" className={styles.ItemPreview}>
                <FileIcon />
              </FileUpload.ItemPreview>
              <FileUpload.ItemName className={styles.ItemName} />
              <FileUpload.ItemSizeText className={styles.ItemSizeText} />
              <FileUpload.ItemDeleteTrigger className={styles.ItemDeleteTrigger}>
                <XIcon />
              </FileUpload.ItemDeleteTrigger>
            </FileUpload.Item>
          ))
        }
      </FileUpload.Context>
    </FileUpload.ItemGroup>
    <FileUpload.HiddenInput />
  </FileUpload.Root>
);

// ======================================================================== //
// NOTE: EXAMPLE - Root Provider
// https://ark-ui.com/docs/components/file-upload

import { FileUpload, useFileUpload } from '@ark-ui/react/file-upload';
import { FileIcon, UploadIcon, XIcon } from 'lucide-react';

import button from './button.module.css';
import styles from './file-upload.module.css';

export const RootProvider = () => {
  const fileUpload = useFileUpload({ maxFiles: 5 });

  return (
    <div className="stack">
      <button className={button.Root} onClick={() => fileUpload.clearFiles()}>
        Clear Files
      </button>
      <FileUpload.RootProvider value={fileUpload} className={styles.Root}>
        <FileUpload.Label className={styles.Label}>File Upload</FileUpload.Label>
        <FileUpload.Dropzone className={styles.Dropzone}>
          <UploadIcon className={styles.DropzoneIcon} />
          <div className={styles.DropzoneContent}>
            <span className={styles.DropzoneTitle}>Drop files here</span>
            <span className={styles.DropzoneDescription}>or click to browse</span>
          </div>
        </FileUpload.Dropzone>
        <FileUpload.ItemGroup className={styles.ItemGroup}>
          <FileUpload.Context>
            {({ acceptedFiles }) =>
              acceptedFiles.map((file) => (
                <FileUpload.Item key={file.name} file={file} className={styles.Item}>
                  <FileUpload.ItemPreview type="image/*" className={styles.ItemPreview}>
                    <FileUpload.ItemPreviewImage className={styles.ItemPreviewImage} />
                  </FileUpload.ItemPreview>
                  <FileUpload.ItemPreview type=".*" className={styles.ItemPreview}>
                    <FileIcon />
                  </FileUpload.ItemPreview>
                  <FileUpload.ItemName className={styles.ItemName} />
                  <FileUpload.ItemSizeText className={styles.ItemSizeText} />
                  <FileUpload.ItemDeleteTrigger className={styles.ItemDeleteTrigger}>
                    <XIcon />
                  </FileUpload.ItemDeleteTrigger>
                </FileUpload.Item>
              ))
            }
          </FileUpload.Context>
        </FileUpload.ItemGroup>
        <FileUpload.HiddenInput />
      </FileUpload.RootProvider>
    </div>
  );
};
