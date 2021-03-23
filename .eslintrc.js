module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
  ],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off"
  }
  // parserOptions: {
  //  parser: "babel-eslint"
  //},
}
