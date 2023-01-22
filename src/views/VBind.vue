<script setup>
import { ref } from 'vue'

const message = ref('タイトル')

const isRed = ref(true)
function toggleRed () {
  isRed.value = !isRed.value
}

const textColor = ref('green')
function toggleColor () {
  textColor.value = textColor.value === 'green' ? 'blue' : 'green'
}
</script>

<template>
  <p>
    <!-- v-bind でHTMLのtitle属性を動的な変数に -->
    <span :title="message">
      ここにカーソルを置くと表示されるtitleがmessageの値になる
    </span>
  </p>

  <!-- v-bind でHTMLのclass属性を動的にして、CSSを動的に当てる -->
  <p :class="{ red: isRed }" @click="toggleRed">
    ここをクリックすると赤→デフォに切り替わる
  </p>

  <!-- 少しだけなら、CSSを使わずともv-bind で直接HTMLのcolor属性を動的に変更 -->
  <p :style="{ color: textColor }" @click="toggleColor">
    ここをクリックすると緑や青に切り替わる
  </p>
</template>

<style>
.red {
  color: red;
}
</style>
