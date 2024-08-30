<template>
  <div class="app">
    <h1>你好啊！</h1>
    <!-- 把一个页面分割成三个组件 -->
    <!-- <Header /> -->
    <!-- <Main /> -->
    <!-- <Footer /> -->
    <!-- 演示全局样式 -->
    <div class="global-button">
      <button>全局按钮1</button>
      <button>全局按钮2</button>
    </div>
    <Person />
  </div>
</template>
  
<script setup>
import Header from './Header.vue';
import Main from './Main.vue';
import Footer from './Footer.vue';
import Person from './Person.vue';
</script>

<style>
  .app {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button {
    margin: 0 5px;
    background-color: #008CBA;
    color: white;
  }
</style>
