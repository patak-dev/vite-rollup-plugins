<template>
  <div class="playground">
    <PluginCard
      name="@surma/rollup-plugin-off-main-thread"
      docs="https://github.com/surma/rollup-plugin-off-main-thread#readme"
      description="Use Rollup with workers and ES6 modules today"
      status="covered"
      link="https://vitejs.dev/guide/features.html#web-workers"
    />
    <PluginCard
      name="rollup-plugin-terser"
      docs="https://github.com/TrySound/rollup-plugin-terser#readme"
      description="Minify generated es bundle. Uses terser under the hood"
      status="covered"
      link="https://vitejs.dev/config/#build-minify"
    />
  </div>
</template>

<script setup>
import PluginCard from './PluginCard.vue'
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