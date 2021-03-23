<template>
  <pre>{{ JSON.stringify(yaml, null, 2) }}</pre>
</template>

<script setup>
import yaml from "../../assets/file.yaml";
</script>