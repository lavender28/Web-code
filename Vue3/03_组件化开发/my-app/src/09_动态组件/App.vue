<template>
  <div>
    <button v-for="(_, item) in items"
            @click="currentTab=item"
            :class="{active: item === currentTab}">
      {{ item }}
    </button>
    <!-- 非活跃的组件会被缓存 -->
    <keep-alive>
      <component :is="items[currentTab]"></component>
    </keep-alive>
  </div>
</template>

<script setup>
import Home from './Home.vue';
import About from './About.vue';
import Category from './Category.vue';
import { ref } from 'vue';

const items = {
  Home,
  About,
  Category
}
let currentTab = ref("Home"); // 默认选项
</script>

<style scoped>
.active {
  color: red;
}
</style>
