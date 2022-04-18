<template>
  <div>
    <h1>我是B</h1>
  </div>
</template>

<script setup lang="ts">

import { getCurrentInstance } from 'vue';

const instance = getCurrentInstance()

// instance?.proxy?.$Bus.on("on-emit", (str:string) => {
//   console.log(str, "=========>B");

// })

instance?.proxy?.$Bus.on("*", (type: string, str: string) => {
  console.log(type, str, "=========>B");

})

</script>

<style lang="scss" scoped>
</style>
