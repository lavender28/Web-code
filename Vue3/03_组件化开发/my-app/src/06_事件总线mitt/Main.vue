<template>
  <div>
    Main
    <MainContent v-if="isFlag"></MainContent>
    <button @click="isFlag=!isFlag">change</button>
  </div>
</template>

<script>
import MainContent from './MainContent.vue';

export default {
  components: {
    MainContent
  },
  data() {
    return {
      isFlag: true
    }
  },
}
</script>

<style scoped>

</style>