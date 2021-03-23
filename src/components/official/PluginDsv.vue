<template>
  <pre>{{ JSON.stringify(csv, null, 2) }}</pre>
</template>

<script setup lang="ts">
import csv from "../../assets/file.csv";
</script>