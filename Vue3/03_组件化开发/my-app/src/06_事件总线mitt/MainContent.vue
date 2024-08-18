<template>
  <div>
    MainContent
  </div>
</template>

<script>
import emitter from './utils/eventBus';

export default {
  data() {
    return {
      content: "哈哈哈哈哈"
    }
  },
  methods: {
    say(e) {
      console.log(e + "...")
    }
  },
  created() {
    // 通过 on 来监听某个事件
    // emitter.on("sayHi", (content) => {
    //   console.log(content)
    // });
    emitter.on("sayHi", this.say);
    emitter.on("sayHello", (content) => {
      console.log(content)
    });
    // 使用 * 来监听所有事件
    // emitter.on("*", (type, e) => {
    //   console.log("listener all event", type, e)
    // })
  },
  beforeUnmount() {
    // 在组件卸载之前 取消所有事件监听
    // emitter.all.clear();

    // 卸载具体事件监听
    console.log("组件被卸载")
    emitter.off("sayHi", this.say)
  }
}
</script>

<style scoped>

</style>