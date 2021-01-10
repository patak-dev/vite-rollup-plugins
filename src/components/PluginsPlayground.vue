<template>
  <div class="playground">
    <PluginTest
      name="alias"
      description="Define and resolve aliases for bundle dependencies"
      status="included"
      link="https://vitejs.dev/config/#alias"
    />
    <PluginAutoInstall />
    <PluginTest
      name="babel"
      description="Compile your files with Babel"
      status="todo"
    />
    <PluginBeep />
    <PluginTest
      name="buble"
      description="Compile ES2015 with buble"
      status="todo"
    />
    <PluginTest
      name="commonjs"
      description="Convert CommonJS modules to ES6"
      status="included"
    />
    <PluginTest
      name="data-uri"
      description="Convert CommonJS modules to ES6"
      status="covered"
      link="https://github.com/vitejs/vite/issues/1428#issuecomment-757054035"
    />
    <PluginDsv />
    <PluginTest
      name="dynamic-import-vars"
      description="Resolving dynamic imports that contain variables."
      status="included"
    />
    <PluginTest
      name="eslint"
      description="Verify entry point and all imported files with ESLint"
      status="todo"
    />
    <PluginGraphQL />
    <PluginTest
      name="html"
      description="Create HTML files to serve Rollup bundles"
      status="todo"
    />
    <PluginImage />
    <PluginTest
      name="inject"
      description="Scan modules for global variables and injects import statements where necessary"
      status="todo"
    />
    <PluginTest
      name="json"
      description="Convert .json files to ES6 modules"
      status="included"
      link="https://vitejs.dev/guide/features.html#json"
    />
    <PluginTest
      name="legacy"
      description="Add export declarations to legacy non-module scripts"
      status="todo"
    />
    <PluginTest
      name="multi-entry"
      description="Use multiple entry points for a bundle"
      status="todo"
    />
    <PluginTest
      name="node-resolve"
      description="Locate and bundle third-party dependencies in node_modules"
      status="covered"
      link="https://vitejs.dev/guide/dep-pre-bundling.html"
    />
    <PluginReplace />
    <PluginTest
      name="run"
      description="Run your bundles in Node once they're built"
      status="todo"
    />
    <PluginTest
      name="sucrase"
      description="Compile TypeScript, Flow, JSX, etc with Sucrase"
      status="todo"
    />
    <PluginStrip />
    <PluginTest
      name="typescript"
      description="Integration between Rollup and Typescript"
      status="covered"
      link="https://vitejs.dev/guide/features.html#typescript"
    />
    <PluginTest
      name="url"
      description="Import files as data-URIs or ES Modules"
      status="covered"
      link="https://vitejs.dev/guide/features.html#url-imports"
    />
    <PluginVirtual />
    <PluginTest
      name="wasm"
      description="Import WebAssembly code with Rollup"
      status="covered"
      link="https://vitejs.dev/guide/features.html#web-assembly"
    />
    <PluginYaml />
  </div>
</template>

<script setup>
import PluginTest from "./PluginTest.vue";

import PluginAutoInstall from "./plugins/PluginAutoInstall.vue";
import PluginBeep from "./plugins/PluginBeep.vue";
import PluginDsv from "./plugins/PluginDsv.vue";
import PluginGraphQL from "./plugins/PluginGraphQL.vue";
import PluginImage from "./plugins/PluginImage.vue";
import PluginReplace from "./plugins/PluginReplace.vue";
import PluginStrip from "./plugins/PluginStrip.vue";
import PluginYaml from "./plugins/PluginYaml.vue";
import PluginVirtual from "./plugins/PluginVirtual.vue";
</script>

<style scoped>
.playground {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px;
  margin-bottom: 60px;
}
</style>