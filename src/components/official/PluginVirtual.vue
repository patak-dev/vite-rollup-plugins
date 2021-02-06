<template>
  <PluginCard
    official="true"
    name="virtual"
    description="A Rollup plugin which loads virtual modules from memory"
    status="compatible"
    link="https://vitejs.dev/guide/api-plugin.html#serving-a-virtual-file"
    :options="options"
    :usage="usage"
  >
    <pre>{{ robin + " " + batman }}</pre>
  </PluginCard>
</template>

<script setup>
import PluginCard from "../PluginCard.vue";

// Virtual files defined in vite.config.js
import batman from "batman";
import robin from "src/robin.js";

const options = `{ virtualFile: "export default 'example'" }`;
const usage = `import v from "virtualFile"`;
</script>