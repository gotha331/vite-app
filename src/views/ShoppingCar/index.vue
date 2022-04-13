<template>
  <div>
    <table border width="800px">
      <thead>
        <tr>
          <th>名称</th>
          <th>数量</th>
          <th>单价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td align="center">{{ item.name }}</td>
          <td align="center">
            <button @click="addAndSub(item, false)">-</button>
            {{ item.num }}
            <button @click="addAndSub(item, true)">+</button>
          </td>
          <td align="center">{{ item.price }}</td>
          <td align="center">
            <button @click="del(index)">删除</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <td></td>
        <td></td>
        <td></td>
        <td align="center">总价： ¥ {{ $total }}</td>
      </tfoot>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';

type Shop = {
  name: string,
  num: number,
  price: number
}

let $total = ref(0)

const data = reactive<Shop[]>([
  {
    name: '小青的卫衣',
    num: 1,
    price: 200
  },
  {
    name: '小青的裤子',
    num: 1,
    price: 300
  },
  {
    name: '小青的鞋子',
    num: 1,
    price: 400
  }, {
    name: '小青的丝袜',
    num: 1,
    price: 500
  }, {
    name: '小青的裤衩子',
    num: 1,
    price: 600
  }
])

const addAndSub = (item: Shop, type: boolean): void => {

  if (type) {
    item.num++
  } else {
    item.num && item.num--
  }
}

const del = (index: number) => {
  data.splice(index, 1)
}

// 购物车商品总价
$total = computed<number>(() => {
  return data.reduce((prev,next) => {
    return prev + (next.num * next.price)
  },0)
})

</script>
