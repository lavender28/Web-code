<template>
  <div>
    <button v-for="item in items" :key="item"
            @click="itemClick(item)"
            :class="{active: item === currentTab}">
      {{ item }}
    </button>
    <!-- <KeepAlive> 多个组件间动态切换时缓存被移除的组件实例 -->
    <keep-alive :include="['Home', 'About']">
      <component :is="currentTab"></component>
    </keep-alive>
    
  </div>
</template>

<script>
import Home from './Home.vue';
import About from './About.vue';
import Category from './Category.vue';

export default {
  components: {
    Home,
    About,
    Category
  },
  data() {
    return {
      items: ["Home", "About", "Category"],
      currentTab: "Home"
    }
  },
  methods: {
    itemClick(item) {
      this.currentTab = item
    }
  }
}
</script>

<style scoped>
  .active {
    color: red;
  }
</style>