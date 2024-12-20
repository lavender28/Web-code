<template>
  <van-search shape="round" v-model="value" placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel">
  </van-search>
  <HomeSwiper />
  <HomeGrid />
  <HomeProduct />
  <HomeNew />
  <HomeTop />
</template>

<script setup>
import { ref } from 'vue'
import { showToast } from 'vant'
import HomeSwiper from '@/components/home/HomeSwiper.vue';
import HomeGrid from '@/components/home/HomeGrid.vue';
import HomeProduct from '@/components/home/HomeProduct.vue';
import HomeNew from '@/components/home/HomeNew.vue';
import HomeTop from '@/components/home/HomeTop.vue';

const value = ref('')
const onSearch = val => showToast(val)
const onCancel = () => showToast('取消')
</script>