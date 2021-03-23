import { definePlugin, PluginStatus, PluginCategory, html } from '~/util'

const replaced = "__replaced__";

export default definePlugin({
  name: 'replace',
  description: 'Replace strings in files while bundling',
  status: PluginStatus.Compatible,
  category: PluginCategory.Official,
  demo() {
    return html`
      <p>Replaced in script: ${replaced}</p>
      <p>Replaced in template: __replaced__</p>
    `
  },
})
