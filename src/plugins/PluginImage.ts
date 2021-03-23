import { definePlugin, PluginStatus, PluginCategory, html } from '~/util'
import base64 from '~/assets/logo.png'

export default definePlugin({
  name: 'image',
  description: 'Import JPG, PNG, GIF, SVG, and WebP files',
  enforce: 'pre',
  status: base64.startsWith('data:image/png;base64,iVBORw0KGgoAAAANSU')
    ? PluginStatus.Compatible
    : PluginStatus.Error,
  category: PluginCategory.Official,
  demo() {
    return html`
      <img
        class="base64-image"
        src="${base64}"
        alt="base64 encoded image"
      />
      <p class="base64-p">${base64}</p>

      <style>
        .base64-p {
          font-family: "Courier New";
          word-wrap: break-word;
          height: 300px;
          overflow-y: scroll;
        }
        .base64-image {
          display: block;
          margin: 0 auto;
        }
      </style>
    `
  },
})
