<template>
  <PluginTest
    name="strip"
    description="Replace strings in files while bundling"
    status="todo"
  >
    <p>"this will be removed" should not appear in the console</p>
    <p>debbuger removed</p>
  </PluginTest>
</template>

<script setup>
import PluginTest from "../PluginTest.vue";

// debugger removal is working, but console.log is not stripped
// needs further digging

// debugger; // uncomment to test removal during build

// console.log("this will be removed");
</script>