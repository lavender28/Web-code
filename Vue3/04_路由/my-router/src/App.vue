<template>
  <div class="app">
    <nav>
      <!-- <router-link to="/home">首页</router-link> -->
      <router-link :to="{ name: 'zhuye' }">主页</router-link>
      <!-- <router-link to="/news">新闻</router-link> -->
      <!-- <router-link :to="{path: '/news'}">新闻</router-link> -->
      <router-link :to="{ name: 'xinwen' }">新闻</router-link>
      <!-- <router-link to="/about">关于</router-link> -->
      <router-link :to="{ name: 'guanyu' }">关于</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
nav {
  background-color: #ddd;
  text-align: center;
  font-size: 16px;
  padding: 10px;
}
nav a {
  padding: 10px;
  color: #000;
  text-decoration: none;
}
nav a.router-link-active {
  font-weight: bold;
  color: red;
}
</style>
