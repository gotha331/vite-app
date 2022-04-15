<template>
  <div class="content">
    <button @click="flag = !flag">switch</button>
    <transition :duration="{ enter: 500, leave: 1500 }" enter-active-class="animate__animated animate__backInDown"
      leave-active-class="animate__animated animate__backOutDown">
      <div class="box" v-if="flag"></div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import 'animate.css'

const flag = ref<boolean>(true)

</script>

<style lang="scss" scoped>
.box {
  width: 200px;
  height: 200px;
  background: red;
}
</style>
