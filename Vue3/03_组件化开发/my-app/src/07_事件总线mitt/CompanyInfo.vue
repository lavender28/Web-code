<template>
  <div class="company-info">
    <h3>公司信息</h3>
    <p>公司名称： {{ companyInfo.name }}</p>
    <p>公司地址： {{ companyInfo.address }}</p>
    <input 
      v-model="newCompanyName" 
      placeholder="输入新的公司名称"
    >
    <button @click="updateCompanyName">更新公司名称</button>
    
  </div>
</template>

<script setup>
import { ref, inject } from 'vue' 
const newCompanyName = ref('')
// 注入依赖
const companyInfo = inject('companyInfo')

function updateCompanyName() {
  if (newCompanyName.value) {
    companyInfo.updateCompanyName(newCompanyName.value)
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