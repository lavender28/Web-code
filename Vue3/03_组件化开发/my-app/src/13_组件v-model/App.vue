<template>
  <div>
    <p>{{ searchText }}</p>
    <!-- <input v-model="searchText" /> -->
    <!-- <input
      :value="searchText"
      @input="searchText = $event.target.value"
    /> -->
    <!-- 组件上的 v-model -->
    <CustomInput v-model="searchText"/>
    <!-- <CustomInput
      :model-value="searchText"
      @update:model-value="newValue => searchText = newValue"
    /> -->
  </div>
</template>

<script>
import CustomInput from './CustomInput.vue';

export default {
  components: {
    CustomInput
  },
  data() {
    return {
      searchText: ""
    }
  },
}
</script>

<style scoped>

</style>