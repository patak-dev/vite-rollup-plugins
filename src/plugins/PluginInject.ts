import { definePlugin, PluginStatus, PluginCategory } from '~/util'
import PluginInject from '~/components/official/PluginInject.vue'

export default definePlugin({
  name: 'inject',
  description: 'Scan modules for global variables and injects import statements where necessary',
  status: PluginStatus.Compatible,
  category: PluginCategory.Official,
  demo: PluginInject,
})
