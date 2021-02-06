<template>
  <PluginCard
    official="true"
    name="inject"
    description="Scan modules for global variables and injects import statements where necessary"
    status="compatible"
  >
    <p>Import statements for nanoid was auto injected</p>
    <pre>{{ r }}</pre>
  </PluginCard>
</template>

<script setup>
import PluginCard from "../PluginCard.vue";

const r = nanoid();
</script>