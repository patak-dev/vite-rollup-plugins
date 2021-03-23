import { definePlugin, PluginCategory, PluginStatus } from '~/util'
import PluginDsv from '~/components/official/PluginDsv.vue'
import csv from '~/assets/file.csv'

export default definePlugin({
  name: 'dsv',
  description: 'Convert .csv and .tsv files into JavaScript modules with d3-dsv',
  status: csv.length === 3 ? PluginStatus.Compatible : PluginStatus.Error,
  category: PluginCategory.Official,
  demo: PluginDsv,
})
