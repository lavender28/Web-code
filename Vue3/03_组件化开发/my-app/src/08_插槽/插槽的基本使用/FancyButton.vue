<template>
  <div>
    <h2>组件开始</h2>
    <!-- 通过 <slot> 标签定义插槽 -->
    <!-- <slot></slot> -->
    <!-- <span>{{ msg }}</span> -->
    <!-- 子组件只能访问子组件作用域 -->
    <!-- <span>{{ message }}</span> -->
    <slot>我是默认内容 submit</slot>
    <h2>组件结束</h2>
  </div>
</template>

<script>

export default {
  data() {
    return {
      msg: "呵呵呵"
    }
  },
}
</script>

<style scoped>

</style>