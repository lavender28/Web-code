<template>
  <div>
    <!-- 多跟节点 没有自动 attribute 透传-->
    <h2>{{ title }}</h2>
    <!-- 可以通过 $attrs 显式绑定 -->
    <p v-bind="$attrs">{{ content.abc }}</p>
    <!-- <Message></Message> -->
    <!-- <span>Fallthrough attribute: {{ $attrs }}</span> -->

  </div>
</template>

<script>
import Message from './Message.vue';

export default {
  // 在 JavaScript 中访问透传 Attributes
  created() {
    console.log(this.$attrs);
  },
  // 禁用 Attributes 继承
  // inheritAttrs: false,
  components: {
    Message
  },
  // 通过 props 选项显式声明 数组形式
  // props: ['title', 'content']
  // 也可以使用对象形式
  props: {
    // 基础类型校验
    // title: String,
    // content: Number,
    // 必填项校验
    title: {
      type: String,
      required: true
    },
    // 默认值校验
    // content: {
    //   type: String,
    //   default: "你好啊"
    // }
    content: {
      type: Object,
      default() {
        return {
          "abc": "zhangsan"
        }
      }
    }
  }
}
</script>

<style scoped>

</style>