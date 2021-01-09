<template>
  <PluginTest
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
  </PluginTest>
</template>

<script setup>
import PluginTest from "../PluginTest.vue";
import graphql, { HeroComparison } from "../../assets/file.graphql";
</script>