<template>
  <div>
    <!-- 1、默认作用域插槽 -->
    <!-- 通过 v-slot 指令接收一个插槽的 props 对象-->
    <!-- <MyCpn v-slot="slotProps"> -->
      <!-- {{ slotProps.text }}  {{ slotProps.count }} -->
    <!-- </MyCpn> -->
    <!-- 可以在 v-slot 使用解构 -->
    <!-- <MyCpn v-slot="{text, count}"> -->
      <!-- {{ text }} {{ count }} -->
    <!-- </MyCpn> -->
    
    <!-- 2、具名作用域插槽 -->
    <!-- <MyCpn> -->
      <!-- <template v-slot.default="{text, count}"> -->
        <!-- <p>{{ text }} {{ count }}</p> -->
      <!-- </template> -->
      <!-- <template #footer="{msg}"> -->
        <!-- <p>{{ msg }}</p> -->
      <!-- </template> -->
    <!-- </MyCpn> -->
    
    <!-- 3、高级列表组件示例 -->
    <MyCpn>
      <template #item="{body, username, likes}">
        <div class="item">
          <p>{{ body }}</p>
          <p class="meta">by {{ username }} | {{ likes }}</p>
        </div>
      </template>
    </MyCpn>
  </div>
</template>

<script>
import MyCpn from './MyCpn.vue';

export default {
  components: {
    MyCpn
  }
}
</script>

<style scoped>
  .meta {
    font-size: 0.8em;
    color: #42b883;
  }
</style>