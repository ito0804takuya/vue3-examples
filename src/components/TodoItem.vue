<script setup>
// 別に変数に入れなくてもOK
const props = defineProps({
  todo: Object
})
</script>

<template>
  <li>{{ todo.text }}</li>
</template>
