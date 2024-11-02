<template>
  <div class="category">
    <h2>{{ title }}</h2>
    <!-- 默认插槽：使用 <slot> 标签来插入父组件传递的内容 -->
    <slot>默认内容</slot>
  </div>
</template>

<script setup>
defineProps(['title'])
</script>

<style scoped>
.category {
  background-color: skyblue;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  width: 200px;
  height: 300px;
}
h2 {
  background-color: orange;
  text-align: center;
}
</style>
