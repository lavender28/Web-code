<template>
  <div class="job-info">
    <h3>职业信息</h3>
    <p>职位：{{ title }}</p>
    <p>工作年限：{{ years }}</p>
    <p>薪资：{{ salary }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

// 定义props 数组形式
// const props = defineProps(['title', 'years', 'salary'])

// 定义props 对象形式
const props = defineProps({
  title: String,
  years: Number,
  salary: {
    type: Number,
    default: 5000
  }
})

</script>

<style scoped>
  .job-info {
    background-color: #f0f0f0;
    padding: 10px;
    margin-top: 20px;
    border-radius: 10px;
  }
</style>
