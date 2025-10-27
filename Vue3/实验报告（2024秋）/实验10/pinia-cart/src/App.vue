<template>
  <div>
    <h1>购物车应用</h1>
    <ProductList />
    <Cart />
  </div>
</template>

<script setup>
import ProductList from './components/ProductList.vue';
import Cart from './components/Cart.vue';
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
