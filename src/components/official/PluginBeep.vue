<template>
  <PluginCard
    :official="true"
    name="beep"
    description="System beeps on errors and warnings"
    status="compatible"
  >
    <p>Modify the source including an error to test this plugin</p>
  </PluginCard>
</template>

<script setup>
import PluginCard from "../PluginCard.vue";

// * // uncomment to hear beep because of syntax error
</script>