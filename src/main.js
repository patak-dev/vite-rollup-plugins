import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


/* Testing @rollup/plugin-babel
function doubleSay(str) {
  return str + ", " + str;
}
function capitalize(str) {
  return str[0].toUpperCase() + str.substring(1);
}
function exclaim(str) {
  return str + "!";
}
const result = "hello" |> doubleSay |> capitalize |> exclaim;
console.log(result);
*/