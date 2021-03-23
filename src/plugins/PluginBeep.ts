import { definePlugin, PluginStatus, PluginCategory, html } from '~/util'

// * // uncomment to hear beep because of syntax error

export default definePlugin({
  name: 'beep',
  description: 'System beeps on errors and warnings',
  category: PluginCategory.Official,
  status: PluginStatus.Compatible,
  demo() {
    return html`
      <p>Modify the source including an error to test this plugin</p>
    `
  },
})
