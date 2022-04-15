<template>
  <div class="content">
    <button @click="flag = !flag">switch</button>
    <transition @before-enter="EnterFrom" @enter="EnterActive" @leave="Leave">
      <div class="box" v-if="flag"></div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import gsap from 'gsap'

const flag = ref<boolean>(true)

const EnterFrom = (el: Element) => {
  gsap.set(el, {
    width: 0,
    height: 0
  })
}

const EnterActive = (el: Element, done: gsap.Callback) => {
  console.log("进入过渡曲线");
  gsap.to(el, {
    width: 200,
    height: 200,
    onComplete: done
  })
}

const Leave = (el: Element, done: gsap.Callback) => {
  console.log("离开过渡曲线");
  gsap.to(el, {
    width: 0,
    height: 0,
    onComplete: done
  })
}
</script>

<style lang="scss" scoped>
.box {
  width: 200px;
  height: 200px;
  background: red;
}
</style>
