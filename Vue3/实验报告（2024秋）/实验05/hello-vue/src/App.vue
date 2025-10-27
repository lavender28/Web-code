<template>
  <!-- 实验报告：第二题 -->
  <!-- <h1>欢迎来到 Vue 3 App!</h1> -->
  <!-- <MyComponent /> -->

  <!-- 实验报告：第三题：我的书架 -->
  <div class="my-bookshel">
    <h1>我的书架</h1>
    <BookShelf />
  </div>
</template>
<!-- 实验报告：第二题 -->
<!-- <script>
import MyComponent from './components/MyComponent.vue';

export default {
  name: 'app',
  // 局部组件注册
  components: {
    MyComponent
  }
}
</script> -->

<!-- 实验报告：第三题：我的书架 -->
<script setup>
import BookShelf from './components/BookShelf.vue'
</script>

<style>
.my-bookshel {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f4f8;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

h1 {
  color: #2c3e50;
  text-align: center;
}
</style>
