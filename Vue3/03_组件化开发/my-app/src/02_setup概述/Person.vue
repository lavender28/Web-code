<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="addAge">年龄+1</button>
    <button @click="showTel">查看联系方式</button>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <p>职业：{{ person.job.title }}</p>
    <p>工作年限：{{ person.job.years }}</p>
    <button @click="addWorkYear">工作年限+1</button>
  </div>
</template>

<!-- setup 语法糖 -->
<script setup>
  import { ref, reactive } from 'vue'
  // 定义数据
  let name = '张三';
  let age = ref(18);   // 使用 ref 定义响应式数据
  let tel = '13812345678';

  // 使用 reactive 定义响应式数据
  let person = reactive({
    name: '李四',
    age: 20,
    job: {
      title: '前端开发',
      years: 1
    }
  })
  // 定义方法
  function addAge() {
    age.value += 1;  // 使用 .value 访问 ref 的值
  }
  function showTel() {
    alert(tel);
  }
  function addWorkYear() {
    // 修改嵌套的响应式数据
    person.job.years++
  }
</script>

<!-- <script>

export default {
  name: 'Person',
  setup() {
    // 定义数据
    let name = '张三';
    let age = 18;
    let tel = '13812345678';
    // 定义方法
    function addAge() {
      age += 1;
    }
    function showTel() {
      alert(tel);
    }
    // 返回要暴露给模板的数据和方法
    return { name, age, addAge, showTel }
  }
}
</script> -->

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