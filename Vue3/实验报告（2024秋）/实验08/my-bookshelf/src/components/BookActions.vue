<template>
  <button @click="toggleFavoriteAndNotify">
    {{ isFavorite ? '移除收藏' : '添加收藏' }}
  </button>
</template>

<script setup>
import { inject, computed } from 'vue';
import emitter from '../utils/eventBus'

const props = defineProps({
  book: Object
})

// 注入提供的响应式数据和方法
const favoriteBooks = inject('favoriteBooks');
const toggleFavorite = inject('toggleFavorite');

// 判断书籍收否已被收藏
const isFavorite = computed(() =>
  favoriteBooks.value.some(b => b.id === props.book.id)
);

const toggleFavoriteAndNotify = () => {
  toggleFavorite(props.book); // 切换收藏状态
  // 发送事件通知
  const message = isFavorite.value ? '成功添加书籍到收藏夹' : '成功从收藏夹删除书籍';
  emitter.emit('favoriteStatusChanged', message);
};
</script>
