<script setup>
import { defineProps } from "vue";
import Rating from "./Rating.vue";
import Order from "./Order.vue";


const props = defineProps({
  product: {
    title: String,
    article: String,
    price: Number,
    oldPrice: Number,
    discount: Number,
    action: Number,
    rating: Number,
    reviews: Number,
  },
});
</script>

<template>
  <div class="info">
    <h3 class="title">{{ product.title }}</h3>

    <span class="article"> {{ product.article }} </span>

    <Rating :rating="product.rating" :reviews="product.reviews" />
    <Order :product="product" />
  </div>
</template>

<style scoped>
.info {
  margin-left: 30px;
  width: 50%;
}
.info.title {
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
}
.article {
  font-size: 12px;
  line-height: 16px;
  color: #828282;
}

@media (max-width: 800px) {
  .info {
    margin-top: 15px;
  margin-left: 20px;
    max-height: 100%;
  }
}
</style>
