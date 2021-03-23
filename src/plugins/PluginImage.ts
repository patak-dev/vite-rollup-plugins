import { definePlugin, PluginStatus, PluginCategory } from '~/util'
import PluginImage from '~/components/official/PluginImage.vue'
import base64 from '~/assets/logo.png'

export default definePlugin({
  name: 'image',
  description: 'Import JPG, PNG, GIF, SVG, and WebP files',
  enforce: 'pre',
  status: base64.startsWith('data:image/png;base64,iVBORw0KGgoAAAANSU')
    ? PluginStatus.Compatible
    : PluginStatus.Error,
  category: PluginCategory.Official,
  demo: PluginImage,
})
