import { definePlugin, PluginCategory, PluginStatus, html } from '~/util'
import csv from '~/assets/file.csv'

export default definePlugin({
  name: 'dsv',
  description: 'Convert .csv and .tsv files into JavaScript modules with d3-dsv',
  status: csv.length === 3 ? PluginStatus.Compatible : PluginStatus.Error,
  category: PluginCategory.Official,
  demo() {
    return html`
      <pre>${JSON.stringify(csv, null, 2)}</pre>
    `
  },
})
