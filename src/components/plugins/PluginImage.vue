<template>
  <PluginTest
    name="image"
    description="Import JPG, PNG, GIF, SVG, and WebP files"
    :status="
      base64.startsWith('data:image/png;base64,iVBORw0KGgoAAAANSU')
        ? 'compatible'
        : 'error'
    "
  >
    <img :src="base64" alt="base64 encoded image" />
    <p>{{ base64 }}</p>
  </PluginTest>
</template>

<script setup>
import PluginTest from "../PluginTest.vue";
import base64 from "../../assets/logo.png";
</script>

<style scoped>
p {
  font-family: "Courier New";
  word-wrap: break-word;
  height: 300px;
  overflow-y: scroll;
}
</style>>