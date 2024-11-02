<template>
  <div class="person">
    <h3>员工信息卡</h3>
    <!-- 作用域插槽 -->
    <!-- 预留位置来自定义显示员工卡片的头部和描述，头部内容允许父组件访问到员工数据 -->
    <slot name="header" :person="person">
      <!-- 默认内容 -->
      <h3>{{ person.name }} - {{ person.age }}岁</h3>
    </slot>
    <!-- 具名插槽 -->
    <slot name="main"></slot>
    <button @click="showTel">查看联系方式</button>
    <JobInfo
      :name="person.name"
      :title="person.job.title"
      :years="person.job.years"
      :salary="person.job.salary"
      @raise-salary="handleRaiseSalary"
      v-model="raiseAmount"
    >
    <ul class="skills-list">
      <li v-for="skill in person.skills">{{ skill }}</li>
    </ul>
    </JobInfo>
    <CompanyInfo />
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue'
  import JobInfo from './JobInfo.vue';
  import CompanyInfo from './CompanyInfo.vue';
  // 使用 v-model 来创建双向绑定
  let raiseAmount = ref(0)
  const person = reactive({
    name: '李四',
    age: 23,
    tel: '123-4567-8900',
    job: {
      title: '前端开发',
      years: 1,
      salary: 8000
    },
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue3']
  })

  function showTel() {
    alert('联系方式：' + person.tel);
  }
  function handleRaiseSalary(amount) {
    person.job.salary += amount
    console.log(`加薪${amount}元，现在的薪资是${person.job.salary}元`)
    raiseAmount.value = 0   // 重置 raiseAmount 的值为 0
  }

</script>

<style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button {
    margin: 0 5px;
    background-color: #4CAF50;
    color: white;
  }
  .skills-list {
    list-style-type: none;
    margin: 10px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  .skills-list li {
    background-color: #e0e0e0;
    color: #333;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 0.9em;
    display: inline-block;
  }
</style>