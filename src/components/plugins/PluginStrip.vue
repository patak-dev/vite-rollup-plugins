<template>
  <PluginTest
    name="strip"
    description="Remove debugger statements and functions like assert.equal and console.log from your code"
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