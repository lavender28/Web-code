<template>
  <div class="about">
    <p>这里是关于我们的页面。</p>
    <p>欢迎随时与我们联系！</p>
    <button @click="goBack">返回上一页</button>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

onMounted(()=>{
  console.log('about组件被挂载')
})
onUnmounted(()=>{
  console.log('about组件被卸载')
})
const router = useRouter()
const goBack = ()=>{
  router.go(-1)
}
</script>

<style scoped>
.about {
  text-align: center;
  background-color: #f2f2f2;
  padding: 15px;
}
button {
  margin: 10px;
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
