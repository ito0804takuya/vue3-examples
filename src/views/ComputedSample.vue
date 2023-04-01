<template>

<!-- formのsubmit をトリガーに、関数を実行 -->
  <form @submit.prevent="addTodo">
    <!-- v-modelで、input と data を 双方向バインディング -->
    <input v-model="newTodoText">
    <button>add todo</button>
  </form>

  <div>{{ todos }}</div>

  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input type="checkbox" v-model="todo.done">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">削除</button>
    </li>
  </ul>

</template>

<script setup lang="ts">
import { ref } from 'vue'

let id = 0

type todoType = {
  id: number;
  text: string;
  done: boolean;
}

// refに型指定ができない
// （Ref or 実体 の状態があるため、単にtodoType[]とかref<todoType[]>で指定すると怒られる）
const todos = ref([
  { id: id++, text: 'first', done: true },
  { id: id++, text: '2つめ', done: true },
  { id: id++, text: 'third', done: false }
])

const newTodoText = ref('')

const addTodo = () => {
  const todo: todoType = { id: id++, text: newTodoText.value, done: false }
  todos.value.push(todo)
  newTodoText.value = ''
}

const removeTodo = (todo: todoType) => {
  // todo.id でなく、todo自体 を比較してfilterできる!
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
