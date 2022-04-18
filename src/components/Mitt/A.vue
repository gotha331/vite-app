<template>
  <div>
    <h1>我是A</h1>
    <button @click="emit">emit</button>
  </div>
</template>

<script setup lang="ts">

import { getCurrentInstance } from 'vue';

const instance = getCurrentInstance()

const emit = () => {
  instance?.proxy?.$Bus.emit("on-emit1", "mitt1")
  instance?.proxy?.$Bus.emit("on-emit2", "mitt2")
}

</script>

<style lang="scss" scoped>
</style>
