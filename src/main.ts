import { createApp } from 'vue'
import App from './App.vue'
import './style/index.scss'
//引入并注册全局组件
import Card from './components/Card/index.vue'

createApp(App).component('Card',Card).mount('#app')
