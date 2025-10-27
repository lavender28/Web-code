<script setup>
import { provide, ref, reactive, onMounted, onUnmounted } from 'vue'
import BookShelf from './components/BookShelf.vue';
import emitter from './utils/eventBus';
import FavoriteBook from './components/FavoriteBook.vue';

// 当前视图
const currentCom = ref('BookShelf')
const cpns = {
  BookShelf,
  FavoriteBook
}
// 创建响应式变量用于存储已收藏的书籍
const favoriteBooks = ref([])
// 切换书籍收藏状态
const toggleFavorite = (book) => {
  // 检查书籍是否已被收藏
  const index = favoriteBooks.value.findIndex(b => b.id === book.id);
  if (index === -1) {
    // 如果未收藏，则添加到收藏列表
    favoriteBooks.value.push(book);
  } else {
    // 如果已收藏，则从收藏列表中移除
    favoriteBooks.value.splice(index, 1);
  }
};
// 提供 favoriteBooks 和 toggleFavorite 供后代组件使用
provide('favoriteBooks', favoriteBooks)
provide('toggleFavorite', toggleFavorite)

const notification = ref('')
// 监听收藏状态变化事件
const handleFavoriteStatusChange = (message) => {
  notification.value = message; // 更新通知
  setTimeout(() => notification.value = '', 2000); // 2秒后清除通知
};
onMounted(() => {
  emitter.on('favoriteStatusChanged', handleFavoriteStatusChange);
});

onUnmounted(() => {
  emitter.off('favoriteStatusChanged', handleFavoriteStatusChange);
});
</script>

<template>
  <div class="my-bookshelf">
    <h1>我的书架</h1>
    <!-- 显示收藏书籍数量 -->
    <div class="favorite-container">
      <p>已收藏书籍数量: {{ favoriteBooks.length }}</p>
      <button @click="currentCom = currentCom === 'BookShelf' ? 'FavoriteBook' : 'BookShelf'">
        {{ currentCom === 'BookShelf' ? '查看我的收藏' : '返回我的书架'}}
      </button>
    </div>
    <p v-if="notification">{{ notification }}</p>
    <!-- 动态组件实现切换 -->
    <component :is="cpns[currentCom]" :favoriteBooks="favoriteBooks"></component>
    <!-- <BookShelf #book-content="{ book, index }"> -->
       <!-- 自定义书籍内容 -->
      <!-- <h3 @click="toggleFavorite(book)">{{ book.title }} (点击收藏)</h3> -->
      <!-- <p>作者：{{ book.author }}</p> -->
      <!-- <p>页数：{{ book.pages }}</p> -->
      <!-- <p>评分：{{ book.rating }}</p> -->
    <!-- </BookShelf> -->
  </div>
</template>

<style>
.my-bookshelf {
  font-family: Arial, Helvetica, sans-serif;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #f0f4f8;
  border-radius: 10px;
  box-shadow: 0 0 10px raba(0, 0, 0, 0.5);
}
h1 {
  color: #2c3e50;
  text-align: center;
}
.favorite-container {
  display: flex; /* 使用 flexbox 布局 */
  align-items: center; /* 垂直居中对齐 */
}
button {
  padding: 5px 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
}
</style>
