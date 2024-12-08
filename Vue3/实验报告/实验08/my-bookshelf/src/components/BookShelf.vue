<script setup>
import { ref, reactive } from 'vue';
import BookDetail from './BookDetail.vue';
import Rating from './Rating.vue';
import BookActions from './BookActions.vue';

const books = ref([
  { id: 1, title: '三体', author: '刘慈欣', pages: 302, rating: 5, description: '文化大革命如火如荼进行的同时。军方探寻外星文明的绝秘计划“红岸工程”取得了突破性进展。但在按下发射键的那一刻，历经劫难的叶文洁没有意识到，她彻底改变了人类的命运。地球文明向宇宙发出的第一声啼鸣，以太阳为中心，以光速向宇宙深处飞驰……' },
  { id: 2, title: '百年孤独', author: '加西亚·马尔克斯', pages: 360, rating: 5, description: '' },
  { id: 3, title: '活着', author: '余华', pages: 191, rating: 4, description: '' },
])

const newBook = reactive({
  title: '',
  author: '',
  pages: null,
})

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
    newBook.description = ''
  };
  console.log(books)
};
// 新增：用于存储选中的书籍
const selectedBook = ref(null)

const showDetails = (book) => {
  selectedBook.value = book
}

const removeBook = (index) => {
  books.value.splice(index, 1);
}
// 更新书籍评分
const updateRating = (index, newRating) => {
  books.value[index].rating = newRating
}
</script>

<template>
  <div class="book-shelf">
    <div class="controls">
      <input v-model="newBook.title" placeholder="书名">
      <input v-model="newBook.author" placeholder="作者">
      <input type="number" v-model.number="newBook.pages" placeholder="页数">
      <textarea v-model="newBook.description" placeholder="书籍描述"></textarea> <!-- 描述输入框 -->
      <button @click="addBook">添加书籍</button>
    </div>
    <div class="books-grid">
      <div v-for="(book, index) in books" :key="book.id" class="book">
        <slot name="book-content" :book="book" :index="index">
          <!-- 修改：点击书名查看详情 -->
          <h3 @click="showDetails(book)">{{ book.title }}</h3>
          <p>作者：{{ book.author }}</p>
          <p>页数：{{ book.pages }}</p>
          <p>评分：{{ book.rating }}</p>
        </slot>
        
        <Rating 
          :rating="book.rating"
          @update-rating="updateRating(index, $event)" />
         <!-- 添加收藏组件 -->
        <BookActions :book="book" />
        <button @click="removeBook(index)">删除</button>
      </div>
    </div>
    <!-- 新增：显示书籍详情 -->
    <BookDetail 
      v-if="selectedBook"
      :book="selectedBook"
      @close="selectedBook = null"
    >
      <!-- 使用具名插槽 -->
      <template #description>
        <p>{{ selectedBook.description }}</p>
      </template>
      <!-- 默认插槽 -->
      <p>这是额外的内容，可以在书籍详情中显示。</p>
    </BookDetail>
  </div>
</template>

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
  /* align-self: flex-start; */
}
</style>