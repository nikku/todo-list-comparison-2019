import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

import svelte from 'rollup-plugin-svelte';

export default {
  input: 'src/2019.svelte',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'Todos',
    file: 'build/2019-svelte.js'
  },
  plugins: [
    svelte({
      immutable: true
    }),
    resolve(),
    commonjs()
  ]
};
