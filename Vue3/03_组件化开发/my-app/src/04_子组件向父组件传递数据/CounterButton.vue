<template>
  <div>
    <!-- 使用 $emit 方法触发自定义事件 -->
    <!-- <button @click="$emit('dec')">减 1</button> -->
    <!-- <button @click="$emit('inc')">加 1</button> -->

    <!-- 也可以在方法中通过 this.$emit 的形式触发事件 -->
    <button @click="decrement">减 1</button>
    <button @click="increment">加 1</button>
    <input type="text" v-model.number="num">

    <!-- 触发事件时可以提供额外的参数 -->
    <button @click="$emit('addn', num)">加 n</button>
  </div>
</template>

<script>

export default {
  // 可以用过 emits 显式声明需要触发的事件（可选）
  emits: ['dec', 'inc', 'addn'],
  data() {
    return {
      num: 0
    }
  },
  methods: {
    decrement() {
      this.$emit('dec')
    },
    increment() {
      this.$emit('inc')
    }
  }
}
</script>

<style scoped>

</style>