<template>
  <div
    :class="['plugin-test', status === 'n/a' ? 'na' : status]"
    :style="{
      opacity: status === 'todo' ? 0.25 : 1,
    }"
  >
    <div class="test-header">
      <p>
        <a
          :href="`https://github.com/rollup/plugins/tree/master/packages/${name}`"
          target="_blank"
          rel="noopener"
          >{{ name }}</a
        ><template v-if="enforce"
          ><a
            href="https://vitejs.dev/guide/api-plugin.html#plugin-ordering"
            target="_blank"
            rel="noopener"
            ><span class="enforce">
              <code>enforce: '{{ enforce }}'</code></span
            ></a
          ></template
        >
      </p>
      <p>{{ description }}</p>
      <template v-if="status === 'compatible' && expanded">
        <div class="install-code">
          <pre><code>{{ `$ npm i -D @rollup/plugin-${name}` }}</code></pre>
        </div>
        <div class="config-code">
          <p class="file-name">vite.config.js</p>
          <pre><code>{{ viteConfigCode }}</code></pre>
        </div>
        <div v-if="usage" class="config-code">
          <p class="file-name">app code</p>
          <pre><code>{{ usage }}</code></pre>
        </div>
      </template>
    </div>
    <p class="status">
      <button v-if="hasDetails" @click="expanded = !expanded" class="expand">
        {{ expanded ? "-" : "+" }}
      </button>
      <a v-if="link" href="link" target="_blank">{{ status }}</a>
      <template v-else>
        {{ status }}
      </template>
    </p>
    <div class="test" v-if="expanded && hasDetails">
      <p>Test</p>
      <div class="details">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, useContext } from "vue";

const props = defineProps({
  name: String,
  description: String,
  status: String,
  link: { type: String, default: null },
  enforce: { type: String, default: null },
  apply: { type: String, default: null },
  options: { type: String, default: "" },
  usage: { type: String, default: null },
});

const { slots } = useContext();

const hasDetails = computed(() => props.status !== "todo" && !!slots.default);

const expanded = ref(false);

const nameCode = computed(() => camelCase(props.name));

const pluginCode = computed(() => {
  return props.enforce || props.apply ? `{
      ...${nameCode.value}(${props.options}),${ 
        props.enforce ? `\n      enforce: '${props.enforce}',` : '' }${ 
        props.apply ? `\n      apply: '${props.apply}',` : '' }
    }` : `${nameCode.value}(${props.options})`
})

const viteConfigCode = computed(() => {
  return `import ${nameCode.value} from "@rollup/plugin-${props.name}"
          
export default {
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

<style scoped>
.plugin-test {
  padding: 20px;
  margin: 0 auto;
  max-width: 640px;
  /*border: 1px solid #eaeaea;*/
  border-radius: 10px;
  width: 90%;
  box-shadow: 3px 3px 6px #e4e4e6, -3px -3px 6px #fbfbfb;
  position: relative;
}

:not(.todo).plugin-test:hover {
  box-shadow: 4px 4px 7px #e0e0e1, -4px -4px 7px #f6f6f6;
}

p {
  margin: 0;
}

.test-header {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.test-header a {
  text-align: left;
  color: #42b983;
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
  font-size: 1.2rem;
}

.status {
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 8px 20px;
  border-radius: 0 5px 0 5px;
  width: 90px;
  text-align: center;
  border: 1px solid #42b98344;
  border-top: none;
  border-right: none;
  background-color: #fbfbfb;
  box-shadow: inset 3px 3px 6px #f0f0f0, -3px -3px 6px #fbfbfb;
}
.plugin-test.error .status {
  background-color: #cc0000;
  color: white;
  box-shadow: initial;
}

.plugin-test.na .status {
  background-color: #ffffff;
  border: none;
}

button {
  appearance: none;
  border: none;
  background-color: white;
  border-radius: 5px;
  position: absolute;
  padding: 5px 5px;
  width: 26px;
  height: 26px;
  top: 6px;
  left: -34px;
}
button:hover {
  background-color: #f4f4f6;
  box-shadow: inset 3px 3px 6px #f0f0f0, -3px -3px 6px #fbfbfb;
}

.test {
  margin-top: 20px;
}
.details,
.install-code,
.config-code {
  margin-top: 10px;
  background-color: #fbfbfb;
  box-shadow: inset 3px 3px 6px #f0f0f0, -3px -3px 6px #fbfbfb;
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
  color: gray;
  top: 15px;
  right: 15px;
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