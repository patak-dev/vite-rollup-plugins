import { definePlugin, PluginStatus, PluginCategory } from '~/util'
import PluginReplace from '~/components/official/PluginReplace.vue'

export default definePlugin({
  name: 'replace',
  description: 'Replace strings in files while bundling',
  status: PluginStatus.Compatible,
  category: PluginCategory.Official,
  demo: PluginReplace,
})
