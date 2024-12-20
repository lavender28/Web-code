<template>
  <van-nav-bar 
    :title="$route.meta.title"
    v-show="$route.meta.isShowNav"
    :left-arrow="$route.meta.isShowBack"
    @click-left="onClickLeft"
    fixed
    placeholder
    style="height: 46px"
  />
  <router-view></router-view>
  <tab-bar v-if="isShowTabbar"></tab-bar>
</template>

<script setup>
import { ref, watch } from 'vue';
import TabBar from './components/TabBar.vue';
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const isShowTabbar = ref(true)
const router = useRouter()
const onClickLeft = () => {
  if (history.length > 1) {
    router.go(-1)
  } else {
    router.push({ name: 'home' })
  }
}

// 监听路由中的 isTab 是否为 true，如果为 true，展示底部 TabBar
watch(
  () => route.meta,
  val => {
    isShowTabbar.value = val.isTab
  }
)
</script>

<style>
#app {
 color: #2c3e50;
 line-height: 24px;
 --van-nav-bar-background: #ff8000;
 --van-nav-bar-title-text-color: #fff;
 --van-nav-bar-icon-color: #fff;
}
</style>
