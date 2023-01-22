<script setup>
import { ref } from 'vue'
import TodoItem from '../components/TodoItem.vue'

const list = ref([
  { id: 0, text: 'あいう' },
  { id: 1, text: 'かきく' },
  { id: 2, text: 'さしす' }
])
</script>

<template>
  <ol>
    <TodoItem
      v-for="item in list"
      :todo="item"
      :key="item.id"
    />
  </ol>
</template>
