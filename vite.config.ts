/* eslint-disable sort-keys-fix/sort-keys-fix */
import fs from 'fs';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const dir = path.resolve(__dirname, 'src');
const componentFiles = fs
  .readdirSync(dir)
  .filter((file) => file.endsWith('.ts'));

// Generate entry points dynamically
const entry = componentFiles.reduce((acc: Record<string, string>, file) => {
  const name = path.basename(file, path.extname(file));

  return { ...acc, [name]: path.resolve(dir, file) };
}, {});

const dtsPlugin = dts({
  entryRoot: 'src',
  insertTypesEntry: true,
  outDir: ['dist/esm', 'dist/cjs'],
  tsconfigPath: './tsconfig.json',
});

export default defineConfig({
  build: {
    ssr: true,
    lib: {
      entry,
    },
    minify: true,
    target: 'esnext',

    rollupOptions: {
      output: [
        {
          format: 'esm',
          dir: 'dist/esm',
          entryFileNames: '[name].mjs',
          preserveModules: true,
        },
        {
          format: 'cjs',
          dir: 'dist/cjs',
          entryFileNames: '[name].cjs',
          preserveModules: true,
        },
      ],
    },
  },
  plugins: [dtsPlugin],
  resolve: {
    alias: {
      '@': dir,
    },
  },
});
