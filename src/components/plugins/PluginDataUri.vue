<template>
  <PluginTest
    name="data-uri"
    description="Import modules from Data URIs"
    status="incompatible"
  >
    <p>{{ batman ? JSON.stringify(batman, null, 2) : "Not working" }}</p>
  </PluginTest>
</template>

<script setup>
import PluginTest from "../PluginTest.vue";
// import batman from "data:application/json;base64, eyAiYmF0bWFuIjogInRydWUiIH0=";
const batman = false; // See https://github.com/vitejs/vite/issues/1428
</script>