<template>
  <div class="games">
    <h2>热门游戏列表</h2>
    <slot :games="games" x="哈哈" y="你好啊"></slot>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

let games = reactive([
  { id: 'zaqxsw01', name: '王者荣耀' },
  { id: 'zaqxsw02', name: '和平精英' },
  { id: 'zaqxsw03', name: '金铲铲之战' },
  { id: 'zaqxsw04', name: '地下城与勇士' }  
])
</script>

<style scoped>
  .games {
    width: 200px;
    height: 300px;
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
  }
  h2 {
    background-color: orange;
    text-align: center;
  }
</style>
