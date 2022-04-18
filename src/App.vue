<template>
  <!-- <Layout></Layout> -->

  <A></A>
  <B></B>

  <DragTab></DragTab>


  <button @click="flag = !flag">chnage flag</button>
  <div>{{ flag }}</div>
</template>

<script setup lang="ts">
// import Layout from './layout/index.vue'
// import ShoppingCar from './views/ShoppingCar/index.vue'

import A from './components/Mitt/A.vue'
import B from './components/Mitt/B.vue'

import DragTab from './components/DragTab/index.vue'

let flag = ref<boolean>(false)

</script>

<style lang="scss" scoped>
</style>
