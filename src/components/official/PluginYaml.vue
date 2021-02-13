<template>
  <PluginCard
    :official="true"
    name="yaml"
    description="Convert YAML files to ES6 modules"
    :status="yaml.key === 'Content from YAML file' ? 'compatible' : 'error'"
  >
    <pre>{{ JSON.stringify(yaml, null, 2) }}</pre>
  </PluginCard>
</template>

<script setup>
import PluginCard from "../PluginCard.vue";
import yaml from "../../assets/file.yaml";
</script>