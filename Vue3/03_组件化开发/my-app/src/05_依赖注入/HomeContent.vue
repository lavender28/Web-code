<template>
  <div>
    HomeContent
    <!-- {{ name }} - {{ age }} -->
    {{ localName }} - {{ age }}
  </div>
</template>

<script>

export default {
  // 要注入上层组件提供的数据，需使用 inject 选项声明
  // inject: ["name", "age"]
  // 注入别名 用一个不用的本地属性名
  inject: {
    localName: {
      from: 'name',
      default: 'default value'
    },
    age: 'age'
  }
}
</script>

<style scoped>

</style>