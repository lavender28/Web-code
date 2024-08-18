<template>
  <div>
    Header
    <button @click="btnClick">触发事件</button>
  </div>
</template>

<script>
import emitter from './utils/eventBus';

export default {
  data() {
    return {
      msg: "你好啊"
    }
  },
  methods: {
    btnClick() {
      console.log("按钮被点击");
      // 触发事件 并传入内容
      // emitter.emit("sayHi", "Hello");
      emitter.emit("sayHi", this.msg);
      emitter.emit("sayHello", {name: "张三", age: 18})
    }
  },
}
</script>

<style scoped>

</style>