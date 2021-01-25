<template>
  <PluginTest
    name="strip"
    description="Replace strings in files while bundling"
    status="compatible"
    apply="build"
  >
    <p>"this will be removed" should not appear in the console</p>
  </PluginTest>
</template>

<script setup>
import PluginTest from "../PluginTest.vue";

// debugger removal is working, but console.log is not stripped
// needs further digging

console.log("test");
// debugger; // uncomment to test removal during build
</script>