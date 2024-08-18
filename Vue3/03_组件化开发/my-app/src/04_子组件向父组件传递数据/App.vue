<template>
  <div>
    <h2>当前计数：{{ counter }}</h2>
    <!-- 通过 v-on 来监听事件 也可以接收到附带的参数-->
    <CounterButton 
      @dec="counter--" 
      @inc="counter++"
      @addn="(n) => counter += n"
    >
    </CounterButton>
  </div>
</template>

<script>
import CounterButton from './CounterButton.vue';

export default {
  components: {
    CounterButton
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    addn(n) {
      this.counter += n
    }
  }
}
</script>

<style scoped>

</style>