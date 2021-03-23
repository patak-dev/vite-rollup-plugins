import { definePlugin, PluginStatus, PluginCategory, html } from '~/util'
import graphql, { HeroComparison } from '~/assets/file.graphql'

const graphqlSuccess = graphql.kind === "Document"
const querySuccess = HeroComparison.kind === 'Document' && HeroComparison.definitions[0].name.value === 'HeroComparison'

export default definePlugin({
  name: 'graphql',
  description: 'Convert .gql/.graphql files to ES6 modules',
  category: PluginCategory.Official,
  status: graphqlSuccess && querySuccess ? PluginStatus.Compatible : PluginStatus.Error,
  demo() {
    return html`
      <p>
        ${graphqlSuccess ? 'Document imported correctly' : 'Document error'}
      </p>
      <p>
        ${querySuccess ? 'Query imported correctly' : 'Query error'}
      </p>
    `
  },
})
