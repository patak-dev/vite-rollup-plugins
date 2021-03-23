import { definePlugin, PluginStatus, PluginCategory, html } from '~/util'

const r = nanoid()

export default definePlugin({
  name: 'inject',
  description: 'Scan modules for global variables and injects import statements where necessary',
  status: PluginStatus.Compatible,
  category: PluginCategory.Official,
  demo() {
    return html`
      <p>Import statements for nanoid was auto injected</p>
      <pre>${r}</pre>
    `
  },
})
