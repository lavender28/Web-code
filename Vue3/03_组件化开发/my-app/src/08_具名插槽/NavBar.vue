<template>
  <div>
    <!-- <slot>元素有一个特殊属性 name -->
    <slot name="left"></slot>
    <!-- 没有提供 name 的，隐式地命名为 default -->
    <slot></slot>
    <!-- 条件插槽：使用 $slots 属性与 v-if 来实现根据插槽是否存在来渲染某些内容-->
    <div v-if="$slots.right">
      <slot :name="name"></slot>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    name: String
  },
  created() {
    console.log(this.$slots);
  }
}
</script>

<style scoped>

</style>