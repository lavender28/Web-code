<template>
  <div class="user">
    <router-link to="/user/1" class="r-user1">用户1</router-link>
    <router-link to="/user/2" class="r-user1">用户2</router-link>
    <router-link to="/user/3" class="r-user1">用户3</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.r-user1 {
  text-decoration: none;
  padding: 5px 10px;
}
.r-user1:hover {
  background-color: #F0F0F0;
  padding: 5px 10px;
}
</style>