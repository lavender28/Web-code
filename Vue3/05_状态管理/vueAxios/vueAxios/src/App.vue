<template>
  <div class="box">
    <button @click="getData">请求数据</button>
    <table width="90%" class="table">
      <caption>
        <h2>图书列表</h2>
      </caption>
      <thead>
        <tr>
          <th>编号</th>
          <th>书名</th>
          <th>作者</th>
        </tr>
      </thead>
      <tbody>
        <!-- 主体内容 -->
        <tr v-for="book in bookData.list" :key="book.id">
          <td>{{ book.id }}</td>
          <td>{{ book.name }}</td>
          <td>{{ book.author }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import request from './utils/request'

const bookData = reactive({
  list: []
})
const getData = () => {
  request({
    url: '/mock/getBooks',
    methods: 'get'
  }).then(res => {
    console.log(res.data.data)
    bookData.list = res.data.data
  }).catch(error => {
    console.log(error)
  })
}
</script>

<style>
body, html {
  width: 100%;
  height: 100%;
}
#app {
  width: 100% !important;
}
table {
  border-collapse: collapse;
  margin: 0 auto;
  text-align: center;
}
table td, table th {
  border: 1px solid #cad9ea;
  color: #666;
  height: 30px;
}
table thead th {
  background-color: #CCE8E8;
  width: 100px;
}
table tr:nth-child(odd) {
  background: #fff;
}
table tr:nth-child(even) {
  background: #F5FAFA;
}
</style>
