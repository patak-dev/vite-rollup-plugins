import { definePlugin, PluginStatus, PluginCategory, html } from '~/util'

console.log("this will be removed");
// debugger; // uncomment to test removal during 

export default definePlugin({
  name: 'strip',
  description: 'Remove debugger statements and functions like assert.equal and console.log from your code',
  status: PluginStatus.Compatible,
  category: PluginCategory.Official,
  apply: 'build',
  demo() {
    return html`
      <p>"this will be removed" should not appear in the console</p>
    `
  },
})
