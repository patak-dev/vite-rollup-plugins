<template>
  <PluginTest
    name="beep"
    description="System beeps on errors and warnings"
    status="compatible"
  >
    <p>Modify the source including an error to test this plugin</p>
  </PluginTest>
</template>

<script setup>
import PluginTest from "../PluginTest.vue";

// * // uncomment to hear beep because of syntax error
</script>