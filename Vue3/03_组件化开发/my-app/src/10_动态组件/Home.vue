<template>
  <div>
    Home组件
    <button @click="num++">{{ num }}</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      num: 0
    }
  },
}
</script>

<style scoped>

</style>