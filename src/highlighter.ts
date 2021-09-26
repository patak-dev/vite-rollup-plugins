import { setOnigasmWASM, setCDN, getHighlighter } from 'shiki'
import { createSingletonPromise } from '@antfu/utils'

setOnigasmWASM('/shiki/dist/onigasm.wasm')
setCDN('/shiki/')

export const useHighlighter = createSingletonPromise(async () => {
  const highlighter = await getHighlighter({ theme: 'css-variables', langs: ['js'] })

  return highlighter
})
