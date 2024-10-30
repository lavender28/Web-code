<template>
  <div class="book-edit">
    <h2>编辑书籍</h2>
    <form @submit.prevent="updateBook">
      <div class="form-group">
        <label for="title">书名:</label>
        <input v-model="book.title" id="title" required />
      </div>

      <div class="form-group">
        <label for="author">作者:</label>
        <input v-model="book.author" id="author" required />
      </div>

      <div class="form-group">
        <label for="pages">页数:</label>
        <input v-model="book.pages" id="pages" required />
      </div>

      <div class="form-group">
        <label for="rating">Rating:</label>
        <input type="number" v-model="book.rating" id="rating" min="1" max="5" required />
      </div>

      <button type="submit">保存</button>
      <button type="button" @click="cancelEdit">取消</button>
    </form>
  </div>
</template>

<script setup>
const book = defineModel(); // 使用 defineModel 管理双向绑定

const updateBook = () => {
  // 这里可以处理书籍更新逻辑，例如发出事件或调用 API
  console.log('Book updated:', book.value);
};

const cancelEdit = () => {
  // 这里可以处理取消编辑的逻辑
  console.log('Edit canceled');
};

</script>

<style scoped>
.book-edit {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}
h2 {
  margin-bottom:20px;
  font-size: 24px;
  color: #333;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

</style>
