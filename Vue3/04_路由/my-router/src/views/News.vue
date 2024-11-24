<template>
  <div class="news">
    <h2>新闻列表</h2>
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!-- <router-link :to="`/news/detail${news.id}`">{{ news.title }}</router-link> -->
        <!-- query 传参 -->
        <!-- <router-link to="/news/detail?a=哈哈&b=你好啊&c=呵呵">{{ news.title }}</router-link> -->
        <!-- <router-link :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">{{ news.title }}</router-link> -->
        <router-link 
          :to="{ path: '/news/detail', 
                 query: {
                   id: news.id,
                   title: news.title,
                   content: news.content }}">
          {{ news.title }}
        </router-link>
        <!-- params 传参 -->
        <!-- <router-link
          :to="{ name: 'newsDetail',
                  params: {
                    id: news.id,
                    title: news.title,
                    content: news.content
                  }}"
        >
          {{ news.title }}
        </router-link> -->
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onBeforeMount, reactive, ref } from 'vue';
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';

// const newsList = reactive([
//   { id: 1, title: '新闻1:国际事件', content: '新闻1的详细内容:国际事件分析。' },
//   { id: 2, title: '新闻2:国内热点', content: '新闻2的详细内容:国内热点解读。' },
//   { id: 3, title: '新闻3:科技动态', content: '新闻3的详细内容:科技动态解析。' }
// ])

const newsList = ref([])
// 模拟 beforeRouteEnter 守卫
onBeforeMount(() => {
  // 模拟数据加载
  setTimeout(() => {
    newsList.value = [
      { id: 1, title: '新闻1:国际事件', content: '新闻1的详细内容:国际事件分析。' },
      { id: 2, title: '新闻2:国内热点', content: '新闻2的详细内容:国内热点解读。' },
      { id: 3, title: '新闻3:科技动态', content: '新闻3的详细内容:科技动态解析。' }];
  }, 1000);
});

onBeforeRouteUpdate((to, from)=>{
  console.log(from.query, to.query)
  //仅当 id 更改时才获取用户，例如仅 query 或 hash 值已更改
  if (to.query.id !== from.query.id) {
    console.log(123)
  }
})

// 来开路由前进行检查
onBeforeRouteLeave((to, from)=>{
  const answer = window.confirm('确定要离开新闻页面吗？')
  if (!answer) { return false }   // 取消导航并停留在同一页面上
})
</script>

<style scoped>
.news {
  text-align: center;
  background-color: #f2f2f2;
  padding: 15px;
}
.news ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.news li {
  margin: 10px 0;
}
.news a {
  text-decoration: none;
  color: #3498db;
}
.news a:hover {
  font-weight: bold;
}
</style>
