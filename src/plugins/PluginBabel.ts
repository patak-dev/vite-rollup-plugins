import { definePlugin, PluginStatus, PluginCategory } from '~/util'
import PluginBabel from '~/components/official/PluginBabel.vue'

export default definePlugin({
  name: 'babel',
  description: 'Compile your files with Babel',
  status: PluginStatus.Covered,
  category: PluginCategory.Official,
  link: 'https://vitejs.dev/guide/build.html#browser-compatibility',
  demo: PluginBabel,
})
