<template>
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
</template>

<script setup>
import graphql, { HeroComparison } from "../../assets/file.graphql";

const graphqlSuccess = graphql.kind === "Document"
const querySuccess = HeroComparison.kind === 'Document' && HeroComparison.definitions[0].name.value === 'HeroComparison'
</script>