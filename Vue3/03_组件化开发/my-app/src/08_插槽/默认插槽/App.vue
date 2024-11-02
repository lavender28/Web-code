<template>
  <div class="app">
    <h2>父组件App</h2>
    <div class="content">
      <Category title="热门游戏列表">
        <ul>
          <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ul>
      </Category>
      <Category title="今日热门美食">
        <img :src="imgSrc">
      </Category>
      <Category title="今日影视推荐">
        <video
          :src="videoSrc"
          controls
          poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
        >
        </video>
      </Category>
    </div>
  </div>
</template>

<script setup>
import Category from './components/Category.vue';
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
img, video {
  width: 100%;
}
</style>

