<template>
  <header>
    <h1>⚡ Vite Rollup Plugins 🍣</h1>
  </header>
  <main>
    <div class="info">
      <h3>
        A list of official rollup plugins compatibility for Vite v2.0.0-beta.60.
      </h3>
      <p>
        This page is built using
        <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite 2</a>,
        and it is intended to also be a playground for compatible rollup
        plugins. All of these plugins are being used as part of building this
        page. Click the <strong>+</strong> button of a compatible plugin to see
        installation instructions and more info about how it is being tested.
      </p>
      <p>
        This project aims to inform the official rollup plugins listed in
        <a
          href="https://github.com/vitejs/awesome-vite"
          target="_blank"
          rel="noopener"
          >Awesome Vite</a
        >. Some popular community maintained plugins are also included. For other community rollup plugins, like the ones in the
        <a
          href="https://github.com/rollup/awesome"
          target="_blank"
          rel="noopener"
          >Awesome Rollup list</a
        >, refer to the Vite Docs section about
        <a
          href="https://vitejs.dev/guide/api-plugin.html#rollup-plugin-compatiblity"
          target="_blank"
          rel="noopener"
          >rollup plugin compatibility</a
        >.
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
        <span><strong>n/a</strong></span
        ><span>Plugins that are not applicable for Vite use cases</span>
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
    <OfficialPlugins />
    <div class="info community">
      <h3>
        Popular Community Maintained Rollup Plugins
      </h3>
      <p>Work In Progress, <a
            href="https://github.com/matias-capeletto/vite-rollup-plugins"
            target="_blank"
            rel="noopener"
            >PRs welcome</a
          ></p>
    </div>
    <CommunityPlugins />
    <footer>
      <a href="https://twitter.com/patak_js" target="_blank" rel="noopener"
        >@patak_js</a
      >
      •
      <a href="https://patak.dev" target="_blank" rel="noopener">patak.dev</a> •
      MIT Licensed • Copyright © 2021 Matias Capeletto
    </footer>
  </main>
</template>

<script setup>
import OfficialPlugins from "./components/OfficialPlugins.vue";
import CommunityPlugins from "./components/CommunityPlugins.vue";
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

.info.community {
  margin-top: 100px;
}

.legend {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 20px 10px;
}
a {
  color: #42b983;
}

footer {
  text-align: center;
  margin: 40px;
  margin-top: 80px;
}
</style>