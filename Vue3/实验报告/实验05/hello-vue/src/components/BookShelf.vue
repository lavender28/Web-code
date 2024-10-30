<template>
  <div class="book-shelf">
    <div class="controls">
      <!-- 编写表单内容和添加书籍按钮 -->
      <input v-model="newBook.title" placeholder="书名" />
      <input v-model="newBook.author" placeholder="作者" />
      <input v-model.number="newBook.pages" type="number" placeholder="页数" />
      <button @click="addBook">添加书籍</button>
    </div>
    <div class="books-grid">
      <!-- v-for遍历书籍展示 -->
      <div v-for="book in books" :key="book.id" class="book">
        <h3>{{ book.title }}</h3>
        <p>作者：{{ book.author }}</p>
        <p>页数：{{ book.pages }}</p>
        <button @click="removeBook(book.id)">删除</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
// 定义books数组
const books = ref([
  { id: 1, title: '三体', author: '刘慈欣', pages: 302 },
  { id: 2, title: '百年孤独', author: '加西亚·马尔克斯', pages: 360 },
  { id: 3, title: '活着', author: '余华', pages: 191 },
]);
// 定义newBook对象
const newBook = reactive({
  title: '',
  author: '',
  pages: null
});
// 编写addBook方法
const addBook = () => {
  if (newBook.title && newBook.author && newBook.pages) {
    // 计算下一个唯一id
    // 使用 Math.max() 函数来找到当前书籍中最大的 id，
    // 然后加 1 生成下一个唯一的 id。如果书籍数组为空，则将 id 设置为 1
    const nextId = books.value.length ? Math.max(...books.value.map(book => book.id)) + 1 : 1;
    books.value.push({
      id: nextId,
      ...newBook
    });
    newBook.title = '';
    newBook.author = '';
    newBook.pages = null;
  };
  console.log(books)
};
// 定义removeBook方法
const removeBook = (id) => {
  const index = books.value.findIndex(book => book.id === id);
  if (index !== -1) {
    books.value.splice(index, 1);
  }
};
</script>

<style scoped>
.book-shelf {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.controls {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.controls input {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.controls button, .book button {
  padding: 5px 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.controls button:hover, .book button:hover {
  background-color: #2980b9;
}

.books-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.book {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.book h3 {
  color: #34495e;
  margin-top: 0;
}

.book p {
  color: #7f8c8d;
  margin: 5px 0;
}

.book button {
  margin-top: 10px;
  align-self: flex-start;
}
</style>