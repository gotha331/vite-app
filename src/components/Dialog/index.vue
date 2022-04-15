<template>
  <div>
    <header class="header">
      <!-- 具名插槽 -->
      <slot name="header"></slot>
    </header>
    <main class="main">
      <div v-for="(item,index) in data" :key="item.name">
        <!-- 作用域插槽 -->
        <slot :index="index" :data="item"></slot>
      </div>
    </main>
    <footer class="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

type names = {
  name: string,
  age: number
}

const data = reactive<names[]>([{
  name: '帅被插入了001',
  age: 20
},
{
  name: '帅被插入了002',
  age: 21
},
{
  name: '帅被插入了003',
  age: 22
},
{
  name: '帅被插入了004',
  age: 23
}])

</script>

<style lang="scss" scoped>
.header {
  height: 200px;
  background: red;
  color: #fff;
}

.main {
  height: 300px;
  background: green;
  color: #fff;
}

.footer {
  height: 200px;
  background: blue;
  color: #fff;
}
</style>
