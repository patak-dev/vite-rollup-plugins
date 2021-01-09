<template>
  <PluginTest
    name="dsv"
    description="Convert .csv and .tsv files into JavaScript modules with d3-dsv"
    status="compatible"
  >
    <pre>{{ JSON.stringify(csv, null, 2) }}</pre>
  </PluginTest>
</template>

<script setup>
import PluginTest from "../PluginTest.vue";
import csv from "../../assets/file.csv";
</script>