<template>
  <div class="notifications">
    <h3>通知:</h3>
    <ul>
      <li v-for="(notification, index) in notifications">
        {{ notification }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import emitter from './utils/eventBus'

const notifications = ref([])

function addNotification(message) {
  notifications.value.push(message)
}
// 在组建挂载完成后，使用emitter监听事件并调用方法
onMounted(() => {
  emitter.on('salary-raise', addNotification)
})
// 在组件卸载之后，取消监听
onUnmounted(() => {
  emitter.off('salary-raise', addNotification)
})

</script>

<style scoped>
.notifications {
  margin-top: 20px;
  padding: 10px;
  background-color: #ee3f4d;
  border-radius: 5px;
}
</style>