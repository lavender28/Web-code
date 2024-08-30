<template>
  <div class="job-info">
    <h3>职业信息</h3>
    <p>职位：{{ title }}</p>
    <p>工作年限：{{ years }}</p>
    <p>薪资：{{ salary }}</p>
    <div>
      <!-- <input
        type="number"
        :value="modelValue"
        @input="updateModelValue"
        placeholder="请输入加薪金额"
      /> -->
      <input type="number" v-model="raiseAmount" placeholder="请输入加薪金额">
      <button @click="requestRaise">申请加薪</button>
    </div>
  </div>
</template>

<script setup>
// 使用 defineModel 来创建双向绑定
// 指定类型和默认值
const raiseAmount = defineModel({type: Number, default: 0})
  
const props = defineProps({
  title: String,
  years: Number,
  salary: {
    type: Number,
    default: 5000
  },
  // modelValue: {
  //   type: Number,
  //   default: 0
  // }
})
// const emit = defineEmits(['raise-salary', 'update:modelValue'])
const emit = defineEmits(['raise-salary'])

function requestRaise() {
  if (raiseAmount.value > 0) {
    console.log(raiseAmount.value)
    emit('raise-salary', raiseAmount.value)
  } else {
    alert('请输入有效的加薪金额')
  }
}
// function updateModelValue(e) {
//   emit('update:modelValue', Number(e.target.value))
// }
</script>

<style scoped>
  .job-info {
    background-color: #f0f0f0;
    padding: 10px;
    margin-top: 20px;
    border-radius: 10px;
  }
  input {
    width: 120px;
    padding: 5px;
    margin-right: 10px;
  }
  button {
    padding: 5px 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #306533;
  }
</style>
