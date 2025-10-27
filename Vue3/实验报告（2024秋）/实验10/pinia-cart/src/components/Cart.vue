<template>
  <div class="cart">
    <h2>购物车</h2>
    <div v-if="cart.length > 0">
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <p>{{ item.name }} x {{ item.quantity }} - ￥{{ item.price * item.quantity }}</p>
      </div>
      <p class="total-price">总价：￥{{ cartTotalPrice }}</p>
      <button class="clear-btn" @click="handleClearCart">清空购物车</button>
    </div>
    <p v-else>购物车为空</p>
  </div>
</template>

<script setup>
import { useCartStore } from '@/store'
import { storeToRefs } from 'pinia';

const cartStore = useCartStore()
// 使用 storeToRefs 将 cart, cartTotalPrice 转换为 ref
const { cart, cartTotalPrice } = storeToRefs(cartStore)
const { clearCart } = cartStore
const handleClearCart = () => {
  if (confirm('确认清空购物车？')){
    clearCart();
  }
}
</script>

<style scoped>
.cart {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
h2 {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 15px;
  border-bottom: 1px solid #f0f0f0;
}
.cart-item:last-child {
  border-bottom: none;
}
.total-price {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
}
.clear-btn {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.clear-btn:hover {
  background-color: #ff7875;
}
</style>
