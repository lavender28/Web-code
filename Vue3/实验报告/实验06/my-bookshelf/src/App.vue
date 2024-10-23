<script setup>
import BookShelf from './components/BookShelf.vue';
</script>

<template>
  <div class="my-bookshelf">
    <h1>我的书架</h1>
    <BookShelf />
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
</style>
