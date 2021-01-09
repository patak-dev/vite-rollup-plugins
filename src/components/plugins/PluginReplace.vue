<template>
  <PluginTest
    name="replace"
    description="Replace strings in files while bundling"
    status="compatible"
  >
    <p>Replaced in script: {{ replaced }}</p>
    <p>Replaced in template: __replaced__</p>
  </PluginTest>
</template>

<script setup>
import PluginTest from "../PluginTest.vue";
const replaced = "__replaced__";
</script>