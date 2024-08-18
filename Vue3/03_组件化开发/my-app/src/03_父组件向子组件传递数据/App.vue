<template>
  <div>
    <!-- <ShowMessage title="哈哈哈" content="我是哈哈哈哈"></ShowMessage> -->
    <!-- <ShowMessage title="呵呵呵" content="我是呵呵呵呵"></ShowMessage> -->
    <!-- <ShowMessage title="嘻嘻嘻" content="我是嘻嘻嘻嘻"></ShowMessage> -->
    <!-- <ShowMessage :title="title" :content="content"></ShowMessage> -->
    <!-- <ShowMessage v-bind="info"></ShowMessage> -->
    <ShowMessage @click="num++" class="abc" title="哈哈哈" :content="content"></ShowMessage>
    <h2>{{ num }}</h2>
    <!-- <ShowMessage></ShowMessage> -->
  </div>
</template>

<script>
import ShowMessage from "./ShowMessage.vue"

export default {
  components: {
    ShowMessage
  },
  data() {
    return {
      title: "嘿嘿嘿",
      // content: "我是嘿嘿嘿嘿",
      info: {
        title: "嘿嘿嘿",
        content: "我是嘿嘿嘿嘿"
      },
      num: 123,
      content: {
        "abc": 123
      }

    }
  },

}
</script>

<style scoped>

</style>