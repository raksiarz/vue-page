<script setup>
import CodeEditor from './components/CodeEditor.vue'
import ConsoleOutput from './components/ConsoleOutput.vue'

</script>

<template>
  <CodeEditor />
  <ConsoleOutput />
</template>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
  height: 100vh;
}
</style>
