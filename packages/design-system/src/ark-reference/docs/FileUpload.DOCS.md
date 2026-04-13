<ComponentPreview id="FileUpload" />

## Anatomy

<Anatomy id="file-upload" />

```tsx
<FileUpload.Root>
  <FileUpload.Label />
  <FileUpload.Dropzone>
    <FileUpload.Trigger />
  </FileUpload.Dropzone>
  <FileUpload.ItemGroup>
    <FileUpload.Item>
      <FileUpload.ItemPreview>
        <FileUpload.ItemPreviewImage />
      </FileUpload.ItemPreview>
      <FileUpload.ItemName />
      <FileUpload.ItemSizeText />
      <FileUpload.ItemDeleteTrigger />
    </FileUpload.Item>
  </FileUpload.ItemGroup>
  <FileUpload.ClearTrigger />
  <FileUpload.HiddenInput />
</FileUpload.Root>
```

## Examples

**Example: basic**

#### React

```tsx
import { FileUpload } from '@ark-ui/react/file-upload';
import { PaperclipIcon, XIcon } from 'lucide-react';
import styles from 'styles/file-upload.module.css';

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
```

#### Solid

```tsx
import { FileUpload } from '@ark-ui/solid/file-upload';
import { For } from 'solid-js';

export const Basic = () => (
  <FileUpload.Root maxFiles={5}>
    <FileUpload.Label>File Upload</FileUpload.Label>
    <FileUpload.Trigger>Choose file(s)</FileUpload.Trigger>
    <FileUpload.ItemGroup>
      <FileUpload.Context>
        {(context) => (
          <For each={context().acceptedFiles}>
            {(file) => (
              <FileUpload.Item file={file}>
                <FileUpload.ItemName />
                <FileUpload.ItemDeleteTrigger>X</FileUpload.ItemDeleteTrigger>
              </FileUpload.Item>
            )}
          </For>
        )}
      </FileUpload.Context>
    </FileUpload.ItemGroup>
    <FileUpload.HiddenInput />
  </FileUpload.Root>
);
```

#### Vue

```vue
<script setup lang="ts">
import { FileUpload } from '@ark-ui/vue/file-upload';
</script>

<template>
  <FileUpload.Root :maxFiles="5">
    <FileUpload.Label>File Upload</FileUpload.Label>
    <FileUpload.Trigger>Choose file(s)</FileUpload.Trigger>
    <FileUpload.ItemGroup>
      <FileUpload.Context v-slot="{ acceptedFiles }">
        <FileUpload.Item v-for="file in acceptedFiles" :file="file" :key="file.name">
          <FileUpload.ItemName />
          <FileUpload.ItemDeleteTrigger>X</FileUpload.ItemDeleteTrigger>
        </FileUpload.Item>
      </FileUpload.Context>
    </FileUpload.ItemGroup>
    <FileUpload.HiddenInput />
  </FileUpload.Root>
</template>
```

#### Svelte

```svelte
<script lang="ts">
  import { FileUpload } from '@ark-ui/svelte/file-upload'
</script>

<FileUpload.Root maxFiles={5}>
  <FileUpload.Label>File Upload</FileUpload.Label>
  <FileUpload.Trigger>Choose file(s)</FileUpload.Trigger>
  <FileUpload.ItemGroup>
    <FileUpload.Context>
      {#snippet render(context)}
        {#each context().acceptedFiles as file (file.name)}
          <FileUpload.Item {file}>
            <FileUpload.ItemName />
            <FileUpload.ItemDeleteTrigger>X</FileUpload.ItemDeleteTrigger>
          </FileUpload.Item>
        {/each}
      {/snippet}
    </FileUpload.Context>
  </FileUpload.ItemGroup>
  <FileUpload.HiddenInput />
</FileUpload.Root>

```

### Initial Files

Use the `defaultAcceptedFiles` prop to set the initial files in the file upload component.

**Example: initial-files**

#### React

```tsx
import { FileUpload } from '@ark-ui/react/file-upload';
import { FileIcon, PaperclipIcon, XIcon } from 'lucide-react';
import styles from 'styles/file-upload.module.css';

export const InitialFiles = () => (
  <FileUpload.Root
    defaultAcceptedFiles={[new File(['Welcome to Ark UI React'], 'README.md', { type: 'text/plain' })]}
    className={styles.Root}
  >
    <FileUpload.Label className={styles.Label}>File Upload</FileUpload.Label>
    <FileUpload.Trigger className={styles.Trigger}>
      <PaperclipIcon /> Choose file(s)
    </FileUpload.Trigger>
    <FileUpload.ItemGroup className={styles.ItemGroup}>
      <FileUpload.Context>
        {({ acceptedFiles }) =>
          acceptedFiles.map((file) => (
            <FileUpload.Item key={file.name} file={file} className={styles.Item}>
              <div className={styles.ItemPreview}>
                <FileIcon />
              </div>
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
```

#### Solid

```tsx
import { FileUpload } from '@ark-ui/solid/file-upload';
import { For } from 'solid-js';

export const InitialFiles = () => (
  <FileUpload.Root
    defaultAcceptedFiles={[new File(['Welcome to Ark UI Solid'], 'README.md', { type: 'text/plain' })]}
  >
    <FileUpload.Label>File Upload</FileUpload.Label>
    <FileUpload.Trigger>Choose file(s)</FileUpload.Trigger>
    <FileUpload.ItemGroup>
      <FileUpload.Context>
        {(context) => (
          <For each={context().acceptedFiles}>
            {(file) => (
              <FileUpload.Item file={file}>
                <div>📄</div>
                <FileUpload.ItemName />
                <FileUpload.ItemSizeText />
              </FileUpload.Item>
            )}
          </For>
        )}
      </FileUpload.Context>
    </FileUpload.ItemGroup>
    <FileUpload.HiddenInput />
  </FileUpload.Root>
);
```

#### Vue

```vue
<script setup lang="ts">
import { FileUpload } from '@ark-ui/vue/file-upload';

const defaultAcceptedFiles = [new File(['Welcome to Ark UI Vue'], 'README.md', { type: 'text/plain' })];
</script>

<template>
  <FileUpload.Root :default-accepted-files="defaultAcceptedFiles">
    <FileUpload.Label>File Upload</FileUpload.Label>
    <FileUpload.Trigger>Choose file(s)</FileUpload.Trigger>
    <FileUpload.ItemGroup>
      <FileUpload.Context v-slot="{ acceptedFiles }">
        <FileUpload.Item v-for="file in acceptedFiles" :file="file" :key="file.name">
          <div>📄</div>
          <FileUpload.ItemName />
          <FileUpload.ItemSizeText />
        </FileUpload.Item>
      </FileUpload.Context>
    </FileUpload.ItemGroup>
    <FileUpload.HiddenInput />
  </FileUpload.Root>
</template>
```

#### Svelte

```svelte
<script lang="ts">
  import { FileUpload } from '@ark-ui/svelte/file-upload'
</script>

<FileUpload.Root defaultAcceptedFiles={[new File(['Welcome to Ark UI Svelte'], 'README.md', { type: 'text/plain' })]}>
  <FileUpload.Label>File Upload</FileUpload.Label>
  <FileUpload.Trigger>Choose file(s)</FileUpload.Trigger>
  <FileUpload.ItemGroup>
    <FileUpload.Context>
      {#snippet render(context)}
        {#each context().acceptedFiles as file (file.name)}
          <FileUpload.Item {file}>
            <div>📄</div>
            <FileUpload.ItemName />
            <FileUpload.ItemSizeText />
          </FileUpload.Item>
        {/each}
      {/snippet}
    </FileUpload.Context>
  </FileUpload.ItemGroup>
  <FileUpload.HiddenInput />
</FileUpload.Root>

```

### Clear Trigger

Use the `ClearTrigger` to remove all uploaded files at once.

**Example: clear-trigger**

#### React

```tsx
import { FileUpload } from '@ark-ui/react/file-upload';
import { PaperclipIcon, XIcon } from 'lucide-react';
import styles from 'styles/file-upload.module.css';

export const ClearTrigger = () => (
  <FileUpload.Root maxFiles={5} accept="image/png,image/jpeg" className={styles.Root}>
    <FileUpload.Label className={styles.Label}>File Upload</FileUpload.Label>
    <div className={styles.Actions}>
      <FileUpload.Trigger className={styles.Trigger}>
        <PaperclipIcon /> Choose file(s)
      </FileUpload.Trigger>
      <FileUpload.ClearTrigger className={styles.ClearTrigger}>Clear Files</FileUpload.ClearTrigger>
    </div>
    <FileUpload.ItemGroup className={styles.ItemGroup}>
      <FileUpload.Context>
        {({ acceptedFiles }) =>
          acceptedFiles.map((file) => (
            <FileUpload.Item key={file.name} file={file} className={styles.Item}>
              <FileUpload.ItemPreview type="image/*" className={styles.ItemPreview}>
                <FileUpload.ItemPreviewImage className={styles.ItemPreviewImage} />
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
```

#### Solid

```tsx
import { FileUpload } from '@ark-ui/solid/file-upload';
import { For } from 'solid-js';

export const ClearTrigger = () => (
  <FileUpload.Root maxFiles={5} accept="image/png,image/jpeg">
    <FileUpload.Label>File Upload</FileUpload.Label>
    <FileUpload.Trigger>Choose file(s)</FileUpload.Trigger>
    <FileUpload.ClearTrigger>Clear Files</FileUpload.ClearTrigger>
    <FileUpload.ItemGroup>
      <FileUpload.Context>
        {(context) => (
          <For each={context().acceptedFiles}>
            {(file) => (
              <FileUpload.Item file={file}>
                <FileUpload.ItemPreview type="image/*">
                  <FileUpload.ItemPreviewImage />
                </FileUpload.ItemPreview>
                <FileUpload.ItemName />
              </FileUpload.Item>
            )}
          </For>
        )}
      </FileUpload.Context>
    </FileUpload.ItemGroup>
    <FileUpload.HiddenInput />
  </FileUpload.Root>
);
```

#### Vue

```vue
<script setup lang="ts">
import { FileUpload } from '@ark-ui/vue/file-upload';
</script>

<template>
  <FileUpload.Root :maxFiles="5" accept="image/png,image/jpeg">
    <FileUpload.Label>File Upload</FileUpload.Label>
    <FileUpload.Trigger>Choose file(s)</FileUpload.Trigger>
    <FileUpload.ClearTrigger>Clear Files</FileUpload.ClearTrigger>
    <FileUpload.ItemGroup>
      <FileUpload.Context v-slot="{ acceptedFiles }">
        <FileUpload.Item v-for="file in acceptedFiles" :file="file" :key="file.name">
          <FileUpload.ItemPreview type="image/*">
            <FileUpload.ItemPreviewImage />
          </FileUpload.ItemPreview>
          <FileUpload.ItemName />
        </FileUpload.Item>
      </FileUpload.Context>
    </FileUpload.ItemGroup>
    <FileUpload.HiddenInput />
  </FileUpload.Root>
</template>
```

#### Svelte

```svelte
<script lang="ts">
  import { FileUpload } from '@ark-ui/svelte/file-upload'
  import { FileIcon } from 'lucide-svelte'
</script>

<FileUpload.Root maxFiles={5}>
  <FileUpload.Label>File Upload</FileUpload.Label>
  <FileUpload.Dropzone>Drag your file(s) here</FileUpload.Dropzone>
  <FileUpload.Trigger>Choose file(s)</FileUpload.Trigger>

  <!-- Custom Clear Trigger -->
  <FileUpload.Context>
    {#snippet render(context)}
      {#if context().acceptedFiles.length > 0}
        <button type="button" onclick={() => context().clearFiles()}>Clear Files</button>
      {/if}
    {/snippet}
  </FileUpload.Context>

  <FileUpload.ItemGroup>
    <FileUpload.Context>
      {#snippet render(context)}
        {#each context().acceptedFiles as file (file.name)}
          <FileUpload.Item {file}>
            <FileUpload.ItemPreview type="image/*">
              <FileUpload.ItemPreviewImage />
            </FileUpload.ItemPreview>
            <FileUpload.ItemPreview type=".*">
              <FileIcon />
            </FileUpload.ItemPreview>
            <FileUpload.ItemName />
            <FileUpload.ItemSizeText />
            <FileUpload.ItemDeleteTrigger>X</FileUpload.ItemDeleteTrigger>
          </FileUpload.Item>
        {/each}
      {/snippet}
    </FileUpload.Context>
  </FileUpload.ItemGroup>
  <FileUpload.HiddenInput />
</FileUpload.Root>

```

### Dropzone

Use the `Dropzone` to enable drag-and-drop. It exposes a `data-dragging` attribute for styling.

**Example: dropzone**

#### React

```tsx
import { FileUpload } from '@ark-ui/react/file-upload';
import { FileIcon, UploadIcon, XIcon } from 'lucide-react';
import styles from 'styles/file-upload.module.css';

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
```

#### Solid

```tsx
import { FileUpload } from '@ark-ui/solid/file-upload';
import { For } from 'solid-js';

export const Dropzone = () => (
  <FileUpload.Root maxFiles={5}>
    <FileUpload.Label>File Upload</FileUpload.Label>
    <FileUpload.Dropzone>Drag and drop files here</FileUpload.Dropzone>
    <FileUpload.ItemGroup>
      <FileUpload.Context>
        {(context) => (
          <For each={context().acceptedFiles}>
            {(file) => (
              <FileUpload.Item file={file}>
                <FileUpload.ItemPreview type="image/*">
                  <FileUpload.ItemPreviewImage />
                </FileUpload.ItemPreview>
                <FileUpload.ItemPreview type=".*">File</FileUpload.ItemPreview>
                <FileUpload.ItemName />
                <FileUpload.ItemSizeText />
                <FileUpload.ItemDeleteTrigger>X</FileUpload.ItemDeleteTrigger>
              </FileUpload.Item>
            )}
          </For>
        )}
      </FileUpload.Context>
    </FileUpload.ItemGroup>
    <FileUpload.HiddenInput />
  </FileUpload.Root>
);
```

#### Vue

```vue
<script setup lang="ts">
import { FileUpload } from '@ark-ui/vue/file-upload';
</script>

<template>
  <FileUpload.Root :maxFiles="5">
    <FileUpload.Label>File Upload</FileUpload.Label>
    <FileUpload.Dropzone>
      <div>Drag and drop files here</div>
      <div>or click to browse</div>
    </FileUpload.Dropzone>
    <FileUpload.ItemGroup>
      <FileUpload.Context v-slot="{ acceptedFiles }">
        <FileUpload.Item v-for="file in acceptedFiles" :file="file" :key="file.name">
          <FileUpload.ItemPreview type="image/*">
            <FileUpload.ItemPreviewImage />
          </FileUpload.ItemPreview>
          <FileUpload.ItemPreview type=".*">
            <div>File Icon</div>
          </FileUpload.ItemPreview>
          <FileUpload.ItemName />
          <FileUpload.ItemSizeText />
          <FileUpload.ItemDeleteTrigger>X</FileUpload.ItemDeleteTrigger>
        </FileUpload.Item>
      </FileUpload.Context>
    </FileUpload.ItemGroup>
    <FileUpload.HiddenInput />
  </FileUpload.Root>
</template>
```

#### Svelte

```svelte
<script lang="ts">
  import { FileUpload } from '@ark-ui/svelte/file-upload'
  import { FileIcon } from 'lucide-svelte'
</script>

<FileUpload.Root maxFiles={5}>
  <FileUpload.Label>File Upload</FileUpload.Label>
  <FileUpload.Dropzone>Drag and drop files here</FileUpload.Dropzone>

  <FileUpload.ItemGroup>
    <FileUpload.Context>
      {#snippet render(fileUpload)}
        {#each fileUpload().acceptedFiles as file (file.name)}
          <FileUpload.Item {file}>
            <FileUpload.ItemPreview type="image/*">
              <FileUpload.ItemPreviewImage />
            </FileUpload.ItemPreview>
            <FileUpload.ItemPreview type=".*">
              <FileIcon />
            </FileUpload.ItemPreview>
            <FileUpload.ItemName />
            <FileUpload.ItemSizeText />
            <FileUpload.ItemDeleteTrigger>X</FileUpload.ItemDeleteTrigger>
          </FileUpload.Item>
        {/each}
      {/snippet}
    </FileUpload.Context>
  </FileUpload.ItemGroup>

  <FileUpload.HiddenInput />
</FileUpload.Root>

```

### Directory Upload

Use the `directory` prop to upload entire folders. Access file paths through `file.webkitRelativePath`.

**Example: directory-upload**

#### React

```tsx
import { FileUpload } from '@ark-ui/react/file-upload';
import { FileIcon, FolderIcon, XIcon } from 'lucide-react';
import styles from 'styles/file-upload.module.css';

export const DirectoryUpload = () => (
  <FileUpload.Root directory className={styles.Root}>
    <FileUpload.Label className={styles.Label}>Upload Folder</FileUpload.Label>
    <FileUpload.Trigger className={styles.Trigger}>
      <FolderIcon style={{ width: '1rem', height: '1rem' }} />
      Select Folder
    </FileUpload.Trigger>
    <FileUpload.ItemGroup className={styles.ItemGroup}>
      <FileUpload.Context>
        {({ acceptedFiles }) =>
          acceptedFiles.map((file) => (
            <FileUpload.Item key={file.name} file={file} className={styles.Item}>
              <div className={styles.ItemPreview}>
                <FileIcon />
              </div>
              <FileUpload.ItemName className={styles.ItemName}>
                {file.webkitRelativePath || file.name}
              </FileUpload.ItemName>
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
```

#### Solid

```tsx
import { FileUpload } from '@ark-ui/solid/file-upload';
import { For } from 'solid-js';

export const DirectoryUpload = () => (
  <FileUpload.Root directory>
    <FileUpload.Trigger>Upload Folder</FileUpload.Trigger>
    <FileUpload.ItemGroup>
      <FileUpload.Context>
        {(fileUpload) => (
          <For each={fileUpload().acceptedFiles}>
            {(file) => (
              <FileUpload.Item file={file}>
                <FileUpload.ItemName>{file.webkitRelativePath ?? file.name}</FileUpload.ItemName>
              </FileUpload.Item>
            )}
          </For>
        )}
      </FileUpload.Context>
    </FileUpload.ItemGroup>
    <FileUpload.HiddenInput />
  </FileUpload.Root>
);
```

#### Vue

```vue
<script setup lang="ts">
import { FileUpload } from '@ark-ui/vue/file-upload';
</script>

<template>
  <FileUpload.Root directory>
    <FileUpload.Trigger>Upload Folder</FileUpload.Trigger>
    <FileUpload.ItemGroup>
      <FileUpload.Context v-slot="{ acceptedFiles }">
        <FileUpload.Item v-for="file in acceptedFiles" :file="file" :key="file.name">
          <FileUpload.ItemName>{{ file.webkitRelativePath ?? file.name }}</FileUpload.ItemName>
        </FileUpload.Item>
      </FileUpload.Context>
    </FileUpload.ItemGroup>
    <FileUpload.HiddenInput />
  </FileUpload.Root>
</template>
```

#### Svelte

```svelte
<script lang="ts">
  import { FileUpload } from '@ark-ui/svelte/file-upload'
</script>

<FileUpload.Root directory>
  <FileUpload.Trigger>Upload Folder</FileUpload.Trigger>
  <FileUpload.ItemGroup>
    <FileUpload.Context>
      {#snippet render(fileUpload)}
        {#each fileUpload().acceptedFiles as file (file.name)}
          <FileUpload.Item {file}>
            <FileUpload.ItemName>
              {file.webkitRelativePath ?? file.name}
            </FileUpload.ItemName>
          </FileUpload.Item>
        {/each}
      {/snippet}
    </FileUpload.Context>
  </FileUpload.ItemGroup>
  <FileUpload.HiddenInput />
</FileUpload.Root>

```

> When uploading directories with many files, set `maxFiles` to a higher value or remove it entirely to prevent
> rejections.

### Accepted File Types

Use the `accept` prop to restrict file types. Accepts MIME types (`image/png`) or extensions (`.pdf`).

**Example: accepted-file-types**

#### React

```tsx
import { FileUpload } from '@ark-ui/react/file-upload';
import { AlertCircleIcon, ImageIcon, UploadIcon, XIcon } from 'lucide-react';
import styles from 'styles/file-upload.module.css';

export const AcceptedFileTypes = () => (
  <FileUpload.Root accept="image/png,image/jpeg" className={styles.Root}>
    <FileUpload.Label className={styles.Label}>Upload Images (PNG and JPEG only)</FileUpload.Label>
    <FileUpload.Dropzone className={styles.Dropzone}>
      <UploadIcon className={styles.DropzoneIcon} />
      <div className={styles.DropzoneContent}>
        <span className={styles.DropzoneTitle}>Drop your images here</span>
        <span className={styles.DropzoneDescription}>Only PNG and JPEG files</span>
      </div>
    </FileUpload.Dropzone>

    <FileUpload.Context>
      {({ acceptedFiles, rejectedFiles }) => (
        <>
          {acceptedFiles.length > 0 && (
            <FileUpload.ItemGroup className={styles.ItemGroup}>
              {acceptedFiles.map((file) => (
                <FileUpload.Item key={file.name} file={file} className={styles.Item}>
                  <FileUpload.ItemPreview type="image/*" className={styles.ItemPreview}>
                    <FileUpload.ItemPreviewImage className={styles.ItemPreviewImage} />
                  </FileUpload.ItemPreview>
                  <FileUpload.ItemPreview type=".*" className={styles.ItemPreview}>
                    <ImageIcon />
                  </FileUpload.ItemPreview>
                  <FileUpload.ItemName className={styles.ItemName} />
                  <FileUpload.ItemSizeText className={styles.ItemSizeText} />
                  <FileUpload.ItemDeleteTrigger className={styles.ItemDeleteTrigger}>
                    <XIcon />
                  </FileUpload.ItemDeleteTrigger>
                </FileUpload.Item>
              ))}
            </FileUpload.ItemGroup>
          )}

          {rejectedFiles.length > 0 && (
            <FileUpload.ItemGroup className={styles.ItemGroup}>
              {rejectedFiles.map((fileRejection) => (
                <FileUpload.Item
                  key={fileRejection.file.name}
                  file={fileRejection.file}
                  className={styles.Item}
                  data-rejected
                >
                  <div className={styles.ItemPreview}>
                    <AlertCircleIcon />
                  </div>
                  <FileUpload.ItemName className={styles.ItemName} />
                  <FileUpload.ItemSizeText className={styles.ItemSizeText} />
                  <div className={styles.ErrorList}>
                    {fileRejection.errors.map((error) => (
                      <div key={error} className={styles.ErrorItem}>
                        {error}
                      </div>
                    ))}
                  </div>
                </FileUpload.Item>
              ))}
            </FileUpload.ItemGroup>
          )}
        </>
      )}
    </FileUpload.Context>

    <FileUpload.HiddenInput />
  </FileUpload.Root>
);
```

#### Solid

```tsx
import { FileUpload } from '@ark-ui/solid/file-upload';
import { For } from 'solid-js';

export const AcceptedFileTypes = () => (
  <FileUpload.Root accept="image/png,image/jpeg">
    <FileUpload.Label>File Upload (PNG and JPEG only)</FileUpload.Label>
    <FileUpload.Dropzone>Drop your files here</FileUpload.Dropzone>
    <FileUpload.Trigger>Select Files</FileUpload.Trigger>

    <FileUpload.ItemGroup>
      <FileUpload.Context>
        {(context) => (
          <For each={context().acceptedFiles}>
            {(file) => (
              <FileUpload.Item file={file}>
                <FileUpload.ItemName />
                <FileUpload.ItemSizeText />
                <FileUpload.ItemDeleteTrigger>Remove</FileUpload.ItemDeleteTrigger>
              </FileUpload.Item>
            )}
          </For>
        )}
      </FileUpload.Context>
    </FileUpload.ItemGroup>

    <FileUpload.ItemGroup>
      <FileUpload.Context>
        {(context) => (
          <For each={context().rejectedFiles}>
            {(fileRejection) => (
              <FileUpload.Item file={fileRejection.file}>
                <FileUpload.ItemName />
                <FileUpload.ItemSizeText />
                <div>
                  <For each={fileRejection.errors}>
                    {(error) => <div style={{ color: 'red' }}>{error}</div>}
                  </For>
                </div>
              </FileUpload.Item>
            )}
          </For>
        )}
      </FileUpload.Context>
    </FileUpload.ItemGroup>

    <FileUpload.HiddenInput />
  </FileUpload.Root>
);
```

#### Vue

```vue
<script setup lang="ts">
import { FileUpload } from '@ark-ui/vue/file-upload';
</script>

<template>
  <FileUpload.Root accept="image/png,image/jpeg">
    <FileUpload.Label>File Upload (PNG and JPEG only)</FileUpload.Label>
    <FileUpload.Dropzone>Drop your files here</FileUpload.Dropzone>
    <FileUpload.Trigger>Select Files</FileUpload.Trigger>

    <FileUpload.ItemGroup>
      <FileUpload.Context v-slot="{ acceptedFiles }">
        <FileUpload.Item v-for="file in acceptedFiles" :file="file" :key="file.name">
          <FileUpload.ItemName />
          <FileUpload.ItemSizeText />
          <FileUpload.ItemDeleteTrigger>Remove</FileUpload.ItemDeleteTrigger>
        </FileUpload.Item>
      </FileUpload.Context>
    </FileUpload.ItemGroup>

    <FileUpload.ItemGroup>
      <FileUpload.Context v-slot="{ rejectedFiles }">
        <FileUpload.Item
          v-for="fileRejection in rejectedFiles"
          :file="fileRejection.file"
          :key="fileRejection.file.name"
        >
          <FileUpload.ItemName />
          <FileUpload.ItemSizeText />
          <div>
            <div v-for="error in fileRejection.errors" :key="error" style="color: red">
              {{ error }}
            </div>
          </div>
        </FileUpload.Item>
      </FileUpload.Context>
    </FileUpload.ItemGroup>

    <FileUpload.HiddenInput />
  </FileUpload.Root>
</template>
```

#### Svelte

```svelte
<script lang="ts">
  import { FileUpload } from '@ark-ui/svelte/file-upload'
</script>

<FileUpload.Root accept="image/png,image/jpeg">
  <FileUpload.Label>File Upload (PNG and JPEG only)</FileUpload.Label>
  <FileUpload.Dropzone>Drop your files here</FileUpload.Dropzone>
  <FileUpload.Trigger>Select Files</FileUpload.Trigger>

  <FileUpload.ItemGroup>
    <FileUpload.Context>
      {#snippet render(context)}
        {#each context().acceptedFiles as file (file.name)}
          <FileUpload.Item {file}>
            <FileUpload.ItemName />
            <FileUpload.ItemSizeText />
            <FileUpload.ItemDeleteTrigger>Remove</FileUpload.ItemDeleteTrigger>
          </FileUpload.Item>
        {/each}
      {/snippet}
    </FileUpload.Context>
  </FileUpload.ItemGroup>

  <FileUpload.ItemGroup>
    <FileUpload.Context>
      {#snippet render(context)}
        {#each context().rejectedFiles as fileRejection (fileRejection.file.name)}
          <FileUpload.Item file={fileRejection.file}>
            <FileUpload.ItemName />
            <FileUpload.ItemSizeText />
            <div>
              {#each fileRejection.errors as error}
                <div style="color: red;">
                  {error}
                </div>
              {/each}
            </div>
          </FileUpload.Item>
        {/each}
      {/snippet}
    </FileUpload.Context>
  </FileUpload.ItemGroup>

  <FileUpload.HiddenInput />
</FileUpload.Root>

```

### Error Handling

Set constraints with `maxFiles`, `maxFileSize`, `minFileSize`, and `accept`. Rejected files include error codes like
`TOO_MANY_FILES`, `FILE_INVALID_TYPE`, `FILE_TOO_LARGE`, or `FILE_EXISTS`.

**Example: error-handling**

#### React

```tsx
import { FileUpload, type FileUploadFileError } from '@ark-ui/react/file-upload';
import { AlertCircleIcon, CheckCircleIcon, FileIcon, UploadIcon, XIcon } from 'lucide-react';
import styles from 'styles/file-upload.module.css';

const errorMessages: Record<FileUploadFileError, string> = {
  TOO_MANY_FILES: 'Too many files selected (max 3 allowed)',
  FILE_INVALID_TYPE: 'Invalid file type (only images and PDFs allowed)',
  FILE_TOO_LARGE: 'File too large (max 1MB)',
  FILE_TOO_SMALL: 'File too small (min 1KB)',
  FILE_INVALID: 'Invalid file',
  FILE_EXISTS: 'File already exists',
};

export const ErrorHandling = () => (
  <FileUpload.Root
    maxFiles={3}
    maxFileSize={1024 * 1024}
    minFileSize={1024}
    accept="image/*,application/pdf"
    className={styles.Root}
  >
    <FileUpload.Label className={styles.Label}>Upload Documents</FileUpload.Label>
    <FileUpload.Dropzone className={styles.Dropzone}>
      <UploadIcon className={styles.DropzoneIcon} />
      <div className={styles.DropzoneContent}>
        <span className={styles.DropzoneTitle}>Drop files here</span>
        <span className={styles.DropzoneDescription}>Images and PDFs, max 1MB each</span>
      </div>
    </FileUpload.Dropzone>

    <FileUpload.Context>
      {({ acceptedFiles, rejectedFiles }) => (
        <>
          {acceptedFiles.length > 0 && (
            <div className={styles.Section}>
              <div className={styles.SectionTitle} data-status="accepted">
                <CheckCircleIcon
                  style={{
                    width: '0.875rem',
                    height: '0.875rem',
                    display: 'inline',
                    marginRight: '0.25rem',
                    verticalAlign: 'middle',
                  }}
                />
                Accepted Files
              </div>
              <FileUpload.ItemGroup className={styles.ItemGroup}>
                {acceptedFiles.map((file) => (
                  <FileUpload.Item key={file.name} file={file} className={styles.Item}>
                    <FileUpload.ItemPreview type="image/*" className={styles.ItemPreview}>
                      <FileUpload.ItemPreviewImage className={styles.ItemPreviewImage} />
                    </FileUpload.ItemPreview>
                    <FileUpload.ItemPreview type="application/pdf" className={styles.ItemPreview}>
                      <FileIcon />
                    </FileUpload.ItemPreview>
                    <FileUpload.ItemName className={styles.ItemName} />
                    <FileUpload.ItemSizeText className={styles.ItemSizeText} />
                    <FileUpload.ItemDeleteTrigger className={styles.ItemDeleteTrigger}>
                      <XIcon />
                    </FileUpload.ItemDeleteTrigger>
                  </FileUpload.Item>
                ))}
              </FileUpload.ItemGroup>
            </div>
          )}

          {rejectedFiles.length > 0 && (
            <div className={styles.Section}>
              <div className={styles.SectionTitle} data-status="rejected">
                <AlertCircleIcon
                  style={{
                    width: '0.875rem',
                    height: '0.875rem',
                    display: 'inline',
                    marginRight: '0.25rem',
                    verticalAlign: 'middle',
                  }}
                />
                Rejected Files
              </div>
              <FileUpload.ItemGroup className={styles.ItemGroup}>
                {rejectedFiles.map((fileRejection) => (
                  <FileUpload.Item
                    key={fileRejection.file.name}
                    file={fileRejection.file}
                    className={styles.Item}
                    data-rejected
                  >
                    <div className={styles.ItemPreview}>
                      <AlertCircleIcon />
                    </div>
                    <FileUpload.ItemName className={styles.ItemName} />
                    <FileUpload.ItemSizeText className={styles.ItemSizeText} />
                    <div className={styles.ErrorList}>
                      {fileRejection.errors.map((error, index) => (
                        <div key={index} className={styles.ErrorItem}>
                          {errorMessages[error as FileUploadFileError] || error}
                        </div>
                      ))}
                    </div>
                  </FileUpload.Item>
                ))}
              </FileUpload.ItemGroup>
            </div>
          )}
        </>
      )}
    </FileUpload.Context>

    <FileUpload.HiddenInput />
  </FileUpload.Root>
);
```

#### Solid

```tsx
import { FileUpload, type FileUploadFileError } from '@ark-ui/solid/file-upload';
import { For } from 'solid-js';

const errorMessages: Record<FileUploadFileError, string> = {
  TOO_MANY_FILES: '📊 Too many files selected (max 3 allowed)',
  FILE_INVALID_TYPE: '🚫 Invalid file type (only images and PDFs allowed)',
  FILE_TOO_LARGE: '📏 File too large (max 1MB)',
  FILE_TOO_SMALL: '📐 File too small (min 1KB)',
  FILE_INVALID: '⚠️ Invalid file',
  FILE_EXISTS: '🔄 File already exists',
};

export const ErrorHandling = () => (
  <FileUpload.Root
    maxFiles={3}
    maxFileSize={1024 * 1024} // 1MB
    minFileSize={1024} // 1KB
    accept="image/*,application/pdf"
  >
    <FileUpload.Label>File Upload with Validation</FileUpload.Label>
    <FileUpload.Trigger>Select Files</FileUpload.Trigger>

    {/* Accepted Files Section */}
    <div data-status="accepted">
      <h3>✅ Accepted Files</h3>
      <FileUpload.ItemGroup>
        <FileUpload.Context>
          {(fileUpload) =>
            fileUpload().acceptedFiles.length === 0 ? (
              <div>No files uploaded yet</div>
            ) : (
              <For each={fileUpload().acceptedFiles}>
                {(file) => (
                  <FileUpload.Item file={file} class="file-item" data-status="accepted">
                    <FileUpload.ItemPreview type="image/*">
                      <FileUpload.ItemPreviewImage />
                    </FileUpload.ItemPreview>
                    <FileUpload.ItemPreview type="application/pdf">
                      <div data-type="pdf">PDF</div>
                    </FileUpload.ItemPreview>
                    <FileUpload.ItemName />
                    <FileUpload.ItemSizeText />
                    <FileUpload.ItemDeleteTrigger>Remove</FileUpload.ItemDeleteTrigger>
                  </FileUpload.Item>
                )}
              </For>
            )
          }
        </FileUpload.Context>
      </FileUpload.ItemGroup>
    </div>

    {/* Rejected Files Section */}
    <div data-status="rejected">
      <h3>❌ Rejected Files</h3>
      <FileUpload.ItemGroup>
        <FileUpload.Context>
          {(fileUpload) =>
            fileUpload().rejectedFiles.length === 0 ? (
              <div>No rejected files</div>
            ) : (
              <For each={fileUpload().rejectedFiles}>
                {(fileRejection) => (
                  <FileUpload.Item file={fileRejection.file} class="file-item" data-status="rejected">
                    <FileUpload.ItemName />
                    <FileUpload.ItemSizeText />
                    <div>
                      <strong>Validation Errors:</strong>
                      <For each={fileRejection.errors}>
                        {(error) => (
                          <div data-error-code={error}>{errorMessages[error] || `❓ ${error}`}</div>
                        )}
                      </For>
                    </div>
                  </FileUpload.Item>
                )}
              </For>
            )
          }
        </FileUpload.Context>
      </FileUpload.ItemGroup>
    </div>

    <FileUpload.HiddenInput />
  </FileUpload.Root>
);
```

#### Vue

```vue
<script setup lang="ts">
import { FileUpload, type FileUploadFileError } from '@ark-ui/vue/file-upload';

const errorMessages: Record<FileUploadFileError, string> = {
  TOO_MANY_FILES: '📊 Too many files selected (max 3 allowed)',
  FILE_INVALID_TYPE: '🚫 Invalid file type (only images and PDFs allowed)',
  FILE_TOO_LARGE: '📏 File too large (max 1MB)',
  FILE_TOO_SMALL: '📐 File too small (min 1KB)',
  FILE_INVALID: '⚠️ Invalid file',
  FILE_EXISTS: '🔄 File already exists',
};
</script>

<template>
  <FileUpload.Root
    :maxFiles="3"
    :maxFileSize="1024 * 1024"
    :minFileSize="1024"
    accept="image/*,application/pdf"
  >
    <FileUpload.Label>File Upload with Validation</FileUpload.Label>
    <FileUpload.Trigger>Select Files</FileUpload.Trigger>

    <!-- Accepted Files Section -->
    <div data-status="accepted">
      <h3>✅ Accepted Files</h3>
      <FileUpload.ItemGroup>
        <FileUpload.Context v-slot="{ acceptedFiles }">
          <div v-if="acceptedFiles.length === 0">No files uploaded yet</div>
          <FileUpload.Item
            v-else
            v-for="file in acceptedFiles"
            :file="file"
            :key="file.name"
            class="file-item"
            data-status="accepted"
          >
            <FileUpload.ItemPreview type="image/*">
              <FileUpload.ItemPreviewImage />
            </FileUpload.ItemPreview>
            <FileUpload.ItemPreview type="application/pdf">
              <div data-type="pdf">PDF</div>
            </FileUpload.ItemPreview>
            <FileUpload.ItemName />
            <FileUpload.ItemSizeText />
            <FileUpload.ItemDeleteTrigger>Remove</FileUpload.ItemDeleteTrigger>
          </FileUpload.Item>
        </FileUpload.Context>
      </FileUpload.ItemGroup>
    </div>

    <!-- Rejected Files Section -->
    <div data-status="rejected">
      <h3>❌ Rejected Files</h3>
      <FileUpload.ItemGroup>
        <FileUpload.Context v-slot="{ rejectedFiles }">
          <div v-if="rejectedFiles.length === 0">No rejected files</div>
          <FileUpload.Item
            v-else
            v-for="fileRejection in rejectedFiles"
            :file="fileRejection.file"
            :key="fileRejection.file.name"
            class="file-item"
            data-status="rejected"
          >
            <FileUpload.ItemName />
            <FileUpload.ItemSizeText />
            <div>
              <strong>Validation Errors:</strong>
              <div v-for="(error, index) in fileRejection.errors" :key="index" :data-error-code="error">
                {{ errorMessages[error] || `❓ ${error}` }}
              </div>
            </div>
          </FileUpload.Item>
        </FileUpload.Context>
      </FileUpload.ItemGroup>
    </div>

    <FileUpload.HiddenInput />
  </FileUpload.Root>
</template>
```

#### Svelte

```svelte
<script lang="ts">
  import { FileUpload, type FileUploadFileError } from '@ark-ui/svelte/file-upload'

  const errorMessages: Record<FileUploadFileError, string> = {
    TOO_MANY_FILES: '📊 Too many files selected (max 3 allowed)',
    FILE_INVALID_TYPE: '🚫 Invalid file type (only images and PDFs allowed)',
    FILE_TOO_LARGE: '📏 File too large (max 1MB)',
    FILE_TOO_SMALL: '📐 File too small (min 1KB)',
    FILE_INVALID: '⚠️ Invalid file',
    FILE_EXISTS: '🔄 File already exists',
  }
</script>

<FileUpload.Root maxFiles={3} maxFileSize={1024 * 1024} minFileSize={1024} accept="image/*,application/pdf">
  <FileUpload.Label>File Upload with Validation</FileUpload.Label>
  <FileUpload.Trigger>Select Files</FileUpload.Trigger>

  <!-- Accepted Files Section -->
  <div data-status="accepted">
    <h3>✅ Accepted Files</h3>
    <FileUpload.ItemGroup>
      <FileUpload.Context>
        {#snippet render(fileUpload)}
          {#if fileUpload().acceptedFiles.length === 0}
            <div>No files uploaded yet</div>
          {:else}
            {#each fileUpload().acceptedFiles as file (file.name)}
              <FileUpload.Item {file} class="file-item" data-status="accepted">
                <FileUpload.ItemPreview type="image/*">
                  <FileUpload.ItemPreviewImage />
                </FileUpload.ItemPreview>
                <FileUpload.ItemPreview type="application/pdf">
                  <div data-type="pdf">PDF</div>
                </FileUpload.ItemPreview>
                <FileUpload.ItemName />
                <FileUpload.ItemSizeText />
                <FileUpload.ItemDeleteTrigger>Remove</FileUpload.ItemDeleteTrigger>
              </FileUpload.Item>
            {/each}
          {/if}
        {/snippet}
      </FileUpload.Context>
    </FileUpload.ItemGroup>
  </div>

  <!-- Rejected Files Section -->
  <div data-status="rejected">
    <h3>❌ Rejected Files</h3>
    <FileUpload.ItemGroup>
      <FileUpload.Context>
        {#snippet render(fileUpload)}
          {#if fileUpload().rejectedFiles.length === 0}
            <div>No rejected files</div>
          {:else}
            {#each fileUpload().rejectedFiles as fileRejection (fileRejection.file.name)}
              <FileUpload.Item file={fileRejection.file} class="file-item" data-status="rejected">
                <FileUpload.ItemName />
                <FileUpload.ItemSizeText />
                <div>
                  <strong>Validation Errors:</strong>
                  {#each fileRejection.errors as error}
                    <div data-error-code={error}>
                      {errorMessages[error] || `❓ ${error}`}
                    </div>
                  {/each}
                </div>
              </FileUpload.Item>
            {/each}
          {/if}
        {/snippet}
      </FileUpload.Context>
    </FileUpload.ItemGroup>
  </div>

  <FileUpload.HiddenInput />
</FileUpload.Root>

```

### File Transformations

Use `transformFiles` to process files before they're added. Useful for image compression, format conversion, or
resizing.

**Example: transform-files**

#### React

```tsx
import { FileUpload } from '@ark-ui/react/file-upload';
import { compressAccurately } from 'image-conversion';
import { ImageIcon, XIcon } from 'lucide-react';
import styles from 'styles/file-upload.module.css';

export const TransformFiles = () => {
  const transformFiles = async (files: File[]) => {
    return Promise.all(
      files.map(async (file) => {
        if (file.type.startsWith('image/')) {
          try {
            const blob = await compressAccurately(file, 200);
            return new File([blob], file.name, { type: blob.type });
          } catch (error) {
            console.error('Compression failed for:', file.name, error);
            return file;
          }
        }
        return file;
      }),
    );
  };

  return (
    <FileUpload.Root accept="image/*" maxFiles={5} transformFiles={transformFiles} className={styles.Root}>
      <FileUpload.Label className={styles.Label}>Upload with Compression</FileUpload.Label>
      <FileUpload.Trigger className={styles.Trigger}>
        <ImageIcon style={{ width: '1rem', height: '1rem' }} />
        Choose Images
      </FileUpload.Trigger>
      <FileUpload.ItemGroup className={styles.ItemGroup}>
        <FileUpload.Context>
          {({ acceptedFiles }) =>
            acceptedFiles.map((file) => (
              <FileUpload.Item key={file.name} file={file} className={styles.Item}>
                <FileUpload.ItemPreview type="image/*" className={styles.ItemPreview}>
                  <FileUpload.ItemPreviewImage className={styles.ItemPreviewImage} />
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
};
```

#### Solid

```tsx
import { FileUpload } from '@ark-ui/solid/file-upload';
import { compressAccurately } from 'image-conversion';
import { For } from 'solid-js';

export const TransformFiles = () => {
  const transformFiles = async (files: File[]) => {
    return Promise.all(
      files.map(async (file) => {
        if (file.type.startsWith('image/')) {
          try {
            const blob = await compressAccurately(file, 200);
            return new File([blob], file.name, { type: blob.type });
          } catch (error) {
            console.error('Compression failed for:', file.name, error);
            return file;
          }
        }
        return file;
      }),
    );
  };

  return (
    <FileUpload.Root accept="image/*" maxFiles={5} transformFiles={transformFiles}>
      <FileUpload.Label>File Upload with Compression</FileUpload.Label>
      <FileUpload.Trigger>Choose Images</FileUpload.Trigger>

      <FileUpload.ItemGroup>
        <FileUpload.Context>
          {(fileUpload) => (
            <For each={fileUpload().acceptedFiles}>
              {(file) => (
                <FileUpload.Item file={file} class="file-item">
                  <FileUpload.ItemPreview type="image/*">
                    <FileUpload.ItemPreviewImage />
                  </FileUpload.ItemPreview>
                  <FileUpload.ItemName />
                  <FileUpload.ItemSizeText />
                  <FileUpload.ItemDeleteTrigger>Remove</FileUpload.ItemDeleteTrigger>
                </FileUpload.Item>
              )}
            </For>
          )}
        </FileUpload.Context>
      </FileUpload.ItemGroup>

      <FileUpload.HiddenInput />
    </FileUpload.Root>
  );
};
```

#### Vue

```vue
<script setup lang="ts">
import { FileUpload } from '@ark-ui/vue/file-upload';
import { compressAccurately } from 'image-conversion';

const transformFiles = async (files: File[]) => {
  return Promise.all(
    files.map(async (file) => {
      if (file.type.startsWith('image/')) {
        try {
          const blob = await compressAccurately(file, 200);
          return new File([blob], file.name, { type: blob.type });
        } catch (error) {
          console.error('Compression failed for:', file.name, error);
          return file;
        }
      }
      return file;
    }),
  );
};
</script>

<template>
  <FileUpload.Root accept="image/*" :maxFiles="5" :transformFiles="transformFiles">
    <FileUpload.Label>File Upload with Compression</FileUpload.Label>
    <FileUpload.Trigger>Choose Images</FileUpload.Trigger>

    <FileUpload.ItemGroup>
      <FileUpload.Context v-slot="{ acceptedFiles }">
        <FileUpload.Item v-for="file in acceptedFiles" :file="file" :key="file.name" class="file-item">
          <FileUpload.ItemPreview type="image/*">
            <FileUpload.ItemPreviewImage />
          </FileUpload.ItemPreview>
          <FileUpload.ItemName />
          <FileUpload.ItemSizeText />
          <FileUpload.ItemDeleteTrigger>Remove</FileUpload.ItemDeleteTrigger>
        </FileUpload.Item>
      </FileUpload.Context>
    </FileUpload.ItemGroup>

    <FileUpload.HiddenInput />
  </FileUpload.Root>
</template>
```

#### Svelte

```svelte
<script lang="ts">
  import { FileUpload } from '@ark-ui/svelte/file-upload'
  import { compressAccurately } from 'image-conversion'

  const transformFiles = async (files: File[]) => {
    return Promise.all(
      files.map(async (file) => {
        if (file.type.startsWith('image/')) {
          try {
            const blob = await compressAccurately(file, 200)
            return new File([blob], file.name, { type: blob.type })
          } catch (error) {
            console.error('Compression failed for:', file.name, error)
            return file
          }
        }
        return file
      }),
    )
  }
</script>

<FileUpload.Root accept="image/*" maxFiles={5} {transformFiles}>
  <FileUpload.Label>Upload with Compression</FileUpload.Label>
  <FileUpload.Trigger>Choose Images</FileUpload.Trigger>

  <FileUpload.ItemGroup>
    <FileUpload.Context>
      {#snippet render(fileUpload)}
        {#each fileUpload().acceptedFiles as file (file.name)}
          <FileUpload.Item {file}>
            <FileUpload.ItemPreview type="image/*">
              <FileUpload.ItemPreviewImage />
            </FileUpload.ItemPreview>
            <FileUpload.ItemName />
            <FileUpload.ItemSizeText />
            <FileUpload.ItemDeleteTrigger>X</FileUpload.ItemDeleteTrigger>
          </FileUpload.Item>
        {/each}
      {/snippet}
    </FileUpload.Context>
  </FileUpload.ItemGroup>

  <FileUpload.HiddenInput />
</FileUpload.Root>

```

### Field

Use `Field` to add helper text and error handling.

**Example: with-field**

#### React

```tsx
import { Field } from '@ark-ui/react/field';
import { FileUpload } from '@ark-ui/react/file-upload';
import { FileIcon, UploadIcon, XIcon } from 'lucide-react';
import field from 'styles/field.module.css';
import styles from 'styles/file-upload.module.css';

export const WithField = () => (
  <Field.Root className={field.Root}>
    <FileUpload.Root maxFiles={5} className={styles.Root}>
      <FileUpload.Label className={styles.Label}>Attachments</FileUpload.Label>
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
      <FileUpload.HiddenInput data-testid="input" />
    </FileUpload.Root>
    <Field.HelperText className={field.HelperText}>Upload up to 5 files</Field.HelperText>
    <Field.ErrorText className={field.ErrorText}>Please upload at least one file</Field.ErrorText>
  </Field.Root>
);
```

#### Solid

```tsx
import { Field } from '@ark-ui/solid/field';
import { FileUpload } from '@ark-ui/solid/file-upload';

export const WithField = (props: Field.RootProps) => (
  <Field.Root {...props}>
    <FileUpload.Root maxFiles={5}>
      <FileUpload.Label>Label</FileUpload.Label>
      <FileUpload.Trigger>Select</FileUpload.Trigger>
      <FileUpload.ItemGroup />
      <FileUpload.HiddenInput data-testid="input" />
    </FileUpload.Root>
    <Field.HelperText>Additional Info</Field.HelperText>
    <Field.ErrorText>Error Info</Field.ErrorText>
  </Field.Root>
);
```

#### Vue

```vue
<script setup lang="ts">
import { Field, type FieldRootProps } from '@ark-ui/vue/field';
import { FileUpload } from '@ark-ui/vue/file-upload';

const props = defineProps<FieldRootProps>();
</script>

<template>
  <Field.Root v-bind="props">
    <FileUpload.Root :maxFiles="5">
      <FileUpload.Label>Label</FileUpload.Label>
      <FileUpload.Trigger>Select</FileUpload.Trigger>
      <FileUpload.ItemGroup />
      <FileUpload.HiddenInput data-testid="input" />
    </FileUpload.Root>
    <Field.HelperText>Additional Info</Field.HelperText>
    <Field.ErrorText>Error Info</Field.ErrorText>
  </Field.Root>
</template>
```

#### Svelte

```svelte
<script lang="ts">
  import { Field } from '@ark-ui/svelte/field'
  import { FileUpload } from '@ark-ui/svelte/file-upload'
</script>

<Field.Root>
  <FileUpload.Root maxFiles={5}>
    <FileUpload.Label>Label</FileUpload.Label>
    <FileUpload.Trigger>Select</FileUpload.Trigger>
    <FileUpload.ItemGroup />
    <FileUpload.HiddenInput data-testid="input" />
  </FileUpload.Root>
  <Field.HelperText>Additional Info</Field.HelperText>
  <Field.ErrorText>Error Info</Field.ErrorText>
</Field.Root>

```

### Root Provider

An alternative way to control the file upload is to use the `RootProvider` component and the `useFileUpload` hook. This
way you can access the state and methods from outside the component.

**Example: root-provider**

#### React

```tsx
import { FileUpload, useFileUpload } from '@ark-ui/react/file-upload';
import { FileIcon, UploadIcon, XIcon } from 'lucide-react';
import button from 'styles/button.module.css';
import styles from 'styles/file-upload.module.css';

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
```

#### Solid

```tsx
import { FileUpload, useFileUpload } from '@ark-ui/solid/file-upload';
import { For } from 'solid-js';

export const RootProvider = () => {
  const fileUpload = useFileUpload({ maxFiles: 5 });

  return (
    <>
      <button onClick={() => fileUpload().clearFiles()}>Clear</button>

      <FileUpload.RootProvider value={fileUpload}>
        <FileUpload.Label>File Upload</FileUpload.Label>
        <FileUpload.Dropzone>Drag your file(s)here</FileUpload.Dropzone>
        <FileUpload.Trigger>Choose file(s)</FileUpload.Trigger>
        <FileUpload.ItemGroup>
          <FileUpload.Context>
            {(context) => (
              <For each={context().acceptedFiles}>
                {(file) => (
                  <FileUpload.Item file={file}>
                    <FileUpload.ItemPreview type="image/*">
                      <FileUpload.ItemPreviewImage />
                    </FileUpload.ItemPreview>
                    <FileUpload.ItemPreview type=".*">Any Icon</FileUpload.ItemPreview>
                    <FileUpload.ItemName />
                    <FileUpload.ItemSizeText />
                    <FileUpload.ItemDeleteTrigger>X</FileUpload.ItemDeleteTrigger>
                  </FileUpload.Item>
                )}
              </For>
            )}
          </FileUpload.Context>
        </FileUpload.ItemGroup>
        <FileUpload.HiddenInput />
      </FileUpload.RootProvider>
    </>
  );
};
```

#### Vue

```vue
<script setup lang="ts">
import { FileUpload, useFileUpload } from '@ark-ui/vue/file-upload';

const fileUpload = useFileUpload({ maxFiles: 5 });
</script>

<template>
  <button @click="fileUpload.clearFiles()">Clear</button>

  <FileUpload.RootProvider :value="fileUpload">
    <FileUpload.Label>File Upload</FileUpload.Label>
    <FileUpload.Dropzone>Drop your files here</FileUpload.Dropzone>
    <FileUpload.Trigger>Choose file(s)</FileUpload.Trigger>
    <FileUpload.ItemGroup>
      <FileUpload.Context v-slot="{ acceptedFiles }">
        <FileUpload.Item v-for="file in acceptedFiles" :file="file" :key="file.name">
          <FileUpload.ItemPreview type="image/*">
            <FileUpload.ItemPreviewImage />
          </FileUpload.ItemPreview>
          <FileUpload.ItemPreview type=".*">
            <div>Generic Icon</div>
          </FileUpload.ItemPreview>
          <FileUpload.ItemName />
          <FileUpload.ItemSizeText />
          <FileUpload.ItemDeleteTrigger>X</FileUpload.ItemDeleteTrigger>
        </FileUpload.Item>
      </FileUpload.Context>
    </FileUpload.ItemGroup>
    <FileUpload.HiddenInput />
  </FileUpload.RootProvider>
</template>
```

#### Svelte

```svelte
<script lang="ts">
  import { FileUpload, useFileUpload } from '@ark-ui/svelte/file-upload'
  import { FileIcon } from 'lucide-svelte'

  const id = $props.id()
  const fileUpload = useFileUpload({ id, maxFiles: 5 })
</script>

<div>
  <button onclick={() => fileUpload().clearFiles()}>Clear All Files</button>

  <FileUpload.RootProvider value={fileUpload}>
    <FileUpload.Label>File Upload</FileUpload.Label>
    <FileUpload.Dropzone>Drag your file(s) here</FileUpload.Dropzone>
    <FileUpload.Trigger>Choose file(s)</FileUpload.Trigger>
    <FileUpload.ItemGroup>
      <FileUpload.Context>
        {#snippet render(context)}
          {#each context().acceptedFiles as file (file.name)}
            <FileUpload.Item {file}>
              <FileUpload.ItemPreview type="image/*">
                <FileUpload.ItemPreviewImage />
              </FileUpload.ItemPreview>
              <FileUpload.ItemPreview type=".*">
                <FileIcon />
              </FileUpload.ItemPreview>
              <FileUpload.ItemName />
              <FileUpload.ItemSizeText />
              <FileUpload.ItemDeleteTrigger>X</FileUpload.ItemDeleteTrigger>
            </FileUpload.Item>
          {/each}
        {/snippet}
      </FileUpload.Context>
    </FileUpload.ItemGroup>
    <FileUpload.HiddenInput />
  </FileUpload.RootProvider>
</div>

```

### Pasting Files

Use `setClipboardFiles` to enable pasting images from the clipboard.

**Example: pasting-files**

#### React

```tsx
import { FileUpload, useFileUpload } from '@ark-ui/react/file-upload';
import { ClipboardIcon, XIcon } from 'lucide-react';
import field from 'styles/field.module.css';
import styles from 'styles/file-upload.module.css';

export const PastingFiles = () => {
  const fileUpload = useFileUpload({ maxFiles: 3, accept: 'image/*' });

  return (
    <FileUpload.RootProvider value={fileUpload} className={styles.Root}>
      <FileUpload.Label className={styles.Label}>
        <ClipboardIcon
          style={{
            width: '1rem',
            height: '1rem',
            display: 'inline',
            marginRight: '0.25rem',
            verticalAlign: 'middle',
          }}
        />
        Upload with Paste
      </FileUpload.Label>
      <textarea
        className={field.Textarea}
        placeholder="Paste an image here (Ctrl/Cmd + V)"
        onPaste={(e) => {
          fileUpload.setClipboardFiles(e.clipboardData);
        }}
      />
      <FileUpload.ItemGroup className={styles.ItemGroup}>
        {fileUpload.acceptedFiles.map((file) => (
          <FileUpload.Item key={file.name} file={file} className={styles.Item}>
            <FileUpload.ItemPreview type="image/*" className={styles.ItemPreview}>
              <FileUpload.ItemPreviewImage className={styles.ItemPreviewImage} />
            </FileUpload.ItemPreview>
            <FileUpload.ItemName className={styles.ItemName} />
            <FileUpload.ItemSizeText className={styles.ItemSizeText} />
            <FileUpload.ItemDeleteTrigger className={styles.ItemDeleteTrigger}>
              <XIcon />
            </FileUpload.ItemDeleteTrigger>
          </FileUpload.Item>
        ))}
      </FileUpload.ItemGroup>
      <FileUpload.HiddenInput />
    </FileUpload.RootProvider>
  );
};
```

#### Solid

```tsx
import { FileUpload, useFileUpload } from '@ark-ui/solid/file-upload';
import { For } from 'solid-js';

export const PastingFiles = () => {
  const fileUpload = useFileUpload({ maxFiles: 3, accept: 'image/*' });

  return (
    <FileUpload.RootProvider value={fileUpload}>
      <FileUpload.Label>File Upload with Paste</FileUpload.Label>
      <textarea
        placeholder="Paste image here..."
        onPaste={(e) => {
          fileUpload().setClipboardFiles(e.clipboardData);
        }}
      />
      <FileUpload.ItemGroup>
        <For each={fileUpload().acceptedFiles}>
          {(file) => (
            <FileUpload.Item file={file}>
              <FileUpload.ItemPreview type="image/*">
                <FileUpload.ItemPreviewImage />
              </FileUpload.ItemPreview>
              <FileUpload.ItemDeleteTrigger>X</FileUpload.ItemDeleteTrigger>
            </FileUpload.Item>
          )}
        </For>
      </FileUpload.ItemGroup>
      <FileUpload.HiddenInput />
    </FileUpload.RootProvider>
  );
};
```

#### Vue

```vue
<script setup lang="ts">
import { FileUpload, useFileUpload } from '@ark-ui/vue/file-upload';

const fileUpload = useFileUpload({ maxFiles: 3, accept: 'image/*' });
</script>

<template>
  <FileUpload.RootProvider :value="fileUpload">
    <FileUpload.Label>File Upload with Paste</FileUpload.Label>
    <textarea
      placeholder="Paste image here..."
      @paste="(e: ClipboardEvent) => fileUpload.setClipboardFiles(e.clipboardData)"
    />
    <FileUpload.ItemGroup>
      <FileUpload.Item v-for="file in fileUpload.acceptedFiles" :file="file" :key="file.name">
        <FileUpload.ItemPreview type="image/*">
          <FileUpload.ItemPreviewImage />
        </FileUpload.ItemPreview>
        <FileUpload.ItemDeleteTrigger>X</FileUpload.ItemDeleteTrigger>
      </FileUpload.Item>
    </FileUpload.ItemGroup>
    <FileUpload.HiddenInput />
  </FileUpload.RootProvider>
</template>
```

#### Svelte

```svelte
<script lang="ts">
  import { FileUpload, useFileUpload } from '@ark-ui/svelte/file-upload'

  const id = $props.id()
  const fileUpload = useFileUpload({ id, maxFiles: 3, accept: 'image/*' })
</script>

<FileUpload.RootProvider value={fileUpload}>
  <FileUpload.Label>Upload with Paste</FileUpload.Label>
  <textarea
    placeholder="Paste an image here (Ctrl/Cmd + V)"
    onpaste={(e) => fileUpload().setClipboardFiles(e.clipboardData)}
  ></textarea>
  <FileUpload.ItemGroup>
    {#each fileUpload().acceptedFiles as file (file.name)}
      <FileUpload.Item {file}>
        <FileUpload.ItemPreview type="image/*">
          <FileUpload.ItemPreviewImage />
        </FileUpload.ItemPreview>
        <FileUpload.ItemName />
        <FileUpload.ItemSizeText />
        <FileUpload.ItemDeleteTrigger>X</FileUpload.ItemDeleteTrigger>
      </FileUpload.Item>
    {/each}
  </FileUpload.ItemGroup>
  <FileUpload.HiddenInput />
</FileUpload.RootProvider>

```

### Media Capture

Use `capture` to access the device camera. Set to `"environment"` for back camera or `"user"` for front camera.

**Example: media-capture**

#### React

```tsx
import { FileUpload } from '@ark-ui/react/file-upload';
import { CameraIcon, FileIcon, XIcon } from 'lucide-react';
import styles from 'styles/file-upload.module.css';

export const MediaCapture = () => (
  <FileUpload.Root capture="environment" className={styles.Root}>
    <FileUpload.Label className={styles.Label}>Capture Photo</FileUpload.Label>
    <FileUpload.Trigger className={styles.Trigger}>
      <CameraIcon style={{ width: '1rem', height: '1rem' }} />
      Open Camera
    </FileUpload.Trigger>
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
              <FileUpload.ItemName className={styles.ItemName}>
                {file.webkitRelativePath || file.name}
              </FileUpload.ItemName>
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
```

#### Solid

```tsx
import { FileUpload } from '@ark-ui/solid/file-upload';
import { For } from 'solid-js';

export const MediaCapture = () => (
  <FileUpload.Root capture="environment">
    <FileUpload.Trigger>Open Camera</FileUpload.Trigger>
    <FileUpload.ItemGroup>
      <FileUpload.Context>
        {(context) => (
          <For each={context().acceptedFiles}>
            {(file) => (
              <FileUpload.Item file={file}>
                <FileUpload.ItemPreview type="image/*">
                  <FileUpload.ItemPreviewImage />
                </FileUpload.ItemPreview>
                <FileUpload.ItemName>{file.webkitRelativePath || file.name}</FileUpload.ItemName>
              </FileUpload.Item>
            )}
          </For>
        )}
      </FileUpload.Context>
    </FileUpload.ItemGroup>
    <FileUpload.HiddenInput />
  </FileUpload.Root>
);
```

#### Vue

```vue
<script setup lang="ts">
import { FileUpload } from '@ark-ui/vue/file-upload';
</script>

<template>
  <FileUpload.Root capture="environment">
    <FileUpload.Trigger>Open Camera</FileUpload.Trigger>
    <FileUpload.ItemGroup>
      <FileUpload.Context v-slot="{ acceptedFiles }">
        <FileUpload.Item v-for="file in acceptedFiles" :file="file" :key="file.name">
          <FileUpload.ItemPreview type="image/*">
            <FileUpload.ItemPreviewImage />
          </FileUpload.ItemPreview>
          <FileUpload.ItemName>
            {{ file.webkitRelativePath || file.name }}
          </FileUpload.ItemName>
        </FileUpload.Item>
      </FileUpload.Context>
    </FileUpload.ItemGroup>
    <FileUpload.HiddenInput />
  </FileUpload.Root>
</template>
```

#### Svelte

```svelte
<script lang="ts">
  import { FileUpload } from '@ark-ui/svelte/file-upload'
</script>

<FileUpload.Root capture="environment">
  <FileUpload.Trigger>Open Camera</FileUpload.Trigger>
  <FileUpload.ItemGroup>
    <FileUpload.Context>
      {#snippet render(context)}
        {#each context().acceptedFiles as file (file.name)}
          <FileUpload.Item {file}>
            <FileUpload.ItemPreview type="image/*">
              <FileUpload.ItemPreviewImage />
            </FileUpload.ItemPreview>
            <FileUpload.ItemName>
              {file.webkitRelativePath ?? file.name}
            </FileUpload.ItemName>
          </FileUpload.Item>
        {/each}
      {/snippet}
    </FileUpload.Context>
  </FileUpload.ItemGroup>
  <FileUpload.HiddenInput />
</FileUpload.Root>

```

### Rejected Files

Access `rejectedFiles` from the context to display validation errors.

**Example: rejected-files**

#### React

```tsx
import { FileUpload } from '@ark-ui/react/file-upload';
import { AlertCircleIcon, CheckCircleIcon, UploadIcon, XIcon } from 'lucide-react';
import styles from 'styles/file-upload.module.css';

export const RejectedFiles = () => (
  <FileUpload.Root
    maxFiles={2}
    className={styles.Root}
    onFileReject={(details) => {
      console.log('Rejected files:', details);
    }}
  >
    <FileUpload.Label className={styles.Label}>Upload Files (Max 2)</FileUpload.Label>
    <FileUpload.Dropzone className={styles.Dropzone}>
      <UploadIcon className={styles.DropzoneIcon} />
      <div className={styles.DropzoneContent}>
        <span className={styles.DropzoneTitle}>Drop files here</span>
        <span className={styles.DropzoneDescription}>Maximum 2 files allowed</span>
      </div>
    </FileUpload.Dropzone>

    <FileUpload.Context>
      {({ acceptedFiles, rejectedFiles }) => (
        <>
          {acceptedFiles.length > 0 && (
            <div className={styles.Section}>
              <div className={styles.SectionTitle} data-status="accepted">
                <CheckCircleIcon
                  style={{
                    width: '0.875rem',
                    height: '0.875rem',
                    display: 'inline',
                    marginRight: '0.25rem',
                    verticalAlign: 'middle',
                  }}
                />
                Accepted Files
              </div>
              <FileUpload.ItemGroup type="accepted" className={styles.ItemGroup}>
                {acceptedFiles.map((file) => (
                  <FileUpload.Item key={file.name} file={file} className={styles.Item}>
                    <FileUpload.ItemPreview type="image/*" className={styles.ItemPreview}>
                      <FileUpload.ItemPreviewImage className={styles.ItemPreviewImage} />
                    </FileUpload.ItemPreview>
                    <FileUpload.ItemName className={styles.ItemName} />
                    <FileUpload.ItemSizeText className={styles.ItemSizeText} />
                    <FileUpload.ItemDeleteTrigger className={styles.ItemDeleteTrigger}>
                      <XIcon />
                    </FileUpload.ItemDeleteTrigger>
                  </FileUpload.Item>
                ))}
              </FileUpload.ItemGroup>
            </div>
          )}

          {rejectedFiles.length > 0 && (
            <div className={styles.Section}>
              <div className={styles.SectionTitle} data-status="rejected">
                <AlertCircleIcon
                  style={{
                    width: '0.875rem',
                    height: '0.875rem',
                    display: 'inline',
                    marginRight: '0.25rem',
                    verticalAlign: 'middle',
                  }}
                />
                Rejected Files
              </div>
              <FileUpload.ItemGroup type="rejected" className={styles.ItemGroup}>
                {rejectedFiles.map(({ file, errors }) => (
                  <FileUpload.Item key={file.name} file={file} className={styles.Item} data-rejected>
                    <div className={styles.ItemPreview}>
                      <AlertCircleIcon />
                    </div>
                    <FileUpload.ItemName className={styles.ItemName} />
                    <FileUpload.ItemSizeText className={styles.ItemSizeText} />
                    <div className={styles.ErrorList}>
                      {errors.map((error, index) => (
                        <span key={index} className={styles.ErrorItem}>
                          {error}
                        </span>
                      ))}
                    </div>
                  </FileUpload.Item>
                ))}
              </FileUpload.ItemGroup>
            </div>
          )}
        </>
      )}
    </FileUpload.Context>

    <FileUpload.HiddenInput />
  </FileUpload.Root>
);
```

#### Solid

```tsx
import { FileUpload } from '@ark-ui/solid';
import { XIcon } from 'lucide-solid';
import { For } from 'solid-js';

export const RejectedFiles = () => {
  return (
    <FileUpload.Root
      maxFiles={2}
      onFileReject={(fileRejection) => {
        console.log(fileRejection);
      }}
    >
      <FileUpload.Dropzone>Drag and drop your images here</FileUpload.Dropzone>

      {/* Accepted Files */}
      <FileUpload.ItemGroup type="accepted">
        <h3>Accepted Files</h3>
        <FileUpload.Context>
          {(context) => (
            <For each={context().acceptedFiles}>
              {(file) => (
                <FileUpload.Item file={file}>
                  <FileUpload.ItemPreview type="image/*">
                    <FileUpload.ItemPreviewImage />
                  </FileUpload.ItemPreview>
                  <FileUpload.ItemName />
                  <FileUpload.ItemDeleteTrigger>
                    <XIcon />
                  </FileUpload.ItemDeleteTrigger>
                </FileUpload.Item>
              )}
            </For>
          )}
        </FileUpload.Context>
      </FileUpload.ItemGroup>

      {/* Rejected Files */}
      <FileUpload.ItemGroup type="rejected">
        <h3>Rejected Files</h3>
        <FileUpload.Context>
          {(context) => (
            <For each={context().rejectedFiles}>
              {(fileRejection) => (
                <FileUpload.Item file={fileRejection.file}>
                  <FileUpload.ItemName />
                  <FileUpload.ItemSizeText />
                  <FileUpload.ItemDeleteTrigger>
                    <XIcon />
                  </FileUpload.ItemDeleteTrigger>
                </FileUpload.Item>
              )}
            </For>
          )}
        </FileUpload.Context>
      </FileUpload.ItemGroup>

      <FileUpload.HiddenInput />
    </FileUpload.Root>
  );
};
```

#### Vue

```vue
<script setup lang="ts">
import { XIcon } from 'lucide-vue-next';
import { FileUpload } from '@ark-ui/vue';
</script>

<template>
  <FileUpload.Root :max-files="2" @file-reject="(fileRejection) => console.log(fileRejection)">
    <FileUpload.Dropzone>Drag and drop your images here</FileUpload.Dropzone>

    <!-- Accepted Files -->
    <FileUpload.ItemGroup type="accepted">
      <h3>Accepted Files</h3>
      <FileUpload.Context #default="{ acceptedFiles }">
        <FileUpload.Item v-for="file in acceptedFiles" :key="file.name" :file="file">
          <FileUpload.ItemPreview type="image/*">
            <FileUpload.ItemPreviewImage />
          </FileUpload.ItemPreview>
          <FileUpload.ItemName />
          <FileUpload.ItemDeleteTrigger>
            <XIcon />
          </FileUpload.ItemDeleteTrigger>
        </FileUpload.Item>
      </FileUpload.Context>
    </FileUpload.ItemGroup>

    <!-- Rejected Files -->
    <FileUpload.ItemGroup type="rejected">
      <h3>Rejected Files</h3>
      <FileUpload.Context #default="{ rejectedFiles }">
        <FileUpload.Item v-for="{ file, errors } in rejectedFiles" :key="file.name" :file="file">
          <FileUpload.ItemName />
          {{ errors.join(', ') }}
          <FileUpload.ItemSizeText />
          <FileUpload.ItemDeleteTrigger>
            <XIcon />
          </FileUpload.ItemDeleteTrigger>
        </FileUpload.Item>
      </FileUpload.Context>
    </FileUpload.ItemGroup>

    <FileUpload.HiddenInput />
  </FileUpload.Root>
</template>
```

#### Svelte

```svelte
<script lang="ts">
  import { XIcon } from 'lucide-svelte'
  import { FileUpload } from '@ark-ui/svelte'
</script>

<FileUpload.Root maxFiles={2} onFileReject={(fileRejection) => console.log(fileRejection)}>
  <FileUpload.Dropzone>Drag and drop your images here</FileUpload.Dropzone>

  <!-- Accepted Files -->
  <FileUpload.ItemGroup type="accepted">
    <h3>Accepted Files</h3>
    <FileUpload.Context>
      {#snippet render(context)}
        {#each context().acceptedFiles as file (file.name)}
          <FileUpload.Item {file}>
            <FileUpload.ItemPreview type="image/*">
              <FileUpload.ItemPreviewImage />
            </FileUpload.ItemPreview>
            <FileUpload.ItemName />
            <FileUpload.ItemDeleteTrigger>
              <XIcon />
            </FileUpload.ItemDeleteTrigger>
          </FileUpload.Item>
        {/each}
      {/snippet}
    </FileUpload.Context>
  </FileUpload.ItemGroup>

  <!-- Rejected Files -->
  <FileUpload.ItemGroup type="rejected">
    <h3>Rejected Files</h3>
    <FileUpload.Context>
      {#snippet render(context)}
        {#each context().rejectedFiles as { file, errors } (file.name)}
          <FileUpload.Item {file}>
            <FileUpload.ItemName />
            {errors.join(', ')}
            <FileUpload.ItemSizeText />
            <FileUpload.ItemDeleteTrigger>
              <XIcon />
            </FileUpload.ItemDeleteTrigger>
          </FileUpload.Item>
        {/each}
      {/snippet}
    </FileUpload.Context>
  </FileUpload.ItemGroup>

  <FileUpload.HiddenInput />
</FileUpload.Root>

```

## Guides

### File Previews

Use `ItemPreview` with type matching to show appropriate previews based on file format.

- `type="image/*"`: Shows image thumbnails using `ItemPreviewImage`
- `type="video/*"`: For video file previews
- `type="application/pdf"`: For PDF files
- `type=".*"`: Generic fallback for any file type

```tsx
<FileUpload.ItemPreview type="image/*">
  <FileUpload.ItemPreviewImage />
</FileUpload.ItemPreview>

<FileUpload.ItemPreview type="video/*">
  <VideoIcon />
</FileUpload.ItemPreview>

<FileUpload.ItemPreview type="application/pdf">
  <PdfIcon />
</FileUpload.ItemPreview>

<FileUpload.ItemPreview type=".*">
  <FileIcon />
</FileUpload.ItemPreview>
```

### Disable Dropzone

To disable drag-and-drop functionality, set `allowDrop` to `false`.

```tsx
<FileUpload.Root allowDrop={false}>{/* ... */}</FileUpload.Root>
```

### Prevent Document Drop

By default, we prevent accidental navigation when files are dropped outside the dropzone. Set `preventDocumentDrop` to
`false` to disable this.

```tsx
<FileUpload.Root preventDocumentDrop={false}>{/* ... */}</FileUpload.Root>
```

### Prevent Double Open

Use `disableClick` on `Dropzone` when delegating clicks to a nested `Trigger`. This prevents the file picker from
opening twice.

```tsx
<FileUpload.Dropzone disableClick>
  <FileUpload.Trigger>Choose Files</FileUpload.Trigger>
  Drag files here
</FileUpload.Dropzone>
```

## API Reference

### Props

**Component API Reference**

#### React

**Root Props:**

| Prop                                                                | Type                      | Required       | Description                                                                                         |
| ------------------------------------------------------------------- | ------------------------- | -------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------- | --------------------- |
| `accept`                                                            | `Record<string, string[]> | FileMimeType   | FileMimeType[]`                                                                                     | No                                             | The accept file types |
| `acceptedFiles`                                                     | `File[]`                  | No             | The controlled accepted files                                                                       |
| `allowDrop`                                                         | `boolean`                 | No             | Whether to allow drag and drop in the dropzone element                                              |
| `asChild`                                                           | `boolean`                 | No             | Use the provided child element as the default rendered element, combining their props and behavior. |
| `capture`                                                           | `'user'                   | 'environment'` | No                                                                                                  | The default camera to use when capturing media |
| `defaultAcceptedFiles`                                              | `File[]`                  | No             | The default accepted files when rendered.                                                           |
| Use when you don't need to control the accepted files of the input. |
| `directory`                                                         | `boolean`                 | No             | Whether to accept directories, only works in webkit browsers                                        |
| `disabled`                                                          | `boolean`                 | No             | Whether the file input is disabled                                                                  |
| `ids`                                                               | `Partial<{                |

root: string
dropzone: string
hiddenInput: string
trigger: string
label: string
item: (id: string) => string
itemName: (id: string) => string
itemSizeText: (id: string) => string
itemPreview: (id: string) => string
itemDeleteTrigger: (id: string) => string
}>`| No | The ids of the elements. Useful for composition. |
|`invalid`|`boolean`| No | Whether the file input is invalid |
|`locale`|`string`| No | The current locale. Based on the BCP 47 definition. |
|`maxFiles`|`number`| No | The maximum number of files |
|`maxFileSize`|`number`| No | The maximum file size in bytes |
|`minFileSize`|`number`| No | The minimum file size in bytes |
|`name`|`string`| No | The name of the underlying file input |
|`onFileAccept`|`(details: FileAcceptDetails) => void`| No | Function called when the file is accepted |
|`onFileChange`|`(details: FileChangeDetails) => void`| No | Function called when the value changes, whether accepted or rejected |
|`onFileReject`|`(details: FileRejectDetails) => void`| No | Function called when the file is rejected |
|`preventDocumentDrop`|`boolean`| No | Whether to prevent the drop event on the document |
|`readOnly`|`boolean`| No | Whether the file input is read-only |
|`required`|`boolean`| No | Whether the file input is required |
|`transformFiles`|`(files: File[]) => Promise<File[]>`| No | Function to transform the accepted files to apply transformations |
|`translations`|`IntlTranslations`| No | The localized messages to use. |
|`validate`|`(file: File, details: FileValidateDetails) => FileError[] | null` | No | Function to validate a file |

**Root Data Attributes:**

| Attribute         | Value                              |
| ----------------- | ---------------------------------- |
| `[data-scope]`    | file-upload                        |
| `[data-part]`     | root                               |
| `[data-disabled]` | Present when disabled              |
| `[data-readonly]` | Present when read-only             |
| `[data-dragging]` | Present when in the dragging state |

**ClearTrigger Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ClearTrigger Data Attributes:**

| Attribute         | Value                  |
| ----------------- | ---------------------- |
| `[data-scope]`    | file-upload            |
| `[data-part]`     | clear-trigger          |
| `[data-disabled]` | Present when disabled  |
| `[data-readonly]` | Present when read-only |

**Dropzone Props:**

| Prop           | Type      | Required | Description                                                                                         |
| -------------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild`      | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `disableClick` | `boolean` | No       | Whether to disable the click event on the dropzone                                                  |

**Dropzone Data Attributes:**

| Attribute         | Value                              |
| ----------------- | ---------------------------------- |
| `[data-scope]`    | file-upload                        |
| `[data-part]`     | dropzone                           |
| `[data-invalid]`  | Present when invalid               |
| `[data-disabled]` | Present when disabled              |
| `[data-readonly]` | Present when read-only             |
| `[data-dragging]` | Present when in the dragging state |

**HiddenInput Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ItemDeleteTrigger Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ItemDeleteTrigger Data Attributes:**

| Attribute         | Value                  |
| ----------------- | ---------------------- |
| `[data-scope]`    | file-upload            |
| `[data-part]`     | item-delete-trigger    |
| `[data-disabled]` | Present when disabled  |
| `[data-readonly]` | Present when read-only |
| `[data-type]`     | The type of the item   |

**ItemGroup Props:**

| Prop      | Type       | Required | Description                                                                                         |
| --------- | ---------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean`  | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `type`    | `ItemType` | No       |                                                                                                     |

**ItemGroup Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | file-upload           |
| `[data-part]`     | item-group            |
| `[data-disabled]` | Present when disabled |
| `[data-type]`     | The type of the item  |

**ItemName Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ItemName Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | file-upload           |
| `[data-part]`     | item-name             |
| `[data-disabled]` | Present when disabled |
| `[data-type]`     | The type of the item  |

**ItemPreviewImage Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ItemPreviewImage Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | file-upload           |
| `[data-part]`     | item-preview-image    |
| `[data-disabled]` | Present when disabled |
| `[data-type]`     | The type of the item  |

**ItemPreview Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `type`    | `string`  | No       | The file type to match against. Matches all file types by default.                                  |

**ItemPreview Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | file-upload           |
| `[data-part]`     | item-preview          |
| `[data-disabled]` | Present when disabled |
| `[data-type]`     | The type of the item  |

**Item Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `file`    | `File`    | Yes      |                                                                                                     |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**Item Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | file-upload           |
| `[data-part]`     | item                  |
| `[data-disabled]` | Present when disabled |
| `[data-type]`     | The type of the item  |

**ItemSizeText Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ItemSizeText Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | file-upload           |
| `[data-part]`     | item-size-text        |
| `[data-disabled]` | Present when disabled |
| `[data-type]`     | The type of the item  |

**Label Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**Label Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | file-upload           |
| `[data-part]`     | label                 |
| `[data-disabled]` | Present when disabled |
| `[data-required]` | Present when required |

**RootProvider Props:**

| Prop      | Type                  | Required | Description                                                                                         |
| --------- | --------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `value`   | `UseFileUploadReturn` | Yes      |                                                                                                     |
| `asChild` | `boolean`             | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**Trigger Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**Trigger Data Attributes:**

| Attribute         | Value                  |
| ----------------- | ---------------------- |
| `[data-scope]`    | file-upload            |
| `[data-part]`     | trigger                |
| `[data-disabled]` | Present when disabled  |
| `[data-readonly]` | Present when read-only |
| `[data-invalid]`  | Present when invalid   |

#### Solid

**Root Props:**

| Prop                                                                | Type                                     | Required       | Description                                                                                         |
| ------------------------------------------------------------------- | ---------------------------------------- | -------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------- | --------------------- |
| `accept`                                                            | `Record<string, string[]>                | FileMimeType   | FileMimeType[]`                                                                                     | No                                             | The accept file types |
| `acceptedFiles`                                                     | `File[]`                                 | No             | The controlled accepted files                                                                       |
| `allowDrop`                                                         | `boolean`                                | No             | Whether to allow drag and drop in the dropzone element                                              |
| `asChild`                                                           | `(props: ParentProps<'div'>) => Element` | No             | Use the provided child element as the default rendered element, combining their props and behavior. |
| `capture`                                                           | `'user'                                  | 'environment'` | No                                                                                                  | The default camera to use when capturing media |
| `defaultAcceptedFiles`                                              | `File[]`                                 | No             | The default accepted files when rendered.                                                           |
| Use when you don't need to control the accepted files of the input. |
| `directory`                                                         | `boolean`                                | No             | Whether to accept directories, only works in webkit browsers                                        |
| `disabled`                                                          | `boolean`                                | No             | Whether the file input is disabled                                                                  |
| `ids`                                                               | `Partial<{                               |

root: string
dropzone: string
hiddenInput: string
trigger: string
label: string
item: (id: string) => string
itemName: (id: string) => string
itemSizeText: (id: string) => string
itemPreview: (id: string) => string
itemDeleteTrigger: (id: string) => string
}>`| No | The ids of the elements. Useful for composition. |
|`invalid`|`boolean`| No | Whether the file input is invalid |
|`locale`|`string`| No | The current locale. Based on the BCP 47 definition. |
|`maxFiles`|`number`| No | The maximum number of files |
|`maxFileSize`|`number`| No | The maximum file size in bytes |
|`minFileSize`|`number`| No | The minimum file size in bytes |
|`name`|`string`| No | The name of the underlying file input |
|`onFileAccept`|`(details: FileAcceptDetails) => void`| No | Function called when the file is accepted |
|`onFileChange`|`(details: FileChangeDetails) => void`| No | Function called when the value changes, whether accepted or rejected |
|`onFileReject`|`(details: FileRejectDetails) => void`| No | Function called when the file is rejected |
|`preventDocumentDrop`|`boolean`| No | Whether to prevent the drop event on the document |
|`readOnly`|`boolean`| No | Whether the file input is read-only |
|`required`|`boolean`| No | Whether the file input is required |
|`transformFiles`|`(files: File[]) => Promise<File[]>`| No | Function to transform the accepted files to apply transformations |
|`translations`|`IntlTranslations`| No | The localized messages to use. |
|`validate`|`(file: File, details: FileValidateDetails) => FileError[] | null` | No | Function to validate a file |

**Root Data Attributes:**

| Attribute         | Value                              |
| ----------------- | ---------------------------------- |
| `[data-scope]`    | file-upload                        |
| `[data-part]`     | root                               |
| `[data-disabled]` | Present when disabled              |
| `[data-readonly]` | Present when read-only             |
| `[data-dragging]` | Present when in the dragging state |

**ClearTrigger Props:**

| Prop      | Type                                        | Required | Description                                                                                         |
| --------- | ------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `(props: ParentProps<'button'>) => Element` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ClearTrigger Data Attributes:**

| Attribute         | Value                  |
| ----------------- | ---------------------- |
| `[data-scope]`    | file-upload            |
| `[data-part]`     | clear-trigger          |
| `[data-disabled]` | Present when disabled  |
| `[data-readonly]` | Present when read-only |

**Dropzone Props:**

| Prop           | Type                                     | Required | Description                                                                                         |
| -------------- | ---------------------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild`      | `(props: ParentProps<'div'>) => Element` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `disableClick` | `boolean`                                | No       | Whether to disable the click event on the dropzone                                                  |

**Dropzone Data Attributes:**

| Attribute         | Value                              |
| ----------------- | ---------------------------------- |
| `[data-scope]`    | file-upload                        |
| `[data-part]`     | dropzone                           |
| `[data-invalid]`  | Present when invalid               |
| `[data-disabled]` | Present when disabled              |
| `[data-readonly]` | Present when read-only             |
| `[data-dragging]` | Present when in the dragging state |

**HiddenInput Props:**

| Prop      | Type                                       | Required | Description                                                                                         |
| --------- | ------------------------------------------ | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `(props: ParentProps<'input'>) => Element` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ItemDeleteTrigger Props:**

| Prop      | Type                                        | Required | Description                                                                                         |
| --------- | ------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `(props: ParentProps<'button'>) => Element` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ItemDeleteTrigger Data Attributes:**

| Attribute         | Value                  |
| ----------------- | ---------------------- |
| `[data-scope]`    | file-upload            |
| `[data-part]`     | item-delete-trigger    |
| `[data-disabled]` | Present when disabled  |
| `[data-readonly]` | Present when read-only |
| `[data-type]`     | The type of the item   |

**ItemGroup Props:**

| Prop      | Type                                    | Required | Description                                                                                         |
| --------- | --------------------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `(props: ParentProps<'ul'>) => Element` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `type`    | `ItemType`                              | No       |                                                                                                     |

**ItemGroup Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | file-upload           |
| `[data-part]`     | item-group            |
| `[data-disabled]` | Present when disabled |
| `[data-type]`     | The type of the item  |

**ItemName Props:**

| Prop      | Type                                     | Required | Description                                                                                         |
| --------- | ---------------------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `(props: ParentProps<'div'>) => Element` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ItemName Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | file-upload           |
| `[data-part]`     | item-name             |
| `[data-disabled]` | Present when disabled |
| `[data-type]`     | The type of the item  |

**ItemPreviewImage Props:**

| Prop      | Type                                     | Required | Description                                                                                         |
| --------- | ---------------------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `(props: ParentProps<'img'>) => Element` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ItemPreviewImage Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | file-upload           |
| `[data-part]`     | item-preview-image    |
| `[data-disabled]` | Present when disabled |
| `[data-type]`     | The type of the item  |

**ItemPreview Props:**

| Prop      | Type                                     | Required | Description                                                                                         |
| --------- | ---------------------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `(props: ParentProps<'div'>) => Element` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `type`    | `string`                                 | No       | The file type to match against. Matches all file types by default.                                  |

**ItemPreview Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | file-upload           |
| `[data-part]`     | item-preview          |
| `[data-disabled]` | Present when disabled |
| `[data-type]`     | The type of the item  |

**Item Props:**

| Prop      | Type                                    | Required | Description                                                                                         |
| --------- | --------------------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `file`    | `File`                                  | Yes      |                                                                                                     |
| `asChild` | `(props: ParentProps<'li'>) => Element` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**Item Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | file-upload           |
| `[data-part]`     | item                  |
| `[data-disabled]` | Present when disabled |
| `[data-type]`     | The type of the item  |

**ItemSizeText Props:**

| Prop      | Type                                     | Required | Description                                                                                         |
| --------- | ---------------------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `(props: ParentProps<'div'>) => Element` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ItemSizeText Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | file-upload           |
| `[data-part]`     | item-size-text        |
| `[data-disabled]` | Present when disabled |
| `[data-type]`     | The type of the item  |

**Label Props:**

| Prop      | Type                                       | Required | Description                                                                                         |
| --------- | ------------------------------------------ | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `(props: ParentProps<'label'>) => Element` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**Label Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | file-upload           |
| `[data-part]`     | label                 |
| `[data-disabled]` | Present when disabled |
| `[data-required]` | Present when required |

**RootProvider Props:**

| Prop      | Type                                     | Required | Description                                                                                         |
| --------- | ---------------------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `value`   | `UseFileUploadReturn`                    | Yes      |                                                                                                     |
| `asChild` | `(props: ParentProps<'div'>) => Element` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**Trigger Props:**

| Prop      | Type                                        | Required | Description                                                                                         |
| --------- | ------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `(props: ParentProps<'button'>) => Element` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**Trigger Data Attributes:**

| Attribute         | Value                  |
| ----------------- | ---------------------- |
| `[data-scope]`    | file-upload            |
| `[data-part]`     | trigger                |
| `[data-disabled]` | Present when disabled  |
| `[data-readonly]` | Present when read-only |
| `[data-invalid]`  | Present when invalid   |

#### Vue

**Root Props:**

| Prop                   | Type                      | Required       | Description                                                                                         |
| ---------------------- | ------------------------- | -------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------- | --------------------- |
| `accept`               | `Record<string, string[]> | FileMimeType   | FileMimeType[]`                                                                                     | No                                             | The accept file types |
| `allowDrop`            | `boolean`                 | No             | Whether to allow drag and drop in the dropzone element                                              |
| `asChild`              | `boolean`                 | No             | Use the provided child element as the default rendered element, combining their props and behavior. |
| `capture`              | `'user'                   | 'environment'` | No                                                                                                  | The default camera to use when capturing media |
| `defaultAcceptedFiles` | `File[]`                  | No             | The default accepted files                                                                          |
| `directory`            | `boolean`                 | No             | Whether to accept directories, only works in webkit browsers                                        |
| `disabled`             | `boolean`                 | No             | Whether the file input is disabled                                                                  |
| `id`                   | `string`                  | No             | The unique identifier of the machine.                                                               |
| `ids`                  | `Partial<{                |

root: string
dropzone: string
hiddenInput: string
trigger: string
label: string
item(id: string): string
itemName(id: string): string
itemSizeText(id: string): string
itemPreview(id: string): string
}>`| No | The ids of the elements. Useful for composition. |
|`invalid`|`boolean`| No | Whether the file input is invalid |
|`locale`|`string`| No | The current locale. Based on the BCP 47 definition. |
|`maxFiles`|`number`| No | The maximum number of files |
|`maxFileSize`|`number`| No | The maximum file size in bytes |
|`minFileSize`|`number`| No | The minimum file size in bytes |
|`name`|`string`| No | The name of the underlying file input |
|`preventDocumentDrop`|`boolean`| No | Whether to prevent the drop event on the document |
|`readOnly`|`boolean`| No | Whether the file input is read-only |
|`required`|`boolean`| No | Whether the file input is required |
|`transformFiles`|`(files: File[]) => Promise<File[]>`| No | Function to transform the files |
|`translations`|`IntlTranslations`| No | The localized messages to use. |
|`validate`|`(file: File, details: FileValidateDetails) => FileError[] | null` | No | Function to validate a file |

**Root Data Attributes:**

| Attribute         | Value                              |
| ----------------- | ---------------------------------- |
| `[data-scope]`    | file-upload                        |
| `[data-part]`     | root                               |
| `[data-disabled]` | Present when disabled              |
| `[data-readonly]` | Present when read-only             |
| `[data-dragging]` | Present when in the dragging state |

**ClearTrigger Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ClearTrigger Data Attributes:**

| Attribute         | Value                  |
| ----------------- | ---------------------- |
| `[data-scope]`    | file-upload            |
| `[data-part]`     | clear-trigger          |
| `[data-disabled]` | Present when disabled  |
| `[data-readonly]` | Present when read-only |

**Dropzone Props:**

| Prop           | Type      | Required | Description                                                                                         |
| -------------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild`      | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `disableClick` | `boolean` | No       | Whether to disable the click event on the dropzone                                                  |

**Dropzone Data Attributes:**

| Attribute         | Value                              |
| ----------------- | ---------------------------------- |
| `[data-scope]`    | file-upload                        |
| `[data-part]`     | dropzone                           |
| `[data-invalid]`  | Present when invalid               |
| `[data-disabled]` | Present when disabled              |
| `[data-readonly]` | Present when read-only             |
| `[data-dragging]` | Present when in the dragging state |

**HiddenInput Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ItemDeleteTrigger Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ItemDeleteTrigger Data Attributes:**

| Attribute         | Value                  |
| ----------------- | ---------------------- |
| `[data-scope]`    | file-upload            |
| `[data-part]`     | item-delete-trigger    |
| `[data-disabled]` | Present when disabled  |
| `[data-readonly]` | Present when read-only |
| `[data-type]`     | The type of the item   |

**ItemGroup Props:**

| Prop      | Type       | Required | Description                                                                                         |
| --------- | ---------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean`  | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `type`    | `ItemType` | No       |                                                                                                     |

**ItemGroup Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | file-upload           |
| `[data-part]`     | item-group            |
| `[data-disabled]` | Present when disabled |
| `[data-type]`     | The type of the item  |

**ItemName Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ItemName Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | file-upload           |
| `[data-part]`     | item-name             |
| `[data-disabled]` | Present when disabled |
| `[data-type]`     | The type of the item  |

**ItemPreviewImage Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ItemPreviewImage Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | file-upload           |
| `[data-part]`     | item-preview-image    |
| `[data-disabled]` | Present when disabled |
| `[data-type]`     | The type of the item  |

**ItemPreview Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `type`    | `string`  | No       | The file type to match against. Matches all file types by default.                                  |

**ItemPreview Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | file-upload           |
| `[data-part]`     | item-preview          |
| `[data-disabled]` | Present when disabled |
| `[data-type]`     | The type of the item  |

**Item Props:**

| Prop      | Type       | Required | Description                                                                                         |
| --------- | ---------- | -------- | --------------------------------------------------------------------------------------------------- |
| `file`    | `File`     | Yes      |                                                                                                     |
| `asChild` | `boolean`  | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `type`    | `ItemType` | No       |                                                                                                     |

**Item Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | file-upload           |
| `[data-part]`     | item                  |
| `[data-disabled]` | Present when disabled |
| `[data-type]`     | The type of the item  |

**ItemSizeText Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**ItemSizeText Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | file-upload           |
| `[data-part]`     | item-size-text        |
| `[data-disabled]` | Present when disabled |
| `[data-type]`     | The type of the item  |

**Label Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**Label Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | file-upload           |
| `[data-part]`     | label                 |
| `[data-disabled]` | Present when disabled |
| `[data-required]` | Present when required |

**RootProvider Props:**

| Prop      | Type                       | Required | Description                                                                                         |
| --------- | -------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `value`   | `FileUploadApi<PropTypes>` | Yes      |                                                                                                     |
| `asChild` | `boolean`                  | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**Trigger Props:**

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `boolean` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |

**Trigger Data Attributes:**

| Attribute         | Value                  |
| ----------------- | ---------------------- |
| `[data-scope]`    | file-upload            |
| `[data-part]`     | trigger                |
| `[data-disabled]` | Present when disabled  |
| `[data-readonly]` | Present when read-only |
| `[data-invalid]`  | Present when invalid   |

#### Svelte

**Root Props:**

| Prop                                                                | Type                        | Required       | Description                                                                                         |
| ------------------------------------------------------------------- | --------------------------- | -------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------- | --------------------- |
| `accept`                                                            | `Record<string, string[]>   | FileMimeType   | FileMimeType[]`                                                                                     | No                                             | The accept file types |
| `acceptedFiles`                                                     | `File[]`                    | No             | The controlled accepted files                                                                       |
| `allowDrop`                                                         | `boolean`                   | No             | Whether to allow drag and drop in the dropzone element                                              |
| `asChild`                                                           | `Snippet<[PropsFn<'div'>]>` | No             | Use the provided child element as the default rendered element, combining their props and behavior. |
| `capture`                                                           | `'user'                     | 'environment'` | No                                                                                                  | The default camera to use when capturing media |
| `defaultAcceptedFiles`                                              | `File[]`                    | No             | The default accepted files when rendered.                                                           |
| Use when you don't need to control the accepted files of the input. |
| `directory`                                                         | `boolean`                   | No             | Whether to accept directories, only works in webkit browsers                                        |
| `disabled`                                                          | `boolean`                   | No             | Whether the file input is disabled                                                                  |
| `id`                                                                | `string`                    | No             | The unique identifier of the machine.                                                               |
| `ids`                                                               | `Partial<{                  |

root: string
dropzone: string
hiddenInput: string
trigger: string
label: string
item: (id: string) => string
itemName: (id: string) => string
itemSizeText: (id: string) => string
itemPreview: (id: string) => string
itemDeleteTrigger: (id: string) => string
}>`| No | The ids of the elements. Useful for composition. |
|`invalid`|`boolean`| No | Whether the file input is invalid |
|`locale`|`string`| No | The current locale. Based on the BCP 47 definition. |
|`maxFiles`|`number`| No | The maximum number of files |
|`maxFileSize`|`number`| No | The maximum file size in bytes |
|`minFileSize`|`number`| No | The minimum file size in bytes |
|`name`|`string`| No | The name of the underlying file input |
|`onFileAccept`|`(details: FileAcceptDetails) => void`| No | Function called when the file is accepted |
|`onFileChange`|`(details: FileChangeDetails) => void`| No | Function called when the value changes, whether accepted or rejected |
|`onFileReject`|`(details: FileRejectDetails) => void`| No | Function called when the file is rejected |
|`preventDocumentDrop`|`boolean`| No | Whether to prevent the drop event on the document |
|`readOnly`|`boolean`| No | Whether the file input is read-only |
|`ref`|`Element`| No |  |
|`required`|`boolean`| No | Whether the file input is required |
|`transformFiles`|`(files: File[]) => Promise<File[]>`| No | Function to transform the accepted files to apply transformations |
|`translations`|`IntlTranslations`| No | The localized messages to use. |
|`validate`|`(file: File, details: FileValidateDetails) => FileError[] | null` | No | Function to validate a file |

**Root Data Attributes:**

| Attribute         | Value                              |
| ----------------- | ---------------------------------- |
| `[data-scope]`    | file-upload                        |
| `[data-part]`     | root                               |
| `[data-disabled]` | Present when disabled              |
| `[data-readonly]` | Present when read-only             |
| `[data-dragging]` | Present when in the dragging state |

**ClearTrigger Props:**

| Prop      | Type                           | Required | Description                                                                                         |
| --------- | ------------------------------ | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `Snippet<[PropsFn<'button'>]>` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `ref`     | `Element`                      | No       |                                                                                                     |

**ClearTrigger Data Attributes:**

| Attribute         | Value                  |
| ----------------- | ---------------------- |
| `[data-scope]`    | file-upload            |
| `[data-part]`     | clear-trigger          |
| `[data-disabled]` | Present when disabled  |
| `[data-readonly]` | Present when read-only |

**Context Props:**

| Prop     | Type                              | Required | Description |
| -------- | --------------------------------- | -------- | ----------- |
| `render` | `Snippet<[UseFileUploadContext]>` | No       |             |

**Dropzone Props:**

| Prop           | Type                        | Required | Description                                                                                         |
| -------------- | --------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild`      | `Snippet<[PropsFn<'div'>]>` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `disableClick` | `boolean`                   | No       | Whether to disable the click event on the dropzone                                                  |
| `ref`          | `Element`                   | No       |                                                                                                     |

**Dropzone Data Attributes:**

| Attribute         | Value                              |
| ----------------- | ---------------------------------- |
| `[data-scope]`    | file-upload                        |
| `[data-part]`     | dropzone                           |
| `[data-invalid]`  | Present when invalid               |
| `[data-disabled]` | Present when disabled              |
| `[data-readonly]` | Present when read-only             |
| `[data-dragging]` | Present when in the dragging state |

**HiddenInput Props:**

| Prop      | Type                          | Required | Description                                                                                         |
| --------- | ----------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `Snippet<[PropsFn<'input'>]>` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `ref`     | `Element`                     | No       |                                                                                                     |

**ItemDeleteTrigger Props:**

| Prop      | Type                           | Required | Description                                                                                         |
| --------- | ------------------------------ | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `Snippet<[PropsFn<'button'>]>` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `ref`     | `Element`                      | No       |                                                                                                     |

**ItemDeleteTrigger Data Attributes:**

| Attribute         | Value                  |
| ----------------- | ---------------------- |
| `[data-scope]`    | file-upload            |
| `[data-part]`     | item-delete-trigger    |
| `[data-disabled]` | Present when disabled  |
| `[data-readonly]` | Present when read-only |
| `[data-type]`     | The type of the item   |

**ItemGroup Props:**

| Prop      | Type                        | Required | Description                                                                                         |
| --------- | --------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `Snippet<[PropsFn<'div'>]>` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `ref`     | `Element`                   | No       |                                                                                                     |
| `type`    | `ItemType`                  | No       |                                                                                                     |

**ItemGroup Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | file-upload           |
| `[data-part]`     | item-group            |
| `[data-disabled]` | Present when disabled |
| `[data-type]`     | The type of the item  |

**ItemName Props:**

| Prop      | Type                        | Required | Description                                                                                         |
| --------- | --------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `Snippet<[PropsFn<'div'>]>` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `ref`     | `Element`                   | No       |                                                                                                     |

**ItemName Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | file-upload           |
| `[data-part]`     | item-name             |
| `[data-disabled]` | Present when disabled |
| `[data-type]`     | The type of the item  |

**ItemPreviewImage Props:**

| Prop      | Type                        | Required | Description                                                                                         |
| --------- | --------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `Snippet<[PropsFn<'img'>]>` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `ref`     | `Element`                   | No       |                                                                                                     |

**ItemPreviewImage Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | file-upload           |
| `[data-part]`     | item-preview-image    |
| `[data-disabled]` | Present when disabled |
| `[data-type]`     | The type of the item  |

**ItemPreview Props:**

| Prop      | Type                        | Required | Description                                                                                         |
| --------- | --------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `Snippet<[PropsFn<'div'>]>` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `ref`     | `Element`                   | No       |                                                                                                     |
| `type`    | `string`                    | No       | The file type to match against. Matches all file types by default.                                  |

**ItemPreview Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | file-upload           |
| `[data-part]`     | item-preview          |
| `[data-disabled]` | Present when disabled |
| `[data-type]`     | The type of the item  |

**Item Props:**

| Prop      | Type                       | Required | Description                                                                                         |
| --------- | -------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `file`    | `File`                     | Yes      |                                                                                                     |
| `asChild` | `Snippet<[PropsFn<'li'>]>` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `ref`     | `Element`                  | No       |                                                                                                     |

**Item Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | file-upload           |
| `[data-part]`     | item                  |
| `[data-disabled]` | Present when disabled |
| `[data-type]`     | The type of the item  |

**ItemSizeText Props:**

| Prop      | Type                        | Required | Description                                                                                         |
| --------- | --------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `Snippet<[PropsFn<'div'>]>` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `ref`     | `Element`                   | No       |                                                                                                     |

**ItemSizeText Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | file-upload           |
| `[data-part]`     | item-size-text        |
| `[data-disabled]` | Present when disabled |
| `[data-type]`     | The type of the item  |

**Label Props:**

| Prop      | Type                          | Required | Description                                                                                         |
| --------- | ----------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `Snippet<[PropsFn<'label'>]>` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `ref`     | `Element`                     | No       |                                                                                                     |

**Label Data Attributes:**

| Attribute         | Value                 |
| ----------------- | --------------------- |
| `[data-scope]`    | file-upload           |
| `[data-part]`     | label                 |
| `[data-disabled]` | Present when disabled |
| `[data-required]` | Present when required |

**RootProvider Props:**

| Prop      | Type                        | Required | Description                                                                                         |
| --------- | --------------------------- | -------- | --------------------------------------------------------------------------------------------------- |
| `value`   | `UseFileUploadReturn`       | Yes      |                                                                                                     |
| `asChild` | `Snippet<[PropsFn<'div'>]>` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `ref`     | `Element`                   | No       |                                                                                                     |

**Trigger Props:**

| Prop      | Type                           | Required | Description                                                                                         |
| --------- | ------------------------------ | -------- | --------------------------------------------------------------------------------------------------- |
| `asChild` | `Snippet<[PropsFn<'button'>]>` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
| `ref`     | `Element`                      | No       |                                                                                                     |

**Trigger Data Attributes:**

| Attribute         | Value                  |
| ----------------- | ---------------------- |
| `[data-scope]`    | file-upload            |
| `[data-part]`     | trigger                |
| `[data-disabled]` | Present when disabled  |
| `[data-readonly]` | Present when read-only |
| `[data-invalid]`  | Present when invalid   |

### Context

**API:**

| Property                                                                | Type                                                      | Description                                                        |
| ----------------------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------ |
| `dragging`                                                              | `boolean`                                                 | Whether the user is dragging something over the root element       |
| `focused`                                                               | `boolean`                                                 | Whether the user is focused on the dropzone element                |
| `disabled`                                                              | `boolean`                                                 | Whether the file input is disabled                                 |
| `readOnly`                                                              | `boolean`                                                 | Whether the file input is in read-only mode                        |
| `transforming`                                                          | `boolean`                                                 | Whether files are currently being transformed via `transformFiles` |
| `maxFilesReached`                                                       | `boolean`                                                 | Whether the maximum number of files has been reached               |
| `remainingFiles`                                                        | `number`                                                  | The number of files that can still be added                        |
| `openFilePicker`                                                        | `VoidFunction`                                            | Function to open the file dialog                                   |
| `deleteFile`                                                            | `(file: File, type?: ItemType) => void`                   | Function to delete the file from the list                          |
| `acceptedFiles`                                                         | `File[]`                                                  | The accepted files that have been dropped or selected              |
| `rejectedFiles`                                                         | `FileRejection[]`                                         | The files that have been rejected                                  |
| `setFiles`                                                              | `(files: File[]) => void`                                 | Sets the accepted files                                            |
| `clearFiles`                                                            | `VoidFunction`                                            | Clears the accepted files                                          |
| `clearRejectedFiles`                                                    | `VoidFunction`                                            | Clears the rejected files                                          |
| `getFileSize`                                                           | `(file: File) => string`                                  | Returns the formatted file size (e.g. 1.2MB)                       |
| `createFileUrl`                                                         | `(file: File, cb: (url: string) => void) => VoidFunction` | Returns the preview url of a file.                                 |
| Returns a function to revoke the url.                                   |
| `setClipboardFiles`                                                     | `(dt: DataTransfer) => boolean`                           | Sets the clipboard files                                           |
| Returns `true` if the clipboard data contains files, `false` otherwise. |
