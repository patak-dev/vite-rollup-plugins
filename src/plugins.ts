const modules = import.meta.glob('./plugins/**/*.ts', { eager: true })

export const plugins =  Object.values(modules).map((module) => {
  return module.default
}).flat()