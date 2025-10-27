<template>
  <div class="home">
    <h3>首页</h3>
    <p>
      <router-link :to="{ name: 'UserDetails', params: { id: 2 } }">跳转到UserDetails组件</router-link>
    </p>
    <p>
      <button @click="gotoAbout">跳转到关于我们页面</button>
    </p>
    <p>欢迎访问网上商城！</p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const gotoAbout = () => {
  router.push('/about')
}
</script>
