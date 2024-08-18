<template>
  <div>
    {{ name }}
    <HomeContent></HomeContent>
  </div>
</template>

<script>
import HomeContent from './HomeContent.vue';

export default {
  components: {
    HomeContent
  },
  inject: ["name"]
}
</script>

<style scoped>

</style>