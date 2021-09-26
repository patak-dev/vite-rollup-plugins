<script setup lang="ts">
import { computed } from 'vue'
import { useHighlighter } from '../highlighter'

const props = defineProps<{ code: string, language: string }>()
const highlighter = await useHighlighter()

const ouptut = computed(() => highlighter.codeToHtml(props.code, props.language))
</script>

<template>
  <div v-html="ouptut"></div>
</template>