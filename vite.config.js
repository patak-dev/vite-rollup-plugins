// Official Plugins
import vue from '@vitejs/plugin-vue'
import beep from '@rollup/plugin-beep'
import dsv from '@rollup/plugin-dsv'
import graphql from '@rollup/plugin-graphql'
import image from '@rollup/plugin-image'
import inject from '@rollup/plugin-inject'
import legacy from '@rollup/plugin-legacy'
import replace from '@rollup/plugin-replace'
import strip from '@rollup/plugin-strip'
import yaml from '@rollup/plugin-yaml'
import virtual from '@rollup/plugin-virtual'

// Issues being resolved
// import autoInstall from '@rollup/plugin-auto-install'

// Working, but not included in the page build
// import eslint from '@rollup/plugin-eslint'
// import babel from '@rollup/plugin-babel'

// Community plugins

// import analyze from 'rollup-plugin-analyzer'
import visualizer from 'rollup-plugin-visualizer';

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [

    // Official Plugins

    /* WIP, issues being resolved in vite and rollup-plugins
    {
      ...autoInstall(),
      enforce: 'pre',
    },
    */
    // compatible, but not included because of <script setup>
    // eslint({ include: '**/*.+(vue|js|jsx|ts|tsx)' }),
    // compatible, but not include because it slows down the server
    // babel({ babelHelpers: 'bundled' }),
    {
      ...image(),
      enforce: 'pre',
    },
    vue(),
    beep(),
    dsv(),
    graphql(),
    inject({
      nanoid: ['nanoid', 'nanoid']
    }),
    legacy({
      './src/assets/legacy.js': 'legacyLibrary',
    }),
    replace({
      __replaced__: "correctly replaced"
    }),
    yaml(),
    virtual({
      batman: `export default 'na na na na na'`,
      'src/robin.js': `export default 'batmannnnn'`
    }),
    strip({ include: '**/*.+(vue|js)' }),
    /* normally you would use it only during build, included in dev for testing
    {
      ...strip(),
      apply: 'build'
    },
    */

    // Community Plugins

    /* [todo] reported sizes are not correct
    {
      ...analyze({ summaryOnly: true }),
      enforce: 'post',
      apply: 'build'
    },
    {
      ...visualizer({ template: 'sunburst', brotliSize: true, open: true }),
      enforce: 'post',
      apply: 'build'
    },
    */
  ]
}
