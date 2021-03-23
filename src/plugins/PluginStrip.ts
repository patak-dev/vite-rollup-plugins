import { definePlugin, PluginStatus, PluginCategory } from '~/util'
import PluginStrip from '~/components/official/PluginStrip.vue'

export default definePlugin({
  name: 'strip',
  description: 'Remove debugger statements and functions like assert.equal and console.log from your code',
  status: PluginStatus.Compatible,
  category: PluginCategory.Official,
  apply: 'build',
  demo: PluginStrip,
})
