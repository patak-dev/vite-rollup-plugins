import { definePlugin, PluginStatus, PluginCategory } from '~/util'
import PluginBeep from '~/components/official/PluginBeep.vue'

export default definePlugin({
  name: 'beep',
  description: 'System beeps on errors and warnings',
  category: PluginCategory.Official,
  status: PluginStatus.Compatible,
  demo: PluginBeep,
})
