import { definePlugin, PluginStatus, PluginCategory } from '~/util'
import PluginGraphQL from '~/components/official/PluginGraphQL.vue'
import graphql, { HeroComparison } from '~/assets/file.graphql'

const graphqlSuccess = graphql.kind === "Document"
const querySuccess = HeroComparison.kind === 'Document' && HeroComparison.definitions[0].name.value === 'HeroComparison'


export default definePlugin({
  name: 'graphql',
  description: 'Convert .gql/.graphql files to ES6 modules',
  category: PluginCategory.Official,
  status: graphqlSuccess && querySuccess ? PluginStatus.Compatible : PluginStatus.Error,
  demo: PluginGraphQL,
})
