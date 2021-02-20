<template>
  <PluginCard
    :official="true"
    name="graphql"
    description="Convert .gql/.graphql files to ES6 modules"
    :status="graphqlSuccess && querySuccess ? 'compatible' : 'error'"
  >
    <p>
      {{
        graphqlSuccess
          ? "Document imported correctly"
          : "Document error"
      }}
    </p>
    <p>
      {{
        querySuccess
          ? "Query imported correctly"
          : "Query error"
      }}
    </p>
  </PluginCard>
</template>

<script setup>
import PluginCard from "../PluginCard.vue";
import graphql, { HeroComparison } from "../../assets/file.graphql";

const graphqlSuccess = graphql.kind === "Document"
const querySuccess = HeroComparison.kind === 'Document' && HeroComparison.definitions[0].name.value === 'HeroComparison'
</script>