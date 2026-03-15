import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
  },
  format: ['esm'],
  platform: 'browser',
  dts: true,
  sourcemap: true,
  deps: {
    neverBundle: ['react', 'react-dom', 'lucide-react'],
  },
  unbundle: true,
});
