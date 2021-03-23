import { definePlugin, PluginCategory, PluginStatus } from '~/util'

export default definePlugin([
  {
    name: 'alias',
    description: 'Define and resolve aliases for bundle dependencies',
    link: 'https://vitejs.dev/config/#alias',
    status: PluginStatus.Included,
  },
  {
    name: 'buble',
    description: 'Compile ES2015 with buble',
    link: 'https://github.com/vitejs/vite/tree/main/packages/plugin-legacy',
    status: PluginStatus.Covered,
  },
  {
    name: 'commonjs',
    description: 'Convert CommonJS modules to ES6',
    status: PluginStatus.Included,
  },
  {
    name: 'data-uri',
    description: 'Import modules from Data URIs',
    link: 'https://github.com/vitejs/vite/issues/1428#issuecomment-757054035',
    status: PluginStatus.Covered,
  },
  {
    name: 'dynamic-import-vars',
    description: 'Resolving dynamic imports that contain variables.',
    status: PluginStatus.Included,
  },
  {
    name: 'html',
    description: 'Create HTML files to serve Rollup bundles',
    status: PluginStatus.Covered,
  },
  {
    name: 'json',
    description: 'Convert .json files to ES6 modules',
    link: 'https://vitejs.dev/guide/features.html#json',
    status: PluginStatus.Included,
  },
  {
    name: 'multi-entry',
    description: 'Use multiple entry points for a bundle',
    status: PluginStatus.NA,
  },
  {
    name: 'node-resolve',
    description: 'Locate and bundle third-party dependencies in node_modules',
    link: 'https://vitejs.dev/guide/dep-pre-bundling.html',
    status: PluginStatus.Covered,
  },
  {
    name: 'run',
    description: 'Run your bundles in Node once they\'re built',
    status: PluginStatus.NA,
  },
  {
    name: 'sucrase',
    description: 'Compile TypeScript, Flow, JSX, etc with Sucrase',
    link: 'https://vitejs.dev/guide/features.html',
    status: PluginStatus.Covered,
  },
  {
    name: 'typescript',
    description: 'Integration between Rollup and Typescript',
    link: 'https://vitejs.dev/guide/features.html#typescript',
    status: PluginStatus.Covered,
  },
  {
    name: 'url',
    description: 'Import files as data-URIs or ES Modules',
    link: 'https://vitejs.dev/guide/features.html#url-imports',
    status: PluginStatus.Covered,
  },
  {
    name: 'wasm',
    description: 'Import WebAssembly code with Rollup',
    link: 'https://vitejs.dev/guide/features.html#web-assembly',
    status: PluginStatus.Covered,
  },
], PluginCategory.Official)
