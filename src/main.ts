import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
import './style/index.scss'
//引入并注册全局组件
import Card from './components/Card/index.vue'

const Mit = mitt()

// Typescript注册
// 由于必须要扩展ComponentCustomProperties类型才能获得类型展示
declare module "vue" {
  export interface ComponentCustomProperties {
    $Bus: typeof Mit 
  }
}

const app = createApp(App)

// vue3挂载全局API
app.config.globalProperties.$Bus = Mit

app.component('Card',Card).mount('#app')
