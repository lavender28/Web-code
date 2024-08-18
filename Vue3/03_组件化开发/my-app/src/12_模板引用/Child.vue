<template>
  <div>
    我是子组件
    <!-- 获取子组件 -->
    <button @click="getParent">获取父组件</button>
    <!-- 获取根组件 -->
    <button @click="getRoot">获取根组件</button>
  </div>
</template>

<script>

export default {
  // 限制对子组件实例的访问
  expose: ['msg'],
  data() {
    return {
      msg: "你好啊"
    }
  },
  methods: {
    showMsg() {
      console.log(this.msg);
    },
    getParent() {
      console.log(this.$parent)
      this.$parent.btnClick()
    },
    getRoot() {
      console.log(this.$root)
    }
  }
}
</script>

<style scoped>

</style>