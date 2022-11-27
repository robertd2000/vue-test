<script setup>
import FooterMenu from "./FooterMenu.vue";
import Subscription from "./Subscription.vue";

const customersItems = [
  { name: "Каталог", url: "#" },
  { name: "Акции", url: "#" },
  { name: "Бренды", url: "#" },
];

const aboutItems = [
  { name: "О компании", url: "#" },
  { name: "Новости", url: "#" },
  { name: "Команда", url: "#" },
];
</script>

<template>
  <footer class="container">
    <div class="footer-list">
      <FooterMenu title="покупателям" :items="customersItems" />
      <FooterMenu class="about" title="о нас" :items="aboutItems" />
    </div>
   
    <Subscription />
  </footer>
</template>

<style scoped>
footer {
  margin-top: 140px;
  margin-bottom: 70px;
  justify-content: space-between;
}

.footer-list {
  display: flex;
}

about {
  margin-left: 225px;
}

@media (max-width: 800px) {
  footer {
    margin-top: 140px;
    margin-bottom: 270px;
  }
}
</style>
