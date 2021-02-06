<template>
  <PluginCard
    official="true"
    name="dsv"
    description="Convert .csv and .tsv files into JavaScript modules with d3-dsv"
    :status="csv.length === 3 ? 'compatible' : 'error'"
  >
    <pre>{{ JSON.stringify(csv, null, 2) }}</pre>
  </PluginCard>
</template>

<script setup>
import PluginCard from "../PluginCard.vue";
import csv from "../../assets/file.csv";
</script>