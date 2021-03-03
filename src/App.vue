<template>
  <header>
    
    <h1><img class="logo vite" style="transform:translateY(0.5px);" widht="36" height="36" src="/public/logo.svg" /><span style="color: #646cff;">ite</span> <img class="logo rollup" style="padding-left:6px;transform:translateY(0.5px);" height="35" widht="35" src="/public/rollup.svg" /><span style="color:rgb(239, 51, 53);">ollup</span> Plugins</h1>
    
    <a class="theme-toggle" @click="toggleDark">
      <IconDark v-if="isDark"/>
      <IconLight v-else/>
    </a>
  </header>
  <main>
    <div class="info">
      <h3 @click="aboutExpanded = !aboutExpanded">
        A list of rollup plugins compatibility for <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite v2.0.0</a>
      </h3>
      <a class="about-toggle" @click="aboutExpanded = !aboutExpanded">
        <IconInfo v-if="!aboutExpanded" />
        <IconCollapse v-else/>
      </a>
      <template v-if="aboutExpanded">
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
      </template>
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
import OfficialPlugins from './components/OfficialPlugins.vue';
import CommunityPlugins from './components/CommunityPlugins.vue';
import IconInfo from './icons/IconInfo.vue' 
import IconCollapse from './icons/IconCollapse.vue' 
import IconDark from './icons/IconDark.vue'
import IconLight from './icons/IconLight.vue'
import { useDark, useToggle } from '@vueuse/core'
import { ref } from 'vue'

const isDark = useDark({ valueLight: 'light' })
const toggleDark = useToggle(isDark)

const aboutExpanded = ref(false)
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;  
}

h1 {
  font-size: 2.8em;
}

h3 {
  cursor: pointer;
}
h3 a {
  text-decoration: none;
}
h3 a:hover {
  text-decoration: underline;
}

header {
  text-align: center;
  position: relative;
}

.info {
  position: relative;
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
  color: var(--color-link)
}

footer {
  text-align: center;
  margin: 40px;
  margin-top: 80px;
}

.theme-toggle {
  color: var(--color-text);
  position: fixed;
  top: 12px;
  right: 12px;
}
.theme-toggle:hover {
  cursor: pointer;
  color: var(--color-text-hover);
}

.about-toggle {
  color: var(--color-text);
  position: absolute;
  top: 3px;
  right: 14px;
}
.about-toggle:hover {
  cursor: pointer;
  color: var(--color-text-hover);
}
</style>