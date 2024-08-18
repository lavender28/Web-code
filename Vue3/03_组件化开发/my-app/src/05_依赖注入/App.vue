<template>
  <div>
    <Home></Home>
    <input v-model.number="age">
  </div>
</template>

<script>
import { computed } from 'vue'
import Home from './Home.vue';

export default {
  components: {
    Home
  },
  data() {
    return {
      name: "李四",
      age: 18
    }
  },
  // 为组件后代提供数据，需要使用到 provide 选项
  // provide: {
  //   name: "张三",
  //   age: 18
  // }
  // 提供依赖当前实例的状态 以函数的形式 （默认可以写成函数的形式）
  provide() {
    return {
      name: this.name,
      // 通过使用 computed() 函数 保证注入方和供给方 响应式链接
      age: computed(() => this.age)
      // age: this.age
    }
  }
}
</script>

<style scoped>

</style>