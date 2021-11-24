import { definePlugin, PluginCategory, PluginStatus, html } from '~/util'

export default definePlugin([
  {
    name: 'rollup-plugin-typescript2',
    description: 'Rollup plugin for typescript with compiler errors.',
    docs: 'https://github.com/ezolenko/rollup-plugin-typescript2',
    status: PluginStatus.Compatible,
    apply: 'build',
    info() {
      return html`
        <p>Good plugin to generate types at build time. Vite already has support for Typescript otherwise.</p>
      `
    },
  },
  {
    name: 'rollup-plugin-off-main-thread',
    description: 'Use Rollup with workers and ES6 modules today',
    docs: 'https://github.com/surma/rollup-plugin-off-main-thread#readme',
    link: 'https://vitejs.dev/guide/features.html#web-workers',
    status: PluginStatus.Covered,
  },
  {
    name: 'rollup-plugin-terser',
    description: 'Minify generated es bundle. Uses terser under the hood',
    docs: 'https://github.com/TrySound/rollup-plugin-terser#readme',
    link: 'https://vitejs.dev/config/#build-minify',
    status: PluginStatus.Covered,
  },
  {
    name: 'rollup-plugin-uglify',
    description: 'Minify generated bundle using uglify',
    docs: 'https://github.com/TrySound/rollup-plugin-uglify#readme',
    link: 'https://vitejs.dev/config/#build-minify',
    status: PluginStatus.Covered,
  },
  {
    name: 'rollup-plugin-postcss',
    description: 'Seamless integration between Rollup and PostCSS',
    docs: 'https://github.com/egoist/rollup-plugin-postcss#readme',
    link: 'https://vitejs.dev/guide/features.html#postcss',
    status: PluginStatus.Covered,
  },
  {
    name: 'rollup-plugin-sass',
    description: 'Rollup .sass files',
    docs: 'https://github.com/differui/rollup-plugin-sass#readme',
    link: 'https://vitejs.dev/guide/features.html#css-pre-processors',
    status: PluginStatus.Covered,
  },
  {
    name: 'rollup-plugin-scss',
    description: 'Rollup multiple .scss, .sass and .css imports',
    docs: 'https://github.com/thgh/rollup-plugin-scss',
    link: 'https://vitejs.dev/guide/features.html#css-pre-processors',
    status: PluginStatus.Covered,
  },
  {
    name: 'rollup-plugin-less',
    description: 'Support for less files',
    docs: 'https://github.com/xiaofuzi/rollup-plugin-less#readme',
    link: 'https://vitejs.dev/guide/features.html#css-pre-processors',
    status: PluginStatus.Covered,
  },
  {
    name: 'rollup-plugin-livereload',
    description: 'Watches the bundle and reloads the page on change',
    docs: 'https://www.npmjs.com/package/rollup-plugin-livereload',
    link: 'https://vitejs.dev/guide/features.html#hot-module-replacement',
    status: PluginStatus.Covered,
  },
  {
    name: 'rollup-plugin-vue',
    description: 'Roll Vue 3 SFCs with Rollup',
    docs: 'https://www.npmjs.com/package/rollup-plugin-vue',
    link: 'https://github.com/vitejs/vite/tree/main/packages/plugin-vue',
    status: PluginStatus.Covered,
  },
  {
    name: 'rollup-plugin-bundle-size',
    description: 'Show the size of the generated bundle(s)',
    docs: 'https://github.com/vimeo/rollup-plugin-bundle-size',
    status: PluginStatus.Covered,
  },
  {
    name: 'rollup-plugin-filesize',
    description: 'Show filesize in the cli',
    docs: 'https://github.com/ritz078/rollup-plugin-filesize#readme',
    status: PluginStatus.Covered,
  },
  {
    name: 'rollup-plugin-copy',
    description: 'Copy files and folders, with glob support',
    docs: 'https://github.com/vladshcherbin/rollup-plugin-copy#readme',
    link: 'https://vitejs.dev/guide/features.html#the-public-directory',
    status: PluginStatus.Covered,
  },
  {
    name: 'rollup-plugin-string',
    description: 'Converts text files to modules',
    docs: 'https://github.com/TrySound/rollup-plugin-string#readme',
    link: 'https://vitejs.dev/guide/assets.html#importing-asset-as-string',
    status: PluginStatus.Covered,
    info() {
      return html`
      <p>You can use the ?raw suffix to import assets as strings</p>
      <pre><code>import tpl from "./tpl.html?raw";\nconsole.log(\`Template for render: \${tpl}\`);</code></pre>
      `
    },
  },
  {
    name: 'rollup-plugin-serve',
    description: 'Rollup plugin to serve the bundle',
    docs: 'https://github.com/thgh/rollup-plugin-serve#readme',
    status: PluginStatus.Covered,
  },
  {
    name: 'rollup-plugin-progress',
    description: 'Show current module being transpiled by the rollup bundler',
    docs: 'https://github.com/jkuri/rollup-plugin-progress#readme',
    status: PluginStatus.Covered,
  },
  {
    name: 'rollup-plugin-sizes',
    description: 'Simple analysis on rollup bundling',
    docs: 'https://github.com/tivac/rollup-plugin-sizes#readme',
    status: PluginStatus.Incompatible,
  },
  {
    name: 'rollup-plugin-banner',
    description: 'Simple analysis on rollup bundling',
    docs: 'https://github.com/tivac/rollup-plugin-sizes#readme',
    status: PluginStatus.Incompatible,
  },
  {
    name: 'rollup-plugin-analyzer',
    description: 'Mad metrics for your rollup bundles, know all the things',
    docs: 'https://github.com/vladshcherbin/rollup-plugin-analyzer#readme',
    status: PluginStatus.Todo,
  },
  {
    name: 'rollup-plugin-visualizer',
    description: 'Visualize and analyze your Rollup bundle to see which modules are taking up space',
    docs: 'https://github.com/btd/rollup-plugin-visualizer#readme',
    status: PluginStatus.Compatible,
  },
  {
    name: 'rollup-plugin-minify-html-literals',
    description: 'Uses minify-html-literals to minify HTML and CSS markup inside JavaScript template literal strings.',
    docs: 'https://github.com/asyncLiz/rollup-plugin-minify-html-literals#readme',
    status: PluginStatus.Compatible,
  },
  {
    name: '@miyaneee/rollup-plugin-json5',
    description: '🍣 A Rollup plugin which Converts .json5 files to ES6 modules.',
    docs: 'https://miyaneee.github.io/rollup-plugin-json5/',
    link: 'https://github.com/Miyaneee/rollup-plugin-json5#miyaneeerollup-plugin-json5',
    status: PluginStatus.Covered,
  },
], PluginCategory.Community)
