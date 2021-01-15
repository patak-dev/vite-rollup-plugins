<template>
  <PluginTest
    name="eslint"
    description="Verify entry point and all imported files with ESLint"
    status="compatible"
    options="{ include: '**/*.+(vue|js|jsx|ts|tsx)' }"
  >
    <p>Add an .eslintrc.js to root</p>
  </PluginTest>
</template>

<script setup>
import PluginTest from "../PluginTest.vue";
</script>