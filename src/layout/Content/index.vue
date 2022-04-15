<template>
  <div class="content">
    <!-- <div class="content-items" :key="item" v-for="item in 30">
      {{ item }}
      <Card :content="`我是第${item}个item`"></Card>
    </div> -->

    <!-- 渲染异步组件 -->
    <Suspense>
      <template #default>
        <AsyncPage></AsyncPage>
      </template>

      <template #fallback>
        loading......
      </template>
    </Suspense>

    <div class="tab">
      <div class="tab-item" @click="toggleTab(item)" v-for="item in data" :key="item.name">
        {{ item.name }}
      </div>
      <component :is="currentTab.comName"></component>
    </div>

    <Dialog>
      <template #header>
        我被插入到了具名插槽header
      </template>
      <template #default="{ index, data }">
        <div>{{ data.name }} --- {{ data.age }} -- {{ index }}</div>
      </template>

      <!-- 动态插槽 -->
      <template #[slotName]>
        <div>我在哪儿啊</div>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, markRaw, defineAsyncComponent } from 'vue'
import A from './A.vue'
import B from './B.vue'
import C from './C.vue'
import Dialog from '../../components/Dialog/index.vue'

// 引入异步组件
const AsyncPage = defineAsyncComponent(() => import("../../components/AsyncPage/index.vue"))

let slotName = ref('footer')

type Tabs = {
  name: string,
  comName: any
}

type Com = Pick<Tabs, "comName">

const data = reactive<Tabs[]>([
  {
    name: '我是A组件',
    comName: markRaw(A)
  },
  {
    name: '我是B组件',
    comName: markRaw(B)
  },
  {
    name: '我是C组件',
    comName: markRaw(C)
  }
])

let currentTab = reactive<Com>({
  comName: data[0].comName
})

const toggleTab = (item: Tabs) => {
  currentTab.comName = item.comName
}

</script>

<style lang="scss" scoped>
.content {
  flex: 1;
  margin: 20px;
  border: 1px solid #ccc;
  overflow: auto;

  &-items {
    padding: 20px;
    border: 1px solid #000;
  }

  .tab {

    &-item {
      display: inline-block;
      border: 1px solid #ccc;
      margin: 10px;
      padding: 6px;
      cursor: pointer;

      &:hover {
        box-shadow: 2px 2px 4px #999;
      }
    }
  }
}
</style>
