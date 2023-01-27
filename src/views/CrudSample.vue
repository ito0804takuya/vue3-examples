<script setup>
import { computed, reactive, ref, watch } from 'vue'

const names = reactive(['Emil, Hans', 'Mustermann, Max', 'Tisch, Roman'])

const firstName = ref('')
const lastName = ref('')

// 検索文字列
const prefix = ref('')
const filteredNames = computed(() =>
  names.filter((n) => n.toLowerCase().startsWith(prefix.value.toLowerCase()))
)

// 選択したときにlastNameとfirstNameのinputタグに値を入れる
const selected = ref('')
watch(selected, (name) => {
  [lastName.value, firstName.value] = name.split(', ')
})

function create () {
  if (hasValidInput()) {
    const fullName = `${lastName.value}, ${firstName.value}`
    // 重複はNG
    if (!names.includes(fullName)) {
      names.push(fullName)
      // こんな感じに2つの変数に同じ値（空文字）をセットできる
      firstName.value = lastName.value = ''
    }
  }
}

function update () {
  // 入力値が正当かつ、selectボックスで選択していること（selectボックスで選択していないとupdateできないため）
  if (hasValidInput() && selected.value) {
    const i = names.indexOf(selected.value)
    names[i] = selected.value = `${lastName.value}, ${firstName.value}`
  }
}

function del () {
  if (selected.value) {
    const i = names.indexOf(selected.value)
    names.splice(i, 1)
    selected.value = firstName.value = lastName.value = ''
  }
}

// バリデーション
function hasValidInput () {
  // 空文字は弾く
  return firstName.value.trim() && lastName.value.trim()
}
</script>

<template>
  <!-- 検索 -->
  <div>
    <input v-model="prefix" placeholder="名前の先頭から検索">
  </div>

  <!-- 一覧表示 R -->
  <select size="5" v-model="selected">
    <option v-for="name in filteredNames" :key="name">
      {{ name }}
    </option>
  </select>

  <!-- C, U, D -->
  <label>FirstName: <input v-model="firstName"></label>
  <label>LastName: <input v-model="lastName"></label>
  <div class="buttons">
    <button @click="create">Create</button>
    <button @click="update">Update</button>
    <button @click="del">Delete</button>
  </div>

</template>

<style scoped>
input {
  display: block;
  margin: 0 10px 10px;
}

select {
  float: left;
  margin: 0 1em 1em 0;
  width: 14em;
}

.buttons {
  clear: both;
}

/* 隣接しているものを修飾するときに + を使う */
button + button {
  margin: 0 10px;
}
</style>
