<script setup>
// 定义组件属性
const props = defineProps({
  book: {
    type: Object,
    required: true
  }
});
// 定义组件事件
const emit = defineEmits(['close']);
</script>

<template>
  <div class="book-detail">
    <!-- 书籍详细信息 -->
    <h2>{{ book.title }}</h2>
    <p>作者：{{ book.author }}</p>
    <p>页数：{{ book.pages }}</p>
    <p>评分：{{ book.rating }}</p>
    <!-- 具名插槽：图书描述 -->
    <slot name="description">{{ book.description }}</slot>
    <!-- 默认差擦 -->
    <slot></slot>
    <button @click="emit('close')">关闭</button> <!-- 关闭详情的按钮 -->
  </div>
</template>

<style scoped>
.book-detail {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}
</style>