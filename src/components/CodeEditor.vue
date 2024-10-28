<script setup>
import { ref } from "vue"
import CodeEditor from 'simple-code-editor'
import { input } from '../stores/store.ts'

const value = ref('')

function generate() {
    input.value = value.value 
}
</script>

<template>
    <CodeEditor 
        v-model="value"
        :line-nums="true"
        :display-language="false"
        border-radius="0"
        width="100%"
        height="80%"
    />
    <div class="button-container">
        <div class="button" @click="generate"></div>
    </div>
</template>

<style>
.button-container {
    width: 100%;
    height: auto;
    background-color: #0d1117;
    padding: 10px 0;
    border-top: .5px solid #ecf2f860;
    border-bottom: .5px solid #ecf2f860;
}

.button {
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-left: 20px solid #77bdfb;
    border-bottom: 10px solid transparent;
    cursor: pointer;
    margin-left: auto;
    margin-right: 10px;
}
</style>
