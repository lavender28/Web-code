<template>
  <div class="app">
    <h1>Vue Router基本应用</h1>
    <p>
      <router-link to="/home" class="r-link1">首页</router-link>
      <router-link to="/about" class="r-link1">关于我们</router-link>
      <router-link to="/product" class="r-link1">产品介绍</router-link>
      <router-link to="/user" class="r-link1">用户</router-link>
    </p>
    <router-view class="r-view"></router-view>
  </div>
</template>

<style scoped>
.app {
  text-align: center;
  color: 2c3e50;
  margin-top: 60px;
}
.r-link1 {
  text-decoration: none;
  padding: 5px 10px;
}

.r-link1:hover {
  background-color: #F0F0F0;
  padding: 5px 10px;
}
.r-view {
  width: 500px;
  margin: 0 auto;
  text-indent: 2em;
  text-align: left;
  padding: 5px 0;
  border: 1px dashed #969696;
}
</style>
