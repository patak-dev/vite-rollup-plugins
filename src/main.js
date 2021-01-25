import { createApp } from 'vue'
import App from './App.vue'

console.log('test')

createApp(App).mount('#app')

/*
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

console.log(result)
*/