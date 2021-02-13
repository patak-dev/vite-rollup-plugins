<template>
  <div class="playground">
    <PluginCard
      official="true"
      name="alias"
      description="Define and resolve aliases for bundle dependencies"
      status="included"
      link="https://vitejs.dev/config/#alias"
    />
    <PluginAutoInstall />
    <PluginBabel />
    <PluginBeep />
    <PluginCard
      :official="true"
      name="buble"
      description="Compile ES2015 with buble"
      status="covered"
      link="https://github.com/vitejs/vite/tree/main/packages/plugin-legacy"
    />
    <PluginCard
      :official="true"
      name="commonjs"
      description="Convert CommonJS modules to ES6"
      status="included"
    />
    <PluginCard
      :official="true"
      name="data-uri"
      description="Import modules from Data URIs"
      status="covered"
      link="https://github.com/vitejs/vite/issues/1428#issuecomment-757054035"
    />
    <PluginDsv />
    <PluginCard
      :official="true"
      name="dynamic-import-vars"
      description="Resolving dynamic imports that contain variables."
      status="included"
    />
    <PluginEslint />
    <PluginGraphQL />
    <PluginCard
      :official="true"
      name="html"
      description="Create HTML files to serve Rollup bundles"
      status="covered"
    />
    <PluginImage />
    <PluginInject />
    <PluginCard
      :official="true"
      name="json"
      description="Convert .json files to ES6 modules"
      status="included"
      link="https://vitejs.dev/guide/features.html#json"
    />
    <PluginLegacy />
    <PluginCard
      :official="true"
      name="multi-entry"
      description="Use multiple entry points for a bundle"
      status="n/a"
    />
    <PluginCard
      :official="true"
      name="node-resolve"
      description="Locate and bundle third-party dependencies in node_modules"
      status="covered"
      link="https://vitejs.dev/guide/dep-pre-bundling.html"
    />
    <PluginReplace />
    <PluginCard
      :official="true"
      name="run"
      description="Run your bundles in Node once they're built"
      status="n/a"
    />
    <PluginCard
      :official="true"
      name="sucrase"
      description="Compile TypeScript, Flow, JSX, etc with Sucrase"
      status="covered"
      link="https://vitejs.dev/guide/features.html"
    />
    <PluginStrip />
    <PluginCard
      :official="true"
      name="typescript"
      description="Integration between Rollup and Typescript"
      status="covered"
      link="https://vitejs.dev/guide/features.html#typescript"
    />
    <PluginCard
      :official="true"
      name="url"
      description="Import files as data-URIs or ES Modules"
      status="covered"
      link="https://vitejs.dev/guide/features.html#url-imports"
    />
    <PluginVirtual />
    <PluginCard
      :official="true"
      name="wasm"
      description="Import WebAssembly code with Rollup"
      status="covered"
      link="https://vitejs.dev/guide/features.html#web-assembly"
    />
    <PluginYaml />
  </div>
</template>

<script setup>
import PluginCard from "./PluginCard.vue";

import PluginAutoInstall from "./official/PluginAutoInstall.vue";
import PluginBabel from "./official/PluginBabel.vue";
import PluginBeep from "./official/PluginBeep.vue";
import PluginDsv from "./official/PluginDsv.vue";
import PluginEslint from "./official/PluginEslint.vue";
import PluginGraphQL from "./official/PluginGraphQL.vue";
import PluginImage from "./official/PluginImage.vue";
import PluginInject from "./official/PluginInject.vue";
import PluginLegacy from "./official/PluginLegacy.vue";
import PluginReplace from "./official/PluginReplace.vue";
import PluginStrip from "./official/PluginStrip.vue";
import PluginYaml from "./official/PluginYaml.vue";
import PluginVirtual from "./official/PluginVirtual.vue";
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