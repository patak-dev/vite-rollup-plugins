<template>
  <PluginCard
    :official="true"
    name="graphql"
    description="Convert .gql/.graphql files to ES6 modules"
    status="compatible"
  >
    <p>
      {{
        graphql.kind === "Document"
          ? "Document imported correctly"
          : "Document error"
      }}
    </p>
    <p>
      {{
        HeroComparison.kind === "Query"
          ? "Query imported correctly"
          : "Query error"
      }}
    </p>
  </PluginCard>
</template>

<script setup>
import PluginCard from "../PluginCard.vue";
import graphql, { HeroComparison } from "../../assets/file.graphql";
</script>