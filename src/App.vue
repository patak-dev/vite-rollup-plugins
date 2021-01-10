<template>
  <header>
    <h1>⚡ Vite compatible Rollup Plugins 🍣</h1>
  </header>
  <main>
    <div class="info">
      <h4>
        This is a list of official rollup plugins compatibility with Vite
        v2.0.0-beta.16.
      </h4>
      <p>
        This page is built using Vite, and it is intended to also be a
        playground for all Compatible plugins. All of these plugins are being
        used in the Vite config. Click on the <strong>compatible</strong> badge
        of a plugin to see more info about it.
      </p>
      <p>
        <strong>Covered</strong> features are part of Vite, so these plugins are
        unneeded
      </p>
      <p>
        <strong>Included</strong> plugins are already shipped out of the box
        with Vite
      </p>
      <p></p>
      <p>
        <strong>Compatible</strong> plugins are working properly when used in
        Vite
      </p>
      <p>
        <strong>Incompatible</strong> plugins can not currently be used with
        Vite
      </p>
      <p>
        Plugins marked as <strong>todo</strong> have not been added to the list
        yet,
        <a
          href="https://github.com/matias-capeletto/vite-official-rollup-plugins-playground"
          target="_blank"
          rel="noopener"
          >PRs welcome</a
        >
      </p>
    </div>
    <PluginsPlayground />
  </main>
</template>

<script setup>
import PluginsPlayground from "./components/PluginsPlayground.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
  margin-top: 60px;
  margin-bottom: 60px;
  text-align: left;
}

a {
  color: #42b983;
}
</style>