<template>
  <div class="category">
    <slot name="s1">默认内容1</slot>
    <slot name="s2">默认内容2</slot>
  </div>
</template>

<style scoped>
.category {
  background-color: skyblue;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  width: 200px;
  height: 300px;
}
</style>
