<template>
  <PluginCard
    :official="true"
    name="replace"
    description="Replace strings in files while bundling"
    status="compatible"
  >
    <p>Replaced in script: {{ replaced }}</p>
    <p>Replaced in template: __replaced__</p>
  </PluginCard>
</template>

<script setup>
import PluginCard from "../PluginCard.vue";
const replaced = "__replaced__";
</script>