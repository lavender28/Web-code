<template>
  <div>
    <NavBar :name="msg">
      <template v-slot:left>
        <button>我是按钮</button>
      </template>
      <!-- <template #default> -->
        <!-- <input type="text" placeholder="请输入搜索内容"> -->
      <!-- </template> -->
      <!-- 所有位于顶级的非 <template> 节点都被隐式地视为默认插槽的内容 -->
      <input type="text" placeholder="请输入搜索内容">
      <!-- 简写形式：# -->
      <!-- <template #right> -->
        <!-- <span>我是返回</span> -->
      <!-- </template> -->
      <!-- 动态插槽名 -->
      <template #[msg]>
        <span>我是返回</span>
      </template>
      
    </NavBar>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';

export default {
  components: {
    NavBar
  },
  data() {
    return {
      msg: "right"
    }
  }
}
</script>

<style scoped>

</style>