<template>
  <div class="person">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="showTel">查看联系方式</button>
    <!-- 接收事件 -->
    <JobInfo
      :title="person.job.title"
      :years="person.job.years"
      :salary="person.job.salary"
      @raise-salary="handleRaiseSalary"
    />
  </div>
</template>

<script setup>
  import { reactive } from 'vue'
  import JobInfo from './JobInfo.vue';

  const person = reactive({
    name: '李四',
    age: 23,
    tel: '123-4567-8900',
    job: {
      title: '前端开发',
      years: 1,
      salary: 8000
    }
  })

  function showTel() {
    alert('联系方式：' + person.tel);
  }
  function handleRaiseSalary(amount) {
    person.job.salary += amount
    console.log(`加薪${amount}元，现在的薪资是${person.job.salary}元`)
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
</style>