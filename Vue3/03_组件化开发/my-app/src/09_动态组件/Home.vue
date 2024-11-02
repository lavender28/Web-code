<template>
  <div class="home">
    <h1>首页</h1>
    <p>欢迎来到首页！</p>
    <p>当前计数：{{ count }}</p>
    <button @click="count++">+1</button>
    <button @click="count--">-1</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
let count = ref(0)
</script>
