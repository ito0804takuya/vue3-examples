<template>
  <!-- <button @click="$emit('hogeEvent')">click me</button> -->
  <button @click="clickEvent()">click me</button>
</template>
<script setup lang="ts">
const emit = defineEmits(['hogeEvent'])

const clickEvent = () => {
  emit('hogeEvent')
}
</script>
