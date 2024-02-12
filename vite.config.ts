import { defineConfig } from 'vite'
import path from 'path'
import Vue from '@vitejs/plugin-vue'
import Beep from '@rollup/plugin-beep'
import Dsv from '@rollup/plugin-dsv'
import Graphql from '@rollup/plugin-graphql'
import Image from '@rollup/plugin-image'
import Inject from '@rollup/plugin-inject'
import Legacy from '@rollup/plugin-legacy'
import Replace from '@rollup/plugin-replace'
import Strip from '@rollup/plugin-strip'
import Yaml from '@rollup/plugin-yaml'
import Virtual from '@rollup/plugin-virtual'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'

// Issues being resolved
// import autoInstall from '@rollup/plugin-auto-install'

// Working, but not included in the page build
// import eslint from '@rollup/plugin-eslint'
// import babel from '@rollup/plugin-babel'

// Community plugins

// import analyze from 'rollup-plugin-analyzer'
// import visualizer from 'rollup-plugin-visualizer'
// import sizes from 'rollup-plugin-sizes'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    AutoImport(),
    Vue(),
    Components({
      resolvers: [
        IconsResolver({
        })
      ]
    }),
    Icons({
      compiler: 'vue3',
      defaultStyle: 'vertical-align: middle;'
    }),
    
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
      ...Image(),
      enforce: 'pre',
    },

    /**
     * Official Plugins
     */
    Beep(),
    Dsv(),
    Graphql(),
    Inject({ nanoid: ['nanoid', 'nanoid'] }),
    Legacy({ './src/assets/legacy.js': 'legacyLibrary' }),
    Replace({ __replaced__: 'correctly replaced' }),
    Yaml(),
    Virtual({
      batman: `export default 'na na na na na'`,
      'src/robin.js': `export default 'batmannnnn'`
    }),
    Strip({ include: '**/*.+(vue|js|ts)' }),
    /* normally you would use it only during build, included in dev for testing
    {
      ...strip(),
      apply: 'build'
    },
    */


    /**
     * Community Plugins
     */
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
    /* [incompatible]
    {
      ...sizes(),
      enforce: 'post',
      apply: 'build'
    },
    */
    
  ]
})
