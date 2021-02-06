<template>
  <PluginCard
    official="true"
    name="legacy"
    description="Add export declarations to legacy non-module scripts"
    :status="r === 8 ? 'compatible' : 'error'"
  >
    <p>Import from a legacy library</p>
    <pre>{{ r }}</pre>
  </PluginCard>
</template>

<script setup>
import PluginCard from "../PluginCard.vue";
import legacyLibrary from "../../assets/legacy.js";

const r = legacyLibrary.cube(2);
</script>