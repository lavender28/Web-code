<template>
  <div>
    <h1>选择城市</h1>
    <select @change="selectCity">
      <option value="">请选择城市</option>
      <option value="Beijing">北京</option>
      <option value="Shanghai">上海</option>
      <option value="Shenzhen">深圳</option>
      <option value="Guangzhou">广州</option>
    </select>
  </div>
</template>

<script setup>
const emit = defineEmits(['city-selected'])
function selectCity(event) {
  // 向父组件发送事件，并携带所选城市信息
  emit('city-selected', event.target.value)
}
</script>
