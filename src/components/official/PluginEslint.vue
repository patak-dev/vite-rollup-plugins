<template>
  <PluginCard
    official="true"
    name="eslint"
    description="Verify entry point and all imported files with ESLint"
    status="compatible"
    options="{ include: '**/*.+(vue|js|jsx|ts|tsx)' }"
    apply="build"
  >
    <p>Add an .eslintrc.js to root</p>
  </PluginCard>
</template>

<script setup>
import PluginCard from "../PluginCard.vue";
</script>