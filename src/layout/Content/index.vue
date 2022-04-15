<template>
  <div class="content">
    <button @click="switchCom">切换</button>
    <keep-alive>
      <Login v-if="flag"></Login>
      <Register v-else></Register>
    </keep-alive>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Login from '../../components/Login/index.vue'
import Register from '../../components/Register/index.vue'

let flag = ref(true)

const switchCom = () => {
  flag.value = !flag.value
}

</script>

<style lang="scss" scoped>
</style>
