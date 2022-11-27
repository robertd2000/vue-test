<script setup>
import { reactive } from "vue";
import Slider from "./Slider.vue";
import Info from "./Info.vue";
import HelpLink from "../UI/HelpLink.vue";

const product = reactive({
  title: "Пижама для девочек",
  article: "Арт. 02765/46",
  price: 800,
  oldPrice: 1500,
  discount: 36,
  action: 20,
  rating: 4,
  reviews: 14,
  sizes: [18, 24, 32],
  images: [
    "https://github.com/robertd2000/vue-test/blob/main/src/assets/images/14896420-2%201%20(1).png?raw=true",
    "https://github.com/robertd2000/vue-test/blob/main/src/assets/images/14896420-1%201.png?raw=true",
    "https://github.com/robertd2000/vue-test/blob/main/src/assets/images/14896420-3%201.png?raw=true",
    "https://github.com/robertd2000/vue-test/blob/main/src/assets/images/14896420-4%201.png?raw=true",
    "https://github.com/robertd2000/vue-test/blob/main/src/assets/images/14896420-5%201.png?raw=true",
  ],
});
</script>

<template>
  <section class="main product">
    <div class="container">
      <Slider :images="product.images" />

      <Info :product="product" />
    </div>
    <HelpLink class="center">Посмотреть все стили</HelpLink>
  </section>
</template>

<style>
.product {
  margin-top: 70px !important;
}

.order {
  margin-left: 30px;
}
.order.title {
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
}
.article {
  font-size: 12px;
  line-height: 16px;
  color: #828282;
}

.center {
  text-align: center;
}

@media (max-width: 1135px) {
  .center {
    margin-top: 150px !important;
  }
}

@media (max-width: 800px) {
  .center {
    margin-top: 50px !important;
  }

}
</style>
