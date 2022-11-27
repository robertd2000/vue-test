<script setup>
import { defineProps } from "vue";
import star from "../../assets/svg/Vector.jpg";
import empty_star from "../../assets/svg/empty_star.png";
import r_arrow from "../../assets/svg/r_arrow.png";

const props = defineProps(["rating", "reviews"]);
</script>

<template>
  <div class="rating">
    <p>Отзывы</p>
    <div class="stars">
      <img :src="star" alt="rating" v-for="rate in rating" :key="rate" />
      <img
        :src="empty_star"
        alt="rating"
        v-for="rate in 5 - rating"
        :key="rate"
      />
    </div>
    <p>{{ reviews }} отзывов</p>
    <img class="r_arrow" :src="r_arrow" alt="" />
  </div>
</template>

<style>
.rating {
  display: flex;
  margin-top: 18px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.04em;
  color: #333333;
}

.stars {
  margin-left: 10px;
  margin-right: 5px;
}

.r_arrow {
  height: 13.5px;
  width: 8px;
  margin-top: 3px;
  margin-left: 8px;
}
</style>
