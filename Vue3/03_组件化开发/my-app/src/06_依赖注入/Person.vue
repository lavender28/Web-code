<template>
  <div class="person">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="showTel">查看联系方式</button>
    <JobInfo
      :title="person.job.title"
      :years="person.job.years"
      :salary="person.job.salary"
      @raise-salary="handleRaiseSalary"
      v-model="raiseAmount"
    />
    <!--  -->
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
    }
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
</style>