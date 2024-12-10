import { createApp } from 'vue'
import App from './App.vue'
// 第一步：导入 pinia
import { createPinia } from 'pinia'

// 第二步：创建 pinia 实例
const pinia = createPinia()

createApp(App)
.use(pinia)   // 第三步：挂载 pinia
.mount('#app')
