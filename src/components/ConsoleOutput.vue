<script setup>
import { evaluated } from '../stores/store.ts'

</script>

<template>
    <div class="console">
        <p>Console</p>
        <p>{{ evaluated }}</p>
    </div>
</template>
