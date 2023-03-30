<script setup>
// 別に変数に入れなくてもOK
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  // todo: Object
  todo: {
    validator (v) {
      return ['ok', 'ng'].includes(v)
    }
  }
})
</script>

<template>
  <li>{{ todo.text }}</li>
</template>
