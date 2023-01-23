<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  model: Object
})

const isOpen = ref(false)
const isFolder = computed(() => {
  return props.model.children && props.model.children.length
})

function toggle () {
  isOpen.value = !isOpen.value
}

function addChild () {
  // 親から受け取ったデータの更新は、本当はemitを使って親側にイベントを伝搬して行わないといけないみたいだが、
  // 今回の用途的には親側に更新を依頼できない内容。
  // そこから先は本来どうすればいいのか分からないのでとりあえず無視した
  // eslint-disable-next-line vue/no-mutating-props
  props.model.children.push({ name: 'new' })
}
</script>

<template>
  <li>
    <div
      :class="{ bold: isFolder }"
      @click="toggle"
    >
      {{ model.name }}
    </div>

    <ul v-show="isOpen" v-if="isFolder">
      <!-- 再帰的に、自身（コンポーネント）を呼び出すことができる -->
      <!-- ここのmodelはv-modelと無関係 -->
      <TreeItem class="item" v-for="model in model.children" :key="model" :model="model"/>
      <li class="add" @click="addChild">+</li>
    </ul>
  </li>
</template>
