import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'index.web': 'src/index.web.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-native', 'react-native-svg'],
  outExtension: ({ format }: { format: string }) => ({
    js: format === 'cjs' ? '.cjs' : '.js',
  }),
});
