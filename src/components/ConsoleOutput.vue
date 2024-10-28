<script setup>
import { computed } from 'vue'
import { evaluated } from '../stores/store.ts'

const output = computed(() => {
    if(evaluated.value === 'null') {
        return ''
    } else {
        return evaluated
    }
})

</script>

<template>
    <div class="console">
        <p class="header">Console</p>
        <p class="output">{{ output }}</p>
    </div>
</template>

<style>
.console {
    width: 100%;
    height: 100%;
    padding: 10px 15px;
    background-color: #0d1117;
}

.header {
    font-size: 17px;
    color: #ecf2f8;
}

.output {
    font-size: 15px;
    color: #7ce38b;
}
</style>
