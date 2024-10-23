<template>
  <div class="my-component">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <button @click="handleClick">Click Me</button>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  data() {
    return {
      title: '我的第一个组件',
      description: '这是一个组件，可以全局注册或者局部注册。'
    };
  },
  methods: {
    handleClick() {
      alert('MyComponent中的按钮被点击');
    }
  }
};
</script>

<style>
.my-component {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
}
button {
  background-color: #42b983;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}
button:hover {
  background-color: #2c8c6d;
}
</style>
