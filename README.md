# ⚡️ Vite Rollup Plugins 🍣

A compatibility list and test playground

https://vite-rollup-plugins.patak.dev

✅ status for each official plugin

⚠️ enforce needed badge

🛠️ install instructions

🧪 compatible plugins are used in the page

## Run it locally

These instructions will get you a copy of the project up and running on your local machine for development

### Clone the repo

Use ssh

```bash
git clone git@github.com:matias-capeletto/vite-rollup-plugins.git
```

Or https

```bash
git clone https://github.com/matias-capeletto/vite-rollup-plugins.git
```

In the repo folder run

```bash
yarn
yarn dev
```

Your dev server will start and be running at

```bash
  > Local:    http://localhost:3000/
```

To build

```bash
yarn build
```

## Contributing

This is work in progress, there are some official plugins that remain untested. PRs welcomed.

### Adding a Plugin
Start by adding your plugin to `src/plugins` folder. If you'd like your plugin to 
display a test component, then create a new file for it as `YourPlugin.ts`. 
Otherwise you can add it to `OfficalPlugins.ts` if it is an offical plugin or 
`CommunityPlugins.ts` if it is a community plugin.

When writing a plugin make sure you use the `definePlugin` function to define your plugin.

**Example Plugin**
```ts
import { definePlugin, PluginStatus, PluginCategory } from '~/util'
import PluginBeep from '~/components/official/PluginBeep.vue'

export default definePlugin({
  name: 'beep',
  description: 'System beeps on errors and warnings',
  category: PluginCategory.Official,
  status: PluginStatus.Compatible,
  demo: PluginBeep,
})
```


## Links

- [Vite](https://github.com/vitejs/vite)
- [Vite Plugin API](https://vitejs.dev/guide/api-plugin.html)
- [Rollup plugins](https://github.com/rollup/plugins)
- [Awesome Vite](https://github.com/vitejs/awesome-vite)

## License

MIT
