<template>
  <PluginTest
    name="yaml"
    description="Convert YAML files to ES6 modules"
    status="compatible"
  >
    <pre>{{ JSON.stringify(yaml, null, 2) }}</pre>
  </PluginTest>
</template>

<script setup>
import PluginTest from "../PluginTest.vue";
import yaml from "../../assets/file.yaml";
</script>