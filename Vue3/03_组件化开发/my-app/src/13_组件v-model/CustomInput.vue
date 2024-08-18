<template>
  <div>
    <!-- <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" 
    /> -->
    <input v-model="value" />
  </div>
</template>

<script>

export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(newValue) {
        this.$emit('update:modelValue', newValue)
      }
    }
  }
}
</script>

<style scoped>

</style>