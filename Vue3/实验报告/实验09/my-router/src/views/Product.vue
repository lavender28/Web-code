<template>
  <div>
    <h3>产品介绍</h3>
    <p>
      <router-link to="/product/phone" class="r-link1">智能手机</router-link>
      <router-link to="/product/appliances" class="r-link1">家用电器</router-link>
      <router-link to="/product/electronics" class="r-link1">数码产品</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.r-link1 {
  text-decoration: none;
  padding: 5px 10px;
}
.r-link1:hover {
  background-color: #F0F0F0;
  padding: 5px 10px;
}
</style>
