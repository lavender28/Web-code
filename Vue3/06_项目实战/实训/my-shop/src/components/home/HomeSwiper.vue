<template>
  <div class="home-swiper">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
const images = [
  '/images/banner1.jpg',
  '/images/banner2.jpg',
]
</script>

<style lang="less" scoped>
.home-swiper {
  width: 100%;

  img {
    width: 100%;
  }
}
</style>
