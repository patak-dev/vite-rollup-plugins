import { definePlugin, PluginStatus, PluginCategory } from '~/util'
import PluginVirtual from '~/components/official/PluginVirtual.vue'

export default definePlugin({
  name: 'virtual',
  description: 'A Rollup plugin which loads virtual modules from memory',
  link: 'https://vitejs.dev/guide/api-plugin.html#serving-a-virtual-file',
  options: `{ virtualFile: "export default 'example'" }`,
  usage: `import v from "virtualFile"`,
  status: PluginStatus.Compatible,
  category: PluginCategory.Official,
  demo: PluginVirtual,
})
