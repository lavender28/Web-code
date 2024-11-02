<template>
  <div class="app">
    <h1>父组件App</h1>
    <div class="content">
      <Category>
        <template v-slot:s2>
          <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
          </ul>
        </template>
        <template v-slot:s1>
          <h2>热门游戏列表</h2>
        </template>
      </Category>

      <Category>
        <template v-slot:s2>
          <img :src="imgSrc">
        </template>
        <template v-slot:s1>
          <h2>今日热门美食</h2>
        </template>
      </Category>

      <Category>
        <!-- 简写：# -->
        <template #s2>
          <video
            :src="videoSrc"
            controls
            poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
          >
          </video>
        </template>
        <template #s1>
          <h2>今日影视推荐</h2>
        </template>
      </Category>
    </div>
  </div>
</template>

<script setup>
import Category from './Category.vue';
import { ref, reactive } from 'vue'

let games = reactive([
  { id: 'zaqxsw01', name: '王者荣耀' },
  { id: 'zaqxsw02', name: '和平精英' },
  { id: 'zaqxsw03', name: '金铲铲之战' },
  { id: 'zaqxsw04', name: '地下城与勇士' }
])

let imgSrc = ref('https://img.alicdn.com/imgextra/i1/2212717562044/O1CN01Uw98s41QyCRef4YvH_!!2212717562044.jpg')
let videoSrc = ref('https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4')
</script>

<style scoped>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
.content {
  display: flex;
  justify-content: space-evenly;
}
h2 {
  background-color: orange;
  text-align: center;
}
img, video {
  width: 100%;
}
</style>

