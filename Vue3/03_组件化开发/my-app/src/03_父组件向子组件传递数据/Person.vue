<template>
  <div class="person">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="showTel">查看联系方式</button>
    <!-- 静态数据传递 -->
    <!-- <JobInfo title="数据分析师" years="2" salary="10000" /> -->
    <!-- 动态数据传递 -->
    <JobInfo 
      :title="person.job.title"
      :years="person.job.years"
      :salary="person.job.salary"
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