<template>
  <div class="job-info">
    <h3>职业信息</h3>
    <p>职位：{{ title }}</p>
    <p>工作年限：{{ years }}</p>
    <p>薪资：{{ salary }}</p>
    <!-- 触发事件 -->
    <button @click="requestRaise">申请加薪</button>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  years: Number,
  salary: {
    type: Number,
    default: 5000
  }
})
// 显式声明需要触发的事件
const emit = defineEmits(['raise-salary'])

function requestRaise() {
  const raiseAmount = 2000
  emit('raise-salary', raiseAmount)   // 触发事件，并传递数据
  console.log('申请加薪')
}
</script>

<style scoped>
  .job-info {
    background-color: #f0f0f0;
    padding: 10px;
    margin-top: 20px;
    border-radius: 10px;
  }
</style>
