<template>
  <div class="news-detail">
    <h3>新闻详情</h3>
    <!-- <p>当前新闻 ID: {{ route.query.id }}</p> -->
    <!-- <p>当前新闻 ID: {{ route.params.id }}</p> -->
    <p>当前新闻 ID: {{ id }}</p>
    <!-- <p>新闻内容: {{ route.query.content }}</p> -->
    <!-- <p>新闻内容: {{ route.params.content }}</p> -->
    <p>新闻内容: {{ content }}</p>
  </div>
</template>

<script setup>
// import { useRoute } from 'vue-router';

// const route = useRoute()
// 打印参数
// console.log(route.params)
defineProps(['id', 'title', 'content'])
</script>
