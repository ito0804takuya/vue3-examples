<script setup>
import { ref } from 'vue'

// ここで定義したものは<template>内で使える（data）
const message = ref('Hello World!')
</script>

<template>
  <h1>{{ message }}</h1>
</template>
