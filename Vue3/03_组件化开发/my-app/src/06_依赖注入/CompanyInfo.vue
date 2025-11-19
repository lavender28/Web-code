<template>
  <div class="company-info">
    <h3>公司信息</h3>
    <p>公司名称： {{ name }}</p>
    <p>公司地址： {{ address }}</p>
    <input v-model="newCompanyName" placeholder="输入新的公司名称">
    <button @click="changeName">更新公司名称</button>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
const newCompanyName = ref('')
// 注入依赖
const { name, address, updateCompanyName } = inject('companyInfo')

function changeName() {
  if (newCompanyName.value) {
    // 注入的 name 是响应式的，可以直接更新
    // name.value = newCompanyName.value.trim()
    updateCompanyName(newCompanyName.value.trim())
    newCompanyName.value = ''   // 清空输入框
  }
}
</script>

<style scoped>
  .company-info {
    margin-top: 20px;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 5px;
  }
  input {
    margin-right: 10px;
  }
</style>