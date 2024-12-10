import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: [],   // 商品列表
    cart: []   // 购物车
  }),
  getters: {
    cartTotalPrice(state) {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
    }
  },
  actions: {
    addProductToCart(product) {
      const existingProduct = this.cart.find(item => item.id === product.id)
      if (existingProduct) {
        existingProduct.quantity++
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }
    },
    clearCart() {
      this.cart = []
    }
  }
})