<template>
  <p>"this will be removed" should not appear in the console</p>
</template>

<script setup>
console.log("this will be removed");
// debugger; // uncomment to test removal during build
</script>