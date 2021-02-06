<template>
  <div class="playground">
    <PluginCard
      name="rollup-plugin-typescript2"
      docs="https://github.com/ezolenko/rollup-plugin-typescript2"
      description="Rollup plugin for typescript with compiler errors."
      status="compatible"
      apply="build"
    >
      <template v-slot:info>
      Good plugin to generate types at build time. Vite already has support for Typescript otherwise.
      </template>
    </PluginCard>
    <PluginCard
      name="rollup-plugin-off-main-thread"
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
    <PluginCard
      name="rollup-plugin-uglify"
      docs="https://github.com/TrySound/rollup-plugin-uglify#readme"
      description="Minify generated bundle using uglify"
      status="covered"
      link="https://vitejs.dev/config/#build-minify"
    />
    <PluginCard
      name="rollup-plugin-postcss"
      docs="https://github.com/egoist/rollup-plugin-postcss#readme"
      description="Seamless integration between Rollup and PostCSS"
      status="covered"
      link="https://vitejs.dev/guide/features.html#postcss"
    />    
    <PluginCard
      name="rollup-plugin-sass"
      docs="https://github.com/differui/rollup-plugin-sass#readme"
      description="Rollup .sass files"
      status="covered"
      link="https://vitejs.dev/guide/features.html#css-pre-processors"
    />
    <PluginCard
      name="rollup-plugin-scss"
      docs="https://github.com/thgh/rollup-plugin-scss"
      description="Rollup multiple .scss, .sass and .css imports"
      status="covered"
      link="https://vitejs.dev/guide/features.html#css-pre-processors"
    />
    <PluginCard
      name="rollup-plugin-less"
      docs="https://github.com/xiaofuzi/rollup-plugin-less#readme"
      description="Support for less files"
      status="covered"
      link="https://vitejs.dev/guide/features.html#css-pre-processors"
    />
    <PluginCard
      name="rollup-plugin-livereload"
      docs="https://www.npmjs.com/package/rollup-plugin-livereload"
      description="Watches the bundle and reloads the page on change"
      status="covered"
      link="https://vitejs.dev/guide/features.html#hot-module-replacement"
    />
    <PluginCard
      name="rollup-plugin-vue"
      docs="https://www.npmjs.com/package/rollup-plugin-vue"
      description="Roll Vue 3 SFCs with Rollup"
      status="covered"
      link="https://github.com/vitejs/vite/tree/main/packages/plugin-vue"
    />
    <PluginCard
      name="rollup-plugin-bundle-size"
      docs="https://github.com/vimeo/rollup-plugin-bundle-size"
      description="Show the size of the generated bundle(s)"
      status="covered"
    />
    <PluginCard
      name="rollup-plugin-filesize"
      docs="https://github.com/ritz078/rollup-plugin-filesize#readme"
      description="Show filesize in the cli"
      status="covered"
    />
    <PluginCard
      name="rollup-plugin-copy"
      docs="https://github.com/vladshcherbin/rollup-plugin-copy#readme"
      description="Copy files and folders, with glob support"
      status="covered"
      link="https://vitejs.dev/guide/features.html#the-public-directory"
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