<template>
  <div class="content">
    <button @click="add">ADD</button>
    <button @click="pop">POP</button>
    <div class="wraps">
      <transition-group leave-active-class="animate__animated animate__fadeOutUp"
        enter-active-class="animate__animated animate__bounce">
        <div class="item" v-for="item in list" :key="item">{{ item }}</div>
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import 'animate.css'

const list = reactive<number[]>([1, 2, 3, 4, 5, 6])

const add = () => {
  list.push(list.length + 1)
}

const pop = () => {
  list.pop()
}

</script>

<style lang="scss" scoped>
.wraps {
  display: flex;
  flex-wrap: wrap;
  word-break: break-all;
  border: 1px solid #ccc;


  .item {
    margin: 10px;
  }
}
</style>
