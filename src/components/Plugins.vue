<script setup lang="ts">
import type { Plugin as RollupPlugin } from '~/types'
import { shallowRef, ref, watch, computed } from 'vue'
import { PluginCategory } from '~/util'
import { plugins } from '../plugins'
import Fuse from 'fuse.js'

const results = shallowRef<RollupPlugin[]>([])
const search = ref('')
const status = ref('all')
const fuse = new Fuse<RollupPlugin>(plugins, {
  distance: 30,
  keys: [
    {
      name: 'name',
      weight: 1,
    },
    {
      name: 'description',
      weight: 0.3,
    },
  ]
})

const sortPlugins = (a: any, b: any) => {
  let x = a.name.toLocaleLowerCase()
  let y = b.name.toLocaleLowerCase()

  return (x < y) ? -1 : (x > y) ? 1 : 0
}

watch(search, () => {
  if (search.value.length === 0)
    results.value = plugins
  else
    results.value = fuse.search(search.value).map(x => x.item)
}, { immediate: true })

const officalPlugins = computed(() => {
  if (search.value.length === 0) {
    return results.value
      .filter(x => x.category === PluginCategory.Official)
      .filter(x => {
        if (status.value === 'all')
          return true
  
        return x.status === status.value
      })
      .sort(sortPlugins)
  } else {
    return results.value
      .filter(x => x.category === PluginCategory.Official)
      .filter(x => {
        if (status.value === 'all')
          return true
  
        return x.status === status.value
      })
  }
})


const searchParams = new URLSearchParams(window.location.search);
const query = searchParams.get("query")
if (query) {
  search.value = query
}

const communityPlugins = computed(() => {
  window.history.pushState(null, null, `?query=${search.value}`)

  if (search.value.length === 0) {
    return results.value
      .filter(x => x.category === PluginCategory.Community)
      .filter(x => {
        if (status.value === 'all')
          return true
  
        return x.status === status.value
      })
      .sort(sortPlugins)
  } else {
    return results.value
      .filter(x => x.category === PluginCategory.Community)
      .filter(x => {
        if (status.value === 'all')
          return true
  
        return x.status === status.value
      })
  }
})
</script>

<template>
  <div class="playground">
    <PluginFilter v-model="search" v-model:status="status" />
  </div>
  <div class="playground" v-if="officalPlugins.length > 0">
    <PluginCard
      v-for="plugin in officalPlugins"
      :key="plugin.name"
      :name="plugin.name"
      :docs="plugin.docs"
      :description="plugin.description"
      :status="plugin.status"
      :official="plugin?.category === PluginCategory.Official"
      :apply="plugin?.apply"
      :enforce="plugin?.enforce"
      :usage="plugin?.usage"
      :link="plugin?.link"
      :npm="plugin?.npm"
    >
      <template #default v-if="plugin.demo">
        <component :is="plugin.demo" />
      </template>
      <template #info v-if="plugin.info">
        <component :is="plugin.info" />
      </template>
    </PluginCard>
  </div>
  <div v-else class="info not-found">
    <fe-frowing />
    <span>
      No Official Plugins Found
    </span>
  </div>
  <div class="info community">
    <h3>
      Popular Community Maintained Rollup Plugins
    </h3>
    <p>
      Work In Progress, <a
        href="https://github.com/matias-capeletto/vite-rollup-plugins"
        target="_blank"
        rel="noopener"
      >PRs welcome</a>
    </p>
  </div>
  <div class="playground" v-if="communityPlugins.length > 0">
    <PluginCard
      v-for="plugin in communityPlugins"
      :key="plugin.name"
      :name="plugin.name"
      :docs="plugin.docs"
      :description="plugin.description"
      :status="plugin.status"
      :official="plugin?.category === PluginCategory.Official"
      :apply="plugin?.apply"
      :enforce="plugin?.enforce"
      :usage="plugin?.usage"
      :link="plugin?.link"
      :npm="plugin?.npm"
    >
    <template #default v-if="plugin.demo">
      <component :is="plugin.demo" />
    </template>
    <template #info v-if="plugin.info">
      <component :is="plugin.info" />
    </template>
    </PluginCard>
  </div>
  <div v-else class="info not-found">
    <fe-frowing />
    <span>
      No Community Plugins Found
    </span>
  </div>
</template>

<style scoped>
.playground {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px;
  margin-bottom: 60px;
}

.not-found {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--text-soft);
  text-align: center;
}

.not-found span {
  font-size: 1.25rem;
  margin-left: 1rem;
  margin-top: -0.25rem;
}
</style>