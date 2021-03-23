import { definePlugin, PluginStatus, PluginCategory, html } from '~/util'

export default definePlugin({
  name: 'eslint',
  description: 'Verify entry point and all imported files with ESLint',
  enforce: "pre",
  options: '{ include: \'**/*.+(vue|js|jsx|ts|tsx)\' }',
  apply: 'build',
  status: PluginStatus.Compatible,
  category: PluginCategory.Official,
  demo() {
    return html`
      <p>Add an .eslintrc.js to root</p>
    `
  },
})
