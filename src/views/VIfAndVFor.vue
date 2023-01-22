<script setup>
import { ref } from 'vue'

const list = ref([1, 2, 3])

const show = ref(true)
</script>

<template>
  <button @click="list.push(list.length + 1)">
    値を追加
  </button>
  <button @click="list.pop()">
    値を削除
  </button>
  <button @click="list.reverse()">
    反転
  </button>
  <br>
  <button @click="show = !show">
    表示/非表示
  </button>

  <!-- v-if と v-else とかは別のタグでOK（ulとかpとか） -->
  <ul v-if="show && list.length">
    <!-- v-bind:keyをつけないとエラー出る -->
    <li v-for="item of list" v-bind:key="item">{{ item }}</li>
  </ul>
  <p v-else-if="list.length">
    リストはあるけど、非表示なだけ
  </p>
  <p v-else>
    リストが空な状態
  </p>
</template>
