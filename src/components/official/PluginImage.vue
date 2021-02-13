<template>
  <PluginCard
    :official="true"
    name="image"
    description="Import JPG, PNG, GIF, SVG, and WebP files"
    enforce="pre"
    :status="
      base64.startsWith('data:image/png;base64,iVBORw0KGgoAAAANSU')
        ? 'compatible'
        : 'error'
    "
  >
    <img :src="base64" alt="base64 encoded image" />
    <p>{{ base64 }}</p>
  </PluginCard>
</template>

<script setup>
import PluginCard from "../PluginCard.vue";
import base64 from "../../assets/logo.png";
</script>

<style scoped>
p {
  font-family: "Courier New";
  word-wrap: break-word;
  height: 300px;
  overflow-y: scroll;
}
img {
  display: block;
  margin: 0 auto;
}
</style>>