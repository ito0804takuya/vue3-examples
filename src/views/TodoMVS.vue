<script setup>
import { computed, ref } from 'vue'

const STORAGE_KEY = 'todo-mvc'
const todos = ref(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))

// 表示するtodoのフィルター郡（関数の集合体のオブジェクト）
const filters = {
  all: (todos) => todos,
  completed: (todos) => todos.filter((todo) => todo.completed),
  active: (todos) => todos.filter((todo) => !todo.completed) // completedじゃないもの
}
// 今のフィルター状態
const visibility = ref('all')
// フィルターされたtodo
const filteredTodos = computed(() => filters[visibility.value](todos.value))

// eとは？
function addTodo (e) {
  const value = e.target.value.trim()
  if (value) {
    todos.value.push({
      id: Date.now(),
      title: value,
      completed: false
    })
    e.target.value = ''
  }
}

function toggleAll (e) {
  todos.value.forEach(todo => {
    todo.completed = e.target.checked
  })
}

const editedTodo = ref()
let beforeEditCache = ''
function editTodo (todo) {
  // escキーを押すと編集をキャンセルできる仕様なので、編集前の状態を保存しておく
  beforeEditCache = todo.title
  editedTodo.value = todo
}
function cancelEdit (todo) {
  editedTodo.value = null
  todo.title = beforeEditCache
}

function removeTodo (todo) {
  todos.value.splice(todos.value.indexOf(todo), 1)
}
</script>

<template>
  <section class="todoapp">

    <header class="header">
      <h1>todos</h1>
      <input class="new-todo" autofocus placeholder="新規作成" @keyup.enter="addTodo">
    </header>

    <section class="main" v-show="todos.length">
      <!-- すべて完了にするボタン -->
      <!-- 未 -->
      <input type="checkbox" id="toggle-all" class="toggle-all" @change="toggleAll">
      <label for="toggle-all">すべて完了にする</label>

      <ul class="todo-list">
        <!-- 未 -->
        <li v-for="todo in filteredTodos" class="todo" :key="todo.id">
          <div class="view">
            <!-- 完了かどうかのチェックボタン -->
            <input type="checkbox" class="toggle" v-model="todo.completed">
            <label @dblclick="editTodo(todo)">{{ todo.title }}</label>

            <!-- 削除ボタン -->
            <button class="destroy" @click="removeTodo(todo)"></button>
          </div>

          <!-- 編集時のテキストボックス -->
          <!-- 未 -->
          <input type="text">
        </li>
      </ul>
    </section>

    <footer>
      <span>
      </span>
    </footer>

  </section>
</template>

<style scoped>
/* これどういうこと？ */
/* @import "https://unpkg.com/todomvc-app-css@2.4.1/index.css"; */
</style>
