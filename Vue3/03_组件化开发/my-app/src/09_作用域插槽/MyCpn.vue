<template>
  <div>
    <!-- <h2>组件开始</h2> -->
    <!-- 向一个插槽的出口上传递 attributes -->
    <!-- <slot :text="text" :count="1"></slot> -->
    <!-- <slot name="footer" :msg="msg"></slot> -->
    <!-- <h2>组件结束</h2> -->

    <ul>
      <li v-if="!items.length">
        loading...
      </li>
      <li v-for="item in items">
        <slot name="item" v-bind="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
      text: "你好啊",
      msg: "哈哈哈哈",
      items: []
    }
  },
  mounted() {
    // 模拟远程数据请求
    setTimeout(() => {
      this.items = [
        { body: 'Scoped Slots Guide', username: 'Evan You', likes: 20 },
        { body: 'Vue Tutorial', username: 'Natalia Tepluhina', likes: 10 }
      ]
    })
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 5px;
    background: linear-gradient(315deg, #42d392 25%, #647eff);
  }
  li {
    padding: 5px 20px;
    margin: 10px;
    background: #fff;
  }
</style>