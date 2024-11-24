<template>
  <div class="home">
    <p>欢迎来到我们的首页！</p>
    <!-- <router-link to="/home/hot">热门推荐</router-link> -->
    <router-link :to="{ name: 'remen' }">热门推荐</router-link>
    <!-- <router-link to="/home/latest">最新动态</router-link> -->
    <router-link :to="{ name: 'zuixin' }">最新动态</router-link>
  </div>
  <router-view></router-view>
  <button @click="goToAbout">跳转到关于我们</button>
  <button @click="goToNews">跳转到新闻详情（带参数）</button>
  <button @click="replaceAbout">替换为关于我们</button>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const goToAbout = () => {
  router.push({ name: 'guanyu' }) // 使用命名路由跳转
}
const goToNews = ()=>{
  router.push({ name: 'newsDetail', query: { id: 1 }}) // 带路径参数
}
const replaceAbout = ()=>{
  router.replace({ path: '/about' }) // 替换历史记录
}
</script>

<style scoped>
.home {
  text-align: center;
  background-color: #f2f2f2;
  padding: 15px;
}
.home a {
  margin-right: 15px;
  text-decoration: none;
  color: #3498db;
}
.home a.router-link-active {
  font-weight: bold;
  color: blue;
}
button {
  display: block;
  margin: 10px auto;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #2980b9;
}
</style>
