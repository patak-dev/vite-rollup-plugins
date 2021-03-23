import { definePlugin, PluginStatus, PluginCategory } from '~/util'
import PluginLegacy from '~/components/official/PluginLegacy.vue'
// @ts-ignore
import legacyLibrary from '~/assets/legacy.js'

const r = legacyLibrary.cube(2)

export default definePlugin({
  name: 'legacy',
  description: 'Add export declarations to legacy non-module scripts',
  status: r === 8 ? PluginStatus.Compatible : PluginStatus.Error,
  category: PluginCategory.Official,
  demo: PluginLegacy,
})
