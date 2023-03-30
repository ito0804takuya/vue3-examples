<template>
  <!-- inputイベントに反応して、[update:title]がemitされる -->
  <input :value='title' @input="$emit('update:title', $event.target.value)">
</template>
<script setup lang="ts">
defineProps(['title'])
// update : イベントの種類
// title : 対象のプロパティ(props)名
defineEmits(['update:title'])
</script>
