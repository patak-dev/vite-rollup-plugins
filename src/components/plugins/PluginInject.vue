<template>
  <PluginTest
    name="inject"
    description="Scan modules for global variables and injects import statements where necessary"
    status="compatible"
  >
    <p>Import statements for nanoid was auto injected</p>
    <pre>{{ r }}</pre>
  </PluginTest>
</template>

<script setup>
import PluginTest from "../PluginTest.vue";

const r = nanoid();
</script>