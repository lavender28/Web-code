<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="addAge">年龄+1</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<!-- setup 语法糖 -->
<script setup>
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