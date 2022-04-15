<template>
  <div>
    <span class="info">我是异步组件</span>
    <div v-for="item in list" :key="item">
      {{ item }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { axios } from './server'

const list = await axios('./data.json')

console.log(list);


</script>

<style lang="scss" scoped>
.info {
  color: red;
}
</style>
