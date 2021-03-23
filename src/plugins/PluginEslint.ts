import { definePlugin, PluginStatus, PluginCategory } from '~/util'
import PluginEslint from '~/components/official/PluginEslint.vue'

export default definePlugin({
  name: 'eslint',
  description: 'Verify entry point and all imported files with ESLint',
  enforce: "pre",
  options: '{ include: \'**/*.+(vue|js|jsx|ts|tsx)\' }',
  apply: 'build',
  status: PluginStatus.Compatible,
  category: PluginCategory.Official,
  demo: PluginEslint,
})
