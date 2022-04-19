<template>
  <!-- <Layout></Layout> -->
  <A></A>
  <B></B>

  <DragTab></DragTab>

  <button @click="flag = !flag">chnage flag</button>
  <div>{{ flag }}</div>

  <div>
    <img id="img" width="300" height="300" src="./assets/test.jpg">
  </div>

  <div>
    {{ $filters.format("我是渣男") }}
    {{ $env }}
  </div>
  <div>
    <button @click="showLoading">切换loading</button>
  </div>
</template>

<script setup lang="ts">
// import Layout from './layout/index.vue'
// import ShoppingCar from './views/ShoppingCar/index.vue'
import { getCurrentInstance, ComponentInternalInstance } from 'vue'

import A from './components/Mitt/A.vue'
import B from './components/Mitt/B.vue'
import DragTab from './components/DragTab/index.vue'

import useBase64 from './hooks'

let flag = ref<boolean>(false)

useBase64({ el: "#img" }).then(res => {
  console.log(res.baseUrl);
})


const { appContext } = getCurrentInstance() as ComponentInternalInstance
const showLoading = () => {
  console.log(appContext);
  appContext.config.globalProperties.$loading.show()

  setTimeout(() => {
    appContext.config.globalProperties.$loading.hide()
  }, 5000);


}

</script>

<style lang="scss" scoped>
</style>
