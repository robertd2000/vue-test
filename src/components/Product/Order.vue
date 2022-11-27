<script setup>
import { ref, defineProps } from "vue";
import Status from "../UI/Status.vue";
import SelectSize from "./SelectSize.vue";
import Controls from "./Controls.vue";
import LinksGroup from "./LinksGroup.vue";
import Popup from "../UI/Popup.vue";
import r_arrow from "../../assets/svg/r_arrow.png";

const message = ref(null);

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
    sizes: [Number],
  },
});

const addToCart = (count) => {
  message.value = `Товар ${props.product.title} в количестве ${count} единиц добавлен в корзину`;
  setTimeout(() => {
    message.value = null;
  }, 4000);
};
</script>

<template>
  <div class="order">
    <div class="prices">
      <h2 class="title">{{ product.price }} ₽</h2>

      <h3 v-if="product.discount" class="old-price">
        {{ product.oldPrice }} ₽
      </h3>
      <img class="r_arrow" :src="r_arrow" alt="" />
    </div>

    <div class="status" v-if="product.discount || product.action">
      <Status :text="`скидка -${product.discount}%`" />
      <Status :text="`акция -${product.action}%`" />
    </div>

    <SelectSize :sizes="product.sizes" />
    <Controls @addToCart="addToCart" />

    <Popup :message="message" v-if="message" />

    <hr class="line" />

    <LinksGroup />
  </div>
</template>

<style scoped>
.order {
  position: absolute;

  margin-top: 46px;
  margin-left: 0;
}

.prices {
  display: flex;
}

.title {
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #333333;
}

.old-price {
  margin-left: 12px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  text-decoration-line: line-through;
  color: #828282;
}

.status {
  display: flex;
  margin-top: 10px;
}

.line {
  margin-top: 30px;
  /* width: 686px; */
  width: 100%;

  color: #c4c4c4;
}

@media (max-width: 1135px) {
  .line {
    width: 100%;
  }
}

@media (max-width: 800px) {
  .order {
  position: relative;

  margin-top: 46px;
  margin-left: 0;
}

.line {
  margin-top: 30px;
  width: 100%;
  color: #c4c4c4;
}
}
</style>
