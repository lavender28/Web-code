<template>
  <div class="app">
    <h2>你好啊！</h2>
    <Person />
  </div>
</template>

<script>
import Person from './Person.vue';

export default {
  components: {
    Person
  }
}
</script>

<style scoped>
  .app {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px
  }
</style>
