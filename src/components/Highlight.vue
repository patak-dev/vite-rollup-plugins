<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ code: string, language: string }>()

const ouptut = computed(() => props.code)
</script>

<template>
  <div v-html="ouptut"></div>
</template>