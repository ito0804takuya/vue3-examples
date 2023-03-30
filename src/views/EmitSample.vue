<template>
  <EmitComponent @hoge-event="callback"/>
</template>
<script setup lang="ts">
import EmitComponent from '../components/EmitComponent.vue'
const callback = () => {
  alert('アラート')
}
</script>
