import { createApp } from 'vue'
// import App from './01_组件拆分_注册/App.vue'
// import Header from './01_组件拆分_注册/Header.vue'
// import App from './02_组件CSS作用域/App.vue'
// import App from './03_父组件向子组件传递数据/App.vue'
// import App from './04_子组件向父组件传递数据/App.vue'
// import App from './05_依赖注入/App.vue'
// import App from './06_事件总线mitt/App.vue'
// import App from './07_插槽的基本使用/App.vue'
// import App from './08_具名插槽/App.vue'
// import App from './09_作用域插槽/App.vue'
// import App from './10_动态组件/App.vue'
// import App from './11_异步组件/App.vue'
import App from './12_模板引用/App.vue'

createApp(App)
  // 全局组件注册
  // .component('Header', Header)

  // 应用层提供依赖
  // .provide('name', '王五')
  // .provide('age', 20)
  .mount('#app')
