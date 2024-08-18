<template>
  <div>
    <!-- 操作元素 -->
    <!-- <h2 ref="title">哈哈哈哈</h2> -->
    <!-- 操作组件 -->
    <Child ref="child"></Child>
    <button @click="btnClick">获取属性</button>
  </div>
</template>

<script>
import Child from './Child.vue';

export default {
  components:{ 
    Child
  },
  methods: {
    btnClick() {
      // console.log(this.$refs.title);
      // 获取组件数据和方法
      console.log(this.$refs.child.msg);
      this.$refs.child.showMsg()
    }
  }
}
</script>

<style scoped>

</style>