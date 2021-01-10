import vue from '@vitejs/plugin-vue'
import beep from '@rollup/plugin-beep'
import dsv from '@rollup/plugin-dsv'
import graphql from '@rollup/plugin-graphql'
import image from '@rollup/plugin-image'
import replace from '@rollup/plugin-replace'
import strip from '@rollup/plugin-strip'
import yaml from '@rollup/plugin-yaml'
// import virtual from '@rollup/plugin-virtual'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [
    /* incompatible
    {
      enforce: 'pre', ...virtual({
        batman: `export default 'na na na na na'`,
        // 'src/robin.js': `export default 'batmannnnn'`
      })
    },
    */
    {
      enforce: 'pre',
      ...image()
    },
    vue(),
    beep(),
    dsv(),
    graphql(),
    replace({
      __replaced__: "correctly replaced"
    }),
    strip(),
    yaml(),

  ]
}
