<template>
  <PluginTest
    name="legacy"
    description="Add export declarations to legacy non-module scripts"
    status="todo"
  >
    <p>Import from a legacy library</p>
    <pre>{{ r }}</pre>
  </PluginTest>
</template>

<script setup>
import PluginTest from "../PluginTest.vue";
// import legacyLibrary from "../../assets/legacy.js";

// const r = legacyLibrary.cube(2);
// :status="r === 8 ? 'compatible' : 'error'"
</script>