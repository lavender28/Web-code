<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="addAge">年龄+1</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script>

export default {
  name: 'Person',
  data() {
    return {
      name: '张三',
      age: 18,
      tel: '13812345678'
    }
  },
  methods: {
    addAge() {
      this.age += 1
    },
    showTel() {
      alert(this.tel)
    }
  }
}
</script>

<style scoped>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button {
    margin: 0 5px;
    background-color: #4CAF50;
    color: white;
  }
</style>