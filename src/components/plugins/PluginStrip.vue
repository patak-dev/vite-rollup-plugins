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

console.log("this will be removed");
// debugger; // uncomment to test removal during build
</script>