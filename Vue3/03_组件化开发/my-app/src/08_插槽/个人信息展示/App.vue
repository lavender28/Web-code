<template>
  <div class="app">
    <h2>你好啊！</h2>
    <Person>
      <!-- 作用域插槽 -->
      <!-- 自定义显示内容，main具名插槽显示职员简介 -->
      <template #header="{ person }">
        <h3>{{ person.name }} - {{ person.age }}岁 | {{ person.job.years }}年工作经验</h3>
      </template>
      <!-- 具名插槽 -->
      <template #main>
        <div>
          <p>优秀员工，多次获得公司嘉奖</p>
        </div>
      </template>
    </Person>
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
