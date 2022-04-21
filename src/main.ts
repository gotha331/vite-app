import { createApp } from 'vue'
import App from './App.vue'
import { createPinia, PiniaPluginContext } from 'pinia'
import mitt from 'mitt'
import './style/index.scss'
//引入并注册全局组件
import Card from './components/Card/index.vue'
// 引入插件
import Loading from './components/Loading'

type Options = {
  key: string
}

const __piniaKey__: string = 'gotha'

const setStorage = (key: string, value: any) => {
  sessionStorage.setItem(key, JSON.stringify(value))
}

const getStorage = (key: string) => {
  return sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key) as string) : {}
}

const piniaPlugin = (options: Options) => {
  return (context: PiniaPluginContext) => {
    console.log(context, 'context');
    const { store } = context
    const data = getStorage(`${options?.key ?? __piniaKey__}-${store.$id}`)
    store.$subscribe(() => {

      setStorage(`${options?.key ?? __piniaKey__}-${store.$id}`, toRaw(store.$state))
    })

    return {
      ...data
    }
  }
}

const store = createPinia()
store.use(piniaPlugin({
  key: 'pinia'
}))

const Mit = mitt()

// Typescript注册
// 由于必须要扩展ComponentCustomProperties类型才能获得类型展示
declare module "vue" {
  export interface ComponentCustomProperties {
    $Bus: typeof Mit
  }
}

type Filter = {
  format: <T>(str: T) => string
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $filters: Filter,
    $env: string,
    $loading: {
      show: () => void,
      hide: () => void
    }
  }
}

const app = createApp(App)

// vue3挂载全局API
app.config.globalProperties.$Bus = Mit

app.config.globalProperties.$filters = {
  format<T>(str: T): string {
    return `真·${str}`
  }
}

app.config.globalProperties.$env = 'dev'

app.component('Card', Card).use(store).use(Loading).mount('#app')
