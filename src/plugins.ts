const modules = import.meta.globEager('./plugins/**/*.ts')

export const plugins =  Object.values(modules).map((module) => {
  return module.default
}).flat()