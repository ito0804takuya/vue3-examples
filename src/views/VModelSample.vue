<!-- コンポーネント間でのv-model -->
<template>
  <!-- textを、子コンポーネントにtitleという名前で渡す -->
  <VModelComponent v-model:title="text"/>

  <!-- 子コンポーネントでの変更が、↓のtextに反映されるのかどうか -->
  {{ text }}

  <div :class="{red: isRed}" :font-size="size">bind</div>
</template>

<script setup lang="ts">
import VModelComponent from '@/components/VModelComponent.vue'
import { ref } from 'vue'

const text = ref('ほげ')
const isRed = ref(true)
const size = '40px'
</script>

<style scoped>
.red{
  color: red;
}
</style>
