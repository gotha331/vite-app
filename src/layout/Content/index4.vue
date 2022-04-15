<template>
  <div class="content">
    <button @click="flag = !flag">switch</button>
    <transition @before-enter="EnterFrom" @enter="EnterActive" @after-enter="EnterTo" @enter-cancelled="EnterCancel"
      @before-leave="LeaveFrom" @leave="Leave" @after-leave="LeaveTo" @leave-cancelled="LeaveCancel">
      <div class="box" v-if="flag"></div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const flag = ref<boolean>(true)

const EnterFrom = (el: Element) => {
  console.log("进入之前");
}

const EnterActive = (el: Element, done: Function) => {
  console.log("进入过渡曲线");
  setTimeout(() => {
    done()
  }, 3000);
}

const EnterTo = (el: Element) => {
  console.log("进入过渡完成");
}

const EnterCancel = (el: Element) => {
  console.log("进入过渡效果被打断");
}

const LeaveFrom = (el: Element) => {
  console.log("离开之前");
}

const Leave = (el: Element, done: Function) => {
  console.log("离开过渡曲线");
  setTimeout(() => {
    done()
  }, 3000);
}

const LeaveTo = () => {
  console.log("离开完成");
}

const LeaveCancel = () => {
  console.log("离开的过渡曲线被打断");
}



</script>

<style lang="scss" scoped>
.box {
  width: 200px;
  height: 200px;
  background: red;
}
</style>
