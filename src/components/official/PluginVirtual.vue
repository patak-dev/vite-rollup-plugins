<template>
  <pre>{{ robin + " " + batman }}</pre>
</template>

<script setup>
// Virtual files defined in vite.config.js
import batman from "batman";
import robin from "src/robin.js";
</script>