<template>
  <PluginTest
    name="virtual"
    description="A Rollup plugin which loads virtual modules from memory"
    status="incompatible"
    link="https://vitejs.dev/guide/api-plugin.html#serving-a-virtual-file"
  >
    <p>
      This plugin is not currently working but the same feature can be achieved
      <a
        href="https://vitejs.dev/guide/api-plugin.html#serving-a-virtual-file"
        target="_blank"
        rel="noopener"
        >with a simple plugin</a
      >
    </p>
    <!-- <pre>{{ robin + " " + batman }}</pre> -->
  </PluginTest>
</template>

<script setup>
import PluginTest from "../PluginTest.vue";

// Virtual files defined in vite.config.js
// import batman from "batman";
// import robin from "./robin.js";
</script>