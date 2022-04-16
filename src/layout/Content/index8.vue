<template>
  <div>
    <button @click="random">random</button>
    <transition-group class="wraps" move-class="mm" tag="div">
      <div class="items" v-for="item in list" :key="item.id">{{ item.number }}</div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import _ from 'lodash'

let list = ref(Array.apply(null, { length: 81 } as number[]).map((_, index) => {
  return {
    id: index,
    number: (index % 9) + 1
  }
}))

console.log(list.value);

const random = () => {
  list.value = _.shuffle(list.value)
}

</script>

<style lang="scss" scoped>
.wraps {
  display: flex;
  flex-wrap: wrap;
  width: calc(25px * 9 + 18px);
  margin-top: 20px;

  .items {
    width: 25px;
    height: 25px;
    border: 1px solid #ccc;
    text-align: center;
  }
}

.mm {
  transition: all 1s;
}
</style>
