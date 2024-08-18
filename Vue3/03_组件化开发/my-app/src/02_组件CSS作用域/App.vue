<template>
  <h2>APP</h2>
  <HelloWorld></HelloWorld>
</template>

<script>
import HelloWorld from './HelloWorld.vue';

export default {
  components: {
    HelloWorld
  }
}
</script>

<!-- 给h2设置样式的时候 会影响子组件中同样有h2的标签 -->
<!-- 添加 scoped -->
<!-- 在 vue3 中由于可以没有根元素 同样也会造成影响 建议都加上根元素 -->
<style scoped>
h2 {
  color: red;
}
</style>