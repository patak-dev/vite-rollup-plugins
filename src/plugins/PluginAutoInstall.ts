import { definePlugin, PluginCategory, PluginStatus } from '~/util'
import PluginAutoInstall from '~/components/official/PluginAutoInstall.vue'

export default definePlugin({
  name: 'auto-install',
  description: 'Automatically install dependencies that are imported by a bundle',
  link: 'https://github.com/vitejs/vite/issues/1500',
  status: PluginStatus.Incompatible,
  category: PluginCategory.Official,
  enforce: 'pre',
  demo: PluginAutoInstall,
})
