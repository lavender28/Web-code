<template>
  <div class="app">
    <h2>父组件App</h2>
    <div class="content">
      <Game>
        <template v-slot="slotProps">
          <ul>
            <li v-for="g in slotProps.games" :key="g.id">{{ g.name }}</li>
          </ul>
        </template>
      </Game>
      <Game>
        <template v-slot="slotProps">
          <ol>
            <li v-for="g in slotProps.games" :key="g.id">{{ g.name }}</li>
          </ol>
        </template>
      </Game>
      <Game>
        <!-- v-slot 使用解构 -->
        <template v-slot="{games}">
          <h3 v-for="g in games" :key="g.id">{{ g.name }}</h3>
        </template>
      </Game>
    </div>
  </div>
</template>

<script setup>
import Game from './Game.vue';
</script>

<style scoped>
  .app {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  .content {
    display: flex;
    justify-content: space-evenly;
  }
</style>