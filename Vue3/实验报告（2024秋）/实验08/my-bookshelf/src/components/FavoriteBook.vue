<template>
  <div>
    <h2>收藏书籍</h2>
    <ul>
      <li v-for="book in favoriteBooks" :key="book.id">
        <h3>{{ book.title }}</h3>
        <p><strong>作者:</strong> {{ book.author }}</p>
        <p><strong>页数:</strong> {{ book.pages }}</p>
        <p><strong>评分:</strong> {{ book.rating }}</p>
        <p><strong>描述:</strong> {{ book.description }}</p>
      </li>
    </ul>
    <p v-if="favoriteBooks.length === 0">未收藏书籍</p>
  </div>
</template>

<script setup>
defineProps(['favoriteBooks'])
</script>
