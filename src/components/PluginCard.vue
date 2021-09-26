<script setup lang="ts">
import { ref, computed, useSlots, onMounted } from "vue";
import { useClipboard } from '@vueuse/core'
import Highlight from "./Highlight.vue";

const props = defineProps({
  name: { type: String, required: true },
  docs: { type: String, default: null },
  npm: { type: String, default: null },
  description: { type: String, required: true },
  status: { type: String, default: 'todo' },
  link: { type: String, default: null },
  enforce: { type: String, default: null },
  apply: { type: String, default: null },
  options: { type: String, default: "" },
  usage: { type: String, default: null },
  official: { type: Boolean, default: false }
});

const slots = useSlots();
const hasTest = computed(() => props.status !== "todo" && !!slots.default);
const hasInfo = computed(() => props.status !== "todo" && !!slots.info);
const hasDetails = computed( () => hasTest.value || hasInfo.value );
const docsLink = computed( () => props.docs || `https://github.com/rollup/plugins/tree/master/packages/${props.name}` );
const expanded = ref(false);
const nameCode = computed(() => camelCase(props.name.replace('rollup-plugin-','')));
const npmCode = computed(() => props.npm || ( props.official ? `@rollup/plugin-${props.name}` : props.name ))
const { copy } = useClipboard()
const copyToClipboard = () => {
  copy(`${window.location.host}/#${props.name}`)
  window.location.hash = props.name
}
onMounted(() => {
  // Auto expand the description if hash matches
  if (window.location.hash === `#${props.name}`) {
    expanded.value = true
  }
})
const pluginCode = computed(() => {
  return props.enforce || props.apply ? `{
      ...${nameCode.value}(${props.options}),${ 
        props.enforce ? `\n      enforce: '${props.enforce}',` : '' }${ 
        props.apply ? `\n      apply: '${props.apply}',` : '' }
    }` : `${nameCode.value}(${props.options})`
})
const viteConfigCode = computed(() => {
  return `import ${nameCode.value} from "${npmCode.value}"\n\nexport default {
  plugins: [
    ${pluginCode.value},
  ]
}
`;
});
// move to util.js
function camelCase(str) {
  let dash = false;
  return str.split("").reduce((p, c) => {
    if (c === "-") {
      dash = true;
      return p;
    } else {
      const r = p + (dash ? c.toUpperCase() : c);
      dash = false;
      return r;
    }
  }, "");
}
</script>


<template>
  <div
    :id="name"
    :class="['plugin-card', status === 'n/a' ? 'na' : status]"
    :style="{
      opacity: status === 'todo' ? 0.25 : 1,
    }"
  >
    <span 
      class="copy-to-clipboard" 
      @click="copyToClipboard()"
    >
      <fe-hash />
    </span>
    <div class="card-header">
      <p>
        <a
          :href="docsLink"
          target="_blank"
          rel="noopener"
        >
          {{ name }}
        </a>
        <template v-if="enforce">
          <a
            href="https://vitejs.dev/guide/api-plugin.html#plugin-ordering"
            target="_blank"
            rel="noopener"
          >
            <span class="enforce">
              <code>enforce: '{{ enforce }}'</code>
            </span>
          </a>
        </template>
      </p>
      <p>{{ description }}</p>
      <template v-if="status === 'compatible' && expanded">
        <div class="install-code">
          <pre><code>{{ `$ npm i -D ${npmCode}` }}</code></pre>
          <code><pre>$ npm i -D {{ npmCode }}</pre></code>
        </div>
        <div class="config-code">
          <p class="file-name">
            vite.config.js
          </p>
          <Suspense>
            <template #default>
              <Highlight
                :code="viteConfigCode"
                language="js"
              />
            </template>
            <template #fallback>
              <pre><code>{{ viteConfigCode }}</code></pre>
            </template>
          </Suspense>
        </div>
        <div
          v-if="usage"
          class="config-code"
        >
          <p class="file-name">
            app code
          </p>
          <pre><code>{{ usage }}</code></pre>
        </div>
      </template>
    </div>
    <p class="status">
      <a
        v-if="hasDetails"
        class="info-toggle"
        @click="expanded = !expanded"
      >
        <fe-info v-if="!expanded" />
        <fe-arrow-up v-else />
      </a>
      <a
        v-if="link"
        :href="link"
        target="_blank"
      >{{ status }}</a>
      <template v-else>
        {{ status }}
      </template>
    </p>
    <div
      v-if="expanded && hasInfo"
      class="test"
    >
      <div class="details">
        <slot name="info" />
      </div>
    </div>
    <div
      v-if="expanded && hasTest"
      class="test"
    >
      <p>Test</p>
      <div class="details">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.plugin-card {
  background-color: var(--color-back-raised);
  padding: 20px;
  margin: 0 auto;
  max-width: 640px;
  /*border: 1px solid #eaeaea;*/
  border-radius: 10px;
  width: 90%;
  box-shadow: 3px 3px 6px var(--color-shadow-a), -3px -3px 6px var(--color-shadow-b);
  position: relative;
}

:not(.todo).plugin-card:hover {
  background-color: var(--color-back-raised-hover);
  box-shadow: 4px 4px 7px var(--color-shadow-a-hover), -4px -4px 7px var(--color-shadow-b-hover);
}

p {
  margin: 0;
}

.card-header {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-header a {
  text-align: left;
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

a:active {
  text-decoration: underline;
}

.enforce {
  padding-left: 30px;
  font-size: 0.9rem;
}

.status {
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 8px 20px;
  border-radius: 0 5px 0 5px;
  width: 90px;
  text-align: center;
  border: 1px solid var(--color-border-status);
  border-top: none;
  border-right: none;
  background-color: var(--color-back-status);
  box-shadow: inset 3px 3px 6px var(--color-shadow-status-a), inset -3px -3px 6px var(--color-shadow-status-b);
}
.plugin-card.error .status {
  background-color: #cc0000;
  color: white;
  box-shadow: initial;
}

.plugin-card.na .status {
  background-color: var(--color-back-status-na);
  border: none;
}

.info-toggle {
  color: var(--color-text);
  border-radius: 5px;
  position: absolute;
  padding: 5px 5px;
  width: 26px;
  height: 26px;
  top: 5px;
  left: -40px;
}
.info-toggle:hover {
  cursor: pointer;
  color: var(--color-text-hover);
}

.test {
  margin-top: 20px;
}
.details,
.install-code,
.config-code {
  margin-top: 10px;
  background-color: var(--color-back-config);
  box-shadow: inset 3px 3px 6px var(--color-shadow-config-a), inset -3px -3px 6px var(--color-shadow-config-b);
  border-radius: 10px;
  padding: 20px;
  position: relative;
  padding: 5px 20px;
}

.details {
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}

.file-name {
  position: absolute;
  font-size: 0.9em;
  color: var(--color-text-soft);
  top: 15px;
  right: 15px;
}

.plugin-card:hover .copy-to-clipboard {
  opacity: 1;
}

.copy-to-clipboard {
  cursor: pointer;
  opacity: 0;
  position: absolute;
  left: 0rem;
  background: var(--color-back-raised);
  border-radius: 50%;
  transform: translateY(-15%) translateX(-50%);
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  place-items: center;
  place-content: center;
  transition: opacity 200ms ease;
  font-size: 0.875rem;
}

.copy-to-clipboard:active {
  background: var(--color-link);
}

@media screen and (max-width: 650px) {
  .enforce {
    padding-top: 5px;
    padding-left: 0;
    display: block;
  }

  .config-code {
    padding-top: 35px;
  }
}
</style>