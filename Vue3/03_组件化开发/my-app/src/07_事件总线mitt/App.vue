<template>
  <div class="app">
    <h2>你好啊！</h2>
    <Person />
    <Notifications />
  </div>
</template>

<script setup>
import { provide, ref} from 'vue'
import Person from './Person.vue'
import Notifications from './Notifications.vue'

const companyName = ref('WZBC')
const companyAddress = ref('温州市瓯海区')

// 提供依赖
provide('companyInfo', {
  name: companyName,
  address: companyAddress,
  updateCompanyName: (newName) => {
    companyName.value = newName
  }
})
</script>

<style scoped>
  .app {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px
  }
</style>
