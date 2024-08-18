<template>
  <div>
    <!-- 把一个页面分割成三个组件 -->
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header.vue';
import Main from './Main.vue';
import Footer from './Footer.vue';

export default {
  // 局部组件注册
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style scoped>

</style>