import { definePlugin, PluginStatus, PluginCategory, html } from '~/util'

// Virtual files defined in vite.config.js
// @ts-ignore
import batman from 'batman'
// @ts-ignore
import robin from 'src/robin.js'

export default definePlugin({
  name: 'virtual',
  description: 'A Rollup plugin which loads virtual modules from memory',
  link: 'https://vitejs.dev/guide/api-plugin.html#serving-a-virtual-file',
  options: `{ virtualFile: "export default 'example'" }`,
  usage: `import v from "virtualFile"`,
  status: PluginStatus.Compatible,
  category: PluginCategory.Official,
  demo() {
    return html`
      <pre>${robin + " " + batman}</pre>
    `
  },
})
