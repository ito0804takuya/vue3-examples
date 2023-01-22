<script setup>
import { ref, watchEffect } from 'vue'

const branches = ['main', 'v2-compat']
const currentBranch = ref(branches[0])

const commits = ref(null)

const API_URL = 'https://api.github.com/repos/vuejs/core/commits?per_page=3&sha='

// 中で使用している値に変更が入るたびに、ここで定義した関数を実行してくれる
// watchと違ってwatchEffectは定義時に初回実行される→なので、最初に画面遷移したときにも実行される
watchEffect(async () => {
  const url = `${API_URL}${currentBranch.value}`
  commits.value = await (await fetch(url)).json()
})
</script>

<template>
  <h1>Vueのcommit</h1>
  <template v-for="branch in branches" :key="branch">
    <input type="radio" :id="branch" :value="branch" name="branch" v-model="currentBranch">
    <label :for="branch">{{ branch }}</label>
  </template>

  <p>vue@{{ currentBranch }}</p>

  <ul>
    <li v-for="{ sha, commit } in commits" :key="sha">
      {{ sha.slice(0, 7) }}
      {{ commit.message }}
      by {{ commit.author.name }}
      at {{ commit.author.date }}
    </li>
  </ul>
</template>
