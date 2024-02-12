<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { ref, onMounted } from 'vue'
import FeInfo from '~icons/fe/info'
import FeArrowUp from '~icons/fe/arrow-up'
import FeGitHub from '~icons/fe/github'
import FeMoon from '~icons/fe/moon'
import FeSunnyO from '~icons/fe/sunny-o'

const isDark = useDark({ valueLight: 'light' })
const toggleDark = useToggle(isDark)

const aboutExpanded = ref(false)

onMounted(() => {
  // Try to scroll selected into view

  if (window && window.location.hash)
    document.querySelector(window.location.hash)?.scrollIntoView({
      behavior: 'smooth',
    })
  
})
</script>

<template>
  <header>  
    <a
      class="github-link"
      href="https://github.com/matias-capeletto/vite-rollup-plugins"
      target="_blank"
    >
      <FeGitHub />
    </a>
    <a
      class="theme-toggle"
      @click="isDark = !isDark"
    >
      <FeMoon v-if="isDark" />
      <FeSunnyO v-else />
    </a>
  </header>
  <main>
    <div class="info">
      <h3 @click="aboutExpanded = !aboutExpanded">
        A list of rollup plugins compatibility for <a
          href="https://vitejs.dev/"
          target="_blank"
          rel="noopener"
        >Vite ~5.1.0</a>
      </h3>
      <p class="archived-notice">
        Important! This resource is archived and won't be updated anymore. Vite represents now more than 55% of the npm downloads of Rollup. To properly scale and keep the compat info always up-to-date it makes more sense for Rollup plugins to document their compatibility status directly in their docs.
      </p>
      <a
        class="about-toggle"
        @click="aboutExpanded = !aboutExpanded"
      >
        <FeInfo v-if="!aboutExpanded" />
        <FeArrowUp v-else />
      </a>
      <template v-if="aboutExpanded">
        <p>
          This page is built using
          <a
            href="https://vitejs.dev/"
            target="_blank"
            rel="noopener"
          >Vite</a>,
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
          >Awesome Vite</a>. Some popular community maintained plugins are also included. For other community rollup plugins, like the ones in the
          <a
            href="https://github.com/rollup/awesome"
            target="_blank"
            rel="noopener"
          >Awesome Rollup list</a>, refer to the Vite Docs section about
          <a
            href="https://vitejs.dev/guide/api-plugin.html#rollup-plugin-compatibility"
            target="_blank"
            rel="noopener"
          >rollup plugin compatibility</a>.
        </p>
        <div class="legend">
          <span><strong>covered</strong></span>
          <span>Features that are part of Vite. These plugins are unneeded</span>
          <span><strong>included</strong></span><span>Plugins that are already shipped out of the box with Vite</span>
          <span><strong>compatible</strong></span><span>Plugins that work properly when used with Vite</span>
          <span><strong>incompatible</strong></span><span>Plugins that can not currently be used with Vite</span>
          <span><strong>n/a</strong></span><span>Plugins that are not applicable for Vite use cases</span>
          <span><strong>todo</strong></span><span>Plugins that have not been added to the list yet,
            <a
              href="https://github.com/matias-capeletto/vite-rollup-plugins"
              target="_blank"
              rel="noopener"
            >PRs welcome</a>
          </span>
        </div>
      </template>
    </div>
    <Plugins />
    <footer>
      <a
        href="https://twitter.com/patak_dev"
        target="_blank"
        rel="noopener"
      >@patak_dev</a>
      •
      <a
        href="https://patak.dev"
        target="_blank"
        rel="noopener"
      >patak.dev</a> •
      MIT Licensed • Copyright © 2021 Matias Capeletto
    </footer>
  </main>
</template>

<style>
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
  z-index: 10;
}
.theme-toggle:hover {
  cursor: pointer;
  color: var(--color-text-hover);
}

.github-link {
  color: var(--color-text);
  position: fixed;
  top: 12px;
  right: 42px;
  z-index: 10;
}

.github-link:hover {
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

.archived-notice {
  font-weight: 700;
  font-size: 1.1em;
  color: var(--color-link);
  padding: 1em;
  background-color: var(--color-back-raised-hover);
  border-radius: 0.5em;
  border: 2px solid var(--color-link);
}
</style>
