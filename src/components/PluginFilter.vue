<script setup lang="ts">
import { defineEmit, defineProps } from 'vue'
import { useVModel } from '@vueuse/core'

const options = [
  'all',
  'covered',
  'included',
  'compatible',
  'incompatible',
  'n/a',
  'todo',
  'error',
]

const props = defineProps({ modelValue: String, status: String })
const emit = defineEmit(['update:modelValue', 'update:status'])
const value = useVModel(props, 'modelValue', emit)
const status = useVModel(props, 'status', emit)
</script>

<template>
  <div class="container">
    <div class="search-container">
      <fe-search class="search-icon" />
      <input
        v-model="value"
        placeholder="Search Plugins..."
        type="text"
      >
    </div>
    <div class="select-container">
      <select v-model="status">
        <option 
          v-for="option in options"
          :key="option"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
      <fe-arrow-down class="select-dropdown-arrow" />
    </div>
  </div>
</template>

<style scoped>
.container,
.container * {
  box-sizing: border-box;
}

.container {
  background: var(--color-back-status);
  border-radius: 10px;
  height: 3rem;
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}

.search-container {
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  max-width: 100%;
  overflow: hidden;
  flex: 1;
}

.search-icon {
  margin: 0 1rem;
  flex-shrink: 0;
}

.search-container input {
  height: 100%;
  flex: 1;
  background: transparent;
  border: none;
  color: inherit;
  outline: none;
  font-family: inherit;
  font-size: 1rem;
}

.select-container {
  border-left: 2px solid var(--color-back);
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  flex-shrink: 0;
  max-width: 100%;
}

.select-container select {
  appearance: none;
  background: transparent;
  border: none;
  height: 100%;
  color: inherit;
  padding: 0 2.5rem 0 1rem;
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  flex-shrink: 0;
  max-width: 100%;
  flex-grow: 0;
}

.select-container select option {
  background: var(--color-back-raised);
  color: var(--color-text);
}

.select-dropdown-arrow {
  position: absolute;
  pointer-events: none;
  right: .875rem;
}
</style>
