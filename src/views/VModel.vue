<script setup>
import { ref } from 'vue'

const text = ref('初期値')

// 初期値をセットできて、それが初期状態でチェックボックスに反映されている → 初期状態でJackにチェックがついている
const checkedNames = ref(['Jack'])
</script>

<template>
  <input v-model="text">
  <p>テキストボックスの中の値を表示 : {{ text }}</p>

  <hr>

  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
  <p>チェックした人物名を表示 : {{ checkedNames }}</p>

</template>
