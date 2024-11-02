<template>
  <!-- 使用插槽 -->
  <FancyButton>
    <button>我是按钮</button>
  </FancyButton>
  <!-- <h2>{{ message }}</h2> -->
  <!-- 父组件只能访问父组件的作用域 -->
  <!-- <FancyButton> -->
    <!-- {{ msg }} -->
    <!-- {{ message }} -->
  <!-- </FancyButton> -->
  <!-- 也可以传入一个组件 -->
  <!-- <FancyButton> -->
    <!-- <MyButton></MyButton> -->
  <!-- </FancyButton> -->
  <FancyButton></FancyButton>
</template>

<script>
import FancyButton from './FancyButton.vue';
import MyButton from './MyButton.vue';

export default {
  components: {
    FancyButton,
    MyButton
  },
  data() {
    return {
      message: "哈哈哈"
    }
  },
}
</script>

<style scoped>

</style>