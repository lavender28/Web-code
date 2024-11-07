<template>
  <div>
    <h2>{{ weather.city }}</h2>
    <p>温度：{{ weather.temperature }}</p>
    <p>天气：{{ weather.description }}</p>
  </div>
</template>

<script setup>
defineProps(['weather'])
</script>
