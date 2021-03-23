import { definePlugin, PluginStatus, PluginCategory, html } from '~/util'
// @ts-ignore
import legacyLibrary from '~/assets/legacy.js'

const r = legacyLibrary.cube(2)

export default definePlugin({
  name: 'legacy',
  description: 'Add export declarations to legacy non-module scripts',
  status: r === 8 ? PluginStatus.Compatible : PluginStatus.Error,
  category: PluginCategory.Official,
  demo() {
    return html`
      <p>Import from a legacy library</p>
      <pre>${r}</pre>
    `
  },
})
