<template>
  <div class="menu">
    {{ title }}
    <div v-for="item in data" :key="item">
      {{ item }}
    </div>

    <div>
      <button @click="clickTap">子组件向父组件派发事件</button>
    </div>
    <Tree :data="treeData" @on-click="clickTree"></Tree>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Tree from '../../components/Tree/index.vue'

const list = reactive<number[]>([6, 8, 9])
type Props = {
  title?: string,
  data?: number[]
}

type TreeList = {
  name: string,
  icon?: string,
  children?: TreeList[] | []
}

// 设置默认值
withDefaults(defineProps<Props>(), {
  title: '我是默认值',
  data: () => [1, 2, 3, 4, 5, 6]
})


const emit = defineEmits(['on-click'])
const clickTap = () => {
  emit('on-click', list)
}

// 向外暴露参数
defineExpose({
  list
})

const treeData = reactive<TreeList[]>([
  {
    name: 'no.1',
    children: [
      {
        name: 'no.1-1',
        children: [
          {
            name: 'no.1-1-1'
          }
        ]
      }
    ]
  },
  {
    name: 'no.2',
    children: [{
      name: 'no.2-1'
    }]
  },
  {
    name:"no.3"
  }
])

const clickTree = (params:TreeList) => {
  console.log(params);
}

</script>

<style lang="scss" scoped>
.menu {
  width: 200px;
  border-right: 1px solid #000;
}
</style>
