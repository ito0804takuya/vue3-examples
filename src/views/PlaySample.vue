<template>
  <h1>{{ text }}</h1>

  <!-- v-on : 関数をclickなどのイベントに紐付ける -->
  <button @click="changeText">ボタン</button>

  <!-- v-bind : 変数とHTML属性とを紐付ける-->
  <h2 :class="text">クラスがtext</h2>
  <h2 :class="{ active: isActive }">アクティブかどうか</h2>

  <!-- v-model : 変数とinputの値を紐付ける -->
  <input v-model="text">

  <div v-for="item in items" :key="item.id">
    <li>{{ item.name }}</li>
  </div>

  <div>{{ name }}</div>
  <button @click="changeName">名前を変更するボタン</button>

  <input v-model="name">

  <p>
    ask question
    <input v-model="question">
  </p>
  <p>{{ answer }}</p>
</template>

<script setup>
import { ref, watch } from 'vue'

const text = ref('てきすと')
const isActive = ref(true)

const changeText = () => {
  text.value = '変更したテキスト'
  isActive.value = !isActive.value
}

const items = [
  { id: 1, name: 'hoge' },
  { id: 2, name: 'fuga' }
]

const name = ref('タロウ')
const changeName = (event) => {
  alert(`${name.value}`)
  name.value = 'はなこ'
  if (event) {
    alert(event.target.tagName)
  }
}

const question = ref('')
const answer = ref('アンサー')

watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'thinking.....' + oldQuestion
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error!' + error
    }
  }
})

defineProps({
  question: {
    validator (v) {
      return ['ok', 'ng'].includes(v)
    }
  }
})
</script>

<style scoped>
.active {
  background-color: red;
}
</style>
