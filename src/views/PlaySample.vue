<template>
  <h1>{{ text }}</h1>

  <!-- v-on : 関数をclickなどのイベントに紐付ける -->
  <button @click="changeText">ボタン</button>

  <!-- v-bind : 変数とHTML属性とを紐付ける-->
  <h2 :class="text">クラスがtext</h2>

  <!-- v-model : 変数とinputの値を紐付ける -->
  <input v-model="text">
</template>

<script setup>
import { ref } from 'vue'

const text = ref('てきすと')

const changeText = () => {
  text.value = '変更したテキスト'
}
</script>
