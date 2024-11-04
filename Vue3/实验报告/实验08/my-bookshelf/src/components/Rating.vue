<script setup>
const props = defineProps({
  rating: {
    type: Number,
    Required: true
  }
});

const emit = defineEmits(['update-rating']);

const setRating = (newRating) => {
  emit('update-rating', newRating);
}
</script>

<template>
  <div class="rating">
    <span 
      v-for="star in 5"
      :key="star"
      @click="setRating(star)"
      class="star"
      :class="{filled: star <= rating}">★
    </span>
  </div>
</template>

<style scoped>
.star {
  cursor: pointer;
  font-size: 20px;
  color: #ccc;
}
.star.filled {
  color: gold;
}
</style>