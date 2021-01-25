<template>
  <PluginTest
    name="babel"
    description="Compile your files with Babel"
    status="todo"
  >
    <p>Compiled with babel</p>
  </PluginTest>
</template>

<script setup>
import PluginTest from "../PluginTest.vue";

function doubleSay(str) {
  return str + ", " + str;
}
function capitalize(str) {
  return str[0].toUpperCase() + str.substring(1);
}
function exclaim(str) {
  return str + "!";
}

//const result = "hello" |> doubleSay |> capitalize |> exclaim;
const result = "todo"

const test = exclaim(capitalize(doubleSay("hello"))) === result;

</script>