<template>
  <div
    :class="['plugin-test', status]"
    :style="{
      opacity: status === 'todo' ? 0.25 : 1,
    }"
  >
    <div class="test-header">
      <p>
        <a
          :href="`https://github.com/rollup/plugins/tree/master/packages/${name}`"
          target="_blank"
          >{{ `@rollup/plugin-${name}` }}</a
        >
      </p>
      <p>{{ description }}</p>
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
    <div class="details" v-if="expanded && hasDetails">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, useContext } from "vue";

const props = defineProps({
  name: String,
  description: String,
  status: String,
  link: String,
});

const { slots } = useContext();

const hasDetails = computed(() => props.status !== "todo" && !!slots.default);

const expanded = ref(false);
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

.plugin-test.incompatible {
  background-color: #ffffea;
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

.status {
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 8px 20px;
  border-radius: 0 5px 0 5px;
  width: 80px;
  text-align: center;
  background-color: #fbfbfb;
  box-shadow: inset 3px 3px 6px #f0f0f0, -3px -3px 6px #fbfbfb;
}
.plugin-test.error .status {
  background-color: #cc0000;
  color: white;
  box-shadow: initial;
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
  top: 4px;
  left: -30px;
}
button:hover {
  background-color: #f4f4f6;
  box-shadow: inset 3px 3px 6px #f0f0f0, -3px -3px 6px #fbfbfb;
}

.details {
  margin-top: 20px;
  border-top: 1px solid #fbfbfb;
  background-color: #fbfbfb;
  box-shadow: inset 3px 3px 6px #f0f0f0, -3px -3px 6px #fbfbfb;
  border-radius: 10px;
  padding: 20px;
}
</style>