import { setOnigasmWASM, setCDN, Highlighter, getHighlighter } from 'shiki'

setOnigasmWASM('/shiki/dist/onigasm.wasm')
setCDN('/shiki/')

export let highlighter: Highlighter

export async function initHighlighter() {
  highlighter = await getHighlighter({
    themes: ['css-variables'],
    langs: ['js', 'shell', 'fish']
  })
}