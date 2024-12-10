<template>
  <div class="my-counter">
    <!-- <h2>当前计数：{{ counterStore.count }}</h2> -->
    <h2>当前计数：{{ count }}</h2>
    <h2>计数状态：{{ countStatus }}</h2>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="inc">加</button>
    <button @click="dec">减</button>
  </div>
  <button @click="fetchData">获取频道数据</button>
  <p>{{ dataList }}</p>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useCounterStore } from '@/store/counter'
import { storeToRefs } from 'pinia';

const counterStore = useCounterStore()
// console.log(counterStore)
// 使用 storeToRefs 将 count 转换为 ref
// 需要使用 .value 来访问
const { count, countStatus, dataList } = storeToRefs(counterStore)
// 解构 actions
const { increment, decrement, fetchData } = counterStore

let num = ref(1)
const inc = () => {
  // 第一种修改方式：直接修改
  // counterStore.count = 666
  
  // 第二种修改方式：批量修改
  // counterStore.$patch({
  //   count: 888,
  //   age: 120,
  //   name: '李四'
  // })

  // 第三种修改方式：借助 action 修改
  // counterStore.increment(num.value)
  increment(num.value)
}
const dec = () => {
  // counterStore.decrement(num.value)
  decrement(num.value)
}
</script>

<style scoped>
.my-counter {
  background-color: skyblue;
  border-radius: 10px;
  padding: 20px;
}
select, button {
  margin: 0 5px;
  height: 25px;
}
</style>
