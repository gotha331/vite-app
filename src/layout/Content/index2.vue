<template>
  <div class="content">
    <button @click="flag = !flag">switch</button>
    <transition enter-from-class="e-from" name="fade">
      <div class="box" v-if="flag"></div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const flag = ref<boolean>(true)

</script>

<style lang="scss" scoped>
.box {
  width: 200px;
  height: 200px;
  background: red;
}

.e-from {
  width: 0;
  height: 0;
  transform: rotate(360deg);
}

.fade-enter-active {
  transition: all 1.5s ease;
}

.fade-enter-to {
  width: 200px;
  height: 200px;
}

.fade-leave-from {
  width: 200px;
  height: 200px;
  transform: rotate(360deg);
}

.fade-leave-active {
  transition: all 5s ease;
}

.fade-leave-to {
  width: 0;
  height: 0;
}
</style>
