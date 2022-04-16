<template>
  <div class="layout">
    <Menu ref="menus" title="升官发财，名利双收" :data="list" @on-click="getList"></Menu>
    <div class="layout-right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from './Menu/index.vue'
import Header from './Header/index.vue'
import Content from './Content/index8.vue'

import { reactive,ref } from 'vue'
const menus = ref(null)
const list = reactive<number[]>([1, 2, 3])

const getList = (list:number[]) => {
  console.log(list,"我是子组件传过来的list");
  console.log(menus.value);
}

</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  height: 100vh;
  overflow: hidden;

  &-right {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
