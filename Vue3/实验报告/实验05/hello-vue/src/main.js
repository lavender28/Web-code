import { createApp } from 'vue'
import App from './App.vue'
import MyComponent from './components/MyComponent.vue'

createApp(App)
// 全局组件注册
// .component('MyComponent', MyComponent)
.mount('#app')