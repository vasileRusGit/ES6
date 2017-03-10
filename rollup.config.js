import buble from 'rollup-plugin-buble'

export default {
  entry: 'src/main.js',
  plugins: [buble()],
  dest: 'output/main.js',
  format: 'iife',
  sourceMap: 'inline'
};