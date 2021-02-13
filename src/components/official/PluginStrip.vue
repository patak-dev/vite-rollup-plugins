<template>
  <PluginCard
    :official="true"
    name="strip"
    description="Remove debugger statements and functions like assert.equal and console.log from your code"
    status="compatible"
    apply="build"
  >
    <p>"this will be removed" should not appear in the console</p>
  </PluginCard>
</template>

<script setup>
import PluginCard from "../PluginCard.vue";

console.log("this will be removed");
// debugger; // uncomment to test removal during build
</script>