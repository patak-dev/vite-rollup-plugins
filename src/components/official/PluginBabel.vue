<template>
  <PluginCard
    name="babel"
    description="Compile your files with Babel"
    status="covered"
    link="https://vitejs.dev/guide/build.html#browser-compatibility"
  >
    <template v-slot:info>
    Check out <a href="https://github.com/vitejs/vite/tree/main/packages/plugin-legacy" target="_blank" rel="noopener">@vitejs/plugin-legacy</a> for building for production with old browsers support. 
    In case you want to use experimental features, @rollup/plugin-babel is compatible with Vite but it is not recommended because it could slow down the dev server. It is better to use esbuild plugins for these features.
    </template>
  </PluginCard>
</template>

<script setup>
import PluginCard from "../PluginCard.vue";

/* test code

function doubleSay(str) {
  return str + ", " + str;
}
function capitalize(str) {
  return str[0].toUpperCase() + str.substring(1);
}
function exclaim(str) {
  return str + "!";
}

//const result = "hello" |> doubleSay |> capitalize |> exclaim;
const test = exclaim(capitalize(doubleSay("hello"))) === result;
*/
</script>