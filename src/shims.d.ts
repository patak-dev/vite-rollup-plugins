import type { DocumentNode } from 'graphql'

declare module '*.csv' {
  export default []
}

declare module '*.graphql' {
  const content: DocumentNode;
  export default content;
}

declare module '*.gql' {
  const content: DocumentNode;
  export default content;
}

declare module '*.yaml' {
  export default {};
}
