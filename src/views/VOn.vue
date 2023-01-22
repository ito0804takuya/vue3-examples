<script setup>
import { ref } from 'vue'

const message = ref('Hello world')

function reverseMessage () {
  message.value = message.value.split('').reverse().join('')
}

function notify () {
  alert('飛びますか？')
}
</script>

<template>
  <h1>{{ message }}</h1>

  <!-- 短い処理の場合はインラインでOK -->
  <button @click="message += '!'">Add "!"</button>
  <br>
  <!-- 少しロジックが入るような処理は関数に切り出す -->
  <button @click="reverseMessage">Reverse</button>
  <br>
  <!-- click.??? の例 -->
  <a href="https://vuejs.org" @click.prevent="notify">Link</a>

</template>
