<template>
  <p>Import from a legacy library</p>
  <pre>{{ r }}</pre>
</template>

<script setup>
import legacyLibrary from "../../assets/legacy.js";

const r = legacyLibrary.cube(2);
</script>