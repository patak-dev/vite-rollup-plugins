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

debugger;

console.log("this will be removed");
</script>