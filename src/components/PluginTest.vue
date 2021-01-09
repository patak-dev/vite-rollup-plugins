<template>
  <div
    :class="['plugin-test', { incompatible: status === 'incompatible' }]"
    :style="{
      opacity: status === 'todo' ? 0.35 : 1,
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
    <div class="details" v-if="expanded && status === 'compatible'">
      <slot />
    </div>
    <p
      class="status"
      :style="{ cursor: status === 'compatible' ? 'pointer' : 'initial' }"
      @click="expanded = !expanded"
    >
      {{ status }}
    </p>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";

defineProps({
  name: String,
  description: String,
  status: String,
});

const expanded = ref(false);
</script>

<style scoped>
.plugin-test {
  padding: 20px;
  margin: 0 auto;
  max-width: 640px;
  border: 1px solid #eee;
  border-radius: 10px;
  width: 90%;
  box-shadow: 3px 3px 6px #e1e1e3, -3px -3px 6px #ffffff;
  position: relative;
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
.test-header p {
}

.status {
  position: absolute;
  top: 18px;
  right: 18px;
  cursor: pointer;
}

.details {
  margin-top: 30px;
}
</style>