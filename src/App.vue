<script setup>
import Navigation from "./components/Navigation.vue";
import ProductCard from "./components/Product/ProductCard.vue";
import ProductList from "./components/ProductList/ProductList.vue";
import Footer from "./components/Footer/Footer.vue";
</script>

<template>
  <Navigation />

  <main>
    <ProductCard />
    <ProductList />
  </main>

  <Footer />
</template>

<style>

.container {
  max-width: 1390px;
  margin: 0 auto;
  display: flex;
}

@media (max-width: 1135px) {
  .main {
    overflow-x: hidden;
  }

  .container {
    max-width: 900px;
  }
}

@media (max-width: 800px) {
  .main {
    width: 100%;
    margin-top: 20px;
    overflow-x: hidden;
  }

  .container {
    display: block;
  }
}
</style>
