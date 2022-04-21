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
  <div>
    pinia:{{ Test.current }} =======> {{ Test.name }}
    <button @click="change">change</button>
  </div>

  <div>
    ========================
    <br>
    {{ current }} -----------------{{ name }}
  </div>

  <div>
    <p>actions-user:{{ Test.user }}</p>
    <br>
    <p>actions-name:{{ Test.name }}</p>
    <br>
    <p>getters: {{ Test.newName }}</p>
    <br>
    <button @click="change2">actions2</button>
    <button @click="reset">reset</button>

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
import { useTestStore } from './store'
import { storeToRefs } from 'pinia'

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

const Test = useTestStore()
Test.$subscribe((args, state) => {
  console.log('=====>', args);
  console.log('======>', state);
})

Test.$onAction((args) => {
  console.log(args);
  args.after(() => {
    console.log('after');
  })
})

// pinia解构不具有响应式
const { current, name } = storeToRefs(Test)

const change = () => {

  console.log(current, name)
  current.value++

  // 修改state的值
  // 方法1
  // Test.current++

  // 方法2
  // Test.$patch({
  //   current: 888,
  //   name: "暴富"
  // })

  // 方法3
  // Test.$patch((state) => {
  //   state.current = 999
  //   state.name = "爱与自由"
  // })

  // 方法4
  // Test.$state = {
  //   current: 2000,
  //   name:'飞机飞过天空'
  // }

  // 方法5:直接调用actions方法
  // Test.setCurrent(567)
}

const change2 = () => {
  Test.setUser()
  Test.setName('asd')
}

const reset = () => {
  Test.$reset()
}

</script>

<style lang="scss" scoped>
</style>
