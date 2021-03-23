<template>
  <img
    :src="base64"
    alt="base64 encoded image"
  >
  <p>{{ base64 }}</p>
</template>

<script setup>
import base64 from "~/assets/logo.png";
</script>

<style scoped>
p {
  font-family: "Courier New";
  word-wrap: break-word;
  height: 300px;
  overflow-y: scroll;
}
img {
  display: block;
  margin: 0 auto;
}
</style>>