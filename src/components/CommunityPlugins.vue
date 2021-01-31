<template>
  <div class="playground">
    <PluginOffMainThread />
  </div>
</template>

<script setup>
import PluginOffMainThread from "./community/PluginOffMainThread.vue";
</script>

<style scoped>
.playground {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px;
  margin-bottom: 60px;
}
</style>