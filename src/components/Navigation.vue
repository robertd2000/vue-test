<script setup>
import logo from '../assets/svg/LOGO.svg'
</script>

<template>
  <header>
    <nav class="container">
      <div class="logo">
        <img :src="logo" alt="" />
      </div>

      <div class="icons">
        <i class="fa-light fa-user"></i>
        <i class="fa-light fa-heart"></i>
        <i class="fa-light fa-bag-shopping"></i>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
}

nav {
  display: flex;
  justify-content: space-between;
}

.icons {
  color: black;
  display: flex;
}

.icons i {
  margin-left: 30px;
}
</style>
