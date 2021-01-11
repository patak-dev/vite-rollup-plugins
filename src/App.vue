<template>
  <header>
    <h1>⚡ Vite Rollup Plugins 🍣</h1>
  </header>
  <main>
    <div class="info">
      <h3>
        A list of official rollup plugins compatibility for Vite v2.0.0-beta.21.
      </h3>
      <p>
        This page is built using
        <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite 2</a>,
        and it is intended to also be a playground for compatible rollup
        plugins. All of these plugins are being used as part of building this
        page. Click the <strong>+</strong> button of a compatible plugin to see
        installation instructions and more info about how it is being tested.
      </p>
      <div class="legend">
        <span><strong>covered</strong></span>
        <span>Features that are part of Vite. These plugins are unneeded</span>
        <span><strong>included</strong></span
        ><span>Plugins that are already shipped out of the box with Vite</span>
        <span><strong>compatible</strong></span
        ><span>Plugins that work properly when used with Vite</span>
        <span><strong>incompatible</strong></span
        ><span>Plugins that can not currently be used with Vite</span>
        <span><strong>todo</strong></span
        ><span
          >Plugins that have not been added to the list yet,
          <a
            href="https://github.com/matias-capeletto/vite-rollup-plugins"
            target="_blank"
            rel="noopener"
            >PRs welcome</a
          >
        </span>
      </div>
    </div>
    <PluginsPlayground />
  </main>
</template>

<script setup>
import PluginsPlayground from "./components/PluginsPlayground.vue";
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  text-align: center;
}

.info {
  max-width: 650px;
  text-align: left;
  margin: 10px auto;
  padding: 0px 20px;
  margin-top: 60px;
  margin-bottom: 60px;
  text-align: left;
}

.legend {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 20px 10px;
}
a {
  color: #42b983;
}
</style>