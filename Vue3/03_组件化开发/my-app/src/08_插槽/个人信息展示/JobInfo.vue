<template>
  <div class="job-info">
    <h3>职业信息</h3>
    <p>职位：{{ title }}</p>
    <p>工作年限：{{ years }}</p>
    <p>薪资：{{ salary }}</p>
    <div class="skills">
      <h4>技能：</h4>
      <!-- 默认插槽 -->
      <!-- 预留位置来展示员工的技能列表，无则默认显示“暂无技能信息” -->
      <slot>
        暂无技能信息
      </slot>
    </div>
    <div class="raise-request">
      <input type="number" v-model="raiseAmount" placeholder="请输入加薪金额">
      <button @click="requestRaise">申请加薪</button>
    </div>
  </div>
</template>

<script setup>
import emitter from './utils/eventBus'
const raiseAmount = defineModel({type: Number, default: 0})
  
const props = defineProps({
  name: String,
  title: String,
  years: Number,
  salary: {
    type: Number,
    default: 5000
  },
})
const emit = defineEmits(['raise-salary'])

function requestRaise() {
  if (raiseAmount.value > 0) {
    console.log(raiseAmount.value)
    emit('raise-salary', raiseAmount.value)
    emitter.emit('salary-raise', `${props.name}申请加薪${raiseAmount.value}元`)
  } else {
    alert('请输入有效的加薪金额')
  }
}
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
  .raise-request {
    margin-top: 20px;
  }
  .skills {
    margin-top: 10px;
  }
</style>
