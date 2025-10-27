<template>
  <div class="product-list">
    <h2>商品列表</h2>
    <div v-for="product in products" :key="product.id" class="product-item">
      <p>{{ product.name }} - ￥{{ product.price }}</p>
      <button class="add-to-cart-btn" @click="addToCart(product)">添加到购物车</button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/store'

const cartStore = useCartStore()
const products = [
  { id: 1, name: '商品 A', price: 50 },
  { id: 2, name: '商品 B', price: 30 },
  { id: 3, name: '商品 C', price: 20 }
]
const addToCart = (product) => {
  cartStore.addProductToCart(product)
}
</script>

<style scoped>
.product-list {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
h2 {
  text-align: center;
}
.product-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid #f0f0f0;
}
.product-item:last-child {
  border-bottom: none;
}
.add-to-cart-btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.add-to-cart-btn:hover {
  background-color: #0056b3;
}
.add-to-cart-btn:active {
  background-color: #004080;
}
</style>
