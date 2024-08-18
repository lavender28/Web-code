<template>
  <div>
    Category组件
    <button @click="num++">{{ num }}</button>
  </div>
</template>

<script>

export default {
  name: "Category",
  data() {
    return {
      num: 0
    }
  }
}
</script>

<style scoped>

</style>