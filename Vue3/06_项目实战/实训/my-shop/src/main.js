import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import { createPinia } from 'pinia'
import piniaPluinPersist from 'pinia-plugin-persist'
import '@/mock/index'

const pinia = createPinia()
pinia.use(piniaPluinPersist)

createApp(App)
.use(Vant)
.use(router)
.use(pinia)
.mount('#app')
